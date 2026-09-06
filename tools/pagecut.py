"""Where the ink is on a printed page, and how the page divides.

Shared by the mobile builder. The page is rasterised once at 1px = 1pt, the two
bands of print furniture the site removes are painted out, and the result is a
boolean map of ink. From that map an XY-cut — the standard recursive document
layout algorithm — reads the page's own structure back out: split on the blank
rows, then on the blank columns inside each row, then again, until nothing
splits. The leaves come out in reading order, which for this report is the
order a person reads them.
"""
import numpy as np
from PIL import Image, ImageDraw

DPI = 72          # 1 px = 1 pt
BAND_TOP = 66     # running head, rule and corner mark all live above this
BAND_BOT = 806    # the folio lives below this
BLEED = 2         # pt of the outer edge ignored — the facing page's bleed
INK = 253         # anything darker than this is ink; 254 is invisible

H_GAP = 14        # a blank run this tall is a break between blocks
V_GAP = 12        # a blank run this wide is a gutter between columns
MIN_COL_W = 100   # never cut a column narrower than this out of a row
MIN_SPLIT_W = 300 # never look for columns in a region narrower than this
MAX_DEPTH = 5


def ink_mask(page):
    pm = page.get_pixmap(dpi=DPI)
    im = Image.frombytes('RGB', (pm.width, pm.height), pm.samples).convert('L')
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, im.width, BAND_TOP], fill=255)
    d.rectangle([0, BAND_BOT, im.width, im.height], fill=255)
    d.rectangle([0, 0, BLEED, im.height], fill=255)
    d.rectangle([im.width - BLEED, 0, im.width, im.height], fill=255)
    return np.asarray(im) <= INK


def _bands(flags, gap):
    idx = np.nonzero(flags)[0]
    if len(idx) == 0:
        return []
    out, start, prev = [], idx[0], idx[0]
    for i in idx[1:]:
        if i - prev - 1 >= gap:
            out.append((start, prev + 1)); start = i
        prev = i
    out.append((start, prev + 1))
    return out


def _shrink(m, box):
    x0, y0, x1, y1 = box
    sub = m[y0:y1, x0:x1]
    if not sub.any():
        return None
    r = np.nonzero(sub.any(axis=1))[0]
    c = np.nonzero(sub.any(axis=0))[0]
    return (int(x0 + c[0]), int(y0 + r[0]), int(x0 + c[-1] + 1), int(y0 + r[-1] + 1))


def _cut(m, box, axis, depth, out, tried=0):
    box = _shrink(m, box)
    if box is None:
        return
    x0, y0, x1, y1 = box
    if depth >= MAX_DEPTH or tried >= 2:
        out.append(box); return
    if axis == 'y':
        parts = _bands(m[y0:y1, x0:x1].any(axis=1), H_GAP)
        if len(parts) > 1:
            for a, b in parts:
                _cut(m, (x0, y0 + a, x1, y0 + b), 'x', depth + 1, out)
            return
        _cut(m, box, 'x', depth, out, tried + 1)
    else:
        if x1 - x0 >= MIN_SPLIT_W:
            parts = _bands(m[y0:y1, x0:x1].any(axis=0), V_GAP)
            if len(parts) > 1 and all(b - a >= MIN_COL_W for a, b in parts):
                for a, b in parts:
                    _cut(m, (x0 + a, y0, x0 + b, y1), 'y', depth + 1, out)
                return
        _cut(m, box, 'y', depth, out, tried + 1)


def _merge(bs):
    """Consecutive leaves in the same column are one block: the cut splits a
    column at every paragraph gap, and stacking those back up changes nothing."""
    out = []
    for b in bs:
        if out and abs(out[-1][0] - b[0]) < 4 and abs(out[-1][2] - b[2]) < 4 and b[1] - out[-1][3] < 70:
            p = out[-1]
            out[-1] = (min(p[0], b[0]), p[1], max(p[2], b[2]), b[3])
        else:
            out.append(b)
    return out


def blocks(page):
    """The page's blocks, in reading order, as (x0, y0, x1, y1) in points."""
    m = ink_mask(page)
    out = []
    _cut(m, (0, 0, m.shape[1], m.shape[0]), 'y', 0, out)
    return _merge(out)


def cut_rects(rects, box, h_gap=8, v_gap=7, min_col=80, min_split=200, max_depth=4):
    """The same XY-cut, but over a set of rectangles rather than pixels.

    A filled panel is one solid block of ink, so the pixel cut can see no
    structure inside it — every panel comes out as a single leaf. Given the
    panel's own text lines and pictures as rectangles, this reads the structure
    the fill hides: the heading band, the two columns of bullets, the icon.
    """
    global H_GAP, V_GAP, MIN_COL_W, MIN_SPLIT_W, MAX_DEPTH
    x0, y0, x1, y1 = [int(v) for v in box]
    w, h = max(1, x1 - x0), max(1, y1 - y0)
    m = np.zeros((h, w), dtype=bool)
    for r in rects:
        a = max(x0, int(r[0])) - x0; b = max(y0, int(r[1])) - y0
        c = min(x1, int(r[2] + 0.999)) - x0; d = min(y1, int(r[3] + 0.999)) - y0
        if c > a and d > b:
            m[b:d, a:c] = True
    if not m.any():
        return []
    keep = (H_GAP, V_GAP, MIN_COL_W, MIN_SPLIT_W, MAX_DEPTH)
    H_GAP, V_GAP, MIN_COL_W, MIN_SPLIT_W, MAX_DEPTH = h_gap, v_gap, min_col, min_split, max_depth
    try:
        out = []
        _cut(m, (0, 0, w, h), 'y', 0, out)
        out = _merge(out)
    finally:
        H_GAP, V_GAP, MIN_COL_W, MIN_SPLIT_W, MAX_DEPTH = keep
    return [(b[0] + x0, b[1] + y0, b[2] + x0, b[3] + y0) for b in out]
