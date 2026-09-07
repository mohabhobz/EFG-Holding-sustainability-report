/**
 * THE CONTENTS SPREAD — printed pages 2 and 3.
 *
 * Its own page, as the cover is its own page. The print sets Contents and
 * Abbreviations facing each other, so that is how they are here: two leaves
 * side by side on one green ground that bleeds to the window's edge, each leaf
 * sized from the window's height at the printed page's proportion, so the
 * spread is one screenful rather than a scroll. Under 900px they stack, which
 * is the only thing a phone can do with a spread.
 *
 * Both lists are real HTML. The contents is an `ol` of links with the folio
 * pushed to the far margin, driven by src/data/contents.js — the printed list
 * transcribed once, so the contents page, the header overlay and the prev/next
 * control can never disagree about what the report contains. The glossary is a
 * `dl`, so a reader can search the page for "TCFD" and a screen reader reads
 * each term with its expansion.
 *
 * The proportions of both leaves are in src/styles/report.css.
 */
import { Fragment } from 'react';

import { contents } from '../data/contents';
import illustration from '../assets/report/contents-illustration.webp';

/* Printed page 3, in printed order. */
const abbreviations = [
  ['AUMs', 'Assets Under Management'],
  ['BNPL', 'Buy Now Pay Later'],
  ['CSI', 'Corporate Sustainability and Impact'],
  ['EEP', 'Egypt Education Platform'],
  ['ESG', 'Environmental, Social and Governance'],
  ['FEMs', 'Frontier Emerging Markets'],
  ['GHG', 'Greenhouse Gas'],
  ['HR', 'Human Resources'],
  ['IA', 'Internal Audit'],
  ['ISD', 'Integrated Sustainable Development'],
  ['NBFI', 'Non-bank Financial Institution'],
  ['PWD', 'Persons with Disabilities'],
  ['SDGs', 'Sustainable Development Goals'],
  ['TCFD', 'Task Force on Climate-related Financial Disclosures'],
  ['TSFE', 'The Sovereign Fund of Egypt'],
  ['UNGC', 'United Nations Global Compact'],
  ['UN PRI', 'United Nations Principles for Responsible Investment'],
];

export default function Contents() {
  return (
    <section className="rp-bleed rp-dark" aria-label="Contents and abbreviations">
      <div className="rp-spread">
        {/* ---- printed page 2 ---- */}
        <article className="rp" aria-labelledby="contents-heading">
          <div className="rp-in rp-contents">
            <h1 className="rp-title" id="contents-heading">
              Content<br />Page
            </h1>

            <img className="rp-contents-art" src={illustration}
                 width="820" height="1692" alt="" />

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
        </article>

        {/* ---- printed page 3 ---- */}
        <article className="rp" id="abbreviations" aria-labelledby="abbreviations-heading">
          <div className="rp-in rp-abbr">
            <h1 className="rp-title" id="abbreviations-heading">Abbreviations</h1>

            <dl>
              {abbreviations.map(([term, meaning]) => (
                <Fragment key={term}>
                  <dt>{term}</dt>
                  <dd>{meaning}</dd>
                </Fragment>
              ))}
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
}
