/**
 * SECTION OPENER — the printed divider spread, as one band of the page.
 *
 * The print gives each of the five sections two facing leaves: a cream one
 * carrying a paper-cut emblem, and a deep-green one carrying the section
 * number spelled out, the title, and the numeral set enormous and running off
 * the left edge. Both leaves are kept, side by side, each holding the printed
 * page's proportion; below 900px they stack and the title comes first.
 *
 * The words are real text. In the PDF they are outlines — the type was
 * converted to paths before the file was made — so the sizes here were
 * measured off those outlines and divided by ABC Normal's cap height (0.679em)
 * to get back to the setting. See src/styles/report.css.
 *
 * `paper` is the colour of the leaf the emblem is cut from. The print uses
 * #FAF7F5 for sections one to three and white for four and five, and the
 * emblem carries that ground in its own pixels, so the leaf must match or a
 * square shows behind the cut.
 */
export default function SectionOpener({ eyebrow, title, numeral, emblem, emblemAlt, paper }) {
  return (
    <section className="so" aria-labelledby="section-heading">
      <div className="so-art" style={paper ? { '--so-paper': paper } : undefined}>
        {emblem && <img src={emblem} alt={emblemAlt || ''} />}
      </div>

      <div className="so-title">
        <div className="so-title-in">
          <p className="so-eyebrow">{eyebrow}</p>
          <h1 id="section-heading">{title}</h1>
        </div>
        <span className="so-num" aria-hidden="true">{numeral}</span>
      </div>
    </section>
  );
}
