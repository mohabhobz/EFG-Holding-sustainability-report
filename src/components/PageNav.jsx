/**
 * PAGE NAV — the annual report's arrows, brought across unchanged.
 *
 * This is `src/components/layout/PageNav.jsx` from
 * `EFG Holding AR 2026/Web portal/efg-annual-report` (Figma node Frame 1403,
 * drawn identically on all 44 frames), rewritten from Tailwind to plain CSS.
 * Its measurements are kept to the number:
 *
 *   wrapper   fixed, 40px in from the right and up from the bottom, 8px gap
 *   button    40 × 40, white, 8px padding
 *             back  2px radius on its LEFT corners only
 *             next  2px radius on its RIGHT corners only
 *   arrow     the design's own 16.08px glyph in a 24px box, rgba(0,69,23,.69)
 *   disabled  the whole button at 50%, rendered as a <span> so it is
 *             unreachable by keyboard as well as unclickable
 *
 * IT FLOATS RATHER THAN SITTING ON THE PAGE, for the AR's reason: a reader
 * thirty pages into Social Investment is exactly who needs "next", so the
 * control is fixed to the viewport and stays with them. The Contents overlay is
 * z-50 and covers it.
 *
 * IT DOES NOT MOVE. It used to lift itself over whatever claimed the bottom of
 * the screen — the cover's PRI signatory mark is the only claimant in this
 * build — and drop back once that scrolled away. That made the one control a
 * reader navigates by sit in a different place on the cover than on every other
 * page, and slide as they scrolled. It now sits at one offset, set in
 * pagenav.css, high enough to clear the PRI mark at every window size, on every
 * page and at every scroll position. No listener, no measurement, no movement.
 *
 * FIRST AND LAST. The contents page has nothing before it and the appendix
 * nothing after, so those arrows are disabled.
 */
import { readingOrder } from '../data/contents';

/* The design's own arrows, inlined. @node 503:2266 (back), 503:2270 (next) */
const BACK =
  'M16.08 7.08v1.92H3.84l5.58 5.64-1.38 1.44L0 8.04 8.04 0l1.38 1.44-5.58 5.64H16.08Z';
const NEXT =
  'M8.04 0l8.04 8.04-8.04 8.04-1.38-1.44 5.58-5.64H0V7.08h12.24L6.66 1.44 8.04 0Z';



const ORDER = readingOrder.map((n) => n.href);

function Arrow({ target, label, side }) {
  const glyph = (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d={side === 'back' ? BACK : NEXT} transform="translate(3.96 3.96)" />
    </svg>
  );
  const cls = `pn-btn pn-${side}`;

  if (!target) {
    return <span aria-hidden="true" className={`${cls} is-off`}>{glyph}</span>;
  }
  return (
    <a
      href={target}
      className={cls}
      aria-label={`${side === 'back' ? 'Previous' : 'Next'} section — ${label}`}
    >
      {glyph}
    </a>
  );
}

export default function PageNav({ path }) {
  const i = ORDER.indexOf(path);
  if (i === -1) return null;

  const prev = i > 0 ? readingOrder[i - 1] : null;
  const next = i < readingOrder.length - 1 ? readingOrder[i + 1] : null;

  /* The offset lives in pagenav.css — there is nothing to measure here. */
  return (
    <nav className="pn no-print" aria-label="Report sections">
      <Arrow side="back" target={prev?.href} label={prev?.label} />
      <Arrow side="next" target={next?.href} label={next?.label} />
    </nav>
  );
}
