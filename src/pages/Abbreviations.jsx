/**
 * ABBREVIATIONS — printed page 3, the right leaf of the green spread.
 *
 * A glossary is a description list, so that is what it is: `dl`, `dt`, `dd`.
 * Real text, so a reader can search the page for "TCFD", and a screen reader
 * reads the term and its expansion as one pair.
 *
 * The proportions are the printed page's — 45pt display, 11pt terms on a 20pt
 * leading, the term column 58pt wide — held as fractions of the sheet in
 * src/styles/report.css.
 */
import { Fragment } from 'react';

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

export default function Abbreviations() {
  return (
    <section className="rp-bleed rp-dark" aria-labelledby="abbreviations-heading">
      <div className="rp">
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
      </div>
    </section>
  );
}
