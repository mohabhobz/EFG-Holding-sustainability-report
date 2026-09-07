# EFG Holding Sustainability Report 2025 — the website

The printed report, printed pages 1 to 129, rebuilt as a website. Every word
that is type on the sheet is real HTML text here, with the print's own colour,
size, family and weight ported to CSS. Only photographs, illustrations, logos
and certification marks are images.

## What is here

| Route | Printed pages |
|---|---|
| `/` | cover and contents |
| `/abbreviations` | 3 |
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
6. **The cover** is a photographic hero rather than the printed plaque, and the
   lockup reads "2025 Sustainability Report". A decision on record, not a slip.

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
