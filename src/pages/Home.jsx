/**
 * THE FRONT DOOR — the cover, then printed page 2, the contents.
 *
 * The printed cover (page 0) is not in the stack: the route opens on the
 * annual report's cover treatment instead, carrying this report's own title,
 * theme line, year and signatory mark. See src/components/ReportCover.jsx.
 * There is no printed page 1 — the file's cover is a single A4 page and the
 * inside front cover is not in it.
 *
 * The contents is real HTML: an `ol` of links with the folio pushed to the far
 * margin. It is driven by src/data/contents.js, which is the printed list
 * transcribed once — so the contents page, the header overlay and the
 * prev/next control can never disagree about what the report contains.
 *
 * The proportions are printed page 2's; they live in src/styles/report.css.
 */
import ReportCover from '../components/ReportCover';
import { contents } from '../data/contents';
import illustration from '../assets/report/contents-illustration.webp';

export default function Home() {
  return (
    <>
      <ReportCover />

      <section className="rp-bleed rp-dark" aria-labelledby="contents-heading">
        <div className="rp">
          <div className="rp-in rp-contents">
            <h1 className="rp-title" id="contents-heading">
              Content<br />Page
            </h1>

            <img
              className="rp-contents-art"
              src={illustration}
              width="820"
              height="1692"
              alt=""
            />

            <ol className="rp-toc">
              {contents.map((entry) => (
                <li key={entry.href}>
                  <a href={entry.href}>
                    <span className="rp-toc-label">
                      {entry.eyebrow && (
                        <span className="rp-toc-eyebrow">{entry.eyebrow}:</span>
                      )}
                      {entry.label}
                    </span>
                    <span className="rp-toc-folio">{entry.page}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
