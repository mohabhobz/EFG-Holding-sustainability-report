/**
 * SECTION ONE — INTRODUCTION, printed pages 8 to 17.
 *
 * Every word on these ten pages is a word: headings are headings, paragraphs
 * are whole paragraphs, the awards list and the SDG contributions are `table`s,
 * the four arms of the group and the three executives are lists. What is a
 * picture in the print is a picture here — the paper-cut emblem and city, the
 * group's marks, the executives' photographs, the SDG wheel and the goal
 * squares — cropped from the PDF at their own bounding boxes and left alone.
 *
 * The proportions are printed page 10's grid, which the whole section uses and
 * which is not the letters' grid: a 36pt margin, a 526.85pt measure, body set
 * in #414042 on a 13pt leading. They are in src/styles/report.css as fractions
 * of the sheet.
 */
import SectionOpener from '../components/SectionOpener';
import SdgGoals from '../components/SdgGoals';

import emblem from '../assets/report/intro/emblem-introduction.webp';
import cityscape from '../assets/report/intro/about-illustration.webp';
import wordmark from '../assets/report/intro/efg-holding-wordmark.webp';
import logoHermes from '../assets/report/intro/logo-efg-hermes.webp';
import logoFinance from '../assets/report/intro/logo-efg-finance.webp';
import logoBankNxt from '../assets/report/intro/logo-bank-nxt.webp';
import logoFoundation from '../assets/report/intro/logo-efg-foundation.webp';
import execKarim from '../assets/report/intro/exec-karim-awad.webp';
import execMona from '../assets/report/intro/exec-mona-zulficar.webp';
import execHanaa from '../assets/report/intro/exec-hanaa-helmy.webp';
import iconEnvironmental from '../assets/report/intro/card-icon-environmental.webp';
import iconSocial from '../assets/report/intro/card-icon-social.webp';
import iconGovernance from '../assets/report/intro/card-icon-governance.webp';
import sdgWheel from '../assets/report/intro/sdg-wheel.webp';

/* ---- printed page 11: the group and its four arms ------------------------ */
/* `w` is the mark's own printed width as a fraction of the sheet, `wm` what it
   gets on a phone — a measurement of that one logo, so it travels with it. */
const arms = [
  { logo: logoHermes, name: 'EFG Hermes', w: '19.33cqw', wm: '132px',
    blurb: 'The leading financial partner for clients looking for opportunities in MENA.' },
  { logo: logoFinance, name: 'EFG Finance', w: '19.17cqw', wm: '131px',
    blurb: 'Bringing clients an evolving portfolio of non-bank financial institutions.' },
  { logo: logoBankNxt, name: 'Bank NXT', w: '18.55cqw', wm: '127px',
    blurb: 'A leading provider of integrated retail and corporate solutions in Egypt.' },
  { logo: logoFoundation, name: 'EFG Foundation', w: '24.24cqw', wm: '166px',
    blurb: 'Advancing integrated sustainable development through education, health, and community empowerment.' },
];

/* ---- printed page 12: the awards table ----------------------------------- */
/* The citation is one phrase; where it is written on two lines below, that is
   the paper's line break, not a new line of information, so it is stored and
   set as a phrase and left to break where the column ends. */
const awards = [
  ['Global Sustainability Awards 2025', 'EFG Holding', 'SDG Pioneer Award'],
  ['ESG Investing Awards', 'EFG Holding', 'Best ESG Investment Fund: Private Equity (Specialist)'],
  ['ESG Investing Award', 'EFG Holding', 'ESG Investing Award'],
  ['MENA Banking Excellence Awards 2026', 'EFG Hermes', 'Best Investment Bank – Egypt'],
  ['Euromoney Capital Markets Award', 'EFG Hermes', 'Best Corporate for ESG - Middle East & North Africa'],
  ['Global Banking and Finance Review Awards 2025', 'Valu', 'Best Fintech Company Egypt 2025'],
  ['International Business Magazine Awards 2025', 'Valu', 'Leading Financial Technology Powerhouse Egypt 2025'],
];

/* ---- printed page 13: the executives ------------------------------------- */
const executives = [
  {
    photo: execKarim, name: 'Karim Awad', role: 'Group CEO, EFG Holding',
    notes: [
      '#74 Forbes Middle East 100 Top CEOs 2025',
      '‘30 Banking & Finance Executives Leading the Financial Evolution of the Middle East’ List by Economy Middle East.',
      '‘Most Creative People in Business’ List by Fast Company',
    ],
  },
  {
    photo: execMona, name: 'Mona Zulficar',
    role: 'Non-Executive Chairperson, EFG Holding', mirror: true,
    notes: ['#48 Forbes Middle East 100 Most Powerful Businesswomen 2025'],
  },
  {
    photo: execHanaa, name: 'Hanaa Helmy',
    role: 'Group Chief Sustainability Officer, EFG Holding & CEO of the EFG Foundation',
    notes: ['#3 Forbes Middle East Sustainability Leaders 2025, Financial Services Category'],
  },
];

/* ---- printed page 14: the three pillars ---------------------------------- */
const pillars = [
  [iconEnvironmental, 'Environmental Stewardship',
    'Our environmental approach combines investment in climate-smart technologies coupled with a robust strategy to conserve resources, manage waste, and championing innovation.'],
  [iconSocial, 'Social Investment',
    'Our approach to social investement prioritizes long-term systemic impact by supporting initiatives that improve access to quality education, expand essential healthcare services, and contribute to economic empowerment in the communities where we do business.'],
  [iconGovernance, 'Governance & Ethics',
    'Our business practices are defined by integrity and trust. We uphold rigorous governance frameworks to ensure fairness and the creation of long-term value for all stakeholders.'],
];

/* ---- printed pages 15 to 17: what each initiative contributes to ---------- */
const sdgTables = [
  ['Environmental Stewardship', [
    ['The EFG Hermes Applied Technology School - Agri-Tech', null, [4, 9, 10, 11, 17, 13, 12]],
    ['Vortex Energy', null, [7, 8, 9, 13]],
    ['Green Retail Banking at Bank NXT', null, [7, 8, 10, 13]],
    ['Green Mobility Solutions with Valu', null, [8, 13, 10]],
    ['Green Industry with EFG Corp-Solutions', null, [8, 13, 9]],
    ['Group-wide Resource Management Initiatives', null, [8, 11, 13]],
    ['Green Bonds', null, [8, 13, 9]],
    ['Carbon Footprint Reporting at EFG Holding, Tanmeyah & Bank NXT; EFG Holding Financed Emissions Report', null, [7, 13, 16]],
  ]],
  ['Social Investment', [
    ['Education Investment & Financing',
      ['The Egypt Education Platform', 'The Saudi Education Platform', 'Education Advisory Services',
        'AI Edtech, Vocational Training & Technical Education'], [4, 13, 9, 10, 17]],
    ['The Fintech Ecosystem', null, [10, 8, 9]],
    ['Healthcare Investment & Financing',
      ['Rx Healthcare Management', 'Healthcare Advisory Services', 'Nurse Training / Aswan Heart Centre',
        'Dialysis Wards / Minya University Hospital', 'Advisory services'], [3, 8, 10, 17]],
    ['The Young Scholars’ Academy', null, [4, 7, 8, 9, 5, 17, 13]],
    ['EFG SME Financing', ['Tanmeyah', 'Bank NXT SME Programme', 'EFG Finance SMEs'], [5, 9, 9, 10]],
    ['Mortgage Financing & Insurance', ['KAF Insurance', 'Bank NXT Mortgage Financing'], [13, 9, 10]],
    ['Employee Talent Development', null, [5, 9, 10]],
    ['Employee Health & Wellbeing', null, [3, 8, 10]],
    ['CSI Initiatives & Partnerships', null, [1, 2, 3, 4, 5, 10, 11, 12]],
    ['Outreach and Awareness', null, [5, 9, 10]],
  ]],
  ['Governance Initiatives', [
    ['ESG Integration & Reporting', null, [5, 10, 16]],
    ['Reporting on Gender Metrics', null, [5, 10, 16]],
    ['Business Continuity & Risk Management', null, [10, 16]],
    ['Certifications including ISO 27001, ISO 20000, ISO 45001, ISO 22301', null, [10, 16]],
  ]],
];

function SdgTable({ band, rows }) {
  return (
    <table className="rp-sdg">
      <caption>{band}</caption>
      <tbody>
        {rows.map(([name, list, goals]) => (
          <tr key={name}>
            <td className="rp-sdg-name">
              {name}
              {list && <ul>{list.map((i) => <li key={i}>{i}</li>)}</ul>}
            </td>
            <td><SdgGoals goals={goals} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Introduction() {
  return (
    <>
      <SectionOpener
        eyebrow="Section One"
        title="Introduction"
        numeral="01"
        emblem={emblem}
        paper="#faf6f3"
      />

      {/* ---- printed page 10 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h1>About This Report</h1>

          <p className="rp-lead">
            The EFG Holding Sustainability Report provides an annual overview of
            the firm’s approach to and performance on environmental, social, and
            governance (ESG) topics.
          </p>

          <p>
            Since releasing our first sustainability report in 2014, EFG Holding
            has been committed to disclosing its progress through different
            sustainability reporting mechanisms that combine to provide a
            comprehensive overview of our ESG integration efforts, our impact
            investing initiatives, and our stakeholder engagement activities.
          </p>

          <p>
            In addition to our annual Sustainability Reports, we submit yearly
            Communication on Progress (CoP) reports that affirm our continuing
            commitment to the United Nations Global Compact (UNGC), and since
            2018 we have submitted annual Transparency Reports as part of our
            commitment as signatories of the UN Principles for Responsible
            Investment (PRI). In 2023, we added to our roster of reports and
            affirmed our commitment to climate action by releasing our first
            Carbon Footprint Report for the base year 2022, followed by our
            second report covering 2024 released in Q1 2025.
          </p>

          <p>
            Each year, we select a theme for our sustainability report that
            illustrates our evolution and helps communicate our progress to our
            stakeholders.{' '}
            <strong>‘The Power of Clarity: Transparent Goals, Tangible Progress’</strong>{' '}
            is this year’s theme, and it reflects our belief that transparency is
            the foundation of trust, an essential prerequisite to long-term value
            creation.
          </p>

          <p>
            This report sets out where we are today on our sustainability
            journey, outlining not only where we are headed, but the tangible
            progress we are making along the way. A mixed method approach was
            applied utilizing both qualitative and quantitative data obtained via
            surveys, in-house reports, public disclosures, press statements, and
            key stakeholder meetings. By linking clear targets to tangible
            actions, we aim to make our performance understandable and
            accountable to all stakeholders. From environmental stewardship and
            responsible financing to social inclusion and governance, clarity
            allows intention to be turned into impact.
          </p>

          <img
            className="rp-figure rp-bleed-img"
            src={cityscape}
            width="1600"
            height="644"
            alt=""
          />
        </div>
      </article>

      {/* ---- printed page 11 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h1>Our Business</h1>

          <p>
            EFG Holding stands as a leading financial institution in the Middle
            East and North Africa, built on a diversified business model that
            spans investment banking, non bank financial services, and commercial
            banking. With a presence across key regional and international
            markets, the Group delivers integrated financial solutions that serve
            individuals, businesses, and institutions at every stage of their
            growth. Our platforms, ranging from advisory, brokerage, and asset
            management to microfinance, leasing, factoring, and digital financial
            services, reflect a deep-rooted commitment to innovation, inclusion,
            and long term value creation.
          </p>

          <p>
            At EFG Holding, our three verticals, EFG Hermes, EFG Finance, and
            Bank NXT, are driving innovation, empowering businesses and
            individuals, and shaping the future of finance, while our
            philanthropic arm, the EFG Foundation is applying our expertise in
            the development arena and improving thousands of lives.
          </p>

          <img className="rp-wordmark" src={wordmark} width="1200" height="202" alt="EFG Holding" />

          <p className="rp-strapline">Integrated • Scalable • Future-Ready</p>

          <div className="rp-arms">
            {arms.map((a) => (
              <div className="rp-arm" key={a.name}>
                <img src={a.logo} alt={a.name} style={{ '--w': a.w, '--wm': a.wm }} />
                <p>{a.blurb}</p>
              </div>
            ))}
          </div>

          <p>
            Throughout our operations, our six Core Values: Expertise, Forward
            Thinking, Commitment to Excellence, Integrity, Empathy and Value
            Creation guide all our decisions and anchor our commitment to
            sustainable innovation, helping us establish a solid foundation for
            long-term growth, connect with local communities, and create an
            environment that attracts the best and brightest talents.
          </p>
        </div>
      </article>

      {/* ---- printed page 12 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-panel">
            <h1>
              <span className="rp-panel-light">2025 Performance</span>
              <br />Highlights
            </h1>
            <p>
              This year, EFG Holding and its subsidiaries earned broad
              recognition for excellence and innovation, securing multiple
              industry awards and distinctions across key markets and business
              lines.
            </p>
          </div>

          <table className="rp-table">
            <caption className="sr-only">Awards and distinctions received in 2025</caption>
            <tbody>
              {awards.map(([award, company, citation]) => (
                <tr key={award}>
                  <td>{award}</td>
                  <td>
                    <strong>{company}</strong>
                    <span>{citation}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      {/* ---- printed page 13 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <p className="rp-banner">
            We are immensely proud of the achievements of our executives who have
            consistently been recognized as outstanding in their fields
          </p>

          <div className="rp-execs">
            {executives.map((e) => (
              <div className={`rp-exec${e.mirror ? ' rp-exec--mirror' : ''}`} key={e.name}>
                <img src={e.photo} width="540" height="700" alt="" />
                <div className="rp-exec-body">
                  <p className="rp-exec-name">{e.name}</p>
                  <p className="rp-exec-role">{e.role}</p>
                  {e.notes.map((n) => <p className="rp-exec-note" key={n}>{n}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* ---- printed page 14 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h1>Approach to ESG</h1>

          <div className="rp-cols">
            <p>
              EFG Holding sees environmental, social, and governance (ESG)
              integration as a driver of long-term competitiveness. Our mission
              is to “To embed sustainability into the DNA of EFG Holding Group’s
              governance, financing and growth” thereby enhancing resilience,
              strengthening stakeholder trust, and sustaining long-term value
              creation. We also take pride in our accountability culture and in
              our level of governance oversight that allow us to deliver
              transparent, high-quality disclosures aligned with evolving
              regulatory and investor expectations.
            </p>
            <p>
              Incorporating ESG principles into our growth strategy enables us to
              foster long-term sustainability, support thriving communities,
              drive business success, and ensure environmental stewardship.
            </p>
          </div>

          <div className="rp-cards">
            {pillars.map(([icon, title, body]) => (
              <div className="rp-card" key={title}>
                <h2>{title}</h2>
                <img src={icon} width="900" height="333" alt="" />
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* ---- printed pages 15 to 17 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <img className="rp-sdg-wheel" src={sdgWheel} width="895" height="900"
               alt="The United Nations Sustainable Development Goals wheel" />

          <h1>The SDGs: Contributions in 2025</h1>

          <p>
            EFG Holding seeks to align itself with the UN Sustainable Development
            Goals (SDGs), consistently keeping track of how its activities and
            operations can contribute to realizing individual objectives. We submit
            yearly Communication on Progress (COP) reports that affirm our
            continuing commitment to the United Nations Global Compact (UNGC) and
            annual Transparency Reports as part of our commitment as signatories
            of the UN Principles of Responsible Investment (PRI). The following
            table lays out our ESG efforts in 2025 and demonstrates how each one
            contributes to the SDGs.
          </p>

          {sdgTables.map(([band, rows]) => (
            <SdgTable band={band} rows={rows} key={band} />
          ))}
        </div>
      </article>
    </>
  );
}
