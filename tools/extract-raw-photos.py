#!/usr/bin/env python3
"""Pull photographs straight out of the PDF, without the page's own frame.

Some pictures on the sheet sit inside a drawn frame: the print strokes an olive
outline round a card and clips the photograph to a slanted, rounded shape. A
crop of the rendered page takes that outline and the paper beyond the clip with
it, and the site then draws its own border round the card as well — two
outlines, not quite on top of each other (EFG's comment on printed page 41).

This takes the placed image itself, by its xref, and cuts it to the clip
rectangle measured off the page. The slant and the rounded corners are drawn by
CSS on the site, so the file is a plain rectangle of photograph.

    python3 tools/extract-raw-photos.py
"""
import io
from pathlib import Path

import pymupdf
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PDF = ROOT / 'public' / 'EFG-Holding-Sustainability-Report-2025.pdf'
OUT = ROOT / 'src' / 'assets' / 'report'

# (output name, sheet, region of the sheet the photographs sit in)
JOBS = [
    ('env/p41-photo-{n}', 20, (900, 0, 1191, 842)),   # printed page 41, the six participant cards
    ('soc/p74-photo-{n}', 37, (0, 150, 569, 800)),    # printed page 74, the Foundation's year
]


def main():
    doc = pymupdf.open(PDF)
    for name, sheet, region in JOBS:
        page = doc[sheet]
        area = pymupdf.Rect(region)
        images = sorted(
            ((i['xref'], i['bbox']) for i in page.get_image_info(xrefs=True)
             if area.contains(pymupdf.Rect(i['bbox']))),
            key=lambda t: t[1][1])
        clips = [pymupdf.Rect(x['scissor']) for x in page.get_drawings(extended=True)
                 if x['type'] == 'clip' and area.contains(pymupdf.Rect(x['scissor']))
                 and x['scissor'][2] - x['scissor'][0] < 300]
        for n, (xref, bb) in enumerate(images, 1):
            # the clip that covers most of this picture is the frame it is shown in
            clip = max(clips, key=lambda c: (c & pymupdf.Rect(bb)).get_area())
            pix = pymupdf.Pixmap(doc, xref)
            if pix.alpha:
                pix = pymupdf.Pixmap(pix, 0)
            if pix.colorspace and pix.colorspace.n != 3:
                pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
            im = Image.open(io.BytesIO(pix.tobytes('png'))).convert('RGB')
            w, h = im.size
            sx, sy = w / (bb[2] - bb[0]), h / (bb[3] - bb[1])
            box = (round((clip[0] - bb[0]) * sx), round((clip[1] - bb[1]) * sy),
                   round((clip[2] - bb[0]) * sx), round((clip[3] - bb[1]) * sy))
            dest = OUT / (name.format(n=n) + '.webp')
            im.crop(box).save(dest, quality=88, method=6)
            print(dest.relative_to(ROOT), im.crop(box).size)


if __name__ == '__main__':
    main()
