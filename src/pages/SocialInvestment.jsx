/**
 * SECTION THREE — SOCIAL INVESTMENT, printed pages 46 to 77.
 *
 * The divider, economic empowerment and Tanmeyah, the fintech ecosystem,
 * investment in healthcare and in education, and the EFG Foundation.
 *
 * Note on where the section starts: the contents gives Social Investment the
 * folio 44, but printed pages 44 and 45 finish the Agri-Tech school and belong
 * to Section Two, which is where they are. The divider is on 46–47.
 *
 * The fintech ecosystem on page 53 is printed as a hub-and-spoke diagram. Here
 * it is the hub and the five platforms it names, without the connecting lines:
 * the lines carry no information a list does not, and every platform's name,
 * colour and description stays real text.
 */
import { Fragment } from 'react';

import SectionOpener from '../components/SectionOpener';

import emblem from '../assets/report/soc/emblem-social.webp';
import illustration48 from '../assets/report/soc/p48-illustration.webp';
import tanmeyahMark from '../assets/report/soc/p49-tanmeyah.webp';
import award49 from '../assets/report/soc/p49-award.webp';
import prod1 from '../assets/report/soc/p50-photo-1.webp';
import prod2 from '../assets/report/soc/p50-photo-2.webp';
import prod3 from '../assets/report/soc/p50-photo-3.webp';
import amanMou from '../assets/report/soc/p51-aman-mou.webp';
import amanBadge from '../assets/report/soc/p51-badge.webp';
import vlens from '../assets/report/soc/p51-vlens.webp';
import misrInsurance from '../assets/report/soc/p51-misr.webp';
import kafMark from '../assets/report/soc/p54-kaf.webp';
import valuMark from '../assets/report/soc/p54-valu.webp';
import signing55 from '../assets/report/soc/p55-signing.webp';
import financeSmes from '../assets/report/soc/p55-efg-finance-smes.webp';
import hermesOne from '../assets/report/soc/p56-hermes-one.webp';
import poster56 from '../assets/report/soc/p56-poster.webp';
import kenzi from '../assets/report/soc/p56-kenzi.webp';
import handIcon57 from '../assets/report/soc/p57-hand.webp';
import dialysis from '../assets/report/soc/p58-dialysis.webp';
import panel59 from '../assets/report/soc/p59-panel.webp';
import signing61 from '../assets/report/soc/p61-signing.webp';
import iconCard from '../assets/report/soc/p62-icon-card.webp';
import iconAdvisory from '../assets/report/soc/p62-icon-advisory.webp';
import healthcareArt from '../assets/report/soc/p62-healthcare.webp';
import smc from '../assets/report/soc/p63-smc.webp';
import alameda from '../assets/report/soc/p63-alameda.webp';
import pharco from '../assets/report/soc/p63-pharco.webp';
import almoosa from '../assets/report/soc/p63-almoosa.webp';
import eepMark from '../assets/report/soc/p65-eep.webp';
import brands66 from '../assets/report/soc/p66-brands.webp';
import ceremony66 from '../assets/report/soc/p66-ceremony.webp';
import sepMark from '../assets/report/soc/p67-sep.webp';
import photo67a from '../assets/report/soc/p67-photo-1.webp';
import photo67b from '../assets/report/soc/p67-photo-2.webp';
import taaleem from '../assets/report/soc/p68-taaleem.webp';
import roboGarden from '../assets/report/soc/p69-robogarden.webp';
import valuTeam from '../assets/report/soc/p70-valu-team.webp';
import staMark from '../assets/report/soc/p70-sta.webp';
import nasra from '../assets/report/soc/p71-nasra.webp';
import student1 from '../assets/report/soc/p71-student-1.webp';
import student2 from '../assets/report/soc/p71-student-2.webp';
import classroom from '../assets/report/soc/p73-classroom.webp';
import foundationMark from '../assets/report/soc/p73-foundation.webp';
import glance1 from '../assets/report/soc/p74-photo-1.webp';
import glance2 from '../assets/report/soc/p74-photo-2.webp';
import glance3 from '../assets/report/soc/p74-photo-3.webp';
import glance4 from '../assets/report/soc/p74-photo-4.webp';
import glance5 from '../assets/report/soc/p74-photo-5.webp';
import academyMark from '../assets/report/soc/p75-academy.webp';
import montessori from '../assets/report/soc/p76-montessori.webp';
import circle1 from '../assets/report/soc/p76-circle-1.webp';
import circle2 from '../assets/report/soc/p76-circle-2.webp';
import circle3 from '../assets/report/soc/p76-circle-3.webp';
import zainab from '../assets/report/soc/p77-zainab.webp';
import alNour from '../assets/report/soc/p77-alnour.webp';
import academyPhoto1 from '../assets/report/soc/p78-photo-1.webp';
import academyPhoto2 from '../assets/report/soc/p78-photo-2.webp';
import growthMark from '../assets/report/soc/p79-growth-icon.webp';

/* ---- printed page 63: the four healthcare advisories --------------------- */
const advisories = [
  ['Advisory on Specialized Medical Company (SMC) IPO',
   'EFG Hermes’s investment banking division successfully completed its advisory on the USD 500 million initial public offering (IPO) of Specialized Medical Company (SMC), one of the leading healthcare providers in the Kingdom of Saudi Arabia, on the Main Market of the Saudi Exchange (Tadawul). SMC is strategically expanding into Northern Riyadh, where rapid urban development creates strong demand for healthcare services. With three additional hospitals, it is expected to capture over 25% of private hospital capacity in the area, establishing a leading position in an underpenetrated region with limited existing healthcare infrastructure.',
   smc, 'SMC Healthcare'],
  ['Advisory on Alameda Healthcare minority investment stake',
   'EFG Hermes’s investment banking division successfully acted as the Sole M&A Financial Advisor on the signing of binding agreements for a USD 190 million minority stake investment in Alameda Healthcare, Egypt’s leading private healthcare group, by Development Partners International (DPI), in partnership with a consortium of leading institutional investors and prominent development finance institutions. This cornerstone foreign direct investment, currently in its final stages, represents the largest of its kind in Egypt’s healthcare sector, reinforcing investor confidence in backing resilient and fast-growing businesses across the country.',
   alameda, 'Alameda'],
  ['Advisory to Pharco Pharmaceuticals',
   'EFG Hermes’s invetment banking division also successful completed its advisory role on a landmark transaction in which Ashmore Investment Saudi Arabia acquired a minority stake in Pharco KSA, the Saudi subsidiary of Pharco Pharmaceuticals, the largest pharmaceutical manufacturer in MENA, through a primary capital increase. The transaction aligns global emerging-market investor capital from Ashmore with a leading regional pharmaceutical platform, facilitating cross-regional investments, technology transfer, manufacturing localization, and supporting Saudi Arabia’s Vision 2030 industrial and healthcare objectives.',
   pharco, 'Pharco Pharmaceuticals'],
  ['Advisory on Almoosa Health IPO',
   'EFG Hermes also successfully completed its advisory on the USD 449 million initial public offering (IPO) of Almoosa Health, a leading healthcare service provider in Saudi Arabia, on the Saudi Exchange. Almoosa Health is one of Saudi Arabia’s leading integrated healthcare providers, earning the trust of millions of families over three decades.',
   almoosa, 'Almoosa Health'],
];

/* ---- printed page 74: the Foundation's year ------------------------------ */
const foundationYear = [
  ['Naga’ El-Fawal & El Deir ISD :',
   '160 fully rebuilt housing units, sanitation serving 15,000 inhabitants & a health unit serving 75,000.',
   glance1, false],
  ['Young Scholars’ Academy :',
   'Over 500 graduates, 50% with disabilities; +600 locals trained in Montessori; 70 employed teachers.',
   glance2, true],
  ['The EFG Hermes ATS-Agri-tech :',
   '29 teachers and admin staff trained; 75 students accepted into first cohort; capacity building for 270 farmers.',
   glance3, false],
  ['Nawara :',
   'Award-winning project teaching women to cultivate aloe vera on rooftops and balconies, transforming unused spaces into sources of income.',
   glance4, true],
  ['Minya University Dialysis Unit :',
   'Pediatric dialysis ward with 14 machines enabling +15,330 sessions annually; Adult ward with 7 new machines enabling +7,644 sessions annually.',
   glance5, false],
];

/* ---- printed page 76 ----------------------------------------------------- */
const montessoriFigures = [
  ['5', 'graduating classes', circle1],
  ['+300', 'enrolled students', circle2],
  ['50%', 'special needs', circle3],
];

/* ---- printed page 50: the three new products ----------------------------- */
/* ---- printed page 57: the social lending pie ------------------------------
 * The print sets the slice percentages as type and the legend as outlines; both
 * are real text here, over a conic gradient in the print's own three greens.
 * Clockwise from twelve: microfinance, health, education. */
const LENDING57 = [
  ['Microfinance', 47, '#54b078'],
  ['Health', 37, '#124734'],
  ['Education', 16, '#b5ffd1'],
];

function pieStops57(slices) {
  let at = 0;
  return { '--stops': slices.map(([, share, colour]) => {
    const from = at; at += share; return `${colour} ${from}% ${at}%`;
  }).join(', ') };
}

function arcLabels57(slices) {
  let at = 0;
  return slices.map(([, share, colour]) => {
    const mid = at + share / 2; at += share;
    return [share, (mid / 100) * 360, colour === '#b5ffd1'];
  });
}

const products = [
  [prod1, '«El Tayar» financing, a Light Vehicles product targeting entrepreneurs requiring mobility solutions to expand and sustain their businesses.', false],
  [prod2, 'A youth-focused financing product in pilot phase, designed to support young entrepreneurs in starting and expanding their businesses.', true],
  [prod3, 'Secured FRA approval for a Revolving Credit product, scheduled for launch shortly. The product is designed to expand Tanmeyah’s addressable market by serving previously underserved segments and increasing repeat utilization, while maintaining disciplined risk oversight.', false],
];

/* ---- printed page 53: the fintech ecosystem ------------------------------ */
const fintech = [
  ['EFG Finance SMEs', '#0372aa', 'Expanded access to formal finance for underserved micro and small enterprises'],
  ['Corp-Solutions', '#36b0c9', 'Channelling capital toward sectors that expand economic participation'],
  ['Kaf', '#831f82', 'Tech-led, affordable insurance for everyday protection'],
  ['Valu', '#ff5100', 'An integrated suite of consumer and merchant solutions promoting financial empowerment and inclusion'],
  ['EFG Hermes ONE', '#5948eb', 'Opening wealth-building opportunities to new investor segments'],
];

export default function SocialInvestment() {
  return (
    <>
      <SectionOpener
        eyebrow="Section Three"
        title={<><span className="so-light">Social</span><br />Investment</>}
        numeral="03"
        emblem={emblem}
        paper="#faf6f3"
      />

      {/* ---- printed page 48 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h1>Social Investment</h1>
          <p>
            EFG Holding’s social investment strategy focuses on driving inclusive
            growth and creating long-term societal value across the communities it
            serves. This section is structured around four areas of focus. It
            begins with economic empowerment, highlighting initiatives that expand
            access to finance, support entrepreneurship, and foster financial
            inclusion across the Firm’s platforms. It then explores investments in
            healthcare and education, demonstrating how strategic partnerships and
            advisory activities contribute to improving access to essential
            services and building human capital across the region. Finally, it
            presents the role of the EFG Foundation, which anchors the Firm’s
            community engagement through targeted, integrated sustainable
            development programmes. Together, these efforts reflect EFG Holding’s
            commitment to advancing social impact alongside business growth.
          </p>
          <img className="rp-figure rp-bleed-img" src={illustration48}
               width="1500" height="620" alt="" />
        </div>
      </article>

      {/* ---- printed page 49 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h2>Economic Empowerment</h2>
          <p>
            Expanding economic opportunity guides our investment approach. By
            channeling capital into SME lending, fintech innovation, and financial
            inclusion platforms, we broaden access to credit and digital financial
            services for underserved individuals and businesses, complemented by
            training and capacity-building initiatives that strengthen long-term
            resilience.
          </p>

          <div className="rp-head-logo">
            <h3>
              Tanmeyah:<br />
              <span className="rp-accent">Creating Real Opportunities</span>
            </h3>
            <img className="rp-logo" src={tanmeyahMark} width="700" height="254"
                 style={{ '--w': '17.6cqw', '--wm': '120px' }} alt="Tanmeyah" />
          </div>

          <p>
            A subsidiary of EFG Finance, Tanmeyah, continues to be a leading
            provider of innovative and integrated financial solutions for micro
            and small business owners and entrepreneurs who have limited or no
            access to traditional banking services. Established to support
            income-generating activities, Tanmeyah operates through an extensive
            branch network across the country, serving clients in both urban and
            rural communities. Its core focus is providing working capital
            financing to help small business owners start, sustain, and grow their
            enterprises, thereby contributing to job creation, household income
            stability, and broader financial inclusion.
          </p>

          <div className="rp-goals">
            <h3>Goals</h3>
            <ul>
              <li>Geographic expansion driving deeper market penetration.</li>
              <li>Digital transformation enhancing scalability and efficiency.</li>
              <li>Product innovation expanding addressable segments.</li>
              <li>Increased economic participation by underrepresented groups such as youth and women.</li>
            </ul>
          </div>

          <p>
            During the reporting period, Tanmeyah continued executing its
            strategic roadmap across customer centricity, digital transformation,
            ESG integration, operational resilience, and stakeholder engagement.
            YTD 2025 reflects a year of strategic consolidation, prioritizing
            portfolio quality, operational discipline, and long-term value
            creation over short-term volume expansion to enable scalable and
            sustainable growth in subsequent periods.
          </p>

          <h3>Customer Excellence &amp; Network Expansion</h3>
          <div className="rp-two rp-two--aside-r">
            <p>
              Tanmeyah was awarded “Excellence in Customer Relationship
              Management” at the MENA Banking Excellence Awards, underscoring its
              ability to scale personalized support across a broad and diverse
              client base. The recognition reflects the Company’s customer-centric
              operating model, anchored in trust, accessibility, financial
              education, and long-term relationship building.
            </p>
            <img className="rp-media rp-media--small" src={award49}
                 width="500" height="375"
                 alt="MENA Banking Excellence Awards 2025" />
          </div>
          <p>
            In 2025, Tanmeyah accelerated its geographic footprint, adding 56 new
            branches (including 17 in Q4 2025) to deepen penetration in remote and
            underserved communities. This disciplined expansion enhances market
            reach while establishing a scalable platform for future portfolio
            growth. Newly opened branches are expected to progressively ramp up
            and contribute to portfolio expansion in the near term.
          </p>
          <p>
            Digitization remained a core strategic pillar. Tanmeyah initiated a
            transformation of its core banking system to improve operational
            efficiency, scalability, and data-driven decision-making. The Company
            also applied for a fintech license and is advancing toward digital
            loan issuance, positioning itself to enhance turnaround times, broaden
            accessibility, and expand technology-enabled distribution channels.
          </p>
        </div>
      </article>

      {/* ---- printed page 50 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>Product Diversification &amp; Market Deepening</h3>
          <p>
            In 2025, the Company initiated several new products that reflect the
            Company’s strategy to develop segment-specific solutions that address
            distinct market needs while contributing to broader economic
            development and job creation. In addition to these three products,
            development work is underway to introduce tailored financial solutions
            for female clients in 2026. Together, these initiatives support
            revenue diversification, improved customer retention, and controlled
            portfolio growth.
          </p>

          <div className="rp-products">
            {products.map(([photo, body, flip], i) => (
              <div className={`rp-product${flip ? ' rp-product--flip' : ''}`} key={i}>
                <img src={photo} width="600" height="551" alt="" />
                <div className="rp-product-box"><p>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* ---- printed page 51 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <img className="rp-figure" src={amanMou} width="1400" height="433"
               alt="Tanmeyah and Aman signing their partnership agreement" />

          <div className="rp-head-logo">
            <h3>Strategic Partnerships &amp; Ecosystem Expansion</h3>
            <img className="rp-logo" src={amanBadge} width="500" height="370"
                 style={{ '--w': '13.6cqw', '--wm': '90px' }} alt="" />
          </div>

          <p>
            Throughout the year, Tanmeyah strengthened its ecosystem through
            targeted strategic partnerships designed to enhance distribution
            efficiency, improve customer accessibility, and support risk-adjusted
            portfolio expansion.
          </p>
          <p>
            From a distribution and collections perspective, the partnership with{' '}
            <strong>Aman</strong> expanded digital repayment channels, increasing
            payment flexibility for customers while supporting collection
            efficiency and operational control. This integration contributes to
            improved customer experience and potential enhancement in portfolio
            quality metrics.
          </p>
          <p>
            On the product front, collaboration with <strong>TotalEnergies</strong>{' '}
            enables the piloting of tailored financing solutions targeting new
            customer segments with identifiable cash-flow characteristics,
            supporting revenue diversification while maintaining underwriting
            discipline. One example is a partnership that empowers ride-hailing
            drivers with vehicle operational expenses. This initiative is a joint
            venture between TotalEnergies and ADNOC Distribution. The partnership
            aims to transform access to vehicle operational expenses, such as
            fuel, lubricants, and car wash services for drivers and aims to
            enhance businesses by offering seamless, affordable solutions for
            vehicle operation. Moreover, central to this strategic partnership is
            a co-branded, cashless financing card developed by TotalEnergies
            Mobility business and financed by Tanmeyah that enables ride hailing
            drivers to cover operational expenses with flexible repayment plans to
            reduce financial pressure.
          </p>

          <div className="rp-two rp-two--aside">
            <img className="rp-media rp-media--small" src={vlens}
                 width="600" height="219" alt="Vlens" />
            <p>
              The partnership with Vlens enhances digital onboarding capabilities,
              reducing acquisition friction, improving turnaround times, and
              strengthening data capture for credit assessment. Over time, this is
              expected to contribute to improved cost efficiency and scalable
              origination capacity.
            </p>
          </div>

          <div className="rp-two rp-two--aside-r">
            <p>
              From a risk management standpoint, Tanmeyah partnered with{' '}
              <strong>Misr Insurance</strong> to introduce a Credit Default
              Guarantee (CDG) mechanism for its Very Small Enterprise (VSE)
              segment. This structure mitigates downside risk exposure while
              enabling expansion into higher-ticket and growth-oriented segments.
              The CDG framework supports portfolio diversification and capital
              optimization, while preserving disciplined cost-of-risk management.
            </p>
            <img className="rp-media rp-media--small" src={misrInsurance}
                 width="600" height="341" alt="Misr Insurance" />
          </div>
        </div>
      </article>

      {/* ---- printed page 52 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <p className="rp-lead rp-lead--sm">
            Collectively, these partnerships reflect Tanmeyah’s strategy of
            combining growth with prudence—expanding its addressable market and
            improving customer accessibility, while reinforcing risk controls,
            operational efficiency, and portfolio sustainability.
          </p>

          <div className="rp-progress">
            <p className="rp-progress-title">
              <b>Tanmeyah</b>2025 Progress at a Glance
            </p>
            <ul>
              <li>56 new branches</li>
              <li>“El Tayar” financing, a Light Vehicles product targeting entrepreneurs requiring mobility solutions</li>
              <li>A youth-focused financing product (pilot phase) to support young entrepreneurs.</li>
              <li>FRA approval for a Revolving Credit product.</li>
            </ul>
            <h3>Partnerships</h3>
            <ul>
              <li><strong>Aman:</strong> expanded digital repayment channels</li>
              <li><strong>TotalEnergies:</strong> tailored financing solutions for new customer segments such as ride-sharing drivers</li>
              <li><strong>Vlens:</strong> enhanced digital onboarding capabilities</li>
              <li><strong>Misr Insurance:</strong> Credit Default Guarantee (CDG) mechanism for Very Small Enterprise (VSE) segment.</li>
            </ul>
          </div>
        </div>
      </article>

      {/* ---- printed page 53 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>EFG Holding: <span className="rp-accent">An Integrated Fintech Ecosystem</span></h3>
          <p className="rp-lead rp-lead--sm">
            By investing in fintech solutions that prioritize digitization, EFG
            Holding helps reduce barriers to entry and broaden participation in
            the formal financial system. This digital approach strengthens
            financial inclusion by making services more accessible, transparent,
            and responsive to evolving customer needs.
          </p>

          <div className="rp-goals">
            <h3>Goals</h3>
            <ul>
              <li>Leveraging digital innovation, tailored financing solutions, and customer-centric products to bridge gaps in access to credit, payments, and formal banking services.</li>
            </ul>
          </div>

          <div className="rp-cols">
            <p>
              EFG Holding brings together a complementary suite of
              technology-enabled platforms designed to broaden access to financial
              services across the lifecycle. Through digital insurance (Kaf),
              consumer finance solutions (Valu), structured and sustainable
              finance advisory (EFG Corp-Solutions), and SME lending (EFG Finance
              SMEs) under the EFG Finance vertical and retail investment access
              (EFG Hermes ONE) under the EFG Hermes vertical, the ecosystem
              addresses different but interconnected financial needs. Together,
              these platforms leverage digitization to reduce barriers, expand
              participation, and promote more inclusive engagement in the formal
              financial system.
            </p>
          </div>

          <p className="rp-hub">The EFG Holding<br />Fintech Ecosystem</p>
          <div className="rp-spokes">
            {fintech.map(([name, colour, body]) => (
              <div className="rp-spoke" key={name}>
                <h4 style={{ color: colour }}>{name}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* ---- printed page 54 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-head-logo">
            <h3>Kaf Insurance</h3>
            <img className="rp-logo" src={kafMark} width="474" height="600"
                 style={{ '--w': '9.4cqw', '--wm': '70px' }} alt="Kaf" />
          </div>
          <p>
            Kaf is a tech-enabled insurance company delivering innovative and
            impactful insurance solutions for the Egyptian market that drive value
            for individuals and businesses in the life and savings arenas. Its
            mission remains rooted in the belief that <em>insurance is a social good</em>.
            By offering financial protection to individuals, families, and
            businesses, Kaf helps strengthen the resilience of communities and
            reduce their vulnerability to financial shocks.
          </p>
          <p>
            Building on the momentum of previous years, where Kaf’s portfolio
            surpassed 2 million insured lives, the company has sustained this
            growth trajectory while deepening service quality and accessibility
            across all segments. In 2025, Kaf expanded its offerings with the
            introduction of SME Life &amp; Health, a comprehensive and accessible
            solution designed to support small and medium enterprises with
            essential protection benefits. By enabling SMEs to provide affordable
            life and health coverage to their employees, Kaf supports healthier,
            more resilient workforces and improves job security across Egypt’s
            business landscape. Kaf also introduced a digitalized medical card for
            Small and Medium Enterprises (SME) product. This digital-first format
            provides clients access to medical benefits directly through QR codes
            and use of the medical card through the app. Kaf has also launched an
            SME portal to generate quotations, manage leads, and issue policies.
            These digital transformations have led to the reduction of paper usage
            and streamlined operations and resource efficiency, presenting an
            example of dematerialization.
          </p>

          <div className="rp-head-logo">
            <h3>Valu</h3>
            <img className="rp-logo" src={valuMark} width="700" height="146"
                 style={{ '--w': '18.5cqw', '--wm': '120px' }} alt="Valu" />
          </div>
          <p>
            Valu entered the market in December 2017 as a disruptive BNPL provider
            and has since evolved into one of the MENA region’s leading universal
            fintech platforms. Today, it stands as a cornerstone of EFG Holding’s
            digital financial ecosystem, offering an integrated suite of consumer
            and merchant solutions that promote financial empowerment and
            inclusion. Through products ranging from flexible BNPL plans and
            high-value financing to investment, payments, Egypt’s most widely
            accepted e-gift card, and payroll and HR solutions. Valu continues to
            redefine convenience, accessibility, and digital financial engagement
            for millions of users.
          </p>
          <p>
            During Q3 2025, Valu maintained its strong growth trajectory,
            supported by rising customer activity, an expanding merchant network,
            and ongoing innovation across its product suite. Loan originations,
            portfolio growth, and transaction volumes all continued to scale,
            underlining Valu’s position as a market leader. The platform also
            sustained high portfolio quality metrics, reflecting disciplined risk
            management and advanced data-driven underwriting that has strengthened
            its ability to serve both banked and unbanked customers. Valu’s
            continued progress illustrates its pivotal role in advancing financial
            inclusion in Egypt while driving sustainable, technology-led growth
            across the broader fintech landscape, reinforcing its position as a
            market leader in consumer finance and digital payment solution.
          </p>
        </div>
      </article>

      {/* ---- printed page 55 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-head-logo">
            <h3>EFG Finance SMEs</h3>
            <img className="rp-logo" src={financeSmes} width="900" height="208"
                 style={{ '--w': '35cqw', '--wm': '180px' }} alt="EFG Finance SMEs" />
          </div>
          <p>
            EFG Finance SMEs was established as an innovative, technology-driven
            financing platform dedicated to empowering small and medium-sized by
            providing accessible working capital, embedded financing, and
            supply-chain funding solutions tailored to their growth needs.
            Licensed by the Financial Regulatory Authority and integrated into the
            broader EFG Finance ecosystem, the platform was designed to bridge a
            key gap in the financial services landscape by serving businesses that
            sit between microfinance and larger corporate financing. By leveraging
            digital channels and streamlined underwriting, EFG Finance SMEs helps
            reduce borrowing friction and expand access to finance for a wider
            range of small and medium businesses across Egypt.
          </p>
          <img className="rp-figure" src={signing55} width="1400" height="1012"
               alt="EFG Finance and Klickit signing their agreement" />
        </div>
      </article>

      {/* ---- printed page 56 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>EFG Corp-Solutions</h3>
          <p>
            In line with the move towards increased digitalization of payments,
            EFG Corp-Solutions has taken on an integral responsibility by
            providing substantial financial support to fintech providers. With
            dedicated finance valued at EGP 470 MM, EFG Corp-Solutions is
            empowering the innovative companies to expand their digital payment
            solutions, further promoting a cashless economy and fostering
            sustainable development. This strategic financing initiative
            underscores EFG Corp-Solutions’ commitment to advancing technological
            innovation while aligning the global ESG standards.
          </p>

          <div className="rp-head-logo">
            <h3>EFG Hermes ONE</h3>
            <img className="rp-logo" src={hermesOne} width="591" height="600"
                 style={{ '--w': '10.9cqw', '--wm': '80px' }} alt="EFG Hermes ONE" />
          </div>
          <p>
            EFG Hermes ONE has made financial markets more accessible to a broader
            population by simplifying the investment process and lowering
            traditional barriers to entry. To raise awareness and encourage
            investment in ESG-related enterprises, EFG Hermes ONE Global Markets
            promotes exchange-traded funds (ETFs) with themes that support impact
            investment such as women, leadership, cybersecurity, healing and
            wellbeing, renewable energy, green transformation, and general ESG.
          </p>

          <div className="rp-two">
            <p>
              To ensure broad inclusivity, the platform offers fully digital
              onboarding with e-KYC, allowing users to open and verify trading
              accounts quickly and without paperwork. This seamless, mobile-first
              experience encourages participation from individuals who might
              otherwise be excluded due to complexity or lack of access to
              conventional brokerage services. Beyond onboarding, the platform
              provides user-friendly tools and insights that help retail investors
              engage with the market confidently, from real-time quotes and
              portfolio tracking to technical analysis features usually available
              only to more experienced traders. Strategic partnerships that enable
              payment innovations further reduce friction in funding accounts,
              expanding access to securities trading for a wider range of users.
            </p>
            <img className="rp-media" src={poster56} width="800" height="761" alt="" />
          </div>

          <div className="rp-two rp-two--aside">
            <img className="rp-media rp-media--small" src={kenzi}
                 width="600" height="457" alt="Kenzi Wealth" />
            <p>
              In 2025, OLT Investments partnered with Kenzi Wealth, a
              distinguished Danish digital wealth management company, to introduce
              an intelligent, risk-based portfolio advisory service. This
              innovative solution delivers highly personalized, risk-optimized
              investment services, empowering clients to grow and safeguard their
              investments amid the complexities of today’s dynamic global markets.
              The mission is to empower investors with clarity and confidence, not
              replace their decision-making. ONE Advisor is a personalized
              advisory service that lowers the barrier to entry by simplifying
              decision-making and providing structured support rooted in
              risk-based financial logic. This model, once reserved for
              ultra-wealthy families or institutions due to its cost and
              complexity, is now democratized through the EFG Hermes ONE platform,
              giving investors access to the same level of portfolio intelligence
              that was previously limited to private banks and elite advisory
              firms. This launch marks a significant step forward in making
              professional-grade portfolio advisory services accessible,
              intuitive, and responsive.
            </p>
          </div>
        </div>
      </article>

      {/* ---- printed page 57 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-progress">
            <p className="rp-progress-title">
              <b>Fintech at EFG Holding</b>2025 Progress at a Glance
            </p>
            <ul>
              <li><strong>Kaf</strong> introduces a digitized medical card for SMEs and the SME Life &amp; Health programme to support SMEs with essential protection benefits.</li>
              <li><strong>Valu</strong> continues to offer innovative solutions across its product suite.</li>
              <li><strong>EFG Hermes ONE</strong> continues to increase the accessibility of financial markets, creating opportunities for saving and growth of wealth through its partnership with Kenzi Wealth, giving investors access to the same level of portfolio intelligence that was previously limited to private banks and elite advisory firms.</li>
              <li><strong>Corp-Solutions</strong> provided EGP 470MM of financing for innovative companies to expand their digital payment solutions.</li>
            </ul>
          </div>

          <h3 className="rp-deep">Bank NXT Social Finance Portfolio</h3>

          <div className="rp-two">
            <div>
              <p>
                At Bank NXT, sustainable finance is a core pillar of our long-term
                strategy, guiding how we allocate capital to generate both
                financial returns and measurable social impact. By embedding ESG
                considerations into lending and investment decisions, we support
                projects that strengthen community resilience, expand access to
                essential services, and contribute to sustainable development.
              </p>
              <p>
                As of Q4 2025, our deployed social financing portfolio reached EGP
                2.458 Bn (including securitization), encompassing 28 projects
                across a variety of sectors, reflecting our commitment to
                supporting projects that drive social sustainability and economic
                resilience. Through strategic investments in healthcare
                facilities, educational institutions, and microfinance, we
                continue to enhance social well-being and drive inclusive
                development across our areas of operation.
              </p>
              <p>
                The exceptional utilization rate of our social financing portfolio
                reflects both the urgent demand for social infrastructure and our
                capacity to identify, structure, and execute high-impact financing
                solutions. This strong deployment performance demonstrates our
                ability to deliver targeted financial support that improves
                quality of life while maintaining disciplined risk management,
                robust financial performance, and effective project execution.
              </p>
              <p>
                Through these initiatives, Bank NXT reinforces its role as a
                catalyst for sustainable and inclusive growth, ensuring that
                capital deployment contributes meaningfully to long-term societal
                value creation.
              </p>
            </div>

            <div>
              <div className="rp-stat rp-stat--inline">
                <div className="rp-stat-fig"><span className="rp-stat-u">EGP 2.458 BN</span></div>
                <img className="rp-icon" src={handIcon57} width="700" height="597"
                     style={{ '--w': '21.68cqw' }} alt="" />
              </div>
              {/* The print sets the three percentages as type on the slices, so
                  they are type here too rather than pixels inside a picture. */}
              <figure className="rp-figure-fig rp-chart">
                <figcaption className="rp-sdg-cap">Social Lending Portofolio (Q4 2025)</figcaption>
                <ul className="rp-key rp-key--row">
                  {LENDING57.map(([label, , colour]) => (
                    <li key={label} style={{ '--k': colour }}>{label}</li>
                  ))}
                </ul>
                <div className="rp-pie" style={pieStops57(LENDING57)}>
                  {arcLabels57(LENDING57).map(([share, angle, dark]) => (
                    <span key={share} className={`rp-arc${dark ? ' rp-arc--dark' : ''}`}
                          style={{ '--a': `${angle}deg` }}>{share}%</span>
                  ))}
                </div>
              </figure>
            </div>
          </div>
        </div>
      </article>

      {/* ---- printed pages 58 and 59 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h2>Investment in Healthcare</h2>
          <p>
            Sustainable funding for health services is essential to building
            resilient communities and ensuring equitable access to care. EFG
            Holding invests in healthcare infrastructure, medical education, and
            services not only to improve individual well-being but also to
            strengthen workforce productivity and long-term economic stability.
          </p>

          <div className="rp-goals">
            <h3>Goals</h3>
            <ul>
              <li>Expand access, improve quality standards, and address critical gaps in available health services.</li>
            </ul>
          </div>

          <h3>Partnerships &amp; Investments for Health</h3>
          <p>
            Through strategic partnerships and targeted investments, EFG Holding
            strengthens healthcare ecosystems and expand access to quality medical
            services. By mobilizing capital and expertise, we support sustainable
            growth, innovation, and long-term resilience across the health sector.
          </p>

          <h3 className="rp-accent">Minya Dialysis Care with the EFG Foundation</h3>

          <div className="rp-two">
            <div>
              <p>
                Over the years, the EFG Foundation has demonstrated unwavering
                commitment to its disease prevention pillar, ensuring sustainable
                investment in critical healthcare infrastructure that saves lives,
                alleviates patient suffering, and strengthens Egypt’s medical
                landscape.
              </p>
              <p>
                Building on the success of its paediatric dialysis ward
                renovation, EFG Foundation has extended its commitment to
                enhancing renal care by spearheading the renovation and equipping
                a new adult dialysis ward at Minya University Hospital. This
                expansion addresses the critical shortage of dialysis services in
                the region, ensuring life-saving treatment for an increasing
                number of patients in need.
              </p>
              <p>
                Egypt has over 60,000 renal failure patients, with Minya
                witnessing a disproportionately high number due to inadequate
                infrastructure, leading to water contamination and chronic kidney
                disease. The existing adult dialysis ward at Minya University
                Hospital serves approximately 240 patients, yet daily demand
                continues to outstrip capacity, leaving a waiting list of 40
                patients in urgent need of care.
              </p>
            </div>
            <img className="rp-media" src={dialysis} width="741" height="900"
                 alt="The dialysis ward at Minya University Hospital" />
          </div>

          <img className="rp-figure" src={panel59} width="1085" height="1500"
               alt="Expanding access to life-saving dialysis care at Minya University Hospital: 60,000+ renal failure patients across Egypt, 240 patients served, 40 on a waiting list; the new ward delivers 7 state-of-the-art dialysis machines running 3 shifts a day and 7,644 additional sessions" />
        </div>
      </article>

      {/* ---- printed pages 60 and 61 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-cols">
            <p>
              To bridge this gap, EFG Foundation is renovating and equipping a new
              adult dialysis ward, significantly expanding service capacity. The
              new ward will include seven state-of-the-art dialysis machines,
              enabling an additional 7,644 dialysis sessions annually. Each
              machine will operate three shifts per day, accommodating more
              patients and reducing waiting times. Additionally, the project
              includes the maintenance and capacity enhancement of the hospital’s
              water pump station to support the increased patient load.
            </p>
            <p>
              Recognizing the broader impact of enhanced medical facilities, EFG
              Foundation is also establishing a fully equipped, state-of-the-art
              laboratory to serve the entire hospital, not just the dialysis unit.
              This laboratory will support diagnostic accuracy, improve treatment
              efficiency, and enhance patient outcomes across various medical
              departments.
            </p>
            <p>
              To ensure the highest standards of patient care and safety, the new
              ward will undergo a full-scale renovation, incorporating
              antibacterial tiling, an upgraded air conditioning system, and a
              modern fire safety system. These improvements will create a safer,
              more efficient, and hygienic treatment environment.
            </p>
          </div>

          <h3>Nurse Training with the Aswan Heart Centre</h3>
          <p>
            The EFG Foundation leveraged its position within the EFG ecosystem to
            act as a convener, bringing together sister companies and affiliated
            foundations to scale impact beyond standalone philanthropy. By uniting
            the efforts of Bank NXT Foundation and Kaf Insurance alongside the
            Magdi Yacoub Heart Foundation, the Foundation transformed a
            single-partner intervention into a multi-stakeholder collaboration.
            This collective model enabled the pooling of financial resources,
            institutional expertise, and shared accountability, maximizing
            outcomes within the healthcare education space.
          </p>

          <div className="rp-two">
            <p>
              This initiative aims to enhance the quality of healthcare services
              provided to patients suffering from cardiovascular diseases. It is
              also a continuation of the EFG Foundation’s partnership with the
              Magdi Yacoub Heart Foundation to support the AHC nurse fellowship
              programme. The fellowship is a highly regarded training programme
              for nurses in Egypt. Each year, 70 nurses from five universities
              across Egypt are selected for intensive training in quality cardiac
              care, utilizing interdisciplinary and participatory methods. The
              programme boasts an impressive retention rate of 80%, with many
              graduates securing full-time positions at AHC and others advancing
              their careers in hospitals nationwide.
            </p>
            <blockquote className="rp-quote rp-quote--right">
              <p>
                ‘Our partnership with the EFG Foundation reinforces our shared
                commitment to training a generation of young nurses to the highest
                international standards, with the aim of improving medical care,
                saving the lives of cardiovascular patients, and contributing to
                building a healthier future for communities in Egypt.’
              </p>
              <p className="rp-quote-name">Dina El Gazzar</p>
              <p className="rp-quote-role">
                VP for Development and Fundraising, Magdi Yacoub Heart Foundation
              </p>
            </blockquote>
          </div>

          <p>
            The advanced training programme follows global best practices and
            includes practical and theoretical learning. It aims to support newly
            graduated nurses transitioning from novices to specialized
            cardiovascular nurses through mentorship, interdisciplinary rounds,
            self-learning modules, and workshops. This collaboration aligns with
            the United Nations Sustainable Development Goals, particularly Goal 3:
            Ensure healthy lives and promote well-being for all.
          </p>

          <img className="rp-figure" src={signing61} width="1400" height="909"
               alt="The EFG Foundation, Bank NXT, Kaf Insurance and the Magdi Yacoub Heart Foundation at the nurse-training partnership" />

          <h3>RX Healthcare Management</h3>
          <p>
            Rx Healthcare Management (RxHM) is a private equity investment
            management firm set up to address the growing demand for high-quality,
            affordable healthcare products and services across Egypt, the MENA
            region and Africa. It invests in highly selective targets, with a clear
            growth trajectory across healthcare verticals, giving investors access
            to unique opportunities across the sector’s value chain. In 2020, RxHM
            acquired medical solutions provider United Pharma (UP), Egypt’s leading
            player in the injectables space by installed capacity with an
            established track record of supplying the Egyptian local market as well
            as exports to key African and Middle East. In 2024, United Pharma
            recorded a significant +57% increase in revenues at the end of the year
            and was well on track to achieve its 2025 targets. Parallel to the
            success of United Pharma, the RxHM platform continues to capitalize on
            lucrative prospects in the hospital serving and other generic pharma
            segments.
          </p>
          <p>
            UpH (Rx Healthcare) recorded a 52% revenue increase in 3Q25 vs. 3Q24,
            maintaining its role as a leading supplier of life-saving IV solutions
            and a stabilizer of Egypt’s hospital pharmaceuticals market. Growth was
            driven by new product launches and diversification of distribution
            channels. Export sales surged by 194% YoY in 3Q25. UpH is
            well-positioned for strong FY25 performance, supported by continued
            export traction, portfolio and product mix optimization, competitive
            pricing, and a wide range of new product offerings.
          </p>
        </div>
      </article>

      {/* ---- printed pages 62 and 63 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <img className="rp-icon" src={iconCard} alt="" />
          <h3>Affordable Healthcare Payment Solutions with Valu</h3>
          <p>
            In 2025, Valu partnered with Vezeeta Lab, the innovation arm of MENA’s
            leading health-tech platform Vezeeta to expand access to affordable and
            seamless healthcare services across Egypt. The partnership aims to
            integrate flexible fintech solutions into the healthcare ecosystem,
            reducing financial barriers for millions of patients. Through this
            collaboration, Valu will offer flexible payment plans for Vezeeta’s
            services, including the Shamel programme, a subscription model that
            provides up to 80% discounts on surgeries, diagnostics, consultations,
            dentistry, and in-clinic services through a network of more than 8,000
            healthcare providers. This initiative supports the growing need for
            accessible healthcare in Egypt, where private health insurance coverage
            remains limited and out-of-pocket healthcare spending is high. By
            integrating fintech capabilities with health-tech services, the
            partnership contributes to enhancing affordability, expanding access,
            and improving overall patient experience within the healthcare sector.
          </p>

          <img className="rp-icon" src={iconAdvisory} alt="" />
          <h3>Advisory Services for Healthcare Projects</h3>
          <p>
            Our Investment Banking arm plays a key role in mobilizing capital and
            structuring transactions that strengthen the healthcare sector. Through
            strategic advisory, capital raising, and M&amp;A support, we help
            healthcare providers expand capacity, enhance operational efficiency,
            and scale sustainable models of care. By connecting investors with
            high-potential healthcare platforms, these efforts contribute to
            improved access, stronger governance, and long-term resilience across
            the sector.
          </p>

          <div className="rp-advisories">
            {advisories.map(([title, body, logo, alt]) => (
              <div className="rp-advisory" key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
                <img src={logo} alt={alt} />
              </div>
            ))}
          </div>

          <img className="rp-figure rp-bleed-img" src={healthcareArt}
               width="1300" height="715" alt="" />
        </div>
      </article>

      {/* ---- printed pages 64 and 65 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-progress">
            <p className="rp-progress-title">
              <b>Healthcare Investment</b>2025 Progress at a Glance
            </p>
            <h3>Investments &amp; Partnerships</h3>
            <ul>
              <li>New dialysis ward at Minya University Hospital enabling an additional 7,644 dialysis sessions annually.</li>
              <li>70 nurses trained annually for the Aswan Heart Centre through partnership between the EFG Foundation, Bank NXT, Kaf &amp; the Magdi Yacoub Heart Centre.</li>
              <li>52% revenue increase for UpH (Rx Healthcare) in 3Q25 vs. 3Q24, maintaining its role as a leading supplier of life-saving IV solutions.</li>
              <li>Partnership between Valu and Vezeeta to facilitate healthcare payment solutions.</li>
            </ul>
            <h3>Advisory</h3>
            <ul>
              <li>Advisory on USD 500 MM IPO of Specialized Medical Company (SMC) in KSA.</li>
              <li>Sole M&amp;A Financial Advisor on a strategic investment by Development Partners International (DPI) of USD 190 MM Minority Stake in Alameda Healthcare, Egypt.</li>
              <li>Supported Ashmore Investment Saudi Arabia’s minority acquisition in Pharco KSA.</li>
              <li>Advisory on USD 449 MM IPO of Almoosa Health, Saudi Arabia.</li>
            </ul>
          </div>

          <h2>Investment in Education</h2>
          <p className="rp-lead rp-lead--sm">
            EFG Holding supports education through focused, long-term investment
            in programmes that improve access and raise standards. Working with
            trusted partners, the Group channels funding and expertise toward
            strengthening schools, supporting students, and addressing gaps in
            Egypt and beyond. This approach reflects a clear view that meaningful
            economic progress depends on practical, sustained investment in
            learning.
          </p>

          <h3>Mobilizing Capital for Education</h3>
          <p className="rp-lead rp-lead--sm">
            EFG Holding mobilizes capital for education by combining asset
            management advisory expertise with targeted private equity investment.
            This integrated approach supports the expansion, institutionalization,
            and long-term sustainability of education providers and channels
            capital into a sector that underpins human development and inclusive
            economic growth.
          </p>

          <div className="rp-goals">
            <h3>Goals</h3>
            <ul>
              <li>Build Scalable Education Platforms through targeted investment and advisory services.</li>
              <li>Strengthen high-quality education providers across the region.</li>
            </ul>
          </div>

          <h3>Private Equity: <span className="rp-accent">Scaling Education Platforms</span></h3>
          <p className="rp-lead rp-lead--sm">
            EFG Hermes’s private equity strategy plays a catalytic role in
            expanding access to quality education across the region. Through
            dedicated investment vehicles such as the Egypt Education Platform and
            the Saudi-based Spark Education Platform, the Group deploys long-term
            capital to build, consolidate, and institutionalize high-quality
            education providers.
          </p>
          <p className="rp-lead rp-lead--sm">
            These platforms are designed to move beyond single-asset investments,
            creating scalable networks of schools and education services that
            benefit from stronger governance, operational efficiencies, and
            improved academic standards. By combining capital with active
            ownership, strategic oversight, and sector expertise, private equity
            investments help education operators expand responsibly, enhance
            learning environments, and deliver sustainable growth.
          </p>

          <div className="rp-two rp-two--aside-r">
            <p className="rp-lead rp-lead--sm">
              The Egypt Education Platform, established in 2018, is supported by
              regional and global investors, including EFG Hermes’ Private Equity,
              The Sovereign Fund of Egypt (TSFE), and GEMS Education Global. With a
              focused vision and skilled management, the EEP is rapidly becoming a
              leading educational provider in Egypt. Today, the EEP’s portfolio
              comprises over 25 assets across Egypt with a combined capacity of
              approximately 25,000 students, an education content business that
              serves between 3 and 4 million students annually, and a specialized
              transportation business that transports over 3,000 students daily.
              The platform operates in the Egyptian market under 6 different
              verticals and brand names including GEMS International Schools, Hayah
              Schools, Prime International Language Schools, Trillium Preschools,
              Selah El Telmeez, and Option Travel.
            </p>
            <img className="rp-media rp-media--small" src={eepMark}
                 width="800" height="317" alt="Egypt Education Platform" />
          </div>
        </div>
      </article>

      {/* ---- printed pages 66 and 67 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-two">
            <p>
              In 2025, the EEP announced the signing of a strategic alliance with
              Talaat Mostafa Group (TMG) to establish a flagship private university
              within Noor City (Noor), one of TMG’s fully integrated master
              developments located East of Cairo. The new university will be
              developed on a dedicated land plot within Noor and will provide
              high-quality education across various faculties, supported by
              international academic affiliations. This project aims to meet the
              increasing demand for private higher education in Greater Cairo,
              particularly in East Cairo, which continues to experience strong
              population growth, rising household incomes, and a limited number of
              premium private universities. The partnership marks EEP’s entry into
              the vastly growing higher education sector and builds on the
              successful collaboration between EEP and TMG, which includes five
              schools that currently serve around 9k students across TMG’s growing
              communities in Madinaty and El Rehab cities. These assets have
              demonstrated strong operational performance and reflect both parties’
              shared commitment to delivering high-quality education offerings
              within TMG’s communities.
            </p>
            <blockquote className="rp-quote rp-quote--right">
              <p>
                ‘This joint venture with Talaat Moustafa Group represents a defining
                milestone for Egypt Education Platform as we enter the higher
                education sector. Building on our successful collaboration across
                K-12 education, this flagship university in Noor City allows us to
                extend our integrated education ecosystem into tertiary education,
                supported by international academic partners and world-class
                infrastructure. We are proud to partner once again with TMG and EFG
                Hermes to deliver a differentiated, future-focused university that
                responds to Egypt’s growing demand for premium private higher
                education and reinforces our long-term growth ambitions.’
              </p>
              <p className="rp-quote-name">Ahmed Wahby</p>
              <p className="rp-quote-role">Executive Chairman, EEP</p>
            </blockquote>
          </div>

          <img className="rp-figure" src={brands66} width="1300" height="347"
               alt="GEMS Education Egypt, Prime National Language Schools, Selah El Telmeez, Petals, Trillium and Option Travel" />
          <img className="rp-figure" src={ceremony66} width="1400" height="595"
               alt="The official opening ceremony of GEMS American International School Riyadh" />

          <img className="rp-logo" src={sepMark} width="800" height="247"
               style={{ '--w': '19.5cqw', '--wm': '130px' }} alt="Spark Education Platform" />

          <div className="rp-cols">
            <p>
              In November 2024, the Private Equity arm of EFG Hermes launched a USD
              300MM Saudi Education Fund (SEF) with the target of building an
              institutional world-class K-12 operator in the Kingdom of Saudi
              Arabia. As part of the SEF, the Spark Education Platform is poised to
              drive transformative change in the education landscape. SEP is one of
              the fastest growing K-12 regional school operators. Its portfolio
              comprises four schools with a capacity surpassing 10,000 students and
              targeting to grow to over 20 schools with 20,000 enrolled students
              spreading across KSA and the GCC over the coming five years. With a
              strong focus on world-class academic standards and innovation, SEP is
              committed to providing accessible and high-quality education to
              schools across its network in the Middle East. Backed up by the
              leadership team of the EEP, the SEP is set to replicate the success of
              EEP’s model across the region, bringing a wealth of expertise and a
              proven track record in delivering world-class education.
            </p>
            <p>
              In 2025, the SEP consolidated its position in the KSA education market
              with the acquisition of a majority stake in Qimam El Hayat
              International School in Riyadh, a full K-12 educational institution
              with a total capacity of 3,000 students, offering the American
              Curriculum. The SEP also signed a strategic partnership with First
              School Management (FSM) by GEMS Education to launch GEMS-branded
              schools in KSA and Bahrain. In November 2025, the first school, GEMS
              American International School Riyadh (GAISR), was inaugurated and the
              ground-breaking of GEMS British International School Riyadh (GBISR)
              was also celebrated, marking a milestone in educational development in
              the Kingdom.
            </p>
          </div>

          <div className="rp-tiles rp-tiles--two">
            <img className="rp-media" src={photo67a} width="800" height="490"
                 alt="The ribbon-cutting at GEMS American International School Riyadh" />
            <img className="rp-media" src={photo67b} width="800" height="486"
                 alt="Inside the new school" />
          </div>

          <h3>Asset Management: <span className="rp-accent">Advisory Services for the Education Sector</span></h3>
          <p>
            EFG Hermes Asset Management’s advisory work in the education sector
            reflects a clear alignment between commercial strategy and ESG
            priorities. By advising on transactions, capital structuring, and growth
            strategies for education providers, the business has helped mobilize
            long-term investment into schools, higher education institutions, and
            training platforms—sectors that directly contribute to human capital
            development and social mobility.
          </p>
          <p>
            From an ESG perspective, these mandates go beyond financial returns.
            They support the expansion of quality educational infrastructure,
            improve governance and operational standards within institutions, and
            strengthen access to learning across different income segments. By
            embedding responsible investment principles and robust due diligence
            into advisory processes, Asset Management helps ensure that capital
            deployed into education delivers measurable social impact alongside
            sustainable financial performance.
          </p>
        </div>
      </article>

      {/* ---- printed pages 68 and 69 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <img className="rp-logo" src={taaleem} width="800" height="310"
               style={{ '--w': '19.2cqw', '--wm': '130px' }} alt="Taaleem" />
          <p>
            A case in point is our advisory role on the Accelerated Bookbuild (ABB)
            for StonePine Ace Partners’ sale of its 7% stake in Taaleem Management
            Services (TALM.CA), the leading higher education platform in Egypt,
            marking the fund’s successful exit from the company. EFG Hermes acted
            as the sole financial advisor and sole bookrunner on the transaction.
          </p>
          <p>
            The deal underscores EFG Hermes’ ability to deliver swift monetization
            options and reflects the sustained investor interest in the country’s
            education sector.
          </p>

          <div className="rp-progress">
            <p className="rp-progress-title">
              <b>Mobilizing Capital for Education</b>2025 Progress at a Glance
            </p>
            <h3>Investments</h3>
            <ul>
              <li>EEP strategic alliance with Talaat Mostafa Group (TMG) to establish a flagship private university within Noor City (Noor)</li>
              <li>SEP acquisition of a majority stake in Qimam El Hayat International School in Riyadh</li>
              <li>Inauguration of GEMS American International School Riyadh (GAISR)</li>
              <li>Ground-breaking ceremony for GEMS British International School Riyadh (GBISR)</li>
            </ul>
            <h3>Advisory</h3>
            <ul>
              <li>Advisory role on the Accelerated Bookbuild (ABB) for StonePine Ace Partners’ sale of its 7% stake in Taaleem Management Services (TALM.CA)</li>
            </ul>
          </div>

          <h3>Innovative Education Partnerships</h3>
          <p>
            Through innovative partnerships with operators, investors, technology
            providers, and community stakeholders, we combine capital, expertise,
            and digital solutions to strengthen education delivery models.
          </p>

          <div className="rp-goals">
            <h3>Goals</h3>
            <ul>
              <li>Leverage networks to create partnerships that provide innovative education solutions.</li>
            </ul>
          </div>

          <h3>Vocational Training with the EFG Foundation</h3>
          <div className="rp-cols">
            <p>
              As part of the EFG Foundation’s continued commitment to the Education
              for All programme, the Foundation expanded its support for
              underprivileged youth by sponsoring students along their educational
              journey, ensuring that financial barriers do not hinder access to
              learning opportunities or disrupt academic progress. Building on last
              year’s intervention, which focused on supporting financially
              vulnerable university students, the Foundation extended this
              initiative during the academic year 2025/2026 to include students
              enrolled in technical and vocational education. In this context, the
              Foundation provided full educational sponsorship to 50 students at the
              El-Saf Training Center for Vocational Education &amp; Training,
              following a joint field assessment conducted with the center’s
              administration and its industrial partner to identify the most
              financially vulnerable students. This support aims to empower youth
              from underserved communities by enabling uninterrupted access to
              quality vocational education, equipping them with practical skills
              aligned with labour market needs, and contributing to their long-term
              economic inclusion and employability.
            </p>
          </div>

          <div className="rp-head-logo">
            <h3>AI Edtech with Valu</h3>
            <img className="rp-logo" src={roboGarden} width="900" height="236"
                 style={{ '--w': '27cqw', '--wm': '160px' }} alt="RoboGarden Egypt" />
          </div>
          <p>
            One of Valu’s key strengths is initiating partnerships that contribute
            to increased access to financing and the creation of economic
            opportunity. In 2025, Valu partnered with RoboGarden Egypt, an
            AI-powered EdTech platform, to support the “Learn to Earn” digital
            training initiative through flexible payment solutions. The programme is
            designed to equip Egyptian youth, especially women and individuals with
            disabilities, with market-relevant digital and technical skills using a
            hybrid learning model that includes self-paced modules, live virtual
            sessions, and in-person workshops.
          </p>
        </div>
      </article>

      {/* ---- printed pages 70 and 71 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <p>
            The initiative provides practical training tracks such as web
            development and awards certificates to participants who complete 75% of
            the coursework, with progress monitored through assessments, attendance,
            and platform analytics. A total of five cohorts will be delivered, each
            comprising 25 participants, reaching 125 learners. This partnership
            addresses a critical national challenge, as a significant proportion of
            Egyptian graduates face difficulty securing employment due to a skills
            gap between academic education and labour market needs. By enhancing
            access to digital and vocational training, the initiative contributes to
            improving workforce readiness and supporting broader economic and social
            inclusion in Egypt.
          </p>
          <p>
            The first offline session of the Learn to Earn cohort was successfully
            held at Valu Café, where participants engaged in interactive sessions
            within a dynamic and collaborative environment, reflecting strong levels
            of enthusiasm and engagement.
          </p>

          <img className="rp-figure" src={valuTeam} width="1400" height="550"
               alt="The first Learn to Earn session at Valu Café" />

          <div className="rp-head-logo">
            <h3>Technical Education with Bank NXT</h3>
            <img className="rp-logo" src={staMark} width="800" height="410"
                 style={{ '--w': '16.2cqw', '--wm': '120px' }} alt="Elsewedy Technical Academy" />
          </div>

          <div className="rp-two">
            <div>
              <p>
                Bank NXT in collaboration with the Bank NXT Foundation for Community
                Development has signed a strategic partnership with Elsewedy
                Technical Academy (STA) to sponsor 52 students across three academic
                classes over a three-year period. The partnership comes as part of
                the bank’s ongoing commitment to supporting technical education in
                electrical engineering technology and programming, and to equipping
                young people with future-ready skills aligned with labour market
                needs.
              </p>
              <p>
                The initiative reflects Bank NXT’s firm belief in the pivotal role
                of high-quality technical education in driving economic development.
                Through this sponsorship, students will gain access to advanced
                technical training programmes designed to prepare them to contribute
                effectively to vital industrial sectors and the energy industry.
              </p>
            </div>
            <blockquote className="rp-quote rp-quote--right">
              <p>
                ‘At Bank NXT, we firmly believe that investing in education,
                particularly technical and applied education, is a direct investment
                in Egypt’s future. Our collaboration with Elsewedy Technical
                Academy, through both the bank and its foundation, is aligned with
                our objectives to provide students with practical skills, knowledge,
                and opportunities that enable them to become active and impactful
                contributors to the national economy.’
              </p>
              <p className="rp-quote-name">Tamer Seif</p>
              <p className="rp-quote-role">CEO and Managing Director, Bank NXT</p>
            </blockquote>
          </div>

          <div className="rp-head-logo">
            <h3>Education Trust Nasra School</h3>
            <img className="rp-logo" src={nasra} width="600" height="490"
                 style={{ '--w': '14cqw', '--wm': '90px' }} alt="Nasra School" />
          </div>
          <p>
            In 2022, EFG Hermes partnered with Education Trust Nasra Schools (ETNS)
            to offer need-based scholarships to students from low-income families.
            This three-year commitment has supported 50 students each year, covering
            tuition fees, academic resources, and cocurricular needs ensuring no
            child is left behind due to financial hardship. Over a period of three
            years, EFG Hermes has contributed PKR 7.37 million, ensuring not only
            retention in school but also the opportunity to pursue academic
            excellence and personal growth.
          </p>

          <div className="rp-ruled">
            <h3>ETNS x EFG Hermes<br /><span className="rp-accent">Stories of Change</span></h3>
            <u aria-hidden="true" /><i aria-hidden="true" />
          </div>

          <div className="rp-two">
            <p className="rp-story">
              I am Ayesha Kamran, a student of Class X (AKUEB) Malir Campus. I am
              sincerely thankful for being awarded this scholarship. It has eased the
              financial burden on my family and allowed me to fully concentrate on my
              education. With this support, I have improved in my studies and
              achieved better grades. This encouragement has boosted my confidence
              and motivates me to keep striving for excellence. Thank you, Education
              Trust Nasra School and EFG Hermes, for this scholarship.
            </p>
            <img className="rp-media" src={student1} width="676" height="700"
                 alt="Ayesha Kamran" />
          </div>

          <div className="rp-two">
            <img className="rp-media" src={student2} width="681" height="700"
                 alt="Muhammad Hassan Khan" />
            <p className="rp-story">
              I am Muhammad Hassan Khan, I study in class III student at Nasra School
              North Karachi Campus. The scholarship has removed financial stress for
              my family and allowed me to stay focused on my studies. It has made me
              more confident and motivated to do well in class. I thank Nasra School
              and EG Hermes for supporting my education and helping me grow.
            </p>
          </div>
        </div>
      </article>

      {/* ---- printed pages 72 and 73 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-progress">
            <p className="rp-progress-title">
              <b>Education Partnerships</b>2025 Progress at a Glance
            </p>
            <ul>
              <li><strong>The EFG Foundation:</strong> Full educational sponsorship for 50 students at the El-Saf Training Center for Vocational Education &amp; Training solutions.</li>
              <li><strong>Valu:</strong> Sponsorship of five cohorts of 25 students each at RoboGarden Egypt.</li>
              <li><strong>Bank NXT:</strong> Partnership with Elsewedy Technical Academy to sponsor 52 students across three academic classes over a three-year period.</li>
              <li><strong>ETNS:</strong> 50 needs-based scholarships for low income students.</li>
            </ul>
          </div>

          <img className="rp-figure" src={classroom} width="1400" height="839"
               alt="Students at the Young Scholars’ Academy" />

          <h3>The EFG Foundation: <span className="rp-accent">Integrated Sustainable Development</span></h3>
          <p>
            The EFG Foundation serves as the Group’s primary vehicle for structured
            social investment, channelling resources and expertise toward inclusive,
            community-driven development.
          </p>

          <div className="rp-goals">
            <h3>Goals</h3>
            <ul>
              <li>Poverty alleviation, youth development, and disease prevention with climate action a cross-cutting theme that informs all projects and programmes.</li>
            </ul>
          </div>

          <img className="rp-logo" src={foundationMark} width="1100" height="158"
               style={{ '--w': '49.4cqw', '--wm': '220px' }} alt="EFG Foundation" />

          <div className="rp-cols">
            <p>
              Anchored in a commitment to long-term impact through integrated
              sustainable development (ISD), the Foundation focuses on expanding
              access to quality education, strengthening healthcare services, and
              advancing economic empowerment for underserved communities. Through
              strategic partnerships with local NGOs and development organizations,
              the Foundation supports programmes that address systemic gaps and
              deliver measurable outcomes. Its initiatives prioritize
              capacity-building and sustainability, ensuring that support extends
              beyond one-off contributions to create enduring social value. By
              aligning philanthropic efforts with the Group’s broader sustainability
              strategy, the EFG Foundation reinforces the belief that responsible
              business growth must be accompanied by tangible social progress.
            </p>
          </div>

          <p>
            Today, the Foundation is proud to have reached over 500,000
            beneficiaries across Egypt thanks to its pioneering approach and
            innovative ISD initiatives. Each project undergoes extensive vetting to
            ensure that it fulfils the Foundation’s goals and objectives and over
            the years, many have won awards. It is not these accolades, however,
            that we consider a measure of success, it is the tangible improvement in
            people’s lives that is the true benchmark that we hold ourselves to.
          </p>
          <p>
            Over the years, the Foundation has implemented a wide range of projects
            aimed at strengthening communities and expanding access to opportunity.
            The progress highlighted here represents just a snapshot of that broader
            body of work and reflects the Foundation’s continued focus on creating
            meaningful, lasting impact across education, healthcare, and economic
            empowerment.
          </p>
        </div>
      </article>

      {/* ---- printed pages 74 and 75 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <p className="rp-glance-head">
            <b>The EFG Foundation</b>2025 Progress at a Glance
          </p>

          <div className="rp-glances">
            {foundationYear.map(([title, lines, photo, flip]) => (
              <div className={`rp-glance-row${flip ? ' rp-glance-row--flip' : ''}`} key={title}>
                <div className="rp-glance-box">
                  <h3>{title}</h3>
                  <p>{lines}</p>
                </div>
                <img src={photo} width="700" height="500" alt="" />
              </div>
            ))}
          </div>

          <h3>The Young Scholars’ Academy</h3>
          <p>
            Since 2017, the EFG Foundation has been committed to its biggest and
            most ambitious ISD project to date, the Naga’ El Fawal &amp; El Deir
            Village (Esna, Luxor), where the Young Scholars’ Academy continues to be
            a catalyst for change and opportunity within the community.
          </p>

          <div className="rp-goals">
            <h3>Goals</h3>
            <ul>
              <li>Provide community children with an exceptional start in life.</li>
              <li>Create sustainable job opportunities within the community.</li>
              <li>Provide quality care and education for children with disabilities.</li>
            </ul>
          </div>

          <div className="rp-head-logo">
            <img className="rp-logo" src={academyMark} width="600" height="492"
                 style={{ '--w': '11.5cqw', '--wm': '80px' }} alt="Young Scholars’ Academy" />
            <h3>Setting a standard for community-driven inclusive education.</h3>
          </div>
          <p>
            As the first nursery of its kind within the community, the Academy
            operates under an inclusive Montessori system designed to accommodate
            all children regardless of ability. With sustained growth in enrolment
            and increasing demand extending beyond Naga’a El-Fawal and El Deir, the
            Academy has evolved into a regional educational hub, attracting families
            from across Luxor Governorate. In response, the Foundation continues to
            expand and strengthen the Academy’s capacity to serve a broader segment
            of marginalized families.
          </p>
        </div>
      </article>

      {/* ---- printed pages 76 and 77 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>Championing Disability-Inclusive Learning</h3>
          <div className="rp-cols">
            <p>
              In rural communities across Upper Egypt, access to specialized
              educational and developmental services remains extremely limited.
              Families often face long travel distances, high costs, and a shortage
              of trained professionals, making consistent support for children with
              disabilities difficult to secure. As a result, many children are
              excluded from formal education or lack the tailored assistance required
              to reach their full potential. By establishing locally accessible,
              integrated services, the Foundation addresses a critical and largely
              unmet need, ensuring that children in these communities receive the
              structured support and inclusive learning opportunities they deserve.
            </p>
            <p>
              Since its inception, the EFG Foundation has taken an early and active
              role in promoting inclusive learning within the communities it serves.
              Recognizing the gaps in access to quality education, particularly for
              persons with disabilities (PWD), the Foundation adopted the Montessori
              model as the optimum system for the Young Scholars’ Academy.
            </p>
            <p>
              It addresses the needs of children with disabilities and integrates
              specialized care, tailoring teaching methods with mainstream academic
              instruction. Rather than treating inclusion as a secondary objective,
              it has embedded accessibility and individualized support into the
              design of its education initiatives. This long-standing commitment has
              positioned the Foundation as a practical leader in advancing inclusive
              education that is both sustainable and community based.
            </p>
          </div>

          <div className="rp-montessori">
            <img src={montessori} width="738" height="900"
                 alt="Montessori Education — a pioneering approach in Upper Egypt, Young Scholars’ Academy" />
            <div className="rp-mfigures">
              {montessoriFigures.map(([figure, label, photo]) => (
                <div className="rp-mfigure" key={label}>
                  <img src={photo} width="500" height="490" alt="" />
                  <div><b>{figure}</b><span>{label}</span></div>
                </div>
              ))}
            </div>
          </div>

          <p>
            One of the most rewarding outcomes of this work has been watching local
            residents grow into confident teachers, specialists, and administrators.
            Many began with limited formal training, yet through continuous
            capacity-building and hands-on experience, they have developed the skills
            and assurance to lead classrooms and manage programmes with
            professionalism and care. Seeing familiar faces from the community step
            into these roles has been deeply heartening. It is a reminder that
            lasting impact is not only measured in delivered services, but in people
            empowered to sustain and strengthen their own communities.
          </p>

          <div className="rp-two">
            <img className="rp-media" src={zainab} width="666" height="800"
                 alt="Zainab Abdelbaset" />
            <blockquote className="rp-quote rp-quote--cream rp-quote--right">
              <p className="rp-quote-lead">
                Zainab’s journey: From teacher to academic and administrative
                supervisor leading our PWD and Montessori programmes.
              </p>
              <p>
                «The Academy is unlike any other place – it’s the first nursery in
                Esna to truly embrace and integrate children with disabilities.
                Before joining, I viewed people with disabilities through a lens of
                pity, but being here completely changed my perspective. I’ve learned
                what true empowerment means and how to support each child’s unique
                needs. This shift isn’t just personal; I also see it happening in
                parents and in our community. The Academy is creating a space where
                every child has the chance to learn, grow, and belong.»
              </p>
              <p className="rp-quote-name">Zainab Abdelbaset,</p>
              <p className="rp-quote-role">Supervisor, Young Scholars’ Academy</p>
            </blockquote>
          </div>

          <div className="rp-two rp-two--aside-r">
            <div>
              <p>
                To further enhance the quality of care for children with
                disabilities, this year the Academy expanded the enrolment of
                children with special needs from 50 to 80 students (60% increase) and
                introduced a dual-session model within the PWD programme. It now
                operates across a morning and an afternoon cohort, allowing the
                Academy to accommodate a larger number of students while preserving
                optimal teacher-to-student ratios, currently at 73 teachers to 132
                students. This structure ensures more individualized attention,
                tailored learning plans, and a more impactful educational experience
                for each child.
              </p>
              <p>
                EFG Foundation also partnered with Al Nour wal Amal Association to
                strengthen the Young Scholars’ Academy’s capacity to serve children
                with visual impairments, an area of urgent and unmet need within the
                surrounding community.
              </p>
              <p>
                Scheduled for Q1 2026, the partnership will deliver specialized
                training for Young Scholars’ Academy teachers on visual impairment,
                equipping them with the practical tools, methodologies, and classroom
                adaptations required to support visually impaired children within an
                inclusive learning environment. This intervention will diversify the
                Academy’s disability inclusion capabilities, enabling it to respond
                more holistically to the needs of children with different abilities
                and reinforcing its role as a community-based inclusive education
                model.
              </p>
            </div>
            <img className="rp-media rp-media--small" src={alNour}
                 width="582" height="600" alt="Al Nour wal Amal Association" />
          </div>
        </div>
      </article>

      {/* ---- printed pages 78 and 79 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <p>
            Beyond capacity building, the Foundation also funded the production
            activities carried out by individuals with visual impairments through
            Noor &amp; Amal, directly supporting livelihoods while promoting the arts
            as a pathway for empowerment.
          </p>
          <p>
            This partnership reflects EFG Foundation’s integrated approach and
            underscores its belief that empowering persons with disabilities is not
            only a social imperative, but a catalyst for stronger, more inclusive
            communities.
          </p>

          <div className="rp-pair">
            <img src={academyPhoto1} width="800" height="756"
                 alt="A child at work with Montessori materials at the Young Scholars’ Academy" />
            <img src={academyPhoto2} width="800" height="753"
                 alt="A child at the Young Scholars’ Academy" />
          </div>

          <h3>After School &amp; Summer Programmes</h3>
          <p>
            Responding directly to community demand, the Foundation launched a new
            after-school programme targeting KG and Grade 1 students. It focuses on
            strengthening core academic foundations in Mathematics, Arabic, and
            English, delivered using a Montessori-based learning approach that
            emphasizes hands-on activities, interactive learning, age-appropriate
            materials, and self-paced progression. This addition further strengthens
            the Academy’s role as a holistic educational hub serving families across
            Luxor. The Academy’s summer programme continued to experience exceptional
            demand with student intake increasing from 90 to 166 students,
            representing an 84% increase.
          </p>

          <h3>Infrastructure and Capacity Enhancements</h3>
          <p>
            In 2025, the Foundation continued to enhance its operation and services.
            Building on the success of last year’s collaboration with Bonyan
            Foundation, over 100 women from the surrounding community participated in
            a comprehensive Montessori training programme. Following a rigorous
            screening and evaluation process, top achievers were selected to join the
            Academy’s teaching staff, while the remaining participants benefited from
            enhanced employability, professional certification, and transferable
            skills, reinforcing the Foundation’s commitment to women’s economic
            empowerment and inclusive workforce development.
          </p>

          <div className="rp-cols">
            <p>
              To support programme expansion and improved service delivery, the
              Academy underwent a significant scale-up in staffing with teaching staff
              increasing from 57 to 73 teachers, representing a 28% increase. This
              expansion enabled the Academy to increase overall student enrolment from
              100 to 132 students (32% increase) in the Montessori section alone. The
              strengthened staff structure and programme design ensured the
              preservation of favourable student-to-teacher ratios while enhancing
              individualized attention, inclusion, and learning quality.
            </p>
            <p>
              Teachers also received certified first aid training in collaboration
              with the Red Crescent with 50% completing certification in 2025 and the
              remainder to receive training in 2026. Certified teachers are now
              equipped to respond effectively to medical emergencies, reinforcing a
              safe and secure learning environment for all students.
            </p>
            <p>
              In tandem, the Foundation undertook a comprehensive institutional
              restructuring of the Academy to better align operations, pedagogy, and
              student support systems with the growing scale of activities. As part of
              this transformation an ERP system was introduced. This digital shift
              improved operational efficiency, transparency, and accountability, while
              enabling the Academy’s management to respond more effectively to
              students’ needs and institutional growth.
            </p>
          </div>

          <hr className="rp-hr" />

          <div className="rp-card-glance">
            <div className="rp-card-glance-head">
              <b>The Young Scholars’ Academy</b>
              <span>2025 Progress at a Glance</span>
            </div>
            <div className="rp-card-glance-band">
              <img src={growthMark} width="900" height="717" alt="" />
              <ul>
                <li><b>+28%</b> in teaching staff</li>
                <li><b>+32%</b> in students</li>
                <li><b>+60%</b> in special needs children</li>
                <li><b>+84%</b> in summer school enrolment</li>
              </ul>
            </div>
            <div className="rp-card-glance-foot">
              <h3>Partnerships</h3>
              <ul>
                <li>Bonyan Foundation for community-based capacity building</li>
                <li>
                  Al Nour wal Amal Association to strengthen capacity to welcome
                  children with visual impairment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
