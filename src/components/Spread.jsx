/**
 * SPREAD — a run of printed pages, exactly as printed.
 *
 * There is no web layout here on purpose. Each page arrives as the PDF's own
 * SVG: the same text, in the report's own typeface, at the same coordinates;
 * the same vector rules, panels and charts; the same photographs. Nothing is
 * re-flowed, re-coloured or re-composed.
 *
 * WHY THE PAGES ARE FETCHED RATHER THAN IMPORTED. Inlining them into the route
 * bundle put 2.4 MB in the Environmental Stewardship chunk — twenty-eight pages
 * a reader has to download before seeing the first one. As files in /pages they
 * arrive one at a time, only when scrolled near, and the browser caches each
 * one; the route chunk is a list of numbers.
 *
 * WHY THE SVG IS INLINED RATHER THAN PUT IN AN <img>. An <img> gets its own
 * document: the report's @font-face would not reach it, so every line would set
 * in a system sans and the layout's line breaks would go with it, and the text
 * could not be selected, searched or read by a screen reader.
 *
 * The generator leaves the token ART/ in front of every photograph so the file
 * does not carry 700 KB of base64; it is swapped for the real path here.
 */
import { useEffect, useRef, useState } from 'react';
import SectionCover from './SectionCover';
import { pageLinks } from '../data/page-links';
import { pageSize } from '../data/page-size';

/* Full A4 in one window, for a page the generator has not measured. */
const A4 = [595.275, [[0, 841.89]]];

const BASE = import.meta.env.BASE_URL;
const ART = `${BASE}pageart/`;

/* Once fetched, a page stays in memory for the session — going back to a
 * section should not re-download it. */
const cache = new Map();

/* ONE WINDOW OF ONE PAGE. Most printed pages are a single window; the seven
 * that carry a hole — a section opener whose illustration is anchored to the
 * foot, leaving a hand's width of nothing under the paragraph — are drawn as
 * two, `pNNN.svg` and `pNNN_2.svg`, stacked. See the note in
 * tools/build-pages.py. */
function Window({ number, index, eager, ratio }) {
  const ref = useRef(null);
  const key = `${number}:${index}`;
  const [html, setHtml] = useState(() => cache.get(key) || null);

  useEffect(() => {
    if (html) return undefined;
    let alive = true;

    const load = async () => {
      try {
        const stem = `p${String(number).padStart(3, '0')}${index ? `_${index + 1}` : ''}`;
        const res = await fetch(`${BASE}pages/${stem}.svg`);
        if (!res.ok) throw new Error(res.status);
        const svg = (await res.text()).replaceAll('ART/', ART);
        cache.set(key, svg);
        if (alive) setHtml(svg);
      } catch {
        /* A window that will not load leaves its placeholder rather than
         * collapsing the stack — the reader sees a gap where a page is, which
         * is the truth, and the rest of the section still reads. */
      }
    };

    if (eager) { load(); return () => { alive = false; }; }

    const io = new IntersectionObserver(
      (entries) => { if (entries.some((e) => e.isIntersecting)) { io.disconnect(); load(); } },
      { rootMargin: '1400px 0px' },
    );
    io.observe(ref.current);
    return () => { alive = false; io.disconnect(); };
  }, [key, number, index, eager, html]);

  return (
    <div
      className="pg-win"
      ref={ref}
      style={{ '--win-ratio': ratio }}
      dangerouslySetInnerHTML={html ? { __html: html } : undefined}
    />
  );
}

function Page({ number, eager }) {
  /* A page is no longer an A4 sheet: the generator reduces it to the windows
   * that carry ink. The box reserves the right space before they arrive, and it
   * resolves the click targets — whose coordinates are still the PDF's own, so
   * they are shifted by the first window's origin. */
  const [pw, boxes] = pageSize[number] || A4;
  const ph = boxes.reduce((t, b) => t + b[1], 0);

  /* A few printed pages carry entries a reader will try to click — the
   * contents, above all. See src/data/page-links.js. */
  const links = pageLinks[number];
  const origin = boxes[0][0];

  return (
    <div className="pg" data-page={number}>
      {boxes.map((b, i) => (
        <Window key={i} number={number} index={i} eager={eager && i === 0}
                ratio={`${pw} / ${b[1]}`} />
      ))}
      {links && (
        <div className="pg-links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                left: `${(l.x0 / pw) * 100}%`,
                top: `${((l.y0 - origin) / ph) * 100}%`,
                width: `${((l.x1 - l.x0) / pw) * 100}%`,
                height: `${((l.y1 - l.y0) / ph) * 100}%`,
              }}
            >
              <span className="sr-only">{l.href}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* `cover` is a section slug. The print opens each numbered section on a
 * two-page divider spread; those two pages are out of `pages`, and this stands
 * in their place — see src/components/SectionCover.jsx. */
export default function Spread({ pages, title, cover }) {
  return (
    <article className="sheets" aria-label={title}>
      {cover && <SectionCover slug={cover} />}
      {pages.map((n, i) => <Page key={n} number={n} eager={i < (cover ? 1 : 2)} />)}
    </article>
  );
}
