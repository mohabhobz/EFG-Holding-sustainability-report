"""Turn every printed page into an SVG that IS the page: the PDF's own text,
its own vector art and its own photographs, at the PDF's own coordinates."""
import pymupdf, re, base64, hashlib, io, os, json, sys
from PIL import Image, ImageDraw

SRC = '../EFG_Holding_Sustainability_Report_2025_19e77be6e5.pdf'
OUT_SVG = 'public/pages'
OUT_IMG = 'public/pageart'
os.makedirs(OUT_SVG, exist_ok=True); os.makedirs(OUT_IMG, exist_ok=True)


ABC = ('ABCNormal-Regular', 'ABCNormal-Bold', 'ABCNormal-Book', 'ABCNormal-Semibold')
TEXT_RE = re.compile(r'<text([^>]*)>(.*?)</text>', re.S)
USE_RE = re.compile(r'<use [^>]*xlink:href="#(font_\d+_\d+)"[^>]*transform="matrix\(([^)]+)\)"[^>]*/>')


def outline_foreign_text(svg_text, svg_paths):
    """Draw the report's non-ABC glyphs as outlines instead of as text.

    Seven other faces appear in the file — Webdings for the arrow bullet in
    every GOALS panel, Bebas for two display lines, DM Sans, Helvetica Neue,
    two Arabic faces and Aptos. They are embedded as CID-keyed subsets with no
    cmap, so a browser cannot look their glyphs up by character, and for 58 of
    them the PDF carries no ToUnicode map either — PyMuPDF writes U+FFFD and
    the page renders a replacement box where the print has a triangle.

    So those runs are taken from the same page rendered with text_as_path=True,
    where every glyph is a <use> of a real outline, and matched to the text
    version by absolute origin — the two agree to the hundredth of a point.
    The 4,500 ABC Normal runs stay as text: selectable, searchable, and set in
    the licensed face.
    """
    wanted, cleaned, cuts = set(), svg_text, 0   # `wanted` is compared, never iterated for output
    for m in TEXT_RE.finditer(svg_text):
        head = m.group(1)
        fam = re.search(r'font-family="([^"]+)"', head)
        if not fam or fam.group(1) in ABC:
            continue
        tr = re.search(r'transform="matrix\(([^)]+)\)"', head)
        if not tr:
            continue
        a, _b, _c, dd, e, f = [float(v) for v in re.split(r'[ ,]+', tr.group(1).strip())]
        for ts in re.finditer(r'<tspan y="([-\d.]+)" x="([-\d.\s]+)"', m.group(2)):
            y = float(ts.group(1))
            for x in ts.group(2).split():
                wanted.add((round(a * float(x) + e, 2), round(dd * y + f, 2)))
        cleaned = cleaned.replace(m.group(0), '')
        cuts += 1
    if not wanted:
        return svg_text, 0

    uses, ids = [], set()
    for m in USE_RE.finditer(svg_paths):
        v = [float(x) for x in m.group(2).split(',')]
        if (round(v[4], 2), round(v[5], 2)) in wanted:
            uses.append(m.group(0)); ids.add(m.group(1))
    if not uses:
        return svg_text, 0

    defs = [d for gid in sorted(ids)
            for d in re.findall(r'<path id="' + gid + r'"[^/]*?/>', svg_paths)]
    block = '<defs>' + ''.join(defs) + '</defs>' + ''.join(uses)
    return cleaned.replace('</svg>', block + '</svg>'), cuts


RULE_RE = re.compile(
    r'<path[^>]*?transform="matrix\(1,0,0,-1,[-\d.]+,45\.888\)"[^>]*?stroke="#231f20"[^>]*?/>')
MARK_RE = re.compile(r'<path[^>]*?transform="matrix\(1,0,0,-1,[-\d.]+,39\.79193\)"[^>]*?/>')


def strip_furniture(svg):
    """Take the page's print furniture off the web page.

    Every printed page carries four marks that belong to a bound document and
    to nothing else: the running head "Sustainability Report 2025", the 0.5pt
    rule under it, the deep-green three-bar square in the top corner — the
    print's own contents affordance, which the site's header already is — and
    the folio at the foot. On a scrolling page they are furniture for a
    structure that is not there.

    Each is matched on what it actually is rather than on where it roughly sits,
    so nothing else can be caught:

      rule    a 0.5pt #231f20 stroke on the baseline y = 45.888
      mark    the path at y = 39.79193, green on white pages, white on green
      head    a 9pt line reading "Sustainability Report 2025" on baseline 41.9
      folio   a 9pt line of digits on baseline 819.9

    The folio rule is deliberately narrow. The footnote on pp. 40-41 sits at
    baseline 803 in 7pt, and a looser "anything near the foot" test would have
    taken it with the page numbers.
    """
    n = 0
    svg, k = RULE_RE.subn('', svg); n += k
    svg, k = MARK_RE.subn('', svg); n += k

    out = svg
    for m in TEXT_RE.finditer(svg):
        head, inner = m.group(1), m.group(2)
        size = re.search(r'font-size="([\d.]+)"', head)
        tr = re.search(r'transform="matrix\(([^)]+)\)"', head)
        ts = re.search(r'<tspan y="([-\d.]+)"', inner)
        if not (size and tr and ts) or abs(float(size.group(1)) - 9) > 0.2:
            continue
        v = [float(x) for x in re.split(r'[ ,]+', tr.group(1).strip())]
        baseline = v[3] * float(ts.group(1)) + v[5]
        body = re.sub(r'<[^>]+>', '', inner).strip()
        head_line = abs(baseline - 41.9) < 1.5 and body.startswith('Sustainability Report')
        folio = abs(baseline - 819.9) < 1.5 and body.isdigit()
        if head_line or folio:
            out = out.replace(m.group(0), '', 1); n += 1
    return out, n


""" Editorial removals: text the client has asked to come off a printed page.
Keyed by printed page, matched on the line's own content so a change of
position cannot make it miss or over-reach. """
PAGE_EDITS = {
    # The contents page labels its five numbered sections "Section 1:" and so
    # on above each title. On paper that told a reader of a bound document
    # where a tab began; in a list of links they are eleven pages and the
    # label is noise. The titles and folios stay exactly where the print puts
    # them, so the page keeps its rhythm — the sections simply read airier.
    2: re.compile(r'^Section \d+:$'),
    3: re.compile(r'^Section \d+:$'),   # the same spread's other half
}


def apply_page_edits(svg, printed):
    pattern = PAGE_EDITS.get(printed)
    if not pattern:
        return svg, 0
    out, n = svg, 0
    for m in TEXT_RE.finditer(svg):
        body = re.sub(r'<[^>]+>', '', m.group(2)).strip()
        if pattern.match(body):
            out = out.replace(m.group(0), '', 1)
            n += 1
    return out, n

""" ---------------------------------------------------------------------------
 THE WHITE A BOUND BOOK NEEDS IS NOT PART OF THE PAGE.

 A book has to give every leaf the same height and the same margins: a letter
 that ends a third of the way down still costs a full sheet, every page opens
 the same distance below the trim edge, and a section opener that carries a
 title, a paragraph and an illustration anchored to the foot leaves a hand's
 width of nothing in between, because the illustration cannot float. A scroll
 has no leaves, no trim edge and no foot. Reproduced literally, those
 conventions put a screen of nothing between one block of reading and the next —
 long enough that a reader stops scrolling, believing the section is over.

 THIS IS WEB CONTENT, NOT A STACK OF SHEETS. So every page is reduced to the
 bands that actually carry ink, with EDGE points of white around each:

   the head        cut back to EDGE above the first mark
   the foot        cut back to EDGE below the last
   a hole inside   any run of blank rows taller than HOLE — the gap between a
                   section opener's paragraph and its illustration, and six
                   places like it — closed to EDGE on each side, by splitting
                   the page into two windows on the same drawing and stacking
                   them. The reader sees the paragraph, then the illustration.

 NOTHING INSIDE A PAGE MOVES. Each window is the same SVG with its viewBox
 opened on a different slice, so every coordinate, every type size and the full
 width are the PDF's own. Only white goes.

 TWO GUARDS KEEP ARTWORK WHOLE. A page whose ink runs into either furniture band
 has art bleeding off that edge — the contents page, the section dividers, any
 full-bleed photograph — and that edge is left at full size, because a cut there
 would take picture rather than paper. And the outer 2pt of the sheet is ignored
 when measuring: a spread's other half bleeds a hairline across the gutter, and
 that sliver would otherwise report a page as full to the very edge.

 THE MEASUREMENT IS OF THE PAGE AS THE SITE SHOWS IT. The two furniture bands
 are painted out first, or the folio — which sits at the very foot of every page
 and which the site does not draw — would report every page as full, and the
 green corner mark, which reaches 59pt, would report every page as starting at
 the top.
--------------------------------------------------------------------------- """
EDGE = 12.0            # pt of white kept around every band of ink
HOLE = 60.0            # a blank run taller than this is a hole, and is closed
TRIM_MIN = 8.0         # not worth rewriting the page for less than this
TRIM_DPI = 72          # 1 px = 1 pt
BAND_TOP = 66          # running head, rule and corner mark all live above this
BAND_BOT = 806         # the folio lives below this
BLEED = 2              # pt of the outer edge ignored — the facing page's bleed


def ink_rows(page):
    """Which rows of the page carry ink, ignoring the print furniture the site
    removes and the hairline the facing page bleeds across the gutter."""
    pm = page.get_pixmap(dpi=TRIM_DPI)
    im = Image.frombytes('RGB', (pm.width, pm.height), pm.samples).convert('L')
    s = TRIM_DPI / 72
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, im.width, int(BAND_TOP * s)], fill=255)
    d.rectangle([0, int(BAND_BOT * s), im.width, im.height], fill=255)
    d.rectangle([0, 0, int(BLEED * s), im.height], fill=255)
    d.rectangle([im.width - int(BLEED * s), 0, im.width, im.height], fill=255)
    m = im.point(lambda v: 0 if v > 253 else 255)
    w, data = m.width, m.tobytes()
    return [b'\xff' in data[y * w:(y + 1) * w] for y in range(m.height)]


def ink_windows(page, H):
    """The page reduced to the windows worth drawing: [(top, height), ...].

    One window for an ordinary page, two where a hole has been closed. Returns
    [] when the page needs no reduction at all.
    """
    rows = ink_rows(page)
    s = TRIM_DPI / 72
    marked = [y / s for y, v in enumerate(rows) if v]
    if not marked:
        return []
    first, last = marked[0], marked[-1] + 1 / s

    # ink running into a furniture band means artwork bleeding off that edge
    top = 0.0 if first <= BAND_TOP + 1 else max(0.0, first - EDGE)
    bottom = H if last >= BAND_BOT - 1 else min(H, last + EDGE)

    # the holes inside, as (start, end) in points
    holes, run = [], None
    for y, v in enumerate(rows):
        y_pt = y / s
        if y_pt < first or y_pt > last:
            continue
        if not v:
            run = y_pt if run is None else run
        elif run is not None:
            if y_pt - run > HOLE and y_pt - run > 2 * EDGE + TRIM_MIN:
                holes.append((run, y_pt))
            run = None

    windows, cut = [], top
    for a, b in holes:
        windows.append((cut, a + EDGE - cut))
        cut = b - EDGE
    windows.append((cut, bottom - cut))

    kept = sum(h for _, h in windows)
    if H - kept < TRIM_MIN:
        return []
    return windows


SVG_TAG_RE = re.compile(r'<svg[^>]*>')


def window_svg(svg, top, height):
    """The same drawing, seen through a shorter window. Nothing inside moves."""
    def fix(m):
        tag = m.group(0)
        tag = re.sub(r'height="[\d.]+"', f'height="{height:.3f}"', tag, count=1)
        tag = re.sub(r'viewBox="0 0 ([\d.]+) [\d.]+"',
                     lambda w: f'viewBox="0 {top:.3f} {w.group(1)} {height:.3f}"', tag, count=1)
        return tag
    return SVG_TAG_RE.sub(fix, svg, count=1)


doc = pymupdf.open(SRC)
seen = {}          # sha1 -> filename
manifest = {}

IMG_RE = re.compile(r'xlink:href="data:image/(\w+);base64,\s*([A-Za-z0-9+/=\s]+?)"')

def store(kind, raw):
    h = hashlib.sha1(raw).hexdigest()[:12]
    if h in seen: return seen[h]
    try:
        im = Image.open(io.BytesIO(raw))
        im.load()
        mode = 'RGBA' if im.mode in ('RGBA', 'LA', 'P') and 'transparency' in im.info or im.mode in ('RGBA','LA') else 'RGB'
        if im.width > 1700:
            im = im.resize((1700, round(im.height * 1700 / im.width)), Image.LANCZOS)
        im = im.convert(mode)
        name = f'a{h}.webp'
        im.save(os.path.join(OUT_IMG, name), quality=82, method=5)
    except Exception:
        name = f'a{h}.{ "png" if kind=="png" else "jpg" }'
        open(os.path.join(OUT_IMG, name), 'wb').write(raw)
    seen[h] = name
    return name

blank = []
outlined = {}
stripped = {}
edited = {}
trimmed = {}
split = {}
sizes = {}
for i in range(len(doc)):
    page = doc[i]
    W, H = page.mediabox.width, page.mediabox.height
    # The file is A3 spreads with ONE exception: the cover is a single A4 page.
    # Halving it would cut the cover in two, so it is emitted whole. There is no
    # printed page 1 in the file — the inside front cover is not included.
    halves = (0,) if W < 800 else (0, 1)
    for half in halves:
        printed = 0 if len(halves) == 1 else 2 * (i + 1) - 2 + half
        page.set_cropbox(page.mediabox if len(halves) == 1
                         else pymupdf.Rect(W / 2 * half, 0, W / 2 * (half + 1), H))
        svg = page.get_svg_image(text_as_path=False)
        if any(f in svg for f in ('Webdings', 'Bebas', 'DMSans', 'Helvetica', 'Kaff', 'Hacen', 'Aptos')):
            svg, n_cut = outline_foreign_text(svg, page.get_svg_image(text_as_path=True))
            outlined[printed] = n_cut
        # every raster becomes a file next to the page instead of 700 KB of base64
        def sub(m):
            raw = base64.b64decode(re.sub(r'\s', '', m.group(2)))
            return f'xlink:href="ART/{store(m.group(1), raw)}"'
        svg = IMG_RE.sub(sub, svg)
        # the crop keeps the whole spread's objects; the ones off-canvas cost
        # nothing to leave, but the page must not scroll them into view
        # ids are file-local in a standalone SVG but page-global once several
        # are inlined into one document, so every id is namespaced by page
        tag = f'p{printed:03d}'
        ids = set(re.findall(r'id="([^"]+)"', svg))
        for old in sorted(ids, key=len, reverse=True):
            svg = svg.replace(f'id="{old}"', f'id="{tag}_{old}"')
            svg = svg.replace(f'url(#{old})', f'url(#{tag}_{old})')
            svg = svg.replace(f'xlink:href="#{old}"', f'xlink:href="#{tag}_{old}"')
        svg = re.sub(r'^<\?xml[^>]*\?>\s*', '', svg)
        svg, n_strip = strip_furniture(svg)
        stripped[printed] = n_strip
        svg, n_edit = apply_page_edits(svg, printed)
        if n_edit: edited[printed] = n_edit
        svg = svg.replace('<svg ', '<svg preserveAspectRatio="xMidYMid meet" class="pgsvg" ', 1)
        body = re.sub(r'<[^>]+>', '', svg).strip()
        if len(body) < 12 and svg.count('<image') == 0 and svg.count('<path') < 3:
            blank.append(printed); continue

        page_w = float(re.search(r'viewBox="0 0 ([\d.]+) ', svg[:400]).group(1))
        wins = ink_windows(page, H) or [(0.0, H)]
        cut = H - sum(h for _, h in wins)
        if cut > 0: trimmed[printed] = round(cut, 1)
        if len(wins) > 1: split[printed] = len(wins)

        boxes = []
        tag = f'p{printed:03d}'
        for k, (top, hgt) in enumerate(wins):
            out = window_svg(svg, top, hgt)
            name = f'{tag}.svg' if k == 0 else f'{tag}_{k + 1}.svg'
            if k:
                # ids are namespaced by page; a second window of the same page is
                # a second document, so it gets its own namespace
                out = out.replace(f'{tag}_', f'{tag}{chr(96 + k)}_')
            open(f'{OUT_SVG}/{name}', 'w').write(out)
            manifest[(printed, k)] = len(out)
            boxes.append([round(top, 3), round(hgt, 3)])
        sizes[printed] = [page_w, boxes]
    page.set_cropbox(page.mediabox)


# The pages are no longer all the same height, so the shell has to be told each
# one's box: it reserves the right space before a page arrives (an A4-shaped
# placeholder in front of a page that is two thirds A4 makes the stack jump when
# it loads) and it is the denominator for the click targets laid over a page.
with open('src/data/page-size.js', 'w') as fh:
    fh.write('/* GENERATED by tools/build-pages.py — do not edit.\n'
             ' * Every printed page as [width, [[top, height], ...]] in points: the\n'
             ' * windows of the drawing that carry ink, after the blank head, foot and\n'
             ' * any hole inside are closed. Two windows means the page is drawn as two\n'
             ' * stacked slices, p0NN.svg and p0NN_2.svg. See the note in the\n'
             ' * generator. */\n'
             'export const pageSize = {\n')
    for k in sorted(sizes):
        w, boxes = sizes[k]
        cells = ', '.join(f'[{t:g}, {h:g}]' for t, h in boxes)
        fh.write(f'  {k}: [{w:g}, [{cells}]],\n')
    fh.write('};\n')

tot = sum(manifest.values())
print(f'pages written {len(manifest)}   blank skipped {len(blank)} {blank}')
print(f'svg total {tot/1e6:.2f} MB   art files {len(seen)}')
print(f'pages with outlined non-ABC glyphs: {len(outlined)}  runs {sum(outlined.values())}')
print(f'editorial removals: {edited}')
print(f'print furniture removed: {sum(stripped.values())} objects; pages with none: {[p for p,v in stripped.items() if v==0]}')
print(f'white closed on {len(trimmed)} pages, {sum(trimmed.values())/72:.1f} in of dead scroll removed')
print(f'  deepest cuts: {sorted(trimmed.items(), key=lambda kv: -kv[1])[:8]}')
print(f'  pages drawn as two windows (a hole closed): {split}')
