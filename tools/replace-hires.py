#!/usr/bin/env python3
"""Swap pictures for the higher-resolution files EFG supplied (October 2026).

EFG's folder "Sus report pics 2026" holds better copies of pictures the site
had cut from the printed PDF. Each supplied file is matched against the
picture it replaces (a multi-scale template match), cut to the same framing,
and written over it under the same name, so no page markup has to change.
Pictures EFG did not supply are left as they are.

    python3 tools/replace-hires.py "<path to Sus report pics 2026>"
"""
import sys
from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / 'src' / 'assets' / 'report'

# asset it replaces, supplied file, width to write, key out the white ground
SIMPLE = [
    ('soc/p44-engazaat', 'Engazaat Solar Water Company Logo pg 44.png', 1000, True),
    ('soc/p49-award', 'MENA Banking Excellence Winner Badge 49.png', 1000, False),
    ('soc/p55-efg-finance-smes', 'EFG Finance SMEs Corporate Banner Pg55.png', 1400, True),
    ('soc/p63-smc', 'SMC Healthcare Sunburst Logo pg63.png', 1000, True),   # sits on the cream advisory card
    ('soc/p65-eep', 'EEP Egypt Education Platform Logo pg65.png', 1000, False),
    ('soc/p67-sep', 'SEP Spark Education Platform Logo pg67.png', 1000, False),
    ('soc/p68-taaleem', 'Taaleem Empowering Knowledge Logo pg68.png', 1000, False),
    ('soc/p69-robogarden', 'RoboGarden Egypt Logo on White pg 69.png', 1000, False),
    ('soc/p71-student-1', 'Hijab Portrait with Glasses pg71.png', 1000, False),
    ('soc/p71-student-2', 'School Portrait with Green Lanyard pg71.png', 1000, False),
    ('env/p25-team', 'Bank NXT high res.png', 1800, False),
    ('env/p25-ev-car', 'sus report page 25 high res.png', 1000, False),
    ('ste/p107-one-1', 'Vibrant Arabic Megaphone Poster pg107.png', 800, False),
    ('ste/p107-one-2', 'Arabic Investor Terminology Infographic pg 107.png', 800, False),
    ('ste/p107-one-3', 'Investing Mistakes Notebook Poster pg107.png', 800, False),
    ('ste/p123-athlete', 'Smiling Squash Champion Valu Poster pg 123.png', 1000, False),
]
# soc/p56-poster: the supplied p56-poster-8B1IEO30.webp is byte-for-byte the site's own file.

COLLAGE = 'Enhanced Six-Photo Portrait and Nature Collage page 41.png'
PARTNERS = {
    'german': 'German–Egyptian Cooperation Ribbon Logo page 37.png',
    'giz': 'Red GIZ Corporate Logo on White pg37.png',
    'frankfurt': 'Frankfurt School Corporate Logo.png',
}
# The old logo's ink in the PDF's strip image (x0, y0, x1, y1, its pixels),
# cleared before the new one is laid on. GIZ's is cleared from the logo down
# only, so the "Implemented by:" line above it stays.
OLD_INK = {'german': (105, 42, 412, 215), 'giz': (487, None, 680, 193), 'frankfurt': (867, 80, 1294, 210)}


def rgb(p, bg=255):
    im = Image.open(p)
    if im.mode != 'RGB':
        im = im.convert('RGBA'); b = Image.new('RGBA', im.size, (bg,) * 3 + (255,)); b.alpha_composite(im); im = b
    return im.convert('RGB')


def locate(cur, new, lo=0.15, hi=1.6, steps=70, work=900):
    """Where `cur` (PIL) sits in `new` (PIL), in `new`'s pixels: (x, y, w, h), score."""
    C = cv2.cvtColor(np.asarray(cur), cv2.COLOR_RGB2GRAY).astype(np.float32)
    N = cv2.cvtColor(np.asarray(new), cv2.COLOR_RGB2GRAY).astype(np.float32)
    k = work / max(N.shape)
    Ns = cv2.resize(N, None, fx=k, fy=k, interpolation=cv2.INTER_AREA)
    pad = int(0.3 * max(Ns.shape))
    Np = cv2.copyMakeBorder(Ns, pad, pad, pad, pad, cv2.BORDER_CONSTANT, value=255)
    best = (-2.0, None)
    for s in np.geomspace(lo, hi, steps):
        w = int(round(s * Ns.shape[1])); h = int(round(w * C.shape[0] / C.shape[1]))
        if w < 12 or h < 12 or w >= Np.shape[1] or h >= Np.shape[0]:
            continue
        T = cv2.resize(C, (w, h), interpolation=cv2.INTER_AREA)
        if T.std() < 1:
            continue
        r = cv2.matchTemplate(Np, T, cv2.TM_CCOEFF_NORMED)
        _, mv, _, ml = cv2.minMaxLoc(r)
        if mv > best[0]:
            best = (mv, (ml[0] - pad, ml[1] - pad, w, h))
    score, (x, y, w, h) = best
    return (x / k, y / k, w / k, h / k), score


def cut(new, box):
    """Crop `new` to `box`, padding with white where the box runs past its edge."""
    x, y, w, h = [int(round(v)) for v in box]
    canvas = Image.new('RGB', (w, h), 'white')
    canvas.paste(new.crop((max(x, 0), max(y, 0), min(x + w, new.width), min(y + h, new.height))),
                 (max(-x, 0), max(-y, 0)))
    return canvas


def unwhite(im, floor=26):
    a = np.asarray(im.convert('RGB')).astype(float)
    alpha = 255.0 - a.min(axis=2)
    alpha[alpha < floor] = 0
    k = np.clip(alpha / 255.0, 1e-3, 1)[..., None]
    out = np.clip(255 - (255 - a) / k, 0, 255)
    return Image.fromarray(np.dstack([out, alpha]).astype('uint8'), 'RGBA')


def save(im, name, width):
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    dest = ASSETS / f'{name}.webp'
    im.save(dest, quality=90, method=6)
    return im.size


def main(src):
    src = Path(src)
    for name, fname, width, key in SIMPLE:
        cur = rgb(ASSETS / f'{name}.webp')
        new = rgb(src / fname)
        box, score = locate(cur, new)
        im = cut(new, box)
        if key:
            im = unwhite(im)
        size = save(im, name, width)
        print(f'{name:28s} score {score:.2f}  ->  {size[0]}x{size[1]}')

    # printed page 41: six photographs supplied as one collage, three across and
    # two down with white gutters. EFG's tiles are cropped tighter than the
    # print's photographs, so each is cut to the card's own 153.1 x 85.2pt shape
    # from the top of its tile, where the faces are (the landscape lower down).
    col = rgb(src / COLLAGE)
    xs = [(0, 556), (561, 1122), (1128, 1684)]
    ys = [(0, 464), (470, 934)]
    # card number: (column, row, how far down the tile the window starts, 0..1)
    tiles = {1: (1, 0, 0.0), 2: (0, 0, 0.0), 3: (2, 0, 0.0),
             5: (0, 1, 0.0), 6: (1, 1, 0.5), 4: (2, 1, 0.35)}
    for n, (c, r, down) in sorted(tiles.items()):
        x0, x1 = xs[c]; y0, y1 = ys[r]
        h = round((x1 - x0) * 85.2 / 153.1)
        top = y0 + round((y1 - y0 - h) * down)
        size = save(col.crop((x0, top, x1, top + h)), f'env/p41-photo-{n}', 900)
        print(f'env/p41-photo-{n}  ->  {size[0]}x{size[1]}')

    # printed page 37: the partners' strip is one picture in the PDF. It is
    # recomposed at twice the size of the PDF's own image, with the three logos
    # EFG supplied laid over their places; Bank NXT and the small "Implemented
    # by:" line, which EFG did not supply, are the PDF's own, enlarged.
    import pymupdf
    doc = pymupdf.open(ROOT / 'public' / 'EFG-Holding-Sustainability-Report-2025.pdf')
    pix = pymupdf.Pixmap(doc, 235)
    if pix.alpha:
        pix = pymupdf.Pixmap(pix, 0)
    if pix.colorspace.n != 3:
        pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
    strip = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
    S = 2
    base = np.asarray(strip.resize((strip.width * S, strip.height * S), Image.LANCZOS)).astype(np.float32)
    for key_, fname in PARTNERS.items():
        logo = rgb(src / fname)
        # find the logo's ink, then where that ink sits in the strip
        a = np.asarray(logo).min(axis=2) < 200
        ys, xs = np.where(a)
        ink = logo.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))
        box, score = locate(ink, strip, lo=0.08, hi=0.5, steps=120, work=2152)
        x, y, w, h = [v * S for v in box]
        tile = np.asarray(ink.resize((int(round(w)), int(round(h))), Image.LANCZOS)).astype(np.float32)
        x0, y0 = int(round(x)), int(round(y))
        # clear the old logo's ink, then lay the new one on
        ox0, oy0, ox1, oy1 = OLD_INK[key_]
        oy0 = y0 / S if oy0 is None else oy0
        m = 4
        base[int((oy0 - m) * S):int((oy1 + m) * S), int((ox0 - m) * S):int((ox1 + m) * S)] = 255
        region = base[y0:y0 + tile.shape[0], x0:x0 + tile.shape[1]]
        region[:] = np.minimum(region, tile[:region.shape[0], :region.shape[1]])
        print(f'env/p37-partners {key_:10s} score {score:.2f}  at {x0},{y0} {tile.shape[1]}x{tile.shape[0]}')
    out = Image.fromarray(base.clip(0, 255).astype('uint8'), 'RGB')
    size = save(out, 'env/p37-partners', 2800)
    print(f'env/p37-partners -> {size[0]}x{size[1]}')


if __name__ == '__main__':
    main(sys.argv[1])
