/**
 * THE CONTENTS PAGE
 * -----------------
 * Transcribed from printed page 2 — every entry, in printed order, with the
 * folio the print gives it. This one array drives three things: the Contents
 * overlay in the header, the home page, and the prev/next control. Nothing
 * else in the build hard-codes a route.
 *
 * `nav: true` marks the five numbered sections — those, and only those, appear
 * as links in the header bar. Eleven labels will not fit on one row at the
 * design width; the overlay carries the rest.
 */
export const contents = [
  { eyebrow: '',          label: 'Contents',                      page: '2',   href: '/contents',                    nav: false },
  { eyebrow: '',          label: 'Abbreviations',                 page: '3',   href: '/contents#abbreviations',      nav: false },
  { eyebrow: '',          label: 'Chairperson’s Foreword',        page: '4',   href: '/chairpersons-foreword',       nav: false },
  { eyebrow: '',          label: 'A Note From Our CEO',           page: '6',   href: '/ceo-note',                    nav: false },
  { eyebrow: 'Section 1', label: 'Introduction',                  page: '8',   href: '/introduction',                nav: true  },
  { eyebrow: 'Section 2', label: 'Environmental Stewardship',     page: '18',  href: '/environmental-stewardship',   nav: true  },
  { eyebrow: 'Section 3', label: 'Social Investment',             page: '44',  href: '/social-investment',           nav: true  },
  { eyebrow: 'Section 4', label: 'Governance & Ethics',           page: '78',  href: '/governance-ethics',           nav: true  },
  { eyebrow: 'Section 5', label: 'Stakeholder Engagement',        page: '100', href: '/stakeholder-engagement',      nav: true  },
  { eyebrow: '',          label: 'From Clarity to Impact',        page: '125', href: '/from-clarity-to-impact',      nav: false },
  { eyebrow: '',          label: 'Appendix 1 - 2025 Carbon Emissions', page: '128', href: '/appendix-carbon',        nav: false },
];

/** What the header bar shows. */
export const primaryNav = contents.filter((c) => c.nav);

/** What the prev/next control steps through — the whole document, in order.
 *
 *  The cover is printed page 1 and a stop in its own right, but it is not an
 *  entry in the printed contents, so it is added here rather than above.
 *  Abbreviations is printed page 3, the right leaf of the spread the contents
 *  is on, so it is one screen with it rather than a stop of its own — an
 *  anchor, not a route, and it drops out here. */
export const readingOrder = [
  { eyebrow: '', label: 'Cover', page: '1', href: '/', nav: false },
  ...contents.filter((c) => !c.href.includes('#')),
];

export const report = {
  title: 'Sustainability Report 2025',
  theme: 'The Power of Clarity: Transparent Goals, Tangible Progress',
  org: 'EFG Holding',
  copyright: '© 2025 EFG Holding. All rights reserved',
};
