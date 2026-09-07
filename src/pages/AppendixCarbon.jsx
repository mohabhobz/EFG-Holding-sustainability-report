/**
 * APPENDIX 1 — 2025 CARBON EMISSIONS, printed pages 128 and 129.
 *
 * The printed appendix is one spreadsheet split across a spread: the row
 * labels are on 128 and the figures on 129. Here the halves are rejoined into
 * two real tables — one per scope — so a screen reader, a search and a
 * copy-paste all get the numbers, and a narrow screen can scroll the table
 * inside its own box rather than the page.
 *
 * Two printed columns, "Emission Factor Source" and "EF", are empty on every
 * row of the printed sheet. They are kept here, empty, rather than dropped,
 * because the appendix is a disclosure and the shape of it is part of what is
 * being disclosed. If EFG want them filled or removed, this is the one file to
 * change.
 *
 * The donut on 129 is drawn with a conic gradient and every figure in and
 * around it is real text.
 */

const SCOPE1 = [
  ['1.1 - Stationary Combustion', 'Fuel burning - Diesel Generators', '11,700.00', 'Liters', 'mtCO2e/ Liter', '31.14'],
  ['1.2 - Mobile Combustion', 'Fuel burning - Owned vehicles (Diesel)', '1,723.00', 'Liters', 'mtCO2e/ Liter', '4.59'],
  ['', 'Fuel burning - Owned vehicles (Petrol)', '126,034.37', 'Liters', 'mtCO2e/ Liter', '294.90'],
  ['1.3 - Fugitive Emissions', 'Refrigerant leakage (R22)', '22.28', 'kg', 'mtCO2e/ kg', '39.21'],
];

const SCOPE2 = [
  ['2.1 - Purchased Electricity', 'Purchased Electricity - Location Based', '3,512,271.02', 'kWh', 'mtCO2e/kWh', '1,425.38'],
  ['', 'Purchased Electricity - RECs', '0.00', 'kWh', '-', '-'],
  ['', 'Purchased Electricity - Market Based', '3,512,271.02', 'kWh', 'mtCO2e/kWh', '1,425.38'],
  ['2.2 - Purchased Cooling', 'Purchased Chilled Water', '3,618,780.00', 'kWh', 'mtCO2e/ kWh', '1,468.61'],
];

const ABSOLUTE = [
  ['Total Scope 1', '369.84', 'mtCO', 'e'],
  ['Total Scope 2 - Location Based', '2,893.99', 'mtCO', 'e'],
  ['Total Scope 2 - Market Based', '2,893.99', 'mtCO', 'e'],
  ['Total Scope 1 & 2 Emissions (LB)', '3,263.83', 'mtCO', 'e'],
  ['Total Scope 1 & 2 Emissions (MB)', '3,263.83', 'mtCO', 'e'],
];

const INTENSITY = [
  [<>Scope 1 &amp; 2 Emissions Per Employee</>, <>3.91 mtCO<sub>2</sub>e/Employee</>],
  [<>Scope 1 &amp; 2 Emissions Per GFA</>, <>0.17 mtCO<sub>2</sub>e/m²</>],
  [<>Scope<sup>*</sup> 1 &amp; 2 Emissions Per Revenue</>, <>409.85 kgCO<sub>2</sub>e/million EGP</>],
];

const UNCERTAINTY = [
  ['Scope 1 - Combined', '8.3%'],
  ['Scope 2 (LB) - Combined', '11.2%'],
  ['Total Inventory Uncertainty', '10.0%'],
  ['Aggregated Certainty Ranking', 'Good'],
];

const REVIEW = [
  'General Data',
  'Scope 1 - Activity Data Entry',
  'Scope 1 - Emission Factors',
  'Scope 2 - Activity Data Entry',
  'Scope 2 - Emission Factors',
  'Uncertainty Assessment',
];

const NOTES_LEFT = [
  'EFG Holding',
  'Hermes Securities Brokerage (HSB) icluding Branches (New Cairo - Doky - Nasr City - Maadi - Haram - Mansoura- Alex -Sohag )',
  'EHISB (EFG Hermes International Securities Brokerage)',
  'Hermes Portfolio and Fund Management',
];
const NOTES_RIGHT = [
  'EFG Hermes Promoting and Underwriting',
  'EFG Corp-Solutions',
  'EFG Finance Holding',
  'Services',
  'Entities ( doesn’t follow decree 36)',
];

const CO2 = <>mtCO<sub>2</sub>e</>;

function ScopeTable({ caption, rows, totals }) {
  return (
    <div className="rp-tablewrap">
      <table className="rp-emissions">
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col" className="rp-num">Activity Data</th>
            <th scope="col">Units</th>
            <th scope="col">Emission Factor Source</th>
            <th scope="col">EF</th>
            <th scope="col">EF Unit</th>
            <th scope="col" className="rp-num">{CO2}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([cat, desc, data, unit, efUnit, value], i) => (
            <tr key={i}>
              <th scope="row">{cat}</th>
              <td>{desc}</td>
              <td className="rp-num">{data}</td>
              <td>{unit}</td>
              <td />
              <td />
              <td>{efUnit}</td>
              <td className="rp-num">{value}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          {totals.map(([label, value], i) => (
            <tr key={i}>
              <th scope="row" colSpan={7}>{label}</th>
              <td className="rp-num">{value}</td>
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}

export default function AppendixCarbon() {
  /* 369.84 of 3,263.83 — the slice the printed donut gives Scope 1. */
  const scope1Share = (369.84 / 3263.83) * 100;

  return (
    <article className="rp rp-sec">
      <div className="rp-in">
        <h1 className="rp-appendix-title">Appendix 1 - 2025 Carbon Emissions</h1>
        <h2 className="rp-standfirst rp-standfirst--olive">Emissions Calculations</h2>

        <ScopeTable
          caption={<>Scope 1 - Direct Emissions</>}
          rows={SCOPE1}
          totals={[[<>Total Scope 1 Emissions ({CO2})</>, '369.84']]}
        />

        <ScopeTable
          caption={<>Scope 2 - Indirect Emissions</>}
          rows={SCOPE2}
          totals={[
            [<>Total Scope 2 Emissions - Location Based ({CO2})</>, '2,893.99'],
            [<>Total Scope 2 Emissions - Market Based ({CO2})</>, '2,893.99'],
          ]}
        />

        <div className="rp-tablewrap">
          <table className="rp-summary rp-summary--olive">
            <caption>Results Summary - Absolute Emissions</caption>
            <tbody>
              {ABSOLUTE.map(([label, value]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{value} mtCO<sub>2</sub>e</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rp-tablewrap">
          <table className="rp-summary rp-summary--olive">
            <caption>Results Summary - Emissions Intensity</caption>
            <tbody>
              {INTENSITY.map(([label, value], i) => (
                <tr key={i}><th scope="row">{label}</th><td>{value}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rp-emissions-foot">
          <figure className="rp-donut">
            {/* No role="img" here: the ring is decoration drawn by CSS and the
                figures standing in its middle are real text, which a role would
                turn into a presentational node. */}
            <div className="rp-donut-ring" style={{ '--s1': `${scope1Share}%` }}>
              <div>
                <b>Total Emissions</b>
                <span>(mtCO<sub>2</sub>e)</span>
                <strong>3,263.83</strong>
              </div>
            </div>
            <figcaption>
              <span className="rp-donut-key rp-donut-key--green">Total Scope 1</span>
              <span className="rp-donut-key rp-donut-key--olive">Total Scope 2 - Location Based</span>
            </figcaption>
          </figure>

          <div className="rp-emissions-side">
            <div className="rp-tablewrap">
              <table className="rp-summary rp-summary--olive">
                <caption>
                  <span>Uncertainty Assessment</span>
                  <span className="rp-summary-unit">+/- %</span>
                </caption>
                <tbody>
                  {UNCERTAINTY.map(([label, value]) => (
                    <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rp-tablewrap">
              <table className="rp-summary rp-summary--olive">
                <caption>Sheet Review</caption>
                <tbody>
                  {REVIEW.map((label) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td><span className="rp-tick" aria-label="checked">✓</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <section className="rp-notes">
          <h3>Notes</h3>
          <p className="rp-notes-sub">Main building</p>
          <div className="rp-notes-cols">
            <ol>
              {NOTES_LEFT.map((n, i) => (
                <li key={n}><span>{i + 1}-</span>{n}</li>
              ))}
            </ol>
            <ol start={5}>
              {NOTES_RIGHT.map((n, i) => (
                <li key={n}><span>{i + 5}-</span>{n}</li>
              ))}
            </ol>
          </div>
        </section>

        <p className="rp-footnote">
          <sup>*</sup> In accordance with FRA Decree No. 36, issued in 2026, Scope 1
          and Scope 2 emissions data for FY2025 undergoes external assurance, with
          publication expected by the end of August 2026.
        </p>
      </div>
    </article>
  );
}
