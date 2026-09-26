#!/usr/bin/env python3
"""Draw printed page 36's financed-emissions infographic as an SVG.

In the PDF this panel is a flat JPEG (2184 x 988), so there is no vector to
lift. This redraws it on the same 2184 x 988 grid, every bar, chip, tag and
rule measured off that raster, with every word and figure set as real <text> —
so the panel scales sharp to any width and stays searchable and readable by a
screen reader. The three small orange sector icons are the only pixels taken
from the raster.

    python3 tools/build-financed-svg.py
"""
import base64, io
from pathlib import Path

import numpy as np
import pymupdf
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PDF = ROOT / 'public' / 'EFG-Holding-Sustainability-Report-2025.pdf'
OUT = ROOT / 'src' / 'assets' / 'report' / 'env' / 'p36-financed.svg'
XREF = 233  # the placed image on sheet 18

GREEN, DARK, GREY2, TAG_GREY = '#1d493a', '#403e43', '#aaa9a7', '#7d7d7f'
HEAD_BG, HILITE, RULE, PEACH, INK = '#d5d3d6', '#dfe5e7', '#6e6e6e', '#fccfa8', '#1e1e1e'


def raster():
    doc = pymupdf.open(PDF)
    pix = pymupdf.Pixmap(doc, XREF)
    if pix.colorspace.n != 3:
        pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
    return Image.open(io.BytesIO(pix.tobytes('png'))).convert('RGB')


def icon(img, box):
    """Crop an orange icon and key out the white paper round it."""
    a = np.asarray(img.crop(box)).astype(float)
    alpha = 255 - a.min(axis=2)
    alpha[alpha < 30] = 0
    k = np.clip(alpha / 255, 1e-3, 1)[..., None]
    rgb = np.clip(255 - (255 - a) / k, 0, 255)
    out = Image.fromarray(np.dstack([rgb, alpha]).astype('uint8'), 'RGBA')
    buf = io.BytesIO(); out.save(buf, 'PNG', optimize=True)
    return 'data:image/png;base64,' + base64.b64encode(buf.getvalue()).decode()


def t(x, y, s, cls, anchor='middle'):
    return f'<text x="{x}" y="{y}" class="{cls}" text-anchor="{anchor}">{s}</text>'


def rect(x0, y0, x1, y1, fill):
    return f'<rect x="{x0}" y="{y0}" width="{x1 - x0}" height="{y1 - y0}" fill="{fill}"/>'


def tag(x0, y0, x1, y1, fill, s=18):
    return f'<polygon points="{x0 + s},{y0} {x1},{y0} {x1 - s},{y1} {x0},{y1}" fill="{fill}"/>'


SUB2 = '<tspan class="fe-sub" dy="5">2</tspan><tspan dy="-5">'


def main():
    img = raster()
    e = []
    # header band
    e.append(rect(0, 25, 2184, 178, HEAD_BG))
    e += [t(216, 129, 'SECTOR', 'fe-h'),
          t(734, 103, 'FINANCED EMISSIONS', 'fe-h'),
          t(734, 131, f'(mtO{SUB2}e)</tspan>', 'fe-h'),
          t(1379, 99, 'FINANCED EMISSIONS', 'fe-h'),
          t(1379, 127, f'INTENSITY (mtO{SUB2}e/$M lent)</tspan>', 'fe-h'),
          t(1857, 75, 'PERCENTAGE', 'fe-h'),
          t(1777, 106, 'EXPOSURE FROM', 'fe-hs'), t(1777, 129, 'CARBON INTENSIVE', 'fe-hs'),
          t(1777, 152, 'SECTORS', 'fe-hs'),
          t(1926, 115, 'FINANCED', 'fe-hs'), t(1926, 138, 'EMISSIONS', 'fe-hs'),
          t(2053, 88, 'DATA', 'fe-h'), t(2053, 115, 'QUALITY', 'fe-h'), t(2053, 142, 'SCORE', 'fe-h')]

    # the oil & gas highlight, drawn under everything in its row
    e.append(f'<rect x="444" y="408" width="1256" height="102" fill="{HILITE}" '
             f'stroke="{RULE}" stroke-width="3" stroke-dasharray="16 10"/>')

    # callout arrows, under their words
    for cx in (1080.5, 1623.5):
        e.append(f'<polygon points="{cx - 39.5},229 {cx + 39.5},229 {cx + 39.5},343 {cx + 62},343 '
                 f'{cx},406 {cx - 62},343 {cx - 39.5},343" fill="{PEACH}"/>')

    # sector tags and icons
    e += [tag(62, 261, 418, 356, GREEN), tag(55, 432, 411, 497, GREEN), tag(55, 562, 411, 627, GREEN),
          tag(62, 719, 418, 763, TAG_GREY), tag(62, 823, 419, 867, TAG_GREY)]
    for box in ((203, 208, 276, 258), (216, 380, 272, 429), (206, 520, 277, 559)):
        x0, y0, x1, y1 = box
        e.append(f'<image x="{x0}" y="{y0}" width="{x1 - x0}" height="{y1 - y0}" href="{icon(img, box)}"/>')
    e += [t(238, 292, 'Commercial &amp;', 'fe-tag'), t(238, 318, 'Residential Real Estate', 'fe-tag'),
          t(238, 344, '(LEASING &amp; FACTORING)', 'fe-tagl'),
          t(238, 459, 'Oil &amp; Gas', 'fe-tag'), t(238, 485, '(FACTORING)', 'fe-tagl'),
          t(238, 589, 'Transport', 'fe-tag'), t(238, 615, '(LEASING)', 'fe-tagl'),
          t(240, 749, 'LEASING TOTAL', 'fe-tot'), t(240, 853, 'FACTORING TOTAL', 'fe-tot')]

    # financed-emissions bars: (y0, y1, [scope1 end, scope2 end, scope3 end], label, inner word)
    bars = [(243, 290, (545, 558, 832), '10,099', 'FACTORING'),
            (328, 375, (536, 549, 822), '10,286', 'LEASING'),
            (440, 486, (722, 990, 1102), '378,442', None),
            (572, 618, (558, 572, 709), '1,036', None),
            (718, 764, (552, 568, 863), '11,422', None),
            (823, 869, (750, 904, 1120), '389,141', None)]
    for y0, y1, (a, b, c), label, word in bars:
        x = 474 if y0 > 500 else 472
        e += [rect(x, y0, a, y1, DARK), rect(a, y0, b, y1, GREY2), rect(b, y0, c, y1, GREEN)]
        e.append(t(c - 4, y0 - 12, label, 'fe-v', 'end'))
        if word:
            e.append(t(c - 10, y1 - 14, word, 'fe-in', 'end'))

    # intensity bars
    for y0, y1, x1, label in [(243, 290, 1330, '71'), (328, 375, 1269, '33'), (440, 486, 1677, '35,571'),
                              (572, 618, 1405, '279'), (717, 762, 1277, '38'), (823, 869, 1522, '8,166')]:
        x0 = 1219 if y0 < 500 else 1220
        e.append(rect(x0, y0, x1, y1, DARK))
        if x1 - x0 < 70:
            e.append(t((x0 + x1) / 2, (y0 + y1) / 2 + 6, label, 'fe-iv'))
        else:
            e.append(t(x1 - 18, (y0 + y1) / 2 + 6, label, 'fe-iv', 'end'))

    # the three chip columns
    rows = [(240, 295, '59%', '2.7%'), (322, 376, '30%', '2.8%'), (435, 489, '9%', '94%'),
            (569, 623, '1.3%', '0.3%'), (718, 772, '61%', '2.9%'), (815, 869, '39%', '97%')]
    for y0, y1, p1, p2 in rows:
        cy = (y0 + y1) / 2 + 7
        e += [rect(1767, y0, 1848, y1, GREEN), rect(1889, y0, 1970, y1, GREEN), rect(2010, y0, 2090, y1, DARK),
              t(1807.5, cy, p1, 'fe-chip'), t(1929.5, cy, p2, 'fe-chip'), t(2050, cy, '4.0', 'fe-chip')]

    # callout words, over the arrows
    e += [t(1120, 272, 'Highest', 'fe-ct', 'end'), t(1120, 305, 'emitting sector', 'fe-ct', 'end'),
          t(1120, 331, 'Over 17 times bigger than', 'fe-cb', 'end'),
          t(1120, 352, 'emissions of all other', 'fe-cb', 'end'),
          t(1120, 373, 'sectors combined!', 'fe-cb', 'end'),
          t(1663, 274, 'Highest emission', 'fe-ct', 'end'), t(1663, 307, 'intensity', 'fe-ct', 'end'),
          t(1663, 334, 'Over 92 times bigger than', 'fe-cb', 'end'),
          t(1663, 355, 'emission intensity of all', 'fe-cb', 'end'),
          t(1663, 376, 'other sectors combined!', 'fe-cb', 'end')]

    # the dashed rule before the totals
    e.append(f'<line x1="72" y1="666.5" x2="2096" y2="666.5" stroke="{RULE}" stroke-width="3" stroke-dasharray="16 10"/>')

    # legend
    lx = 664
    for fill, word, w in ((DARK, 'Scope 1', 86), (GREY2, 'Scope 2', 90), (GREEN, 'Scope 3', 0)):
        e.append(rect(lx, 912, lx + 12, 924, fill))
        e.append(t(lx + 16, 924, word, 'fe-lg', 'start'))
        lx += w

    style = f"""<style>
.fe-svg text {{ font-family: 'ABC Normal', system-ui, sans-serif; fill: {INK}; }}
.fe-svg .fe-h {{ font-size: 20px; font-weight: 700; }}
.fe-svg .fe-hs {{ font-size: 16px; font-weight: 700; }}
.fe-svg .fe-sub {{ font-size: 13px; }}
.fe-svg .fe-tag {{ font-size: 22px; font-weight: 700; fill: #fff; }}
.fe-svg .fe-tagl {{ font-size: 21px; font-weight: 400; fill: #fff; }}
.fe-svg .fe-tot {{ font-size: 23px; font-weight: 700; fill: #fff; letter-spacing: .02em; }}
.fe-svg .fe-v {{ font-size: 17px; font-weight: 700; }}
.fe-svg .fe-in {{ font-size: 16px; font-weight: 400; fill: #fff; letter-spacing: .03em; }}
.fe-svg .fe-iv {{ font-size: 17px; font-weight: 700; fill: #fff; }}
.fe-svg .fe-chip {{ font-size: 21px; font-weight: 400; fill: #fff; }}
.fe-svg .fe-ct {{ font-size: 31px; font-weight: 700; fill: #3a3a3a; }}
.fe-svg .fe-cb {{ font-size: 18px; font-weight: 700; fill: #3a3a3a; }}
.fe-svg .fe-lg {{ font-size: 16px; font-weight: 600; }}
</style>"""
    svg = ('<svg xmlns="http://www.w3.org/2000/svg" class="fe-svg" viewBox="0 0 2184 950" '
           'role="group" aria-label="EFG Corp-Solutions financed emissions by sector, 2024">'
           + style + '<rect width="2184" height="950" fill="#fff"/>' + ''.join(e) + '</svg>')
    OUT.write_text(svg)
    print(OUT.relative_to(ROOT), len(svg))


if __name__ == '__main__':
    main()
