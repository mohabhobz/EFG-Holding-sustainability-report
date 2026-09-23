"""
BUILD-ASSETS — cut the pictures in tools/assets.py out of the PDF.

    python3 tools/build-assets.py            every entry
    python3 tools/build-assets.py ste/p126   only the entries whose name starts
                                             with one of the arguments

Run it from the repository root. Each entry's `kind` decides how it is taken:

  'art'   a photograph or illustration on white — opaque, and trimmed to its
          own ink so a box measured a few points tight does not slice an edge
  'mark'  a logo or icon — transparent, trimmed the same way
  'flat'  used exactly as boxed, with no trim: for a picture that sits against
          neighbouring ink the trim cannot tell from its own, and for a crop
          that is deliberately a slice of a larger field

The note a trim returns is printed. "still cut at ..." means the search hit its
cap with ink still running off that edge — that one wants a look.
"""
import sys
import pathlib
import pymupdf

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from crop import DOC, cut          # noqa: E402
from assets import A               # noqa: E402

OUT = pathlib.Path('src/assets/report')

KIND = {
    #         alpha  do_fit  key
    'art':   (False, True,  False),
    'mark':  (True,  True,  False),
    'flat':  (False, False, False),
    # a logo the file paints on a white rectangle of its own: rendering with an
    # alpha channel leaves it opaque, so the white is keyed out instead
    'keyed': (False, True,  True),
}


def main(argv):
    want = argv[1:]
    doc = pymupdf.open(DOC)
    n = 0
    for name, sheet, box, kind, dpi, maxpx, *rest in A:
        if want and not any(name.startswith(w) for w in want):
            continue
        alpha, do_fit, key = KIND[kind]
        mask = rest[0] if rest else ()
        out = OUT / f'{name}.webp'
        out.parent.mkdir(parents=True, exist_ok=True)
        size, used, note = cut(doc, sheet, box, out, dpi=dpi, alpha=alpha,
                               maxpx=maxpx, do_fit=do_fit, mask=mask, key=key)
        n += 1
        print(f'{name:34} {size[0]:>5}x{size[1]:<5} {note}')
    print(f'{n} written')


if __name__ == '__main__':
    main(sys.argv)
