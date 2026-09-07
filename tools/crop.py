"""
CROP — take a picture out of the PDF without cutting it.

Every icon, mark and photograph on the site is a region of the printed page
rendered at high resolution. The trap is the region: a box read off the file's
own geometry, or measured off a screen render, is easily a few points too
tight, and the result is an icon with its edge sliced off. Fifty of the first
sixty assets on this site were cut that way.

So a box is never trusted as given. `fit` renders the box with a margin, finds
the picture's own ink inside it, and widens on any side where the ink is still
running off — until there is clear ground all the way round, or until the
growth cap is reached, which it reports rather than guessing. The cap is what
stops the trim from swallowing a neighbouring paragraph on a busy page.
"""
import io
import pymupdf
from PIL import Image, ImageChops

DOC = 'public/EFG-Holding-Sustainability-Report-2025.pdf'


def render(doc, sheet, rect, dpi=300, alpha=True):
    pm = doc[sheet].get_pixmap(clip=pymupdf.Rect(*rect), dpi=dpi, alpha=alpha)
    return Image.open(io.BytesIO(pm.tobytes('png'))).convert('RGBA' if alpha else 'RGB')


def ink(im, tol=10):
    """The box holding everything that is not the page's ground."""
    if im.mode == 'RGBA':
        return im.getchannel('A').point(lambda v: 255 if v > 8 else 0).getbbox()
    bg = Image.new('RGB', im.size, (255, 255, 255))
    d = ImageChops.difference(im.convert('RGB'), bg).convert('L')
    return d.point(lambda v: 255 if v > tol else 0).getbbox()


def fit(doc, sheet, rect, alpha=True, dpi=220, cap=0.75, step=8.0, pad=0.8, tol=10,
        grow=True):
    """
    Widen `rect` until the picture inside it has clear ground on every side.

    With `grow=False` the box is only ever tightened, never widened — which is
    what a full-bleed illustration wants: its artwork runs to the page edge on
    purpose, so widening would chase it forever, but the empty half of the box
    above the artwork still has to go.

    Returns (box, note). `note` is '' when the fit is clean, or says which
    edges were still running off when the cap was reached — those want a look.
    """
    x0, y0, x1, y1 = map(float, rect)
    w, h = x1 - x0, y1 - y0
    limit_x, limit_y = (w * cap, h * cap) if grow else (0.0, 0.0)
    gl = gr = gt = gb = 4.0 if grow else 0.0
    for _ in range(14):
        big = (x0 - gl, y0 - gt, x1 + gr, y1 + gb)
        im = render(doc, sheet, big, dpi, alpha)
        box = ink(im, tol)
        if not box:
            return tuple(rect), 'nothing found'
        s = 72.0 / dpi
        edges = ''
        if box[0] <= 1 and gl < limit_x: gl += step; edges += 'L'
        if box[1] <= 1 and gt < limit_y: gt += step; edges += 'T'
        if box[2] >= im.width - 1 and gr < limit_x: gr += step; edges += 'R'
        if box[3] >= im.height - 1 and gb < limit_y: gb += step; edges += 'B'
        if not edges:
            stuck = ''.join(c for c, f in zip('LTRB', (
                box[0] <= 1, box[1] <= 1,
                box[2] >= im.width - 1, box[3] >= im.height - 1)) if f)
            found = (big[0] + box[0] * s - pad, big[1] + box[1] * s - pad,
                     big[0] + box[2] * s + pad, big[1] + box[3] * s + pad)
            return found, (f'still cut at {stuck} — the cap stopped the search' if stuck else '')
    return tuple(rect), 'did not settle'


def cut(doc, sheet, rect, out, dpi=600, alpha=True, maxpx=900, quality=92, do_fit=True,
        grow=True):
    note = ''
    box = tuple(map(float, rect))
    if do_fit:
        box, note = fit(doc, sheet, rect, alpha=alpha, grow=grow)
    im = render(doc, sheet, box, dpi, alpha)
    im.thumbnail((maxpx, maxpx), Image.LANCZOS)
    im.save(out, 'WEBP', quality=quality, method=6)
    return im.size, box, note
