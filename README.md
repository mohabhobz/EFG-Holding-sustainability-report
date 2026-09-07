# EFG Holding — Sustainability Report 2025 · web

**The printed report, as printed — but built as a web page, not photographed
as one.** Every word on this site is a real word: an HTML element carrying the
print's own typeface, size, weight, colour and tracking, at the PDF's own
coordinates. It selects, copies, searches, translates, reads aloud and scales.
Everything that is genuinely artwork — the photographs, the illustrations, the
charts, the coloured panels, the rules — is the PDF's own drawing, untouched.
Nothing is re-flowed, re-coloured or re-composed.

Four things the web adds or takes away, and only four: the header, so a reader
can jump between sections instead of scrolling 119 pages; the annual report's
cover on the front page; the removal of the print's page furniture — the running
head, the rule, the corner mark and the folio; and the trimming of the blank
edges a bound book has to leave and a scroll does not. All four are described
below. Every other route is printed pages and nothing else.

The pages sit on white, with no shadow and no ground, close together — they
are consecutive pages of one document, not cards on a board — in the header's
own 1,240px column: a page's left edge lands under the EFG lockup and its right
edge under the last nav link, which also draws it at 1,112px against the
printed 794 — a little over 140%, which is what makes the type comfortable on
a screen.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
```

Or double-click **`start-local.command`**. See `REVIEW.md`.

## How it works

**Two files per printed page.** `tools/build-pages.py` reads the PDF and writes,
for each of the 129 printed pages:

| | |
|---|---|
| `public/art/aNNN.svg` | the page's vector art and photographs — illustrations, charts, coloured panels, rules — with **every piece of type taken out of it** |
| `public/text/tNNN.json` | **every run of type on the page**: where it sits, how big it is, which face, which weight, which colour, and the width the print gives it |

`src/components/PageRegion.jsx` draws a page as the artwork with the type laid
over it at the PDF's own coordinates. Positions are percentages of the page box
and type sizes are `cqw` — hundredths of the container's own width — so the page
is the same page at 1,112px, at 340px and at every width between. Nothing is
rasterised; nothing is re-laid-out.

**Every word is a word.** 3,845 runs of real HTML text carrying the print's own
face, size, weight, colour and tracking. It selects, copies, searches with
⌘F, translates, reads aloud to a screen reader and reflows on a phone. What
stays as artwork is what is genuinely artwork.

**It splits the spreads.** The file is A3 spreads — one PDF page is two printed
pages — so the cropbox is set to each half in turn. The cover is the one
exception: a single A4 page, emitted whole. There is no printed page 1.

**It lifts the photographs out.** PyMuPDF writes every photograph into the SVG
as base64. They are extracted to `public/pageart/` as WebP and deduplicated by
content — 271 files for 569 placements — leaving the artwork 2.2 MB for the
whole report instead of 40.

**It namespaces every id.** Clip paths are file-local in a standalone SVG and
document-global once several are inlined into one page, so every id is prefixed
with its page.

**Seven faces are not type.** Webdings for the arrow bullet in every GOALS
panel, Bebas for two display lines, DM Sans, Helvetica Neue, two Arabic faces
and Aptos — 48 runs. They are CID-keyed subsets with no character map, so no
browser can set them, and they are marks rather than words. They are taken from
the same page rendered with every glyph as an outline and left in the artwork.

## The two things that make it exact

**The baseline.** CSS cannot place a baseline, so a run is positioned as
`baseline − factor × size`. The factor is where Chromium actually puts the
baseline in a line box at `line-height: 1`, measured against the report's own
woff2 files rather than assumed — 0.837 em for all four faces, written to
`src/data/type-metrics.js`. Taking it from the PDF's own ascent and descent
instead gives 0.9075 and puts every line three pixels high.

**The tracking.** The report is justified: the PDF opens the word spaces to
reach the measure, and a browser handed the same words in the same face at the
same size sets them about 5 % narrower. `tools/measure-text.mjs` lays every run
out in a headless Chromium at 1px per point, measures it, and writes back the
word-spacing that makes it exactly the printed width — or, where the print has
tracked a display line rather than justified it, a letter-spacing. **3,484 of
3,845 runs carry a correction**, and after it the median error is 0 % and the
worst 0.11 %.

```bash
python3 tools/build-pages.py     # artwork + type
node    tools/measure-text.mjs   # the tracking, against the real face
python3 tools/build-mobile.py    # the phone's reading
```

**Checked, not asserted.** Every one of the 124 page windows is rendered from
the site at 1,112px and compared with the PDF rendered at the same size. After
blurring both by 2px to take anti-aliasing out of it, the mean difference is
**5.2 / 255**. Measured in the browser rather than in pixels, a run's baseline
lands within **0.12pt** of the print's and its width within **0.2pt** — a fifth
of a point on a 456pt line.

The residue is glyph placement. The PDF positions every letter individually;
a browser is given a run of words and spaces them itself, so a letter inside a
line can sit a third of a point from where the print puts it. It is invisible at
reading size — the two are indistinguishable side by side at 2× — and it is the
price of the text being text. Matching it exactly would mean one element per
letter, 100,000 of them, and text that could no longer be selected as words.

## What the web adds, and what it takes away

**The page furniture is gone.** Every printed page carries four marks that
belong to a bound document and to nothing else: the running head "Sustainability
Report 2025", the 0.5pt rule under it, the deep-green three-bar square in the
top corner — the print's own contents affordance, which the site's header
already is — and the folio at the foot. Two of them are type and are dropped
from the text (189 runs); two are paths and are cut out of the artwork. Each is
matched on what it actually is rather than on where it roughly sits: the rule by
its 0.5pt #231f20 stroke on baseline 45.888, the square by its path at 39.79193,
the head and folio by being 9pt runs on baselines 41.9 and 819.9. The folio test
is deliberately narrow — the footnote on pp. 40–41 sits at baseline 803 in 7pt,
and a looser "anything near the foot" rule would have taken it with the page
numbers.

**The white a bound book needs is gone: this is web content, not a stack of
sheets.** A book has to give every leaf the same height and the same margins — a
letter that ends a third of the way down still costs a full sheet, every page
opens the same distance below the trim edge, and a section opener carrying a
title, a paragraph and an illustration anchored to the foot leaves a hand's
width of nothing in between, because the illustration cannot float. A scroll has
no leaves, no trim edge and no foot. Reproduced literally, those conventions put
a screen of nothing between one block of reading and the next — long enough that
a reader stops scrolling, believing the section is over.

So every page is reduced to the bands that actually carry ink, with 12pt of
white around each:

| | |
|---|---|
| the head | cut back to 12pt above the first mark |
| the foot | cut back to 12pt below the last |
| a hole inside | any blank run over 60pt closed to 12pt each side |

A hole is closed by drawing the page as two windows of itself, stacked flush. Seven pages need it: the four section openers,
where the paragraph and the illustration were half a screen apart, and pages 10,
55 and the cover. What separates one page from the next is then the stack's own
gap in `pages.css`, 10–16px: a paragraph's worth of air, not a page break's.

**119 of the 129 pages are reduced; the stack is 26 % shorter — 32 feet of dead
scroll gone.** The Chairperson's foreword went from 3,165px to 1,657px, the
CEO's note from 3,690px to 2,177px, Social Investment from 47,765px to 38,000px.

**Nothing inside a page moves.** A window is the same page seen through a
shorter box, so every coordinate, every type size and the full width are the
PDF's own — the fidelity figures above are unchanged. Only white goes, and
white is defined strictly: verified at 144dpi, **no discarded strip on any of the
129 pages contains a single pixel darker than 254/255**.

**Two guards keep artwork whole.** A page whose ink runs into either furniture
band has art bleeding off that edge — the contents page, the section dividers,
any full-bleed photograph — and that edge keeps its full size, because a cut
there would take picture rather than paper. And the outer 2pt of the sheet is
ignored when measuring, because a spread's other half bleeds a hairline across
the gutter and that sliver would report a page as full to the very edge.

`src/data/page-size.js` is generated alongside the pages: `[width, [[top,
height], …]]` per page. The shell needs it twice — to hold each window's shape
before it arrives, so the stack does not jump on load, and to resolve the click
targets laid over the printed contents, whose coordinates are still the PDF's.

**The front page is the annual report's cover.** `src/components/ReportCover.jsx`
is the AR's own `pages/Cover.jsx` (Figma frame 404:2631) in plain CSS, with this
report's content: the title at left 8.194 % / width 35.556 % with the printed
cover's two weights (THE POWER in Book, OF CLARITY in Bold), the theme line
under it, and the row at left 8.403 % / top 57.252 % carrying 2025 ·
SUSTAINABILITY REPORT and the 201 × 50 #8f8e00 Download PDF pill. The title
block is lifted from the AR's 36.259 % to 33.71 % so the theme line clears the
row — the AR makes the same move on its two-line Financial Statements hero. The
PRI signatory mark from the printed cover is kept, bottom right, on a white chip
because it is black and blue artwork and would vanish on a photograph. Printed
page 0 is out of the stack; the printed contents page still follows below.

The Download PDF button serves `public/EFG-Holding-Sustainability-Report-2025.pdf`
— swap `reportPdf` in `src/data/report.js` for the hosted URL once the report is
published on efgholding.com, which is how the AR's cover links to its own.

**Every other route is its printed pages and nothing else.** There was a hero
panel at the top of all ten — the AR's own `sections/PageHero.jsx` in plain CSS,
a full screen of artwork with the section title on it — and it is removed, along
with `src/components/PageHero.jsx` and `src/data/heroes.js`. The site is the
header and the printed pages; the printed page already carries its own title,
and a screen of artwork in front of each one was a screen of scrolling before
the report began. Nothing switches it back on: it is gone from the tree.

`hero.css` keeps its name and its `.hero` class because the cover panel is
built on the AR's hero geometry, but everything in it now belongs to the cover.

**One deliberate difference from the AR on the cover.** Its panel is `100svh`
because its nav is `absolute top-0` and overlays the artwork. Ours is a sticky,
opaque header that takes flow space, so the panel is
`calc(100svh - var(--sr-header-h))` — the same intent, fill the view, and every
coordinate inside stays a percentage of the panel, so the proportions are
untouched.

**The cover artwork is in.** `src/assets/heroes/cover.webp`, 2560 × 1429, is a
generated architectural interior in the annual report's own house style: a
concrete hall whose only openings are three slanted apertures — the EFG mark
built as architecture, the device that runs through all ten AR heroes — with
daylight raking through them onto the floor. Its gradient is **baked in**, as
the AR bakes its own: a left wash so the white title reads on the dark wall, a
foot wash under the row, and a green cast in the shadow. No scrim in CSS, by
design, because a second one over it would crush the picture. The brief and the
generation prompt are in the project doc `claude/sr-2026-cover-art-prompt.md`.

**One exception, and only on a phone.** The baked gradient is cut for the frame
the design was drawn at, 1.83:1, where the title sits on the dark left wall. A
phone panel is taller than it is wide, so `object-fit: cover` throws that wall
away and keeps the lit middle of the hall — and the flow layout puts the title
on it. Below 1024px `.hero-flow` therefore carries a foot wash in the report's
deep green, under the text only. The desktop composition is untouched.

The printed divider spreads (pp. 8–9, 18–19, 46–47, 80–81, 102–103) are out of
the stack. `src/components/SectionCover.jsx` — the SR-cover-style section
opener — is in the tree, unused, waiting on the section artwork; passing
`cover="<slug>"` to `Spread` brings it back.

**Under 900px the page is read rather than shown.** This is the one place the
site does not draw the printed page, and it is forced. A page draws 1,112px wide
on a desktop, so the report's 10pt body text renders at 18.7px and reads the way
it reads on paper. On a 390px phone the same page draws 350px — a scale of 0.588
— and that text renders at **5.9px**. There is no arrangement of an A4 sheet
that is legible on a phone: the sheet is wider than the screen at any readable
size. Splitting the pages into their columns does not rescue it either — the
report is set to a wide single measure, and 76 % of its ink sits in blocks
wider than 520pt.

So below 900px each page is replaced by its own reading, built from the page
itself by `tools/build-mobile.py` into `public/mobile/mNNN.json` and rendered by
`src/components/MobilePage.jsx`. Two kinds of thing come out of a page:

| | |
|---|---|
| **text** | the page's own words, at the page's own sizes, weights and colours, set in one column. The scale is multiplied by 1.6, so the body lands at 16px |
| **art** | a rectangle of the page — a photograph, a chart, a diagram, a table — drawn from the PDF's own SVG, full width, untouched |

A coloured panel with prose in it becomes a card in the panel's own colour, so
the page's structure survives the reading. Reading order is the order an
[XY-cut](https://en.wikipedia.org/wiki/Recursive_X-Y_cut) reads the page in —
split on the blank rows, then on the blank columns inside each row — which for
this report is the order a person reads it.

**Nothing is rewritten.** Not a word changes, nothing is reordered, no heading
is invented and no colour is chosen: every string, size, weight and colour is
lifted from the PDF. **76 % of the report's 180,000 characters** are read this
way; the rest is on pages that are wholly graphic, and those stay pictures. Two
things necessarily differ, and only two: a line breaks where 350px makes it
break rather than where 495pt did, and the type is 1.6× the printed size.

**Anything that is not plainly prose stays a picture** — a photograph, a filled
panel, a chart, a table, a block set in columns the cut could not separate, a
block with almost no text in it. Nothing the designer composed is re-composed by
a heuristic.

A run of the builder reports what it found: 129 pages, 367 text blocks, 173 art
blocks, 218 KB of JSON in total — about 1.7 KB a page, fetched only when the
page comes near.

**The desktop is untouched by all of this.** At 900px and up the site still
draws the printed pages, and the switch is a single `matchMedia` in `Spread.jsx`.

**A pair of arrows steps through the report.** `src/components/PageNav.jsx` is
the AR's own `layout/PageNav.jsx` (Figma Frame 1403, drawn identically on all
44 of its frames) in plain CSS: fixed 40px in from the right and up from the
bottom, two 40 × 40 white buttons 8px apart with 2px of radius on their outer
corners only, the design's own 16.08px glyph in `rgba(0, 69, 23, .69)`, and the
first and last arrows disabled at 50% and rendered as a `<span>` so they are
unreachable by keyboard as well as unclickable. It steps through
`readingOrder` — printed page 2 first, the appendix last — and is mounted once
in `App`, outside the Suspense boundary, because it belongs to the viewport
rather than to any page.

Two things are ours rather than the AR's:

- **Under 640px the inset comes in to 16px and the buttons go to 44 × 44.** The
  design's 40px costs a tenth of a phone's width, and 40px is under the touch
  target the platforms ask for. Same object, sized for a thumb.
- **The "step over whatever claims the bottom" rule is corrected.** The AR's
  only claimant is its footer, which is the last thing on the page and so never
  leaves the bottom of the screen, and for that `innerHeight - top` is always
  right. Ours is the PRI mark inside the cover, which does leave: scroll past
  it and `top` goes negative and that expression grows without bound, parking
  the arrows mid-screen. A claimant is now honoured only while it is still in
  the lower half of the viewport.

## Routes

One route per entry in the printed contents, each holding its printed pages.

| Route | Printed pages |
|---|---|
| `/` | the cover, then 2 |
| `/abbreviations` | 3 |
| `/chairpersons-foreword` | 4–5 |
| `/ceo-note` | 6–7 |
| `/introduction` | 10–17 |
| `/environmental-stewardship` | 20–45 |
| `/social-investment` | 48–79 |
| `/governance-ethics` | 82–101 |
| `/stakeholder-engagement` | 104–126 |
| `/from-clarity-to-impact` | 127 |
| `/appendix-carbon` | 128–129 |

`src/data/contents.js` is the transcription of printed page 2 that drives the
header links and the Contents overlay. Real paths, not hash routes:
`vite.config.js` writes `404.html` and `vercel.json` rewrites to the app.

**Every route is reachable by clicking, at every width.** The bar carries only
the five numbered sections — eleven labels would need about 1,825px against the
1,112px it has — so the other six live in the Contents overlay, and the control
that opens it is present at every width. It used to hide above 1100px, the way
the annual report hides its menu, but the AR's bar carries all nine of its
links and ours carries five of eleven: on a desktop that left the foreword, the
CEO's note, the closing statement and the appendix with no link anywhere,
reachable only by stepping through with the arrows. They were fine on a phone,
where the control shows, which is a bad way for a navigation to differ.

The printed contents page is clickable too. It is an SVG of the page, so its
entries are text rather than links; `src/data/page-links.js` puts a link back
over each row at the coordinates the PDF gives it — label through folio, and
the "Section N:" line with it.

## Two things to settle before this goes public

**1. The typeface licence.** ABC Normal is embedded in `src/assets/fonts/` as
WOFF2, extracted from the report PDF, which was produced under a **desktop**
licence. Serving a font from a website is a separate purchase from Dinamo
(licensing@abcdinamo.com). This matters more here than it would in a normal
build: the pages ask for the font by the name inside the PDF, and without it
every line reflows. Internal review only until that purchase is made.

**2. Reading on a phone.** An A4 page scaled to a 390px screen is an A4 page at
49%. It is exactly the document, and it is small; pinch-zoom is enabled and the
text is real text, so it zooms sharply rather than pixelating. If the client
wants larger type on a phone, that is a decision to reflow — which is a
different site from this one.
