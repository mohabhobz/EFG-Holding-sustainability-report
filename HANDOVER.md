# EFG Holding Sustainability Report 2025 — the website

The printed report, printed pages 1 to 129, rebuilt as a website. Every word
that is type on the sheet is real HTML text here, with the print's own colour,
size, family and weight ported to CSS. Only photographs, illustrations, logos
and certification marks are images.

## What is here

| Route | Printed pages |
|---|---|
| `/` | the cover, sheet 0 |
| `/contents` | 2–3, as one spread |
| `/chairpersons-foreword` | 4–5 |
| `/ceo-note` | 6–7 |
| `/introduction` | 8–17 |
| `/environmental-stewardship` | 18–45 |
| `/social-investment` | 46–79 |
| `/governance-ethics` | 80–101 |
| `/stakeholder-engagement` | 102–126 |
| `/from-clarity-to-impact` | 127 |
| `/appendix-carbon` | 128–129 |

79 page articles, 255 pictures, one stylesheet.

## How the pages scale

Every measurement in `src/styles/report.css` is a printed point divided by
5.95275 and written in `cqw` — hundredths of the sheet's own width. A page is
therefore the printed page at any window size, and the whole site scales from
one number.

The one trap: **a `cqw` resolves against the nearest _ancestor_ container.** An
element that declares `container-type` cannot size its own padding or type
against itself. That is why every page is `.rp` (the container) wrapping
`.rp-in` (everything measured in `cqw`). At a 1440px window the section body
computes to 18.68px and a letter's h1 to 50.44px; if body reads 24.19px, a
`cqw` is resolving against the viewport and the wrapper has been lost.

The print does not use one grid. Three of them, and carrying one page's numbers
to another is the most common way to get a page subtly wrong:

| | letters (4–7) | sections (10 on) | green spread (2–3) |
|---|---|---|---|
| left margin | 70.87pt → 11.905cqw | 36pt → 6.048cqw | 35.25pt → 5.922cqw |
| measure | 456.04pt → 76.61cqw | 526.85pt → 88.5cqw | — |
| body | 10/14pt `#231f20` | 10/13pt `#414042` | 11/20pt `#f0f0e5` |
| h1 | 27pt → 4.536cqw | 35pt → 5.879cqw | 45pt → 7.56cqw |

## Panels are CSS, not pictures

Where the print draws a panel, chart or table, it is rebuilt in CSS so the
words inside it stay text and can be read out, searched and copied:

- page 24 and page 57 pies, page 33 donut — conic gradients with the shares set
  as type on the arcs
- page 36 financed emissions — a real table; the printed artwork was unreadable
  on a phone
- page 84 policy environment — and every policy name is the link the PDF gives
  it, to the same page on efgholding.com
- page 87 asset management, page 97 information security by numbers,
  page 96 prioritizing privacy, page 101 AI strategy
- page 105 stakeholder ecosystem, page 109 learning and development
- pages 128–129 carbon appendix — the two printed halves rejoined into two
  tables, with the donut drawn in CSS

## Departures from the print, all deliberate

1. **Page 33.** The print's own colour coding disagrees with itself: the donut
   gives the 68% arc the dark green its legend gives Scope 1 (7%). Reproduced as
   printed — every arc is labelled with its own percentage — and flagged here
   for EFG to settle.
2. **Page 105.** The fourth column of the diagram (Community Support) repeats
   the third column's three bullets. Reproduced as printed.
3. **Page 111.** The printed label reads "Cybersecurity Challengea". Set here as
   "Cybersecurity Challenge".
4. **Pages 128–129.** Two printed columns, "Emission Factor Source" and "EF",
   are empty on every row. They are kept, empty, because the shape of a
   disclosure is part of what is disclosed. `AppendixCarbon.jsx` is the one file
   to change if EFG want them filled or dropped.
5. Four typographic slips corrected: "myconfidence", "adminstrative",
   "Operational Sustainabilit", "InternationalAgencies".
6. **The cover** is the printed cover, measured off the sheet: the plaque and
   the PRI mark are images, every word is text at the printed size on the
   printed cap line. Two departures. The print's **EFG lockup is not drawn** —
   a printed sheet has no header, this page does, and the same lockup sits in
   it a few millimetres higher, so the cover leaves it to the header. And the
   **Download PDF** button, which the print does not have, is set in the 45pt of
   clear paper under REPORT 2025.
7. **The cover and the contents spread are two separate pages**, `/` and
   `/contents`. The spread takes the header's column and is sized so it fits one
   screen; the cover takes the same column and is taller than the window, which
   is what EFG asked for. Under 900px the spread stacks. The old
   `/abbreviations` address still resolves: it is redirected to
   `/contents#abbreviations` in `App.jsx`.
8. **The head and foot margins of a section page are half the print's** — the
   side margins are the print's, because they set the measure, but two pages'
   vertical margins were adding up to 250px of nothing in a document that, on a
   screen, is continuous.
9. **"Voltä" is set as "Volta"** — see the note under EFG's comments.

## EFG's microsite comments — September 2026

Twenty-three comments came back on a deck. What each one turned out to be, and
what was done:

| # | Comment | Done |
|---|---|---|
| 1 | Enlarge the cover visual | The cover now takes the header's column and is taller than the window; you scroll a little to the PRI mark. An A4 sheet cannot fill a 16:9 screen and also fit it. |
| 2 | Contents too small against the report | Both lists set larger, the spread aligned to the header at both ends; the illustration back to the printed 40.4% of the leaf |
| 3 | Pie: shares not on the circle, pie too big, bold Q | Pie cut from 42cqw to the printed 32.9; each share stands on its own slice at its measured angle and radius; the Q was a hole in the Book face — see the note below |
| 4 | No space between a picture and the copy | `.rp-figure` bottom margin is the print's 15.8pt (2.58cqw) |
| 5 | USD 3MM / 40% layout | The caption under a figure is the print's regular weight and keeps its own case. The 40 is the printed 104pt; the % is pulled into a notch cut out of the 0, as printed, and the label stands on the numeral's last baseline |
| 6 | Duplicated textile paragraph | The illustration's crop took in the paragraph above it — recut |
| 7 | Illustrations cropped | Six icons recut; a seventh, the hand on page 24, carries its printed caption masked out |
| 8 | USD 4MM should be pushed right | Each sector on pages 28–29 is now copy left, figures right, as the print sets it |
| 9 | EGP 25/100MM layout and boldness | Same component as 5; a stacked unit now shares the numeral's baseline; page 28's figures are its own 52.7pt; the Green Star badge and caption at the printed size and measure |
| 10 | The rules in the Vortex / EO panels | One rule per row, full width, none under the last; equal panel heights on the print's 41.28pt row pitch; the headings wholly in Bebas Neue; the bands square |
| 11, 16, 17 | Excessive white space | The head and foot margins of a section page are cut to 3.5cqw and 2.5cqw, so every seam between two pages is the print's 36pt block gap |
| 12 | Scope table not as designed, pixelated | Scope 1's three groups stand in one row as the print sets them, the panel's vertical rule is drawn full height (`.rp-findings::before`), and the fifteen icons are recut at 360px |
| 13 | 400,563 layout | The sentence and the figure share one line |
| 14 | Financed emissions table design | **Open — see below** |
| 15 | Paragraph separated by the tables | Moved to finish the column it continues |
| 18 | Valu logo cropped | Recut |
| 19 | White behind the Pharco and Almoosa logos | The ground is keyed out; `crop.py` grew an `unwhite` step for logos the file paints on a white rectangle |
| 20 | Minya University text cropped | The photograph's crop took in the card's heading — recut |
| 21 | Text font and alignment | The section face was wrong — see the note below |
| 22 | CAPACITY BUILDING to title case | Done, that heading only |
| 23 | Duplicated Tanmeyah paragraph | As 6: the photograph's crop took in the paragraph above it |

### How the second round was run

A senior product designer reviewed each comment against the PDF, a front-end
developer implemented the ten that were not yet right, and three QC testers
audited all 23 against measurements off the sheet. QC passed 19, left 14 open,
and returned 5, 9 and 10 as partial; those three were fixed and re-measured.
Bebas Neue (SIL Open Font Licence) was added for the three display headings the
print sets in it.

### Two things the comments uncovered

**The sections were set in the wrong face.** The report uses two: Book carries
the two letters at the front, Regular carries everything else — 62,000
characters against Book's 4,800, counted off the PDF. The site set both in
Book. That made every section a shade light, and it kept hitting a hole:
**ABC Normal Book has no capital Q**, so every "Q4 2025" fell back to Regular
for that one letter and stood out. `.rp-sec` now takes Regular and the letters
keep Book. Four more glyphs were falling back the same way and are now drawn
rather than typed: the bullet in INTEGRATED • SCALABLE, the superscript two in
mtco²e, the triangles in the dematerialisation diagram and the green-financing
rows. The audit script for this is worth keeping.

**"Voltä" is "Volta".** Page 26 shows a broken glyph that reads as ä; page 31 of
the same report writes Volta, and so does the company. Set as Volta.

### Open

**Printed page 36's financed-emissions table.** The print sets it as an
infographic — coloured sector tags, horizontal bars, a dashed rule before the
totals. It is rebuilt here as a plain table so the figures are real text and
searchable. EFG say the design is wrong; reproducing the artwork faithfully in
HTML is a redesign of that panel, not an adjustment, so it wants a decision
before the work starts.

**A full page-by-page audit was run afterwards** and found further differences
from the print that EFG have not raised — missing olive divider rules on about
a dozen pages, four photographs on pages 110, 111 and 125 cropped by a shared
aspect-ratio rule, the page 13 centre rule, several headings in the wrong case,
and three display headings the print sets in Bebas Neue, which is not loaded.
None of them is a defect the eye catches without the PDF beside it. They are
listed in the session notes and are the natural next pass.

## Before this goes public

**The ABC Normal web licence is unresolved and blocks deployment.** The four
`.woff2` subsets in `src/assets/fonts` were lifted from the printed PDF. Dinamo
licenses ABC Normal for desktop separately from web. Either EFG buy a web
licence (licensing@abcdinamo.com) or the face is swapped for an open fallback.
Until then the repository should not be public.

The 24 MB PDF in `public/` is the download offered on the cover and is most of
the build. Moving it to a CDN or object store would take `dist` from 35 MB to
about 12 MB.

## Checks that should stay green

    npm run dev
    node /root/verify/... # the audit toolkit, if it is kept

- every printed number appears on the site (checked route by route)
- no route pushes the page sideways at 390px
- no body text below 11px at 390px
- no broken image, no page error on any route
