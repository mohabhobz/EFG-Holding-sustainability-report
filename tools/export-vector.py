#!/usr/bin/env python3
"""Export a piece of vector artwork from the PDF, path for path, as an SVG.

Used where the print draws a figure and its mark as one drawing — the hands
lockups on printed pages 24 and 57, where the numerals are outlined glyphs laid
over the wrist. A raster crop cannot take the hand without the figure, and
masking the figure out broke the hand. So every filled path whose box lies
inside the clip is written out in PDF coordinates, shifted to the origin.

    python3 tools/export-vector.py
"""
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parent.parent
PDF = ROOT / 'public' / 'EFG-Holding-Sustainability-Report-2025.pdf'
OUT = ROOT / 'src' / 'assets' / 'report'

# (output, sheet, clip in sheet points, accessible name)
JOBS = [
    ('env/p24-figure-financing', 12, (410, 318, 548, 390), 'EGP 1,161 BN'),
    ('soc/p57-figure-financing', 28, (955, 480, 1118, 600), 'EGP 2.458 BN'),
]


def hexcol(rgb):
    return '#' + ''.join(f'{round(c * 255):02x}' for c in rgb)


def export(name, sheet, clip, label, doc):
    page = doc[sheet]
    box = pymupdf.Rect(clip)
    paths = [p for p in page.get_drawings() if p.get('fill') and box.contains(p['rect'])]
    x0 = min(p['rect'].x0 for p in paths); y0 = min(p['rect'].y0 for p in paths)
    x1 = max(p['rect'].x1 for p in paths); y1 = max(p['rect'].y1 for p in paths)
    f = lambda pt: f'{pt.x - x0:.2f} {pt.y - y0:.2f}'
    out = []
    for p in paths:
        d, cur = [], None
        for it in p['items']:
            k = it[0]
            if k in ('l', 'c'):
                a = it[1]
                if cur is None or abs(cur.x - a.x) > 1e-3 or abs(cur.y - a.y) > 1e-3:
                    d.append('M' + f(a))
                d.append(('L' + f(it[2])) if k == 'l' else ('C' + ' '.join(f(q) for q in it[2:5])))
                cur = it[-1]
            elif k == 're':
                q = it[1]
                d.append(f'M{f(q.tl)}H{q.x1 - x0:.2f}V{q.y1 - y0:.2f}H{q.x0 - x0:.2f}Z'); cur = None
            elif k == 'qu':
                q = it[1]
                d.append('M' + f(q.ul) + 'L' + f(q.ur) + 'L' + f(q.lr) + 'L' + f(q.ll) + 'Z'); cur = None
        if p.get('closePath'):
            d.append('Z')
        rule = 'evenodd' if p.get('even_odd') else 'nonzero'
        out.append(f'<path fill="{hexcol(p["fill"])}" fill-rule="{rule}" d="{"".join(d)}"/>')
    w, h = x1 - x0, y1 - y0
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.2f} {h:.2f}" width="{w:.2f}" '
           f'height="{h:.2f}" role="img" aria-label="{label}"><title>{label}</title>{"".join(out)}</svg>')
    dest = OUT / (name + '.svg')
    dest.write_text(svg)
    print(dest.relative_to(ROOT), f'{w:.1f} x {h:.1f}pt', len(paths), 'paths')


def main():
    doc = pymupdf.open(PDF)
    for job in JOBS:
        export(*job, doc)


if __name__ == '__main__':
    main()
