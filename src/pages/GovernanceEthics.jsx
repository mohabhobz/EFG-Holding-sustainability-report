/**
 * SECTION FOUR — GOVERNANCE & ETHICS, printed pages 80 to 101.
 *
 * The divider, the board's own framework, the policy environment, ESG
 * integration, the business lines and the business partners, the subsidiaries,
 * and data science and AI in governance.
 *
 * Where the print draws a panel — the policy environment on page 84, the asset
 * management figures on 87, the privacy panel on 96, the security numbers on
 * 97, the AI strategy on 101 — the panel is rebuilt here in CSS and every word
 * inside it stays real text. Only the photographs, the paper-cut emblem, the
 * illustration and the certification marks are images.
 *
 * The eighteen policy names on page 84 are links in the PDF, and they are
 * links here too, pointing at the same pages on efgholding.com.
 */
import SectionOpener from '../components/SectionOpener';

import emblem from '../assets/report/gov/emblem-governance.webp';
import illustration82 from '../assets/report/gov/p82-illustration.webp';
import fimMark from '../assets/report/gov/p90-fim.webp';
import iso22301 from '../assets/report/gov/p91-iso-22301.webp';
import iso45001 from '../assets/report/gov/p93-iso-45001.webp';
import p93a from '../assets/report/gov/p93-photo-1.webp';
import p93b from '../assets/report/gov/p93-photo-2.webp';
import p93c from '../assets/report/gov/p93-photo-3.webp';
import iso27001 from '../assets/report/gov/p97-iso-27001.webp';
import iso20000 from '../assets/report/gov/p98-iso-20000.webp';
import certAml from '../assets/report/gov/p100-aml-30000.webp';
import certPci from '../assets/report/gov/p100-pci-dss.webp';
import certIso from '../assets/report/gov/p100-iso-27001.webp';
import aiInnovation from '../assets/report/gov/p101-icon-innovation.webp';
import aiDigital from '../assets/report/gov/p101-icon-digital.webp';
import aiOperations from '../assets/report/gov/p101-icon-operations.webp';

const POLICY = 'https://www.efgholding.com/en/about/corporate-governance/policies';

/* The printed policy environment, page 84. Two columns of boxes; each entry is
   the link the PDF gives it. */
const policyGroups = [
  ['Conduct', [
    ['Code of Conduct', POLICY],
    ['Supplier Code of Conduct', 'https://www.efgholding.com/en/pages/Supplier-Code-of-Conduct'],
    ['Chinese Wall', POLICY],
    ['Whistleblower', POLICY],
    ['Due Diligence Process', POLICY],
    ['Information Disclosure & Business Continuity', POLICY],
  ]],
  ['Labour', [
    ['Statement on Human & Labour Rights', 'https://www.efgholding.com/en/pages/Human-Labour-Rights'],
    ['Statement on Modern Slavery & Human Trafficking', 'https://www.efgholding.com/en/pages/Modern-Slavery-Human-Trafficking'],
    ['Statement on Child Labor', 'https://www.efgholding.com/en/pages/Child-Labour'],
  ]],
  ['ESG', [
    ['ESG', 'https://www.efgholding.com/en/sustainability/esg-policy'],
    ['Data Protection', 'https://www.efgholding.com/en/pages/efg-holding-privacy-policy'],
    ['Health & Safety', 'https://www.efgholding.com/en/pages/HealthandSafety'],
    ['Community Engagement', 'https://efgholding.com/en/pages/CommunityEngagementPolicy'],
  ]],
  ['Gender & Wellbeing', [
    ['Statement on Gender Equality & Equity', 'https://www.efgholding.com/en/pages/Gender-Equality'],
    ['Statement on Sexual Harassment', 'https://www.efgholding.com/en/pages/Sexual-Harassment'],
  ]],
  ['Environment', [
    ['Statement on Climate Change', 'https://www.efgholding.com/en/about/climate-change'],
  ]],
];
/* The print sets Conduct and ESG down the left, Labour, Gender & Wellbeing and
   Environment down the right. */
const policyCols = [[0, 2], [1, 3, 4]];

/* Asset Management as of 1Q 26, page 87 — value, then what it counts. */
const amRows = [
  [<>29 Funds</>, 'Total number of funds managed'],
  [<>59,814,677,738<br />EGP / USD</>, 'Total Assets Under Management (AUM):'],
  [<>53%</>, 'Year-on-year AUM growth'],
  [<>12 funds</>, 'Number of funds applying ESG integration tools'],
  [<>5 Funds</>, 'Number of Sharia-compliant funds'],
  [<>1,115,557,121<br />EGP / USD</>, 'AUM'],
  [<>253%</>, 'Year-on-year AUM growth'],
];

/* Information Security by Numbers, page 97 — the caption sits above the
   figure, four to a row. */
const secNumbers = [
  ['New internal software or systems receiving data privacy reviews', '100%'],
  ['Review of new initiatives involving personal data', '100%'],
  ['Number of data privacy breaches reported to regulators', '0'],
  ['Adherence rate to data protection and cybersecurity laws', '100%'],
  ['Systems change success rate', '96.1%'],
  ['Help desk ticket resolution rate', '97.7%'],
  ['Uptime for public sites', '>99%'],
  ['Digital Employee Experience (DEX) score', '75/100'],
];

const certs = [
  [certAml, 'AML 30000 certification with COFICERT in 2025', 'COFICERT AML 30000'],
  [certPci, 'Renewal of PCI DSS certification for the second consecutive year', 'PCI DSS'],
  [certIso, 'ISO 27001', 'ISO 27001'],
];

/* The three objectives on page 101, and the three areas under them. */
const aiObjectives = [
  'Enhancing operational efficiency through automation and intelligent systems',
  'Enabling data-driven business insights and predictive analytics',
  'Improving client and employee experience through AI-enabled services',
];
const aiAreas = [
  ['1. Innovation & R&D', aiInnovation,
   ['Predictive analytics', 'Machine learning models', 'NLP & generative AI', 'Intelligent automation']],
  ['2. Digital Transformation', aiDigital,
   ['AI-powered analytics platforms', 'Internal AI assistants', 'Workflow automation', 'Decision-support analytics']],
  ['3. Sustainable Operations', aiOperations,
   ['Reduced manual processes', 'Optimized resource use', 'Real-time insights']],
];

export default function GovernanceEthics() {
  return (
    <>
      {/* ---- printed pages 80 and 81 ---- */}
      <SectionOpener
        eyebrow="Section Four"
        title={<><span className="so-light">Governance</span><br />&amp; Ethics</>}
        numeral="04"
        emblem={emblem}
        emblemAlt="A paper-cut shield carrying a pair of scales"
        paper="#ffffff"
      />

      {/* ---- printed page 82 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h1>Governance &amp; Ethics</h1>
          <p>
            EFG Holding’s governance framework underpins its commitment to
            transparency, accountability, and responsible business conduct. This
            section begins by outlining the Firm’s governance structure and board
            oversight, highlighting the mechanisms and policies that ensure
            effective decision-making and robust supervision. It then explores ESG
            integration, demonstrating how sustainability considerations are
            embedded across business lines and supported by key internal functions,
            including compliance, risk, internal audit, human resources, and
            information security. The section further examines how EFG Holding
            extends its governance and sustainability practices across subsidiaries,
            reinforcing a consistent approach throughout the Group. Finally, it
            highlights the role of data science, AI, and innovation in governance,
            showcasing how technology enhances oversight, risk management, and
            operational integrity.
          </p>
          <img className="rp-figure rp-bleed-img" src={illustration82}
               width="1600" height="855"
               alt="An illustrated green landscape with a courthouse, a set of scales, a book marked Ethics and a governance checklist" />
        </div>
      </article>

      {/* ---- printed page 83 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>Governance Framework &amp; Board Oversight</h3>
          <p>
            EFG Holding operates under a ‘Tone at the Top’ philosophy, where the
            Board of Directors provides the strategic mandate for sustainable value
            creation, exercises active oversight of operations and development, and
            undertakes stewardship of policies that govern all activities.
          </p>

          <h4 className="rp-subhead">Strategic Direction:</h4>
          <p>
            The Board approves the Group’s strategy and long-term objectives,
            ensuring alignment with the approved risk appetite and internal risk
            management framework. It oversees strategic execution by approving
            material changes to the Group’s corporate, capital, management, and
            organizational structures, as well as decisions related to entering or
            exiting markets and expanding into new business activities.
          </p>

          <h4 className="rp-subhead">Active Supervision</h4>
          <p>
            Oversight is maintained through quarterly reviews of financial and
            non-financial performance, regulatory developments, and risk
            assessments. The Board also conducts regular performance and progress
            reviews through the approval of quarterly and annual financial results,
            receipt of periodic management reports, and reviews of operational,
            regulatory, and risk developments. In addition, the Board ensures
            effective oversight through delegation to Board committees and senior
            management, while retaining authority over strategic and material
            matters. It receives regular reports from the Group Chief Executive
            Officer, the Audit and Risk Committees, and senior risk and compliance
            officers on performance, internal controls, risk management, and
            strategic risks, enabling continuous monitoring of progress toward
            long-term objectives.
          </p>

          <h4 className="rp-subhead">Policy Stewardship</h4>
          <p>
            The Board is responsible for the approval and regular assessment of a
            comprehensive suite of policies &amp; statements. These include both
            overarching documents such as ESG or Code of Conduct policies and
            specific ones that address discrete issues such as sexual harassment or
            climate change.
          </p>
        </div>
      </article>

      {/* ---- printed pages 84 and 85 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-policy">
            <h3>EFG Holding Policy Environment</h3>
            <div className="rp-policy-cols">
              {policyCols.map((col, i) => (
                <div className="rp-policy-col" key={i}>
                  {col.map((g) => (
                    <section className="rp-policy-box" key={policyGroups[g][0]}>
                      <h4>{policyGroups[g][0]}</h4>
                      <ul>
                        {policyGroups[g][1].map(([name, href]) => (
                          <li key={name}>
                            <a href={href} target="_blank" rel="noreferrer">{name}</a>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <h3>ESG Integration</h3>
          <p>
            EFG Holding operates across three verticals within the Group. The{' '}
            <a href="https://www.efgholding.com/en/sustainability/esg-policy"
               target="_blank" rel="noreferrer">Group ESG Policy</a>{' '}
            applies to all business lines under the Investment Bank and NBFIs
            verticals, in addition to the Business Partners that serve the Group and
            most of its subsidiaries, all overseen by the Board and coordinated by
            the Corporate Sustainability and Impact (CSI) Department as detailed in
            the governance structure included in the ESG Policy.
          </p>

          <div className="rp-goals">
            <h3>Goals</h3>
            <ul>
              <li>Embed ESG into core decision-making.</li>
              <li>Drive measurable impact with accountability.</li>
            </ul>
          </div>

          <p>
            To ensure that sustainability is not just a policy but a performance
            driver, EFG Holding has created a culture where sustainability is a
            priority and not an afterthought, taking tangible steps to ensure buy-in
            from all departments. This approach ensures that every department is held
            accountable for measurable sustainability outcomes. By embedding this
            approach into the Group’s governance and operational structures, EFG
            Holding aligns individual departmental success with its broader
            commitment to the UN Global Compact and UNPRI principles.
          </p>

          <p>
            The CSI department is the owner of the ESG Policy with responsibility to
            communicate it throughout EFG Holding, coordinating the ESG agenda as
            part of the Executive Committee meetings, and passing ESG resolutions and
            suggesting updates to the ESG Policy for Board approval as necessary. It
            is also responsible for conducting reviews of the annual business unit
            KPIs responses and sharing the results with the Executive Committee. To
            evaluate progress in fulfilling KPIs, the department has developed
            questionnaires with both general topics and specific questions tailored
            for each of the business lines. These questionnaires provide a consistent
            and structured way to capture data across different functions, enabling
            regular assessment, benchmarking, and identification of gaps. They also
            encourage accountability and continuous improvement by making ESG
            performance visible and comparable over time.
          </p>

          <h4 className="rp-kicker">KPI progress evaluation questions: <span className="rp-kicker-aside">(Selected examples)</span></h4>
          <ul className="rp-dots">
            <li>Have any requests been made to the Board for exemption to the ESG Policy?</li>
            <li>Has the list of sustainability frameworks and management systems used for ESG integration within your business line been reviewed and updated in the past year?</li>
            <li>Is the number of investee companies adopting ESG frameworks or management systems being tracked?</li>
            <li>How frequently were valuations adjusted based on the content of completed ESG Scorecards?</li>
            <li>In the past year, how many ESG related trainings have employees in your business line received?</li>
          </ul>

          <div className="rp-card-glance rp-card-glance--plain">
            <div className="rp-card-glance-head">
              <b>ESG Integration</b>
              <span>2025 Progress at a Glance</span>
            </div>
            <div className="rp-card-glance-foot">
              <ul>
                <li>
                  <b>ESG Embedded Across Operations:</b> Each business line and
                  partner now tracks ESG Key Performance Indicators (KPIs), ensuring
                  environmental, social, and governance considerations are fully
                  integrated into investment, advisory, and operational decisions.
                </li>
                <li>
                  <b>Robust Policy Environment &amp; Governance:</b> Clear policies,
                  strong oversight, and structured stakeholder engagement provide a
                  disciplined framework to guide ESG implementation across the Group.
                </li>
                <li>
                  <b>Transparency and Accountability:</b> Regular reporting and
                  disclosure ensure ESG objectives are monitored, evaluated, and
                  acted upon consistently, reinforcing trust with all stakeholders.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* ---- printed pages 86 and 87 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>Translating Strategy to Impact: <span className="rp-accent">Our Business Lines</span></h3>
          <p>
            EFG Holding’s business lines represent the operational engine of the
            Group’s sustainability strategy, where high-level governance is
            translated into tangible market impact. By embedding ESG considerations
            into these core lines, the Group ensures that financial excellence and
            responsible investing are mutually inclusive. Each division leverages
            proprietary frameworks and specialized expertise to identify material
            risks and unlock sustainable opportunities. Through this integrated
            approach, EFG Holding not only supports the strategic ambitions of its
            clients but also drives the long-term development of more resilient and
            inclusive capital markets.
          </p>

          <h3>Investment Banking</h3>
          <p>
            EFG Hermes’ Investment Banking division has grown to become the region’s
            most trusted advisory house, leveraging decades of industry experience
            and a team of over 50 professionals. The division advises on Mergers
            &amp; Acquisitions (M&amp;A), Equity Capital Markets (ECM), and Debt
            Capital Markets (DCM), providing clients with economic, market, and
            company-focused insights across the MENA region.
          </p>
          <p>
            Governance in Investment Banking is centred on rigorous deal-vetting and
            risk alignment with ESG considerations embedded into screening
            procedures.
          </p>

          <h4 className="rp-subhead">ESG Screening:</h4>
          <p>
            Integration begins at the KYC (Know Your Client) stage, screening all
            potential clients against the Group’s Exclusionary Criteria.
          </p>

          <h4 className="rp-subhead">Risk identification:</h4>
          <p>
            A proprietary framework is used to identify sector-specific ESG risks,
            ensuring sustainability factors are baked into transaction documentation.
          </p>

          <h4 className="rp-subhead">Resource Allocation:</h4>
          <p>
            Financial resources are allocated to ESG implementation through staff
            training, development, and external consultation where needed.
          </p>

          <h3>Asset Management Egypt</h3>
          <p>
            EFG Hermes’ Asset Management Egypt division offers clients a diverse
            suite of mutual funds and discretionary portfolios, including money
            market, fixed income, balanced, equity, Shariah compliant mandates, and
            precious metals. Serving local and international investors including
            premier banks, insurance companies, pension funds, Sovereign Wealth
            Funds, Endowments and foundations, and high net worth individuals and
            family offices, the division provides value-accretive investment
            opportunities, market insights, and tailored services aligned with
            clients’ financial objectives and risk appetites.
          </p>
          <p>
            EFG Hermes Asset Management continued to expand and strengthen its fund
            offering in 2026, managing a diversified portfolio of equity,
            fixed-income, balanced, money market, and Sharia-compliant funds. Since
            the beginning of the year, the firm has also launched its own EFG-branded
            mutual funds, including a money market fund, an equity fund, a
            Shariah-compliant equity fund, a USD fixed-income fund, and a gold fund.
            The division maintained its leading position in the Egyptian and regional
            markets and continued integrating ESG considerations across all fund
            strategies in line with the Group ESG Policy and PRI commitments with
            several funds increasing exposure to sectors aligned with the UN SDGs,
            such as healthcare, education, and financial inclusion. In addition, the
            division manages 5 Sharia-compliant funds (253% YoY AUM growth) that
            naturally overlap with ESG principles through ethical exclusionary
            screens.
          </p>

          <div className="rp-two rp-two--tight">
            <div>
              <p>
                EFG Hermes Asset Management ensured that all actively managed funds
                considered material ESG risks and opportunities as part of an
                enhanced investment and risk-review framework.
              </p>
              <p>
                Across all fund categories, ESG factors were systematically
                incorporated into investment decision-making through:
              </p>
              <ul className="rp-dots">
                <li>Proprietary ESG scorecards and sector frameworks</li>
                <li>Exclusion list screening</li>
                <li>Bottom-up company research with ESG inputs</li>
                <li>Portfolio-level ESG risk monitoring</li>
                <li>Engagement with investee companies on governance, disclosure, climate, and social practices</li>
              </ul>
              <p>
                The investment professionals at EFG Hermes Asset Management Egypt
                played an active role in strengthening ESG awareness among the
                companies and stakeholders they work with across their managed funds.
                Through regular engagements, portfolio reviews, and direct
                discussions with investee companies, the team consistently
                highlighted the importance of sound governance, environmental risk
                management, and socially responsible practices. Investment teams
                worked closely with management teams to explain material ESG factors,
                share global best practices, and guide companies on improving
                disclosure, data quality, and sustainability performance. These
                awareness-building efforts not only enhanced the ESG readiness of
                portfolio companies but also contributed to more informed
                decision-making, better risk management, and stronger long-term value
                creation across the funds.
              </p>
            </div>

            <div className="rp-am">
              <h4>Asset Management<br />as of 1Q 26</h4>
              <dl>
                {amRows.map(([value, label], i) => (
                  <div className="rp-am-row" key={i}>
                    <dt>{value}</dt>
                    <dd>{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </article>

      {/* ---- printed page 88 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>Private Equity</h3>
          <p>
            Private Equity integrates ESG considerations across the entire investment
            lifecycle from initial screening and due diligence to transaction
            structuring, agreements, monitoring, and reporting. The division applies
            a structured ESG Framework to ensure consistent identification and
            management of material risks and opportunities, while allowing
            flexibility to address deal-specific priorities.
          </p>
          <p><strong>All potential investments undergo a two-phase review process:</strong></p>
          <ul className="rp-dots">
            <li>Screening against Exclusionary Criteria to avoid illegal or internationally prohibited activities</li>
            <li>ESG risk assessment during due diligence, supported by external experts when needed. Each investment is assigned an ESG risk rating, guiding investment decisions, transaction structuring, and post-acquisition improvement plans.</li>
          </ul>
          <p>
            ESG performance is monitored annually to identify improvement
            opportunities and share best practices across the portfolio. Where
            control is limited, EFG Holding encourages investee companies to enhance
            their sustainability performance using internationally recognised
            criteria such as ISO and LEED certifications and GRI, UNGC and UNPRI
            frameworks. Furthermore, every investee company’s annual expenditure plan
            should allocate financial resources to support the implementation of ESG
            in the investment process, using appropriate means such as staff training
            and development, or consultation with external specialists.
          </p>

          <h3>Research</h3>
          <p>
            The EFG Hermes Research Department plays a central role in advancing the
            Group’s sustainability agenda through a variety of mechanisms:
          </p>
          <ul className="rp-dots">
            <li><strong>Valuation Models:</strong> Analysts integrate material ESG indicators into company notes, outlooks, and sector analyses.</li>
            <li><strong>Monitoring:</strong> Closely monitors climate-related disclosures, governance structures, labour practices, and sector-specific ESG trends.</li>
            <li><strong>Transparency Advocacy:</strong> Encourages corporates to improve data quality and adopt international reporting standards.</li>
          </ul>
          <p>
            These efforts contributed to more robust investment decisions, stronger
            alignment with international standards, and a clearer understanding of
            sustainability risks and opportunities across the markets covered.
          </p>
        </div>
      </article>

      {/* ---- printed page 89 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>EFG Finance</h3>
          <p>
            EFG Finance continued to advance its responsible lending and governance
            practices throughout 2025, strengthening its role as an integrated
            non-bank financial institution supporting individuals and businesses
            across Egypt. ESG integration efforts unfolded across several areas:
          </p>
          <ul className="rp-dots">
            <li><strong>Credit Governance:</strong> Embedded ESG considerations into its underwriting processes, risk evaluation tools, and customer onboarding procedures.</li>
            <li><strong>Alignment:</strong> Fully integrated the updated Group ESG Policy and revised exclusion lists into all lending portfolios in 2025.</li>
            <li><strong>Expanded reach:</strong> Focused on lending to underserved clients and small business owners in rural and governorate-level markets, providing accessible financing that supports job creation, income stability, and micro-enterprise growth.</li>
            <li><strong>Digitalisation:</strong> Strengthened its internal governance and operational resilience by enhancing data quality controls, digitalizing customer processes, and improving reporting accuracy across all business lines.</li>
          </ul>
          <p>
            Together, these efforts collectively reinforce the company’s commitment
            to responsible finance, risk transparency, and inclusive economic
            development, positioning EFG Finance as a core driver of EFG Holding’s
            sustainable growth agenda for 2025 and beyond.
          </p>

          <h3>EFG Corp-Solutions</h3>
          <p>
            ESG factors are embedded within the credit function as part of prudent
            risk management and are incorporated across policies, processes, and
            decision-making. All transactions undergo initial screening against
            Exclusionary Criteria to avoid prohibited activities. ESG considerations
            are integrated into the application and credit analysis processes, with
            sustainability performance assessed alongside financial risk.
          </p>
          <ul className="rp-dots">
            <li><strong>Factoring:</strong> ESG factors are included in internal risk rating models, approval memoranda, and ongoing customer monitoring, ensuring that material ESG risks are clearly presented and reviewed throughout the approval and oversight process.</li>
            <li><strong>Leasing:</strong> ESG considerations are embedded in credit scoring and approval documentation, with risk management policies addressing ESG exposure related to underlying assets.</li>
          </ul>
          <p>
            Material ESG risks are continuously monitored by Risk Management and
            senior leadership, supporting informed decision-making and risk
            mitigation. Additionally, Corp-Solutions allocates resources within its
            annual budget to strengthen ESG integration, including staff training and
            engagement with external specialists.
          </p>
        </div>
      </article>

      {/* ---- printed pages 90 and 91 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>EFG Finance SMEs</h3>
          <p>
            Credit assessments combine quantitative and qualitative analysis,
            including the future prospects of clients, with ESG factors incorporated
            as part of prudent risk management. All potential financing is subject to
            negative screening against an exclusion list to avoid prohibited
            activities. ESG considerations are embedded within internal risk rating
            models and credit scoring matrices, ensuring that sustainability risks are
            evaluated alongside financial criteria. Material ESG risks are clearly
            documented in Credit Approval Memoranda and factored into decision-making.
            Post-approval, credit exposures are monitored by Credit and Risk
            Management teams to ensure no adverse ESG impacts arise from financing
            activities. EFG Finance SMEs also allocates resources within its annual
            budget to strengthen ESG integration across its portfolio, including staff
            training and the use of external expertise where needed.
          </p>

          <h3>Valu</h3>
          <p>
            Valu integrates ESG considerations into its credit and risk management
            practices for consumer lending. ESG factors are embedded within credit
            policies, underwriting processes, and merchant approval procedures to
            ensure that material sustainability risks are identified, assessed,
            monitored, and controlled in line with EFG Holding’s overall ESG
            framework.
          </p>
          <p>
            All retail partners are subject to negative screening against an exclusion
            list to avoid engagement with prohibited activities. ESG risks are
            actively managed across lending practices to strengthen responsible
            financing and risk oversight.
          </p>

          <h3>FIM Partners</h3>
          <img className="rp-logo rp-logo--float" src={fimMark} width="700" height="220"
               style={{ '--w': '18.51cqw', '--wm': '126px' }} alt="FIM Partners" />
          <p>
            FIM Partners, an EFG Holding Asset Management subsidiary focused on the
            MENA region, is a signatory of the UNPRI and a member of the UNGC. It
            considers ESG integration an integral pillar of its investment approach
            and engages in responsible investment (RI) underpinned by the conviction
            that ESG issues can affect the long-term performance of investment
            portfolios and that ESG is not solely about risk mitigation but also
            serves as a conduit for identifying new investment opportunities.
          </p>
          <p>
            FIM Partners maintains a responsible investment policy which applies to
            all asset classes including public equities, fixed income and real estate
            and our board members and chief-level staff have oversight over investment
            processes. The approach to sustainable investing entails a combination of
            negative screening and ESG integration. All members of the investment team
            are responsible for evaluating the ESG credentials of existing and
            prospective investments and monitoring portfolio investments for material
            changes. The process involves utilizing internal and external resources to
            assist in analysing ESG issues, engaging directly with companies, and when
            authorized, the exercise of proxy votes.
          </p>

          <h3>Enabling Transformation: <span className="rp-accent">Our Business Partners</span></h3>
          <p>
            At EFG Holding, we have transitioned our core support and control
            functions into a unified ‘Business Partners’ framework. This encompasses
            Risk, Compliance, Audit, Administration &amp; Facilities, Human Resources,
            Information Technology &amp; Security, and Marketing &amp; Communications.
            This strategic shift recognizes that sustainable value creation is
            achieved through the deep integration of specialized expertise into our
            daily operations. By evolving from traditional support roles into active
            Business Partners, these functions serve as critical enablers of the
            Group’s long-term strategy, ensuring that every business line operates
            with the agility, security, and ethical rigor required to navigate a
            complex global market.
          </p>

          <h3>Compliance</h3>
          <p>
            The Compliance Department at EFG Holding supports the Group’s governance
            framework by ensuring adherence to applicable laws, regulations, and
            internal policies, in line with regulatory expectations and international
            best practices. The function plays a key role in promoting ethical
            conduct, transparency, and accountability across business activities and
            subsidiaries.
          </p>
          <p>
            Our Compliance policies undergo a regular review cycle (or more frequent
            updates if triggered by regulatory changes). The review process begins
            with the policy owners and the Chief Compliance Officer, followed by
            review at the Management or Executive Committee level. Final approval is
            granted by the Board of Directors or relevant Board Committees, ensuring
            that our “Tone at the Top” is reflected in our written standards. As part
            of our commitment to regulatory excellence and in line with local
            requirements, our AML procedures and monitoring systems undergo an annual
            external audit. This provides an independent validation of the
            effectiveness of our controls.
          </p>

          <h3>Risk</h3>
          <p>
            The Risk function at EFG Holding plays a central role in safeguarding the
            Group’s resilience and long-term sustainability by identifying, assessing,
            and managing financial and non-financial risks across operations. The team
            supports informed decision-making through structured risk frameworks,
            clear governance, and regular monitoring, ensuring alignment with
            regulatory requirements and the Group’s risk appetite.
          </p>
          <img className="rp-logo rp-logo--float" src={iso22301} width="700" height="347"
               style={{ '--w': '18.5cqw', '--wm': '126px' }} alt="ISO 22301:2019 certified" />
          <p>
            Risk management processes incorporate environmental, social, and
            governance considerations where relevant, enabling the Group to
            anticipate emerging risks and respond proactively to changes in the
            operating environment. Through close collaboration with business lines
            and support functions, the Risk team supports consistent risk assessment
            and mitigation across subsidiaries. All risk management employees attend
            trainings related to risk management, and the majority of NBFI employees
            are credit course certified and occasionally attend trainings related to
            risk management, portfolio analysis, FRA requirements etc. EFG Holding
            also adheres to a Business Continuity Management System which complies
            with the requirements of ISO 22301:2019 covering the activities of
            Holding, Brokerage, Asset Management, Private Equity and Investments
            Banking at EFG Hermes Egypt, UAE and KSA.
          </p>
        </div>
      </article>

      {/* ---- printed pages 92 and 93 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <p>
            A structured credit risk policy also underpins the operations of EFG
            Corp-Solutions and EFG Finance SMEs, integrating ESG considerations into
            both credit assessment and ongoing risk monitoring. This framework
            incorporates a dedicated ESG risk assessment process, supported by an
            exclusion list and a scorecard developed using Sustainability Accounting
            Standards Board (SASB) standards alongside EFG’s industry
            classifications. The scorecard is designed to help with risk assessments,
            performance benchmarking, investment decision-making, stakeholder
            communication, compliance and reporting, and long term value creation.
            Post-disbursement, structured monitoring questions track the outcomes and
            impact of financed activities, enabling early identification of risks and
            reinforcing responsible lending practices across both corporate and SME
            portfolios.
          </p>

          <h3>Internal Audit</h3>
          <p>
            The Internal Audit at EFG Holding provides independent and objective
            assurance on the effectiveness of governance, risk management, and
            internal control processes across the Group. Internal Audit supports the
            Board and senior management by evaluating the adequacy of controls,
            promoting accountability, and enhancing transparency in line with
            regulatory and governance expectations.
          </p>
          <p>
            Through a risk-based audit approach, Internal Audit assesses key
            financial and non-financial processes, including areas relevant to ESG
            matters where applicable. The Internal Audit works closely with Audit
            Committees, management, and other control functions to ensure timely
            identification of gaps, effective remediation, and continuous
            improvement. By strengthening assurance, supporting control
            effectiveness, and reinforcing governance discipline, Internal Audit
            contributes to safeguarding the Group’s integrity, resilience, and
            long-term sustainable value creation. In 2025, the Group Chief Internal
            Audit Officer established a quality assurance function within the IA
            team. Additionally, the IA function in Kuwait undergoes an External
            Quality Assurance review every three years in accordance with regulatory
            requirements.
          </p>
          <p>
            There is full alignment between the three control functions at EFG.
            Compliance and Risk assessments are shared regularly with Internal Audit,
            and thorough discussions are conducted during the Group Audit and Risk
            Committees’ meetings to address all issues.
          </p>

          <h3>Administration &amp; Facilities</h3>
          <p>
            The Strategic Framework for Administration and Facilities Management
            developed in 2024 continues to provide guidance on identifying targets,
            measuring performance, developing new initiatives, and determining the
            relevant stakeholders associated with those targets. The framework is a
            significant step in EFG Holding’s efforts for ESG integration. In 2025,
            the department continued to monitor and assess carbon emissions and waste
            as a core part of the preparation for the CFP report. The department also
            works across different teams to ensure the successful implementation of
            sustainability initiatives and to embed sustainable practices into our
            daily operations.
          </p>

          <img className="rp-logo rp-logo--float" src={iso45001} width="500" height="499"
               style={{ '--w': '9.42cqw', '--wm': '68px' }} alt="ISO 45001 certified" />
          <p>
            Reinforcing EFG Holding’s commitment to protecting our people and
            strengthening governance and risk management, this year, the Firm obtained
            ISO 45001 certification, the international standard for occupational
            health and safety management systems. The certification formalizes the
            Group’s approach to identifying and managing workplace risks,
            strengthening health, safety, and environmental (HSE) governance, and
            embedding safety practices across day-to-day operations as outlined the{' '}
            <a href="https://efgholding.com/en/pages/HealthandSafety"
               target="_blank" rel="noreferrer">Group Health &amp; Safety Policy</a>.
          </p>

          <div className="rp-pair rp-pair--tight">
            <img src={p93a} width="800" height="597" alt="Colleagues after a football match at an EFG Holding tournament" />
            <img src={p93b} width="800" height="597" alt="Colleagues with their medals after an EFG Holding running event" />
          </div>

          <p>
            We actively support employee wellbeing through a range of engaging and
            inclusive initiatives, including football, padel, and ping pong
            tournaments that foster teamwork and camaraderie. These are complemented
            by dedicated facilities such as our state-of-the-art gym at HQ offering
            fitness classes, ladies’ yoga sessions, nutritional consultations, and
            hygienic showers promoting physical health, balance, and overall
            wellbeing. Together, these programmes create a positive, energized work
            environment that encourages connection, reduces stress, and enhances
            employee engagement.
          </p>

          <img className="rp-media rp-media--half" src={p93c} width="800" height="525"
               alt="A poster inviting staff to yoga sessions at the head-office gym" />
        </div>
      </article>

      {/* ---- printed pages 94 and 95 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h4 className="rp-kicker">Human Resources</h4>
          <p>
            Human Resources at EFG Holding plays a central role in supporting the
            Group’s long-term performance through effective workforce planning,
            talent acquisition and development, and employee engagement. HR policies
            and practices are designed to attract, develop, and retain talent while
            promoting fairness, inclusion, and equal opportunity across the Group’s
            operations.
          </p>
          <p>
            Through structured frameworks covering talent acquisition, performance
            management, learning and development, and employee well-being, HR
            supports a consistent employee experience across subsidiaries while
            allowing flexibility to meet local and business-specific needs. These
            frameworks are underpinned by clear governance, compliance with
            applicable labour regulations, and alignment with the Group’s values and
            code of conduct. All employees, leadership, contractors, and
            representatives are required to adhere to EFG Holding’s{' '}
            <a href="https://efgholding.com/en/about/corporate-governance/policies"
               target="_blank" rel="noreferrer">Code of Conduct</a>, which provides
            comprehensive guidance on ethical behaviour, confidentiality,
            transparency, and the responsible use of information. The Code forms the
            foundation of the Firm’s commitment to strong corporate governance and
            ethical business practices. Annual employee appraisals are
            multidimensional with a 360-degree feedback process and include
            evaluation on progress in the fulfilment of ESG KPIs and management
            goals. The HR department also conducts exit interviews to gain candid
            insights into employee experiences, identify areas for improvement, and
            inform strategies that enhance retention, engagement, and overall
            organizational performance.
          </p>
          <p>
            Talent Acquisition practices are guided by principles of fairness,
            transparency, and equal opportunity, ensuring consistent and merit-based
            hiring processes across subsidiaries and geographies. The HR Department
            is also responsible for ensuring the fulfilment of mandated annual
            e-learning for 100% of staff including modules covering Financial Crime
            Compliance, Data Protection, Fraud Prevention, Information Security, ESG
            and Corporate Social Responsibility as well as targeted induction
            training for new hires to ensure they understand the specific regulatory
            risks associated with their roles.
          </p>

          <h3>Human Rights, Child Labour, and Forced Labour</h3>
          <p>
            EFG Holding maintains a strict zero-tolerance policy toward{' '}
            <a href="https://efgholding.com/en/pages/Child-Labour"
               target="_blank" rel="noreferrer">child labour</a> and forced labour.
            The Firm employs only individuals who meet the legal definition of
            adulthood and ensures that all employment is undertaken on a voluntary
            basis. It upholds the principle that children should be in school and not
            engaged in work that compromises their health, safety, or education. The
            Firm has been a participant in the United Nations Global Compact since
            2011 and a signatory to the Principles for Responsible Investment since
            2018. In alignment with these commitments, EFG Holding has developed ESG
            policies that incorporate due diligence measures addressing child labour
            risks across its operations.
          </p>
          <p>
            EFG Holding aligns its practices with the UN Guiding Principles on
            Business and Human Rights and adheres to applicable national laws in all
            jurisdictions in which it operates. The Firm recognizes human rights as
            universal and inalienable, irrespective of race, gender, nationality,
            religion, or other status. Where{' '}
            <a href="https://efgholding.com/en/pages/Human-Labour-Rights"
               target="_blank" rel="noreferrer">internal policies</a> exceed local
            legal requirements, EFG Holding applies the higher standard to ensure
            enhanced protection of employee rights.
          </p>

          <h3>Inclusion, Diversity &amp; Anti-Harassment</h3>
          <p>
            EFG Holding is dedicated to fostering a safe, inclusive, and respectful
            workplace. Operating across seven countries and with employees from many
            nationalities, the Firm enforces a zero-tolerance policy toward
            discrimination and harassment of any kind, including{' '}
            <a href="https://efgholding.com/en/pages/Sexual-Harassment"
               target="_blank" rel="noreferrer">sexual harassment</a>. All reported
            incidents are treated seriously, investigated promptly, and handled with
            strict confidentiality. Disciplinary measures, up to and including
            termination, are applied where violations are confirmed. The policy
            applies across all work-related environments, including offices, business
            travel, and Firm-sponsored events.
          </p>
          <p>
            In 2021, EFG Holding committed to the{' '}
            <a href="http://weps.org/company/efg-hermes-holding"
               target="_blank" rel="noreferrer">Women’s Empowerment Principles</a>{' '}
            (WEPs), a set of principles that offer guidance to business on how to
            promote gender equality and women’s empowerment in the workplace,
            marketplace, and community. Established by UNGC and UN Women, the WEPs are
            informed by international labour and human rights standards and grounded
            in the recognition that businesses have a stake in, and a responsibility
            for, gender equality and women’s empowerment. By joining the WEP
            community, the Firm signals commitment to this agenda at the highest
            levels of the company and to work collaboratively in multistakeholder
            networks to foster business practices that empower women. These include
            equal pay for work of equal value, gender-responsive supply chain
            practices and zero tolerance against sexual harassment in the workplace.
          </p>

          <h3>Workforce Management and Employee Wellbeing</h3>
          <p>
            Employee turnover and workforce metrics are regularly monitored and
            reported to senior management. Working hours are tracked through
            automated systems, while overtime for non-officers is managed in
            accordance with applicable labour laws. Employees required to work
            official holidays are granted compensatory leave.
          </p>
          <p>
            EFG Holding promotes employee wellbeing through a comprehensive benefits
            framework. This includes access to local and international medical
            insurance plans, coverage for exceptional medical cases, and life
            insurance benefits for employees’ families. Additional support mechanisms
            include interest-free staff loans for personal emergencies, flexible sick
            leave policies, and special leave provisions.
          </p>
          <p>
            The Firm encourages employees to fully utilize their annual leave
            entitlements and promotes work-life balance through flexible working
            arrangements, including remote working options. Employees are required to
            take a minimum 10 consecutive working days of annual leave, reinforcing
            the importance of rest and wellbeing, with adherence monitored as part of
            performance management processes. We also abide by local laws in terms of
            maternity and paternity leave and shift working hours shift in Ramadan to
            accommodate people who are fasting.
          </p>
        </div>
      </article>

      {/* ---- printed pages 96 and 97 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>Information Security &amp; IT</h3>
          <p>
            In 2025, the Information Security agenda focused on strengthening the
            Group’s cyber resilience, safeguarding information assets, and enhancing
            controls related to data confidentiality, integrity, and availability.
            These efforts were guided by the Group’s Information Security and Data
            Protection frameworks and implemented in close coordination with the
            Legal, Compliance, Risk, and Corporate Sustainability &amp; Impact teams
            to ensure consistency, accountability, and alignment with regulatory and
            ESG requirements.
          </p>
          <p>
            The Information Security team played an active role in advancing EFG
            Holding’s sustainability objectives by embedding security-by-design
            principles across systems and operations, enhancing governance and risk
            management practices, and raising organizational awareness around cyber
            and information security risks.
          </p>
          <p>
            EFG Holding and its subsidiaries are committed to safeguarding personal
            data and upholding high standards of privacy across all operations. Data
            protection is embedded within the Group’s corporate responsibility
            framework and governed by a robust oversight structure aligned with the
            local Data Protection laws and also General Data Protection Regulation
            (GDPR) and the evolving regulatory landscapes across our different
            jurisdictions, including Saudi Arabia (PDPL), the UAE (Federal &amp;
            DIFC), and Egypt.
          </p>
          <p>
            Oversight of data protection is anchored at the Board level, supported by
            the Audit Committee and led operationally by the Group Chief Legal &amp;
            Compliance Officer and a dedicated Data Protection Team. This structure
            ensures clear accountability, effective risk management, and continuous
            monitoring of compliance across the Group.
          </p>

          <section className="rp-privacy">
            <h4>Prioritizing Privacy</h4>
            <div className="rp-privacy-body">
              <p>
                In 2025, we went beyond regulatory compliance to build a culture of
                ethical data governance and inclusivity, introducing several
                initiatives that reflect our commitment to responsible data handling
                that respects both legal requirements and the rights of vulnerable
                groups.
              </p>
              <ul className="rp-dots">
                <li>Introduction of the ‘Privacy by Design’ Framework within the project approval phase</li>
                <li>Introduction of bilingual (Arabic/English) consent forms and privacy notices to ensure everyone understands their data rights.</li>
                <li>Implementation of strict protocols for the processing of minors’ data during corporate activities, ensuring full compliance with child protection regulations.</li>
              </ul>
            </div>
          </section>

          <img className="rp-logo rp-logo--float" src={iso27001} width="500" height="500"
               style={{ '--w': '13.84cqw', '--wm': '96px' }} alt="ISO 27001 certified" />
          <p>
            All personal data processing activities are guided by internationally
            recognized data protection principles, including lawfulness, purpose
            limitation, data minimization, accuracy, security, and accountability.
            The Group respects and facilitates data subject rights, including access,
            rectification, erasure, restriction, portability, and objection,
            supported by formal procedures for handling data-related requests within
            regulatory timeframes. To mitigate data protection risks, EFG Holding
            maintains established protocols for data breach management, cross-border
            data transfers, and third-party data processing. Compliance is reinforced
            through regular internal reviews, audits, and assessments, complemented
            by external expertise where required, ensuring the ongoing effectiveness
            and resilience of the Group’s data protection framework.
          </p>
          <p>
            In 2025, the Data Protection Team shifted from reactive compliance to
            proactive governance. Key milestones included the integration of a
            mandatory “Privacy by Design” framework into the Software Development
            Lifecycle (SDLC) for all digital initiatives, and the harmonization of
            compliance standards across multiple jurisdictions. played a key role in
            supporting EFG Holding’s sustainability and governance objectives by
            strengthening data privacy controls, enhancing information security
            practices, and reinforcing compliance with applicable data protection
            regulations. These efforts reflect the team’s tangible achievements in
            safeguarding sensitive information, managing data-related risks, and
            promoting a culture of accountability and trust, which are highlighted
            throughout this Sustainability Report as integral to the Group’s overall
            ESG performance. EFG Holding also successfully maintained the prestigious
            ISO 27001 Information Security Management System (ISMS) certification for
            the second year running, reaffirming its commitment to safeguarding the
            confidentiality, integrity, and availability of its customers’ and
            investors’ information.
          </p>

          <section className="rp-isnum">
            <h4>Information Security by Numbers</h4>
            <dl>
              {secNumbers.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </article>

      {/* ---- printed pages 98 and 99 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <img className="rp-logo rp-logo--float" src={iso20000} width="495" height="500"
               style={{ '--w': '13.59cqw', '--wm': '94px' }} alt="ISO 20000 certified" />
          <p>
            The IT department continues to enhance resource efficiency through
            expanded digitization and the introduction of AI-enabled processes. By
            automating workflows, reducing manual paperwork, and streamlining data
            management, these initiatives improve operational efficiency while
            minimizing resource consumption. AI-driven onboarding also accelerates
            client and employee processes, strengthens accuracy and compliance, and
            supports scalable growth through smarter use of technology. As further
            evidence of our commitment to excellence, our IT department maintains ISO
            20000 Certification for IT Service Management.
          </p>

          <h3>Marketing &amp; Communications</h3>
          <p>
            The Marketing &amp; Communications function continues to advance its ESG
            objectives through a combination of environmental initiatives,
            responsible communication practices, and robust governance frameworks.
            Since 2018, the firm has fully transitioned to digital reporting,
            eliminating printed annual and sustainability reports and significantly
            reducing paper consumption, while promoting responsible printing
            behaviours and implementing recycling programmes across offices and
            events.
          </p>
          <p>
            Sustainability considerations are increasingly embedded in
            communications, with measurable progress achieved across multiple
            channels. Sustainability-related content represented 47% of social media
            output and sustainability themes were also incorporated into 10 press
            releases covering topics such as financial literacy, climate transition,
            and community investment, while ongoing tracking mechanisms have been
            established to monitor ESG-related communications.
          </p>
          <p>
            Progress has also been made toward responsible sourcing, with increased
            volumes of recycled materials, partnerships with sustainability-focused
            suppliers, and the use of eco-friendly promotional items such as recycled
            passport holders and keychains from Upfuse as giveaways for the Future
            Investment Initiative (FII) conference. Governance practices remain
            strong, supported by established brand guidelines, ethical communication
            standards, and rigorous multi-level review processes ensuring alignment
            with corporate values and regulatory requirements. In 2025, the
            percentage of compliance with guidelines was at 100% with zero incidents
            of non-compliance. We also maintain active stakeholder engagement through
            regular communications, feedback mechanisms, and targeted initiatives,
            including financial literacy programmes and investor events. In parallel,
            comprehensive risk management practices are in place, including
            pre-launch campaign assessments, crisis communication protocols, and a
            fully trained response team. The marketing and communications team works
            closely with business lines and subsidiaries to ensure all public-facing
            materials align with brand values and are culturally sensitive.
          </p>

          <h3>Extending Sustainable Influence: <span className="rp-accent">Our Subsidiaries</span></h3>
          <p>
            EFG Holding’s subsidiaries and affiliates operate as a cohesive ecosystem
            that reflects the Group’s sustainability strategy. By embedding ESG
            evaluations into their core activities—from the responsible lending
            practices at Bank NXT to the financial inclusion initiatives of
            Tanmeyah—each entity ensures that the Group’s commitment to integrity is
            reflected in every client relationship.
          </p>

          <h4 className="rp-subhead">Bank NXT</h4>
          <p>
            As EFG Holding’s banking arm, Bank NXT considers ESG a fundamental
            component of its risk management and credit governance frameworks.
            Sustainable finance is a cornerstone of the bank’s mission to foster long
            term economic resilience and inclusive development. ESG criteria is
            integrated into our financing activities to ensure that our investments
            deliver both financial returns and meaningful environmental and social
            benefits. The sustainable finance strategy is underpinned by a thorough
            framework of policies and procedures and an Environmental and Social
            Management Strategy (ESMS) that is seamlessly integrated into the credit
            approval process.
          </p>
          <p>
            Aligned with the latest CBE guidelines and international standards, such
            as the Green Loan Principles (GLP) from the Loan Market Association (LMA)
            and the International Capital Market Association (ICMA), the ESMS enhances
            the bank’s ability to manage environmental and social risks. We adhere to
            responsible lending principles, ensuring that all sustainable projects
            undergo rigorous evaluation, with transparent management of proceeds and
            comprehensive reporting. Bank NXT issues annual sustainability reports and
            CFP reports as part of its commitment to transparency and accountability.
            The Sustainability and Sustainable Finance Committee oversees all
            sustainable finance initiatives, providing strategic direction and
            ensuring alignment with broader ESG goals. This dedicated body
            collaborates with the credit and risk management teams to embed
            environmental and social considerations into decision-making processes.
          </p>
          <p>
            At Bank NXT, risk management is the backbone of our success, anticipating
            challenges and turning them into opportunities. It is not just a
            safeguard but a catalyst, empowering us to innovate and support the
            prosperity of those we serve. However, while risks often highlight
            potential challenges, their flip side reveals powerful avenues for growth
            and innovation. At Bank NXT, we see these opportunities as proactive
            strategies to drive sustainable value and shape the future of banking in
            Egypt.
          </p>

          <h4 className="rp-subhead">Kaf Insurance</h4>
          <p>
            In 2025, Kaf has made significant progress in building and strengthening
            ESG initiatives and dedication to building a robust ESG function,
            tracking key metrics, actively participating in industry initiatives, and
            nurturing ESG performance. Throughout, Kaf remains steadfast in its
            pursuit of sustainable and responsible business practices, firmly
            believing that by integrating ESG principles into operations, the company
            can create long-term value for stakeholders while contributing to a more
            sustainable and equitable future.
          </p>
          <p>
            In 2025, Kaf strengthened its governance structure by significantly
            improving gender diversity at the Board level. Female representation
            increased to 33%, compared to 22.2% in the previous year. This progress
            reflects Kaf’s commitment to ensuring that its leadership embodies diverse
            perspectives, balanced decision-making, and inclusive oversight, all
            essential components of resilient and responsible corporate governance.
          </p>

          <h4 className="rp-subhead">Tanmeyah</h4>
          <p>
            At Tanmeyah, ESG is embedded within strategy and governance frameworks
            rather than treated as compliance reporting. It is also an intrinsic part
            of daily operations and decision-making processes with mandatory
            sustainability training introduced organization wide.
          </p>
          <p>
            Oversight begins at the Board level. Social KPIs reflect Tanmeyah’s
            commitment to inclusive growth, with nearly 50% of the portfolio serving
            youth and a similar proportion supporting female clients. This
            segmentation is not incidental, but the result of clearly defined,
            Board-monitored inclusion objectives embedded within the Company’s
            strategy and performance oversight framework. Client protection principles
            are institutionalized through collaboration with the International Finance
            Corporation (IFC) and alignment with regulatory frameworks, ensuring
            fairness, transparency, and responsible data use across the lending
            lifecycle.
          </p>
        </div>
      </article>

      {/* ---- printed pages 100 and 101 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h4 className="rp-kicker">
            Board engagement on governance and risk oversight is further reinforced
            through:
          </h4>

          <div className="rp-certs">
            {certs.map(([src, caption, alt]) => (
              <figure key={caption}>
                <img src={src} width="700" height="700" alt={alt} />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="rp-certs-note">
            These frameworks strengthen institutional integrity, data protection,
            compliance culture, and operational resilience.
          </p>

          <h3>OLT Investment International</h3>
          <p>
            OLT Investment International (OLT) is an EFG Holding subsidiary and a
            Bahrain-based investment firm owned by EFG Holding. It adheres to the
            regulatory standards set by the Central Bank of Bahrain and is registered
            with the Bahrain Ministry of Industry and Commerce. The firm’s services
            are designed to cater to the diverse needs of its clients, leveraging the
            expertise and resources of the EFG Holding. With a focus on regulatory
            compliance and client satisfaction. This commitment to regulatory
            standards underscores OLT’s dedication to transparency and ethical
            business practices, reinforcing its reputation as a reliable and
            trustworthy investment partners.
          </p>
          <p>
            As a subsidiary of EFG Holding, OLT embodies the core values and strategic
            pillars of its parent company. This includes a commitment to the ESG
            policy established by EFG Holding. By doing so, OLT aims to enhance both
            business and financial performance over the medium and long term.
          </p>

          <h3>Vortex</h3>
          <p>
            True to its core values, Vortex Energy abides by the belief that
            Sustainability and ESG are an evolution, not a revolution. In partnership
            with EFG Holding, Vortex Energy is proud that all its business practices
            are conducted under a robust sustainability framework. Its ESG Policy
            encapsulates the 10 Principles of the United Nations Global Compact (UNGC)
            and serves its responsibilities as a global citizen. Vortex Energy’s
            integrated investment platform supports the construction of sustainable
            infrastructure, and the advancement of efficient technologies required to
            secure our energy future. This year Vortex Energy has focused on the
            roadmap developments of its portfolio companies and the implementation
            frameworks for their sustainability evolution. These policies are relevant
            not only for the circa 800 people employed directly by Vortex Energy’s
            portfolio companies, but thousands more in the supply chains and the
            millions in the communities of their operation.
          </p>

          <h2 className="rp-h-plain">Data Science, AI, and Innovation in Governance</h2>
          <p>
            At EFG Holding, Data Science and Artificial Intelligence (AI) play a
            central role in supporting the Firm’s digital transformation and
            operational efficiency agenda. Our Data Science and Analytics function
            develops advanced analytics, machine learning models, and AI-powered
            solutions that enable data-driven decision-making across the organization.
          </p>

          <p className="rp-ai-band">Our AI strategy focuses on three core objectives:</p>
          <div className="rp-ai-cards">
            {aiObjectives.map((o) => <p key={o}>{o}</p>)}
          </div>

          <p>
            The Data Science and Analytics team works closely with IT, business units,
            and governance teams to ensure that AI solutions are aligned with the
            Firm’s strategic objectives while adhering to internal compliance and risk
            management frameworks within the Firm’s broader data governance and
            cybersecurity frameworks, ensuring that sensitive financial data is
            handled responsibly and securely. AI models and analytical systems are
            developed under strict governance standards that ensure transparency, data
            privacy and protection, human oversight, and bias mitigation and fairness
            checks.
          </p>

          <h3>
            EFG Holding leverages advanced analytics and AI to strengthen operational
            efficiency, in three key areas:
          </h3>
          <div className="rp-ai-areas">
            {aiAreas.map(([title, icon, items]) => (
              <section key={title}>
                <div className="rp-ai-head">
                  <h4>{title}</h4>
                  <img src={icon} width="400" height="400" alt="" />
                </div>
                <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
