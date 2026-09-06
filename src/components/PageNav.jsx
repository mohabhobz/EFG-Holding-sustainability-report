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
 * IT STEPS OVER WHATEVER CLAIMS THE BOTTOM OF THE SCREEN. The AR lifts it above
 * its footer; this build has no footer, but the report cover carries the PRI
 * signatory mark bottom-right and the arrows would land on top of it. Anything
 * marked `[data-floating-bottom]` — or a `footer`, if one is ever added — is
 * cleared by the same mechanism, and once it scrolls away the lift returns to
 * zero on its own.
 *
 * WHY THE POSITION IS NOT REACT STATE. The AR's note applies here unchanged: a
 * ResizeObserver callback runs after layout but before paint, so writing the
 * offset straight to the node lands in the same frame as the change that caused
 * it — the arrows are simply in the right place, with no intermediate frame to
 * animate away from. Scrolling goes through rAF, which is the one case that
 * reads layout often enough to want the throttle. Nothing here re-renders.
 *
 * FIRST AND LAST. The contents page has nothing before it and the appendix
 * nothing after, so those arrows are disabled.
 */
import { useLayoutEffect, useRef } from 'react';
import { readingOrder } from '../data/contents';

/* The design's own arrows, inlined. @node 503:2266 (back), 503:2270 (next) */
const BACK =
  'M16.08 7.08v1.92H3.84l5.58 5.64-1.38 1.44L0 8.04 8.04 0l1.38 1.44-5.58 5.64H16.08Z';
const NEXT =
  'M8.04 0l8.04 8.04-8.04 8.04-1.38-1.44 5.58-5.64H0V7.08h12.24L6.66 1.44 8.04 0Z';

/** 40px in from the right and up from the bottom, as the design insets it. */
const INSET = 40;

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
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const el = navRef.current;
    if (!el) return undefined;

    let frame = 0;
    const place = () => {
      frame = 0;
      let lift = 0;
      for (const node of document.querySelectorAll('footer, [data-floating-bottom]')) {
        const r = node.getBoundingClientRect();
        /* One correction to the AR's formula. Its only claimant is the footer,
           which is the last thing on the page and so never leaves the bottom of
           the screen — `innerHeight - top` is always the right lift for it. The
           PRI mark does leave: it is inside the cover, and once the reader
           scrolls past it its `top` goes negative and that same expression grows
           without bound, which parked the arrows in the middle of the screen.
           So a claimant is only honoured while it is still in the lower half of
           the viewport, which is the only place it can be in the way of a
           control pinned to the bottom right. */
        if (r.bottom < window.innerHeight / 2) continue;
        lift = Math.max(lift, window.innerHeight - r.top);
      }
      el.style.bottom = `${INSET + Math.max(0, lift)}px`;
    };
    const throttled = () => {
      if (!frame) frame = window.requestAnimationFrame(place);
    };

    place();
    window.addEventListener('scroll', throttled, { passive: true });
    window.addEventListener('resize', place);
    /* Synchronous, not throttled: this is the pre-paint hook. */
    const observer = new ResizeObserver(place);
    observer.observe(document.body);
    /* A fixed element appearing or vanishing changes no layout the observer
       measures, so watch the tree as well. */
    const mutations = new MutationObserver(throttled);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', throttled);
      window.removeEventListener('resize', place);
      observer.disconnect();
      mutations.disconnect();
    };
  }, [path]);

  const i = ORDER.indexOf(path);
  if (i === -1) return null;

  const prev = i > 0 ? readingOrder[i - 1] : null;
  const next = i < readingOrder.length - 1 ? readingOrder[i + 1] : null;

  return (
    <nav ref={navRef} className="pn no-print" aria-label="Report sections"
         style={{ bottom: `${INSET}px`, right: `${INSET}px` }}>
      <Arrow side="back" target={prev?.href} label={prev?.label} />
      <Arrow side="next" target={next?.href} label={next?.label} />
    </nav>
  );
}
