/**
 * MOBILE PAGE — the phone's reading of one printed page.
 *
 * WHY THE PHONE GETS ITS OWN READING. On a desktop a page draws 1,112px wide,
 * so the report's 10pt body text renders at 18.7px and reads the way it reads
 * on paper. On a 390px phone the same page draws 350px wide — a scale of 0.588
 * — and that body text renders at 5.9px. There is no arrangement of a whole A4
 * sheet that is legible on a phone; the sheet is wider than the screen at any
 * readable size. So below 900px the page is read rather than shown.
 *
 * WHAT IS AND IS NOT THE PRINT'S. Every word, every size, every weight and
 * every colour here comes out of the PDF, and the order is the order the page
 * is read in — see tools/build-mobile.py, which writes these files. Nothing is
 * rewritten, reordered or restyled. Two things necessarily differ: a line
 * breaks where 350px makes it break rather than where 495pt did, and the type
 * scale is multiplied by 1.6 so the body lands at 16px.
 *
 * ANYTHING THAT IS NOT PLAIN PROSE IS STILL THE PRINTED ARTWORK — a photograph,
 * a chart, a diagram, a table — drawn from the page's own SVG, windowed to that
 * rectangle, full width. A coloured panel with prose in it becomes a card in
 * the panel's own colour, so the page's structure survives the reading.
 *
 * The desktop is untouched: it still draws the pages themselves.
 */
import { useEffect, useRef, useState } from 'react';

const BASE = import.meta.env.BASE_URL;
const ART = `${BASE}pageart/`;

/* The reading and the drawing are fetched once each per page and kept for the
 * session — going back to a section should not re-download it. */
const docs = new Map();
const svgs = new Map();

async function loadDoc(n) {
  if (docs.has(n)) return docs.get(n);
  const res = await fetch(`${BASE}mobile/m${String(n).padStart(3, '0')}.json`);
  if (!res.ok) throw new Error(res.status);
  const j = await res.json();
  docs.set(n, j);
  return j;
}

async function loadSvg(n) {
  if (svgs.has(n)) return svgs.get(n);
  const res = await fetch(`${BASE}pages/p${String(n).padStart(3, '0')}.svg`);
  if (!res.ok) throw new Error(res.status);
  const s = (await res.text()).replaceAll('ART/', ART);
  svgs.set(n, s);
  return s;
}

/* The file is the whole page with its viewBox opened on one window of it; any
 * other window is the same file seen through a different rectangle. Ids are
 * namespaced by page, so a second copy of the same page in one document needs
 * its own namespace or the first copy's clip paths would answer for both. */
function windowOf(svg, n, box, key) {
  const tag = `p${String(n).padStart(3, '0')}`;
  const [x, y, w, h] = box;
  /* The width and height attributes go: an intrinsic size on the drawing makes
   * the grid column size to it, and a 456pt crop would then push the whole
   * column past the phone. The viewBox and the stylesheet size it. */
  let out = svg.replace(/<svg[^>]*>/, (m) =>
    m.replace(/\swidth="[^"]*"/, '')
     .replace(/\sheight="[^"]*"/, '')
     .replace(/viewBox="[^"]*"/, `viewBox="${x} ${y} ${w} ${h}"`));
  if (key) out = out.replaceAll(`${tag}_`, `${tag}${key}_`);
  return out;
}

function Art({ number, box, index }) {
  const [html, setHtml] = useState(null);
  useEffect(() => {
    let alive = true;
    loadSvg(number)
      .then((s) => { if (alive) setHtml(windowOf(s, number, box, `m${index}`)); })
      .catch(() => {});
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number, index, box.join(',')]);

  return html
    ? <div className="mb-art" dangerouslySetInnerHTML={{ __html: html }} />
    : <div className="mb-art mb-hold" style={{ aspectRatio: `${box[2]} / ${box[3]}` }} />;
}

function Para({ p }) {
  return (
    <p className={p.bullet ? 'mb-p mb-bullet' : 'mb-p'}
       style={{ fontSize: `${p.size}px`, color: p.color }}>
      {p.runs.map((r, i) => {
        /* A run carries its own colour only where the print changes colour
           inside a line — half a heading green, half olive. */
        const style = r.c ? { color: r.c } : undefined;
        return r.b
          ? <strong key={i} style={style}>{r.t}</strong>
          : <span key={i} style={style}>{r.t}</span>;
      })}
    </p>
  );
}

function Item({ it, number, index }) {
  if (it.t === 'text') return <>{it.p.map((p, i) => <Para key={i} p={p} />)}</>;
  if (it.t === 'card') {
    return (
      <div className="mb-card" style={{ background: it.bg || undefined }}>
        {it.items.map((sub, i) => <Item key={i} it={sub} number={number} index={`${index}c${i}`} />)}
      </div>
    );
  }
  return <Art number={number} box={it.box} index={index} />;
}

export default function MobilePage({ number, eager }) {
  const ref = useRef(null);
  const [doc, setDoc] = useState(() => docs.get(number) || null);

  useEffect(() => {
    if (doc) return undefined;
    let alive = true;
    const load = () => loadDoc(number).then((j) => { if (alive) setDoc(j); }).catch(() => {});
    if (eager) { load(); return () => { alive = false; }; }
    const io = new IntersectionObserver(
      (es) => { if (es.some((e) => e.isIntersecting)) { io.disconnect(); load(); } },
      { rootMargin: '1200px 0px' },
    );
    io.observe(ref.current);
    return () => { alive = false; io.disconnect(); };
  }, [number, eager, doc]);

  return (
    <div className="mb" ref={ref} data-page={number}>
      {doc
        ? doc.items.map((it, i) => <Item key={i} it={it} number={number} index={i} />)
        : <div className="mb-hold mb-page-hold" />}
    </div>
  );
}
