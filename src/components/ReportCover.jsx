/**
 * REPORT COVER — the annual report's cover page, with this report's content.
 *
 * This is `src/pages/Cover.jsx` from
 * `EFG Holding AR 2026/Web portal/efg-annual-report` (Figma frame 404:2631),
 * rewritten from Tailwind to plain CSS. Its geometry is kept to the number:
 *
 *   artwork   full bleed, 100svh, min 520px
 *   title     left 8.194%, width 35.556%, hero size, tracking +0.0274em
 *   row       left 8.403%, top 57.252%, 24px gap — the year, the label, the button
 *     year    clamp(30px, 3.611vw, 52px), tracking -0.0385em
 *     label   clamp(15px, 1.667vw, 24px), two lines, 8px from the year
 *     button  201 x 50, radius 45, #8f8e00, 16px/500, tracking 0.9px
 *
 * WHAT IS THIS REPORT'S RATHER THAN THE AR'S:
 *
 * - The title keeps the printed cover's two weights — THE POWER in Book, OF
 *   CLARITY in Bold — because that lockup is the report's identity and the
 *   print sets it that way. The AR's title is one weight because its is.
 * - The theme line under it is on the printed cover and is kept. It is the one
 *   thing the AR cover has no slot for, so the title block is lifted from the
 *   AR's 36.259% to 33.71% to clear the row beneath — which is the AR's own
 *   move: its Financial Statements hero lifts its two-line title from y=315 to
 *   y=290 for exactly this reason.
 * - The PRI signatory mark is on the printed cover and is kept, bottom right.
 *   It is black and blue on white, so it sits on a white chip rather than
 *   straight on the artwork, where it would be unreadable.
 *
 * NO SCRIM, deliberately — the AR's rule. Its cover artwork carries its own
 * falloff and a CSS scrim on top would double it. Supply artwork with the
 * gradient in it.
 */
import { reportPdf, cover } from '../data/report';

const files = import.meta.glob('../assets/heroes/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});
const art = Object.fromEntries(
  Object.entries(files).map(([p, url]) => [p.split('/').pop().replace(/\.[^.]+$/, ''), url]),
);
import pri from '../assets/covers/pri-signatory.webp';

function Meta() {
  return (
    <>
      <div className="cv-year">
        <span className="y">{cover.year}</span>
        <span className="l">{cover.label}</span>
      </div>
      <a className="cv-btn" href={reportPdf} target="_blank" rel="noopener noreferrer"
         aria-label="Download the 2025 Sustainability Report (PDF, opens in a new tab)">
        Download PDF
      </a>
    </>
  );
}

export default function ReportCover() {
  const image = art.cover;

  return (
    <section className="hero cv" aria-label={`${cover.line1} ${cover.line2}`}>
      {image
        ? <img className="hero-art" src={image} alt="" aria-hidden="true" />
        : <div className="hero-art hero-ph" aria-hidden="true">
            <span>cover image pending · src/assets/heroes/cover.webp</span>
          </div>}

      {/* below 1024px */}
      <div className="hero-flow">
        <h1><span className="t1">{cover.line1}</span><span className="t2">{cover.line2}</span></h1>
        <p className="cv-theme">{cover.theme}</p>
        <div className="cv-row"><Meta /></div>
      </div>

      {/* 1024px and up — the design's own coordinates */}
      <div className="hero-abs">
        <div className="cv-title">
          <h1><span className="t1">{cover.line1}</span><span className="t2">{cover.line2}</span></h1>
          <p className="cv-theme">{cover.theme}</p>
        </div>
        <div className="cv-row"><Meta /></div>
      </div>

      <img className="cv-pri" data-floating-bottom="" src={pri} alt="Signatory of the Principles for Responsible Investment" />
    </section>
  );
}
