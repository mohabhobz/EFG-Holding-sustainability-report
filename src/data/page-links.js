/**
 * CLICKABLE ENTRIES ON A PRINTED PAGE
 * -----------------------------------
 * A printed page is an SVG of the page: its text is real text, but a line that
 * says "A Note From Our CEO ... 6" is a line, not a link. On paper that is
 * fine, because the number beside it is the instruction. On a screen a reader
 * clicks the contents — so the contents page gets its entries back as links.
 *
 * Boxes are in the page's own points (595.275 x 841.89) read straight off the
 * PDF, spanning the label through the folio so the whole row is the target. A
 * row that carries a "Section N:" line above the title includes it.
 */
export const pageLinks = {
  2: [
    { href: '/',                          y0: 263, y1: 284 },
    { href: '/abbreviations',             y0: 284, y1: 305 },
    { href: '/chairpersons-foreword',     y0: 305, y1: 325 },
    { href: '/ceo-note',                  y0: 325, y1: 346 },
    { href: '/introduction',              y0: 346, y1: 380 },
    { href: '/environmental-stewardship', y0: 381, y1: 415 },
    { href: '/social-investment',         y0: 416, y1: 449 },
    { href: '/governance-ethics',         y0: 450, y1: 484 },
    { href: '/stakeholder-engagement',    y0: 485, y1: 519 },
    { href: '/from-clarity-to-impact',    y0: 519, y1: 540 },
    { href: '/appendix-carbon',           y0: 540, y1: 561 },
  ].map((r) => ({ ...r, x0: 290, x1: 546 })),
};

/* The points above are the PDF's own, measured from the top-left of the page
   in points. The box they are resolved against is the page's own, from
   src/data/page-size.js — pages that end early are trimmed at the foot, so the
   height is not A4 for all of them. Spread.jsx does the division. */
