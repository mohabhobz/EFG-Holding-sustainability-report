/**
 * THE PRINTED COVER — sheet 0 of the PDF, rebuilt.
 *
 * The file's cover is a single flat image: its type is baked into the picture,
 * so none of it survives as text. Here the three pictures on it — the EFG
 * Holding lockup, the green plaque, the PRI signatory mark — are images, and
 * every word is real text at the print's own size, colour and position.
 *
 * Every measurement is taken off sheet 0 at 300dpi and written in cqw,
 * hundredths of the page's width, against a box holding the printed A4
 * proportion. So this is the printed cover at any window size. The type sizes
 * are recovered the way the section dividers' are: the cap height measured off
 * the artwork, divided by ABC Normal's 0.679em.
 *
 *   lockup        x 28.5  y 24.5   221 x 36pt
 *   THE POWER     cap 38.4pt → 56.6pt setting, centred, baseline band y 134.6
 *   OF CLARITY    cap 38.6pt → 56.8pt, bold
 *   strapline     cap 12.2pt → 18pt
 *   plaque        x 131.5 y 294.5  331.5 x 321pt, centred
 *   SUSTAINABILITY / REPORT 2025   cap 16.3pt → 24pt
 *   Signatory of: cap 8.4pt → 12.4pt, black
 *   PRI mark      x 459.3 y 792.2  111 x 22pt
 *
 * All of the green is #124734.
 *
 * THE ONE THING THE PRINT DOES NOT HAVE is the download button. A reader of a
 * web page expects to be able to take the report away with them, and the print
 * has 45pt of clear paper under REPORT 2025 to put it in.
 */
import { reportPdf } from '../data/report';

import lockup from '../assets/report/cover/efg-lockup.webp';
import plaque from '../assets/report/cover/plaque.webp';
import pri from '../assets/report/cover/pri-signatory.webp';

export default function ReportCover() {
  return (
    <section className="cv" aria-labelledby="cover-title">
      <div className="cv-in">
        <img className="cv-lockup" src={lockup} width="900" height="146" alt="EFG Holding" />

        {/* Each line is placed on its own printed cap position rather than
            stacked with a leading, because the print's two title lines are set
            53.8pt apart at a 56.7pt size — tighter than any leading a stack
            would give them. */}
        <h1 id="cover-title" className="cv-title">
          <span className="cv-t1">The Power</span>
          <span className="cv-t2">Of Clarity</span>
        </h1>
        <p className="cv-theme">Transparent goals, tangible progress</p>

        <img className="cv-plaque" src={plaque} width="900" height="872"
             alt="" aria-hidden="true" />

        <p className="cv-year">
          <span className="cv-y1">Sustainability</span>
          <span className="cv-y2">Report 2025</span>
        </p>

        <a className="cv-btn" href={reportPdf} target="_blank" rel="noopener noreferrer"
           aria-label="Download the 2025 Sustainability Report (PDF, opens in a new tab)">
          Download PDF
        </a>

        <p className="cv-sig">Signatory of:</p>
        <img className="cv-pri" src={pri} width="700" height="139"
             alt="Principles for Responsible Investment" />
      </div>
    </section>
  );
}
