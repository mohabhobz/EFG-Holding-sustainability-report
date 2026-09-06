"""Build the phone reading of every printed page.

WHY THIS EXISTS. The site is the printed report, page for page, and on a desktop
that is exactly right: a page draws 1,112px wide, so the report's 10pt body text
renders at 18.7px and reads the way it reads on paper. On a phone the same page
draws 350px wide — a scale of 0.588 — and that same body text renders at
**5.9px**. There is no arrangement of a whole A4 page that is readable on a
390px screen; the sheet is simply wider than the screen at any legible size.

So the phone gets its own reading of the page, built from the page's own
content. This tool reads each printed page and writes `public/mobile/mNNN.json`,
an ordered list of two kinds of item:

  text  the page's own words, with the printed size, weight and colour, to be
        set in one column at the phone's width. The type scale is multiplied so
        10pt body lands at 16px.
  art   a rectangle of the page — a photograph, a chart, a coloured panel, a
        table — drawn as the PDF's own SVG, full width, untouched.

NOTHING IS REWRITTEN. Not a word changes, nothing is reordered, no heading is
invented and no colour is chosen here: every string, size, weight and colour is
lifted from the PDF, and the order is the order the XY-cut reads the page in,
which is the order a person reads it. The one thing that necessarily changes is
where a line breaks — a 495pt measure cannot break where it broke on paper when
it is set 350px wide. That is the price of the phone, and it is the only price.

ANYTHING THAT IS NOT PLAIN RUNNING TEXT STAYS A PICTURE. A block is only
reflowed when it is clearly prose. A photograph, a filled panel, a chart, a
table, a diagram, a block with almost no text in it — all of those are kept as
the printed artwork, full width, so nothing the designer composed is
re-composed by a heuristic.

The desktop is untouched by all of this: it still draws the pages themselves.
"""
import pymupdf, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from pagecut import blocks, cut_rects

SRC = '../EFG_Holding_Sustainability_Report_2025_19e77be6e5.pdf'
OUT = 'public/mobile'
os.makedirs(OUT, exist_ok=True)

# ---- what counts as art rather than prose ---------------------------------
ART_IMG = 0.28        # an image covering this much of a block makes it art
ART_IMG_SUM = 0.18    # or several of them together — a row of badges
ART_FILL = 0.34       # so does a filled panel
MIN_TEXT_COVER = 0.05 # a block with less text in it than this is a diagram
TABLE_RATIO = 0.40    # this share of lines in columns makes it a table
TABLE_GAP = 14        # pt between spans that reads as a column gutter

# ---- the type scale --------------------------------------------------------
# The printed body is 10pt. 16px is the size a phone reads comfortably, so the
# whole scale is multiplied by 1.6 and then held inside a range: a 27pt printed
# heading would come out at 43px, which is a poster on a 390px screen.
K = 1.6
PX_MIN, PX_MAX = 13, 32


def px(pt):
    return max(PX_MIN, min(PX_MAX, round(pt * K)))


def hexcolor(c):
    return '#%06x' % (c & 0xFFFFFF)


def area(r):
    return max(0.0, r[2] - r[0]) * max(0.0, r[3] - r[1])


def overlap(a, b):
    return area((max(a[0], b[0]), max(a[1], b[1]), min(a[2], b[2]), min(a[3], b[3])))


def _table_like(lines):
    if len(lines) < 4:
        return False
    columned = 0
    for l in lines:
        xs = sorted((sp['bbox'][0], sp['bbox'][2]) for sp in l['spans'])
        if any(xs[i + 1][0] - xs[i][1] > TABLE_GAP for i in range(len(xs) - 1)):
            columned += 1
    return columned / len(lines) >= TABLE_RATIO


def _side_by_side(lines):
    """Two lines sharing a band of the page at different x: the block is set in
    columns, and pouring it into one would interleave them into nonsense."""
    ordered = sorted(lines, key=lambda l: l['bbox'][1])
    for i, a in enumerate(ordered):
        ah = max(1.0, a['bbox'][3] - a['bbox'][1])
        for b in ordered[i + 1:]:
            if b['bbox'][1] >= a['bbox'][3] - 0.4 * ah:
                break
            if b['bbox'][0] > a['bbox'][2] + 4 or a['bbox'][0] > b['bbox'][2] + 4:
                return True
    return False


def classify(block, lines, imgs, fills):
    """art — keep the printed artwork; panel — a filled card with prose in it;
    columns — prose the pixel cut could not separate; text — plain prose."""
    ba = area(block)
    if ba <= 0:
        return 'art'
    if sum(overlap(block, r) for r in imgs) / ba >= ART_IMG_SUM:
        return 'art'
    if not lines:
        return 'art'
    if sum(area(l['bbox']) for l in lines) / ba < MIN_TEXT_COVER:
        return 'art'
    if _table_like(lines):
        return 'art'
    fill = max((overlap(block, r) / ba for r, _ in fills), default=0.0)
    if fill >= ART_FILL:
        return 'panel'
    return 'columns' if _side_by_side(lines) else 'text'


def fill_of(block, fills):
    best, col = 0.0, None
    for r, c in fills:
        o = overlap(block, r)
        if o > best:
            best, col = o, c
    return col


BULLET = re.compile('^[\ufffd\u25b6\u25ba\u2023\u2022\u00b7\x00-\x1f]\\s*')
CTRL = re.compile('[\x00-\x08\x0b-\x1f\x7f\ufffd]')


def paragraphs(lines):
    """Group the block's lines into paragraphs, the way the page groups them."""
    lines = sorted(lines, key=lambda l: (round(l['bbox'][1], 1), l['bbox'][0]))
    gaps = [lines[i + 1]['bbox'][1] - lines[i]['bbox'][3] for i in range(len(lines) - 1)]
    gaps = sorted(g for g in gaps if g > -2)
    lead = gaps[len(gaps) // 2] if gaps else 0

    out, cur, prev = [], None, None
    for l in lines:
        size = max(s['size'] for s in l['spans'])
        color = l['spans'][0]['color']
        new = cur is None
        if prev is not None:
            gap = l['bbox'][1] - prev['bbox'][3]
            psize = max(s['size'] for s in prev['spans'])
            lh = max(6.0, prev['bbox'][3] - prev['bbox'][1])
            # A two-line heading is one heading. The break has to be clearly
            # wider than the block's own leading, not merely wider — and a
            # change of colour does not start a paragraph, because the report
            # sets half a heading in green and half in olive on the next line.
            # The colour rides on the run instead.
            if gap > lead + 0.55 * lh or abs(size - psize) > 1.2:
                new = True
            # a bullet starts an item, wherever it falls: the report sets four
            # of them in one run of lines and they are four things, not one
            if BULLET.match(l['spans'][0]['text']):
                new = True
        if new:
            cur = {'size': px(size), 'color': hexcolor(color), 'runs': []}
            out.append(cur)
        elif cur['runs']:
            # A LINE BREAK IS A SPACE. The print breaks a paragraph across lines
            # and the last word of a line carries no trailing space, so joining
            # the lines without one would weld two words together — the heading
            # "ENVIRONMENTAL / FINANCING" came out as one 21-letter word. A word
            # broken by a hyphen keeps its hyphen and takes no space.
            last = cur['runs'][-1]['t']
            if last and not last[-1].isspace() and not last.endswith(('-', '\u2010', '\u2011')):
                last_run = cur['runs'][-1]
                last_run['t'] = last_run['t'] + ' '
        for s in l['spans']:
            t = s['text']
            if not t.strip():
                continue
            bold = 'Bold' in s['font'] or 'Semibold' in s['font']
            col = hexcolor(s['color'])
            same = col if col != cur['color'] else None
            if cur['runs'] and cur['runs'][-1]['b'] == bold and cur['runs'][-1].get('c') == same:
                cur['runs'][-1]['t'] += t
            else:
                run = {'t': t, 'b': bold}
                if same:
                    run['c'] = same
                cur['runs'].append(run)
        prev = l

    clean = []
    for p in out:
        if not p['runs']:
            continue
        p['runs'][0]['t'] = p['runs'][0]['t'].lstrip()
        # the report's bullet is a Webdings triangle with no character behind it
        if BULLET.match(p['runs'][0]['t']):
            p['runs'][0]['t'] = BULLET.sub('', p['runs'][0]['t'])
            p['bullet'] = True
        p['runs'] = [r for r in p['runs'] if r['t'].strip()]
        for r in p['runs']:
            r['t'] = re.sub(r'\s+', ' ', CTRL.sub('', r['t']))
        if p['runs']:
            p['runs'][-1]['t'] = p['runs'][-1]['t'].rstrip()
            clean.append(p)
    return clean


def build(page, W, H):
    # The cropbox is already set to this half, and PyMuPDF reports every
    # coordinate relative to it — text, images and drawings alike. What still
    # comes through is the facing page's artwork bleeding across the gutter,
    # which lands at a negative x or past the trim edge, and is dropped below.
    td = page.get_text('dict')

    lines = []
    for b in td['blocks']:
        if b['type'] != 0:
            continue
        for l in b['lines']:
            spans = [s for s in l['spans'] if s['text'].strip()]
            if not spans:
                continue
            bb = tuple(l['bbox'])
            if bb[0] < -4 or bb[2] > W + 4:
                continue                       # the facing page, bleeding across
            if bb[1] < 66 or bb[3] > 806:
                continue                       # print furniture the site removes
            for s in spans:
                s['bbox'] = tuple(s['bbox'])
            lines.append({'bbox': bb, 'spans': spans})

    imgs = []
    for im in page.get_image_info():
        r = tuple(im['bbox'])
        if r[2] > 2 and r[0] < W - 2:
            imgs.append(r)
    fills = []
    for g in page.get_drawings():
        c = g.get('fill')
        if c is None:
            continue
        r = tuple(g['rect'])
        if area(r) > 4000 and r[2] > 2 and r[0] < W - 2:
            fills.append((r, '#%02x%02x%02x' % tuple(max(0, min(255, round(v * 255))) for v in c[:3])))

    def inside(box, ls):
        return [l for l in ls if overlap(box, l['bbox']) > 0.5 * max(1.0, area(l['bbox']))]

    def on_fill(box):
        ba = max(1.0, area(box))
        return max((overlap(box, r) / ba for r, _ in fills), default=0.0)

    def render(box, depth, in_card=False):
        """One block of the page, as the phone should read it."""
        ls = inside(box, lines)
        kind = classify(box, ls, imgs, fills)
        crop = {'t': 'art', 'box': [box[0], box[1], box[2] - box[0], box[3] - box[1]]}

        if kind == 'art':
            return [crop]
        if kind == 'text':
            ps = paragraphs(ls)
            return [{'t': 'text', 'p': ps}] if ps else [crop]

        # A panel is one solid block of ink, so the pixel cut can see nothing
        # inside it; cut it again over its own text lines and pictures instead.
        parts = []
        if depth < 3:
            rects = [l['bbox'] for l in ls] + [r for r in imgs if overlap(box, r) > 0]
            parts = cut_rects(rects, box)

        if len(parts) <= 1:
            # nothing left to cut: prose if it reads as one column, else artwork
            ps = paragraphs(ls)
            if not ps or _side_by_side(ls):
                return [crop]
            item = {'t': 'text', 'p': ps}
            if kind == 'panel' and not in_card:
                return [{'t': 'card', 'bg': fill_of(box, fills), 'items': [item]}]
            return [item]

        if kind != 'panel' or in_card:
            out = []
            for sub in parts:
                out += render(sub, depth + 1, in_card)
            return out

        # ONLY WHAT IS ACTUALLY ON THE PANEL GOES IN THE CARD. The cut's top
        # block often takes in the last paragraph of the page's running text as
        # well as the panel below it; putting that paragraph inside the card
        # would set dark grey type on dark green. Each part is asked whether it
        # is standing on the fill, and only those are wrapped.
        out, buf, bg = [], [], None
        for sub in parts:
            covered = on_fill(sub) >= 0.6
            drawn = render(sub, depth + 1, covered)
            if covered:
                bg = bg or fill_of(sub, fills)
                buf += drawn
            else:
                if buf:
                    out.append({'t': 'card', 'bg': bg, 'items': buf}); buf, bg = [], None
                out += drawn
        if buf:
            out.append({'t': 'card', 'bg': bg, 'items': buf})
        # a card holding nothing but artwork is a colour behind a picture of
        # that colour: drop the card and keep the picture
        return [it['items'][0] if it['t'] == 'card' and len(it['items']) == 1
                and it['items'][0]['t'] == 'art' else it for it in out]

    items = []
    for blk in blocks(page):
        items += render(blk, 0)

    # two pictures in a column are one picture: cutting a photograph in half and
    # stacking the halves changes nothing but adds a seam
    merged = []
    for it in items:
        if (merged and merged[-1]['t'] == 'art' and it['t'] == 'art'
                and abs(merged[-1]['box'][0] - it['box'][0]) < 6
                and abs(merged[-1]['box'][2] - it['box'][2]) < 6):
            a = merged[-1]['box']
            a[3] = it['box'][1] + it['box'][3] - a[1]
        else:
            merged.append(it)
    return merged


def main():
    doc = pymupdf.open(SRC)
    total = art = text = 0
    for i in range(len(doc)):
        page = doc[i]
        W, H = page.mediabox.width, page.mediabox.height
        halves = (0,) if W < 800 else (0, 1)
        for half in halves:
            printed = 0 if len(halves) == 1 else 2 * (i + 1) - 2 + half
            hw = W if len(halves) == 1 else W / 2
            page.set_cropbox(page.mediabox if len(halves) == 1
                             else pymupdf.Rect(hw * half, 0, hw * (half + 1), H))
            items = build(page, hw, H)
            art += sum(1 for it in items if it['t'] == 'art')
            text += sum(1 for it in items if it['t'] == 'text')
            total += 1
            with open(f'{OUT}/m{printed:03d}.json', 'w') as fh:
                json.dump({'w': round(hw, 3), 'items': items}, fh,
                          separators=(',', ':'), ensure_ascii=False)
        page.set_cropbox(page.mediabox)

    size = sum(os.path.getsize(os.path.join(OUT, f)) for f in os.listdir(OUT))
    print(f'phone readings written: {total} pages, {text} text blocks, {art} art blocks')
    print(f'total {size/1024:.0f} KB')


if __name__ == '__main__':
    main()
