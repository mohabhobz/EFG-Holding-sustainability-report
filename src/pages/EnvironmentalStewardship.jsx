/**
 * SECTION TWO — ENVIRONMENTAL STEWARDSHIP, printed pages 18 to 45.
 *
 * The divider, green financing, Vortex Energy, Bank NXT, Valu and EFG
 * Corp-Solutions, the 2025 progress spread, the path to net zero, the carbon
 * footprint and its findings, the decarbonisation plan, financed emissions,
 * Tanmeyah's dematerialisation, and the EFG Hermes Agri-Tech school.
 *
 * Everything typographic is typographic — the GOALS panels, the pull quotes,
 * the big financing figures, the progress tables and the banded lists are all
 * HTML. What stays a picture is what is a picture: the paper-cut illustrations,
 * the photographs, the partners' marks, the sector icons, and the three charts,
 * which are figures rather than type.
 *
 * The grid is the section grid — 36pt margin, 526.85pt measure — and this
 * section's own colours and panels are in src/styles/report.css.
 */
import { Fragment } from 'react';

import SectionOpener from '../components/SectionOpener';

import emblem from '../assets/report/env/emblem-environmental.webp';
import industry from '../assets/report/env/p20-industry.webp';
import flags from '../assets/report/env/p21-flags.webp';
import map from '../assets/report/env/p21-map.webp';
import chart22 from '../assets/report/env/p22-chart.webp';
import vortexIgnis from '../assets/report/env/p23-vortex-ignis.webp';
import eoCharger from '../assets/report/env/p23-eo-charger.webp';
import bankNxt from '../assets/report/env/p24-banknxt.webp';
import handIcon from '../assets/report/env/p24-icon-hand.webp';
import tomorrow from '../assets/report/env/p25-tomorrow.webp';
import teamPhoto from '../assets/report/env/p25-team.webp';
import infinity from '../assets/report/env/p25-infinity.webp';
import evCar from '../assets/report/env/p25-ev-car.webp';
import volta from '../assets/report/env/p26-volta.webp';
import voltaCar from '../assets/report/env/p26-volta-car.webp';
import iconTextiles from '../assets/report/env/p27-icon-textiles.webp';
import city27 from '../assets/report/env/p27-city.webp';
import iconPackaging from '../assets/report/env/p28-icon-packaging.webp';
import iconGrowth from '../assets/report/env/p28-icon-growth.webp';
import iconAgriculture from '../assets/report/env/p28-icon-agriculture.webp';
import iconLogistics from '../assets/report/env/p29-icon-logistics.webp';
import iconCo2 from '../assets/report/env/p29-icon-co2.webp';
import iconTourism from '../assets/report/env/p29-icon-tourism.webp';
import iconCertification from '../assets/report/env/p29-icon-certification.webp';
import greenFinancing from '../assets/report/env/p31-green-financing.webp';
import badges from '../assets/report/env/p33-badges.webp';
import metric1 from '../assets/report/env/p33-metric-1.webp';
import metric2 from '../assets/report/env/p33-metric-2.webp';
import metric3 from '../assets/report/env/p33-metric-3.webp';
import metric4 from '../assets/report/env/p33-metric-4.webp';
import icFuel from '../assets/report/env/p34-fuel-diesel.webp';
import icVehicles from '../assets/report/env/p34-owned-vehicles.webp';
import icRefrigerant from '../assets/report/env/p34-refrigerant.webp';
import icElectricity from '../assets/report/env/p34-electricity.webp';
import icChilled from '../assets/report/env/p34-chilled-water.webp';
import icAir from '../assets/report/env/p34-air-travel.webp';
import icHotel from '../assets/report/env/p34-hotel.webp';
import icLand from '../assets/report/env/p34-land-travel.webp';
import icWater1 from '../assets/report/env/p34-water-1.webp';
import icWater2 from '../assets/report/env/p34-water-2.webp';
import icWtt from '../assets/report/env/p34-well-to-tank.webp';
import icTransmission from '../assets/report/env/p34-transmission.webp';
import icSolid from '../assets/report/env/p34-solid-waste.webp';
import icWastewater from '../assets/report/env/p34-wastewater.webp';
import icCapital from '../assets/report/env/p34-capital-goods.webp';
import decarb1 from '../assets/report/env/p35-box-1.webp';
import decarb2 from '../assets/report/env/p35-box-2.webp';
import decarb3 from '../assets/report/env/p35-box-3.webp';
import decarb4 from '../assets/report/env/p35-box-4.webp';
import decarb5 from '../assets/report/env/p35-box-5.webp';
import mou from '../assets/report/env/p37-mou.webp';
import partners from '../assets/report/env/p37-partners.webp';
import demIconPaper from '../assets/report/env/p38-icon-paper.webp';
import demIconCloud from '../assets/report/env/p38-icon-cloud.webp';
import demIconImpact from '../assets/report/env/p38-icon-impact.webp';
import photo1 from '../assets/report/env/p41-photo-1.webp';
import photo2 from '../assets/report/env/p41-photo-2.webp';
import photo3 from '../assets/report/env/p41-photo-3.webp';
import photo4 from '../assets/report/env/p41-photo-4.webp';
import photo5 from '../assets/report/env/p41-photo-5.webp';
import photo6 from '../assets/report/env/p41-photo-6.webp';
import allyEngazaat from '../assets/report/soc/p44-engazaat.webp';
import allyOrange from '../assets/report/soc/p44-orange-corners.webp';
import allyOutreach from '../assets/report/soc/p44-outreach.webp';
import allyBerlitz from '../assets/report/soc/p44-berlitz.webp';
import allyUrban from '../assets/report/soc/p44-urban-greens.webp';
import gw1 from '../assets/report/soc/p45-photo-1.webp';
import gw2 from '../assets/report/soc/p45-photo-2.webp';
import gw3 from '../assets/report/soc/p45-photo-3.webp';
import gw4 from '../assets/report/soc/p45-photo-4.webp';
import gw5 from '../assets/report/soc/p45-photo-5.webp';
import gw6 from '../assets/report/soc/p45-photo-6.webp';

/* ---- printed page 44: the school's partners ------------------------------ */
const allies = [
  { name: 'ENGAZAAT', logo: allyEngazaat,
    title: 'ENGAZAAT – Nexus Farming & Climate-Smart Agriculture',
    body: 'A 3-feddan Water-Energy-Food (WEF) Nexus Farm, serving as a live learning laboratory. The partnership delivers applied technical training for ATS students, capacity-building programs reaching over 270 local farmers, and Training-of-Trainers (ToT) programs for teachers.' },
  { name: 'Orange Corners Egypt', logo: allyOrange, flip: true,
    title: 'Orange Corners Egypt & Outreach Egypt – Entrepreneurship & Startups',
    body: 'Students receive structured entrepreneurship training supporting their capstone projects, including business model development, feasibility studies, and market strategies. The partnership also enables the rotation of local startups within the school campus, offering students exposure to live operational cycles while providing startups with infrastructure, mentorship, and a launchpad for growth.' },
  { name: 'Outreach Egypt', logo: allyOutreach,
    title: 'Outreach Egypt & International Sport Alliance (ISA) – Sport for Development',
    body: 'A Sport for Development Day centered on empowering youth through play. The initiative engaged over 160 children and youth from underprivileged communities. Activities were led by 12 top-tier coaches trained by ISA and Outreach Egypt, with support from school staff and the sports department.' },
  { name: 'Berlitz Egypt', logo: allyBerlitz, flip: true,
    title: 'Berlitz Egypt – Language for Global Mobility',
    body: 'To strengthen employability and global access, Berlitz Egypt delivers an intensive three year English and German language program, complementing the school curriculum and expanding students’ access to international training and employment pathways' },
  { name: 'Urban Greens', logo: allyUrban,
    title: 'Urban Greens – Integration of advanced agricultural infrastructure',
    body: 'Two greenhouses were established on campus—one climate-controlled and one conventional—equipped with modern systems including hydroponics, smart irrigation, and water conservation technologies. This hands-on learning environment enables students to gain practical experience in sustainable agriculture while aligning technical training with real labour market demands.' },
];

/* ---- printed page 45 ------------------------------------------------------ */
const groundwork = [
  [gw1, 'Building bonds'], [gw2, 'Sharing ideas'], [gw3, 'Learning skills'],
  [gw4, 'Inspirational'], [gw5, 'Empathetic'], [gw6, 'Empowered'],
];

/* ---- printed page 33: the four intensity metrics -------------------------- */
/* ---- printed pages 24, 33 and 36: the charts ------------------------------
 * The print draws these three as artwork with the type converted to paths, so
 * none of their figures survive as text in the PDF. They are rebuilt here as
 * real text on CSS: the pie and the donut are conic gradients, the financed
 * emissions sheet is a table. Two things about page 36 are worth recording:
 * the stacked bars behind each row carry no values of their own — they show a
 * Scope 1/2/3 split the print never labels — so only the numbers cross over,
 * and the table is what makes the page readable on a phone, where the printed
 * artwork scaled down to unreadable.
 *
 * On page 33 the print's own colour coding disagrees with itself: the donut
 * gives the 68% arc the dark green the legend under it gives Scope 1 (7%).
 * That is reproduced as printed — every arc is labelled with its own
 * percentage, so nothing is misread — and flagged for EFG to settle.
 * ------------------------------------------------------------------------ */
const LENDING = [
  ['Sustainable Construction', 58, '#124734'],
  ['Smart Agriculture', 33, '#12d47f'],
  ['Waste Management & Recycling', 6, '#173829'],
  ['Energy Efficiency', 2, '#009457'],
  ['Other', 1, '#0b2018'],
];

/* the arcs in printed order, clockwise from twelve */
const SHARE = [
  ['Scope 1', 7, '#b5ffd1'],
  ['Scope 2', 25, '#54b078'],
  ['Scope 3', 68, '#124734'],
];

/* name, total, the block colour the print gives it, and the ink on it */
const SCOPE_TOTALS = [
  ['Scope 1', '582', '#124734', '#ffffff'],
  ['Scope 2', '2,031', '#54b078', '#ffffff'],
  ['Scope 3', '5,414', '#b5ffd1', '#124734'],
];

const FINANCED = [
  ['Commercial & Residential Real Estate (Factoring)', '10,099', '71', '59%', '2.7%', '4.0'],
  ['Commercial & Residential Real Estate (Leasing)', '10,286', '33', '30%', '2.8%', '4.0'],
  ['Oil & Gas (Factoring)', '378,442', '35,571', '9%', '94%', '4.0'],
  ['Transport (Leasing)', '1,036', '279', '1.3%', '0.3%', '4.0'],
  ['Leasing total', '11,422', '38', '61%', '2.9%', '4.0'],
  ['Factoring total', '389,141', '8,166', '39%', '97%', '4.0'],
];

/* Where each arc's own percentage sits: the angle of its middle, clockwise
   from twelve, and whether it needs dark ink because its arc is pale. */
function arcLabels(slices) {
  let at = 0;
  return slices.map(([, share, colour]) => {
    const mid = at + share / 2; at += share;
    return [share, (mid / 100) * 360, colour === '#b5ffd1'];
  });
}

/* A conic gradient from a list of [label, share, colour]. */
function pieStops(slices) {
  let at = 0;
  const stops = slices.map(([, share, colour]) => {
    const from = at; at += share;
    return `${colour} ${from}% ${at}%`;
  });
  return { '--stops': stops.join(', ') };
}


const metrics = [
  ['EFG Holdings Total Emissions', '8,027', 'mtco²e', metric1],
  ['EFG Holdings Emissions Intensity (FTE)', '2.11', 'mtco²e/employee', metric2],
  ['EFG Holdings Emissions Intensity (Area)', '0.14', 'mtco²e/m²', metric3],
  ['EFG Holdings Emissions Intensity (Revenue)', '0.33', 'mtco²e/million EGP', metric4],
];

/* ---- printed page 34: the findings ---------------------------------------- */
const findings = [
  /* The print titles each of the three Scope 1 items separately — STATIONARY
     COMBUSTION over the diesel figure, MOBILE COMBUSTION over the vehicle
     figure, FUGITIVE EMISSIONS over the refrigerant figure. */
  { n: 1, kind: 'Direct Emissions', groups: [
    { title: 'Stationary Combustion', items: [
      ['3', 'mtco²e', 'Fuel Burning: Diesel', icFuel],
    ] },
    { title: 'Mobile Combustion', items: [
      ['318', 'mtco²e', 'Fuel Burning: Owned Vehicles', icVehicles],
    ] },
    { title: 'Fugitive Emissions', items: [
      ['262', 'mtco²e', 'Refrigerant Leakage', icRefrigerant],
    ] },
  ] },
  { n: 2, kind: 'Indirect Emissions', groups: [
    { title: 'Purchased Energy', items: [
      ['1,557', 'mtco²e', 'Purchased Electricity', icElectricity],
      ['474', 'mtco²e', 'Purchased Chilled Water', icChilled],
    ] },
  ] },
  { n: 3, kind: 'Other Indirect Emissions', groups: [
    { title: 'Business Travel', items: [
      ['822', 'mtco²e', 'Air Travel + WTT', icAir],
      ['178', 'mtco²e', 'Hotel Stays', icHotel],
      ['70', '', 'Land Travel + WTT', icLand],
    ] },
    { title: 'Purchased Goods & Services', items: [
      ['8', 'mtco²e', 'Water Consumption', icWater1],
      ['46', 'mtco²e', 'Water Consumption', icWater2],
    ] },
    { title: 'Fuel & Energy Related Activities', items: [
      ['431', 'mtco²e', 'Well-to-Tank (WTT)', icWtt],
      ['142', 'mtco²e', 'Electricity Transmission & Distribution Losses', icTransmission],
    ] },
    { title: 'Waste Generated in Operations', items: [
      ['13', 'mtco²e', 'Solid Waste Disposal', icSolid],
      ['13', 'mtco²e', 'Wastewater Treatment', icWastewater],
    ] },
    { title: 'Capital Goods', items: [
      ['160', 'mtco²e', 'Capital Goods', icCapital],
    ] },
  ] },
];

/* ---- printed page 35 ------------------------------------------------------ */
const decarbonisation = [
  [decarb1, 'Energy Management', ['Equipment upgrades to more energy-efficient models', 'Increased virtualization']],
  [decarb2, 'Integrated Waste Management', ['Recycling programs', 'Reusable & eco-friendly materials', 'E-waste management']],
  [decarb3, 'Refrigerant Leakage Management', ['Scheduled maintenance * inspections', 'Leak detection systems']],
  [decarb4, 'Sustainable Transportation', ['Introduce EV charging stations at headquarters', 'Strengthen digital communications & virtual work and learning platforms']],
  [decarb5, 'Water Management System', ['Install water-efficient fixtures', 'Optimize water efficiency through water-saving technology and conservation practices.']],
];

/* ---- printed page 38 ------------------------------------------------------ */
const dematerialisation = [
  [demIconPaper, ['Manual / Paper-Based', 'Processes']],
  [demIconCloud, ['Cloud migration', 'Automation (AI / workflows)', 'Digital platforms (ERP, ATS, onboarding)']],
  [demIconImpact, ['Reduced environmental footprint', 'Operational efficiency', 'Enhanced data & security']],
];

/* ---- printed page 41 ------------------------------------------------------ */
const participants = [
  ['Civil Society Organizations:', 'Organic EGYPT', photo1],
  ['Startups:', 'Farmtopia, Egrobots, Mozare3', photo2],
  ['International Agencies & Consultants:', 'GIZ, Rejoice', photo3],
  ['Academic Institutions:', 'Heliopolis U, AUC Center for Applied Research on the Environment and Sustainability, Minya U, SEKEM Vocational School', photo4],
  ['Incubators & Accelerators:', 'Plug and Play', photo5],
  ['Industry & Agribusiness Leaders:', 'Pico, SEKEM', photo6],
];

/* ---- printed page 42 ------------------------------------------------------ */
const pillars = [
  ['Pillar 1', 'Resilient and Regenerative Agriculture',
    'Sustainable agriculture, agri-waste management, hydroponics, resource conservation & smart farming techniques.'],
  ['Pillar 2', 'Entrepreneurship and Business Readiness',
    'Business planning, financial literacy, innovation skills, and market readiness.'],
  ['Pillar 3', 'Languages (English and German)',
    'Workplace communication skills in English and German to enhance employability.'],
];

/* ---- printed page 30: the two progress columns --------------------------- */
const vortexFigures = [
  ['€1.6 BN', 'Exited & Current AUMs'],
  ['€800 MM', 'Equity Invested'],
  ['4.6 TWh', 'of clean energy produced'],
  ['360 K', 'of households powered'],
  ['4.5 MM', 'of CO2 displaced'],
  ['5', 'Countries Across Europe'],
];
const eoFigures = [
  ['100K+', 'Chargers deployed'],
  ['10K+', 'Fleet charge points under management'],
  ['200+', 'Depot projects delivered since 2022'],
  ['35+', 'Countries'],
];

/* ---- printed page 31 ----------------------------------------------------- */
const greenFinancingRows = [
  '0% interest EV and charging financing solutions in partnership between Valu and Infinity and Volta.',
  'Financing of up to 100% of solar panels and installation costs through a partnership between Bank NXT and Tomorrow Solar.',
  'Access to electric vehicles through flexible instalment plans.',
  'Investment in the Egyptian sovereign Eurobond with allocations for Greenfield projects.',
];

/* The print sets these lockups as a small unit, a large numeral and a small
   unit again — "EGP 25 MM", "75 EGP/MM" — so the three parts are three spans
   rather than one string. `stack` is the unit set on two lines, as page 29
   sets it beside the numeral. */
function Stat({ pre, figure, unit, stack, big, children }) {
  return (
    <div className="rp-stat">
      <div className="rp-stat-fig">
        {pre && <span className="rp-stat-u">{pre}</span>}
        <span className="rp-stat-n">{figure}</span>
        {unit && <span className={`rp-stat-u${stack ? ' rp-stat-u--stack' : ''}`}>{unit}</span>}
      </div>
      {big && <p className="rp-stat-big">{big}</p>}
      {children && <p>{children}</p>}
    </div>
  );
}

function SplitBar({ title, male, female }) {
  return (
    <div className="rp-bar-group">
      <p className="rp-bar-title">{title}</p>
      <div className="rp-bar-head">
        <span style={{ width: `${male}%` }}>Male</span>
        <span style={{ width: `${female}%` }}>Female</span>
      </div>
      <div className="rp-bar">
        <span className="m" style={{ width: `${male}%` }}>{male} %</span>
        <span className="f" style={{ width: `${female}%` }}>{female} %</span>
      </div>
    </div>
  );
}

export default function EnvironmentalStewardship() {
  return (
    <>
      <SectionOpener
        eyebrow="Section Two"
        title={<><span className="so-light">Environmental</span><br />Stewardship</>}
        numeral="02"
        emblem={emblem}
        paper="#f8f7f3"
      />

      {/* ---- printed page 20 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h1>Environmental Stewardship</h1>
          <p>
            EFG Holding’s environmental strategy is centred on advancing
            sustainable finance while actively managing its environmental
            footprint. This section outlines the Firm’s approach across three key
            dimensions. First, it highlights green financing initiatives,
            showcasing how different platforms and subsidiaries contribute to
            environmentally responsible investments and solutions. Second, it
            addresses the Firm’s path toward net zero, detailing efforts to
            measure, manage, and reduce emissions and resource use across
            operations. Third, it presents an innovative approach towards climate
            action through agri-tech education: the EFG Hermes Applied Technology
            School (ATS) – Agri-Tech which combines employability, applied
            learning, and real-world exposure to create an educational experience
            that foregrounds environmental impact. Together, these pillars
            demonstrate how EFG Holding integrates environmental responsibility
            into its financial activities and internal practices, supporting a
            transition toward a more sustainable and low-carbon economy.
          </p>
          <img className="rp-figure rp-bleed-img" src={industry} width="1500" height="713" alt="" />
        </div>
      </article>

      {/* ---- printed page 21 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h2>Green Financing</h2>

          <div className="rp-green">
            <p>
              EFG Holding is dedicated to advancing environmental stewardship
              across its operations by implementing a range of strategies, such as
              investing in renewable energy and facilitating green lending, to
              support the achievement of climate objectives.
            </p>
          </div>

          <div className="rp-goals">
            <h3>Goals</h3>
            <ul>
              <li>Accelerate the energy transition through scalable renewable energy investments that deliver strong, sustainable returns.</li>
              <li>Expand clean energy infrastructure that reduces carbon emissions and strengthens energy resilience.</li>
            </ul>
          </div>

          <h3>Vortex Energy</h3>
          <div className="rp-green">
            <p>
              Vortex Energy, a core pillar of EFG Hermes Private Equity, is a
              prominent investment platform focused on the energy transition.
              Established in 2014, it has a global mandate to invest in the energy
              transition spectrum for sovereign, institutional, and strategic
              investors.
            </p>
          </div>

          <h3>Diverse Ethnic Background</h3>
          <div className="rp-two">
            <div>
              <img className="rp-flags" src={flags} width="900" height="114"
                   alt="Flags of Egypt, Spain, France, Germany and the United Kingdom" />
              <div className="rp-bars">
                <SplitBar title="11 Professionals" male={55} female={45} />
                <SplitBar title="Senior Management" male={55} female={45} />
              </div>
            </div>
            <img className="rp-media" src={map} width="1000" height="560"
                 alt="Map of Vortex Energy's offices and assets across Europe, the Middle East and North Africa" />
          </div>

          <div className="rp-cols">
            <p>
              Vortex Energy is at the forefront of the global efforts of
              transitioning to clean energy generation and the electrification of
              transport. The determination of private and public sectors has been
              phenomenal. In 2025, the global energy transition continues to
              accelerate. Renewables and other low-carbon sources now supply more
              than 40 percent of the world’s electricity, driven by record annual
              additions of solar and wind capacity. Electric vehicle adoption also
              keeps rising, with EVs representing over one in five new cars sold
              globally in 2024 and poised to grow further through 2025. At the
              same time, power-sector emissions have begun a structural decline,
              with 2023 marking the global peak and both 2024 and 2025 showing
              continued reductions as clean generation expands faster than demand
              growth.
            </p>
          </div>
        </div>
      </article>

      {/* ---- printed page 22 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>Vortex Energy Legacy (I, II and III)</h3>
          <p>
            Since inception, Vortex Energy has deployed, managed, and harvested
            capital across three fund vehicles, focusing on efficient portfolio
            management and maximizing its environmental and social impact. Up to
            2020, Vortex Energy acquired operational renewable energy generation
            plants (wind and solar) in continental Europe. Vortex Energy
            accumulated 822MW of net capacity attributable to its stakes on
            individual assets across Spain, Portugal, Belgium, France and the
            United Kingdom. Over their respective holding periods the assets
            operation was optimized for maximum clean energy generation and were
            aligned to the latest best industry practices to prolong their
            expected lifetimes.{' '}
            <strong>
              Vortex Energy delivered 4.6 terawatt hours (TWh) of clean energy,
              which displaced approximately 4.5 Mn metric tonnes of carbon dioxide
              equivalent (MTCO2e).
            </strong>
          </p>

          <div className="rp-two">
            <p>
              More important though is that these assets seeded by Vortex Energy
              continue to operate today and for the next few decades will continue
              to save 1.4 Mn metric tonnes of carbon dioxide equivalent (MTCO2e)
              per year. Furthermore, the deployment of capital alongside similar
              investments by third parties facilitated the creation of economies
              of scale for these investments and the proliferation of these
              technologies to their current levels which are contributing
              positively to the society and climate.
            </p>
            <figure className="rp-figure-fig">
              <img className="rp-media" src={chart22} width="1200" height="559"
                   alt="Annual carbon dioxide savings from Vortex I, II, III and Vortex Legacy, 2014 to 2025" />
              <figcaption className="rp-caption">
                Annual Carbon Dioxide Savings<br />(thousands of tonnes of CO2e)
              </figcaption>
            </figure>
          </div>

          <h3>Vortex Energy Today (IV)</h3>
          <p>
            In July 2021, Vortex Energy launched its{' '}
            <strong>fourth investment vehicle and flagship fund “Vortex IV”,</strong>{' '}
            that reached first close shortly after, anchored by EFG Hermes, Abu
            Dhabi sovereign institutional investors and family offices among
            others. For Vortex Energy, this milestone marked the formalization of
            a new global investment strategy and alignment with its investors
            about{' '}
            <strong>the importance of the energy transition currently underway.</strong>
          </p>
          <p>
            Leveraging its investment acumen and agile perspectives, Vortex Energy
            provides its investors with risk-managed exposures to a balanced
            portfolio of energy transition assets utilizing innovative, proven and
            competitive technologies across the entire asset lifecycle. The
            investment verticals include generation (utility scale solar PV,
            on/offshore wind, hydropower, distributed generation), storage (BESS,
            pumped hydro), EV charging facilities, as well as supply- and
            demand-side energy services. The geographical focus spans across OECD
            countries.
          </p>
          <p>
            Vortex Energy has successfully obtained the ADGM Green Fund
            Designation for its Vortex IV Fund, becoming the second-ever fund to
            achieve this prestigious designation.
          </p>
        </div>
      </article>

      {/* ---- printed page 23 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-head-logo">
            <h3>
              Vortex IV &amp; IGNIS:<br />
              <span className="rp-accent">A Synergetic Partnership</span>
            </h3>
            <img className="rp-logo" src={vortexIgnis} width="1100" height="445"
                 style={{ '--w': '29cqw', '--wm': '190px' }}
                 alt="Vortex Energy and Ignis" />
          </div>

          <div className="rp-cols">
            <p>
              In October 2021, Vortex IV executed its first investment by entering
              into a definitive agreement with Ignis Energy Holdings (“Ignis”),
              the parent company of Ignis Group,{' '}
              <strong>a Spanish independent integrated renewable player.</strong>{' '}
              Through the transaction, Vortex IV injected EUR 300 Mn into Ignis
              via a series of capital injections to fund its{' '}
              <strong>high growth plans for a &gt;20 GW platform</strong> and
              transform it into a fully integrated renewable IPP in Spain and
              other geographies. To date Ignis supported by Vortex Energy has
              secured environmental permits for 5.7GW of Solar PV projects, out of
              which 714MW are under construction or with EPC launched and 367MW
              are in operation in Spain.
            </p>
            <p>
              Following the partnership with Ignis,{' '}
              <strong>Vortex IV will deploy critical capital</strong> across the
              globe <strong>to spur the clean energy transition.</strong> These
              investments will benefit from an accelerating shift towards clean
              energy, reinforced by strong market fundamentals and supportive
              regulatory frameworks, in a sustainable and growing sector that is
              destined to continue attracting new capital inflows over the next
              two decades.
            </p>
          </div>

          <h3>
            Vortex IV &amp; EO Charging:{' '}
            <span className="rp-accent">An Evolutionary Partnership</span>
          </h3>

          <div className="rp-two">
            <img className="rp-media" src={eoCharger} width="900" height="468"
                 alt="An EO Charging electric vehicle charge point" />
            <p>
              Since 2023, Vortex Energy has been an equity investor in EO
              Charging, a British electric vehicle (EV) charging solutions
              company. In November 2025, EO Charging completed GDP 25 million
              recapitalisation to accelerate the next phase of growth. The
              transaction combines an increased debt facility with HSBC and a new
              equity injection from existing investors, Zouk Capital and Vortex
              Energy, reflecting continued confidence in EO’s strategy and its
              role in driving fleet electrification across Europe and the UK.
            </p>
          </div>

          <blockquote className="rp-quote">
            <p>
              ‘We believe the transition to electric mobility and smart
              infrastructure is no longer niche; it’s becoming foundational to
              fleet and bus operations across the UK and Europe. Our renewed
              investment in EO Charging reflects this conviction: by supporting a
              partner with a clear software- and service-first model. EO is
              well-positioned for its next phase of growth and further strategic
              moves.’
            </p>
            <p className="rp-quote-name">Bakr Abdel Wahab</p>
            <p className="rp-quote-role">Chief Investment Officer, Vortex Energy</p>
          </blockquote>

          <div className="rp-cols">
            <p>
              The funding follows a strategic restructuring, including EO’s
              planned exit from the US market and the sale of its domestic EV
              charger hardware and manufacturing business to Cogent Technologies,
              part of the Heathpatch Group. This marks a pivotal moment for the
              company as it concentrates on its core strengths in software,
              services, and infrastructure-as-a-service (IaaS) for commercial
              fleets and heavy goods vehicles. With increased investment in the
              development of truck hubs and logistics depots, EO is now
              exceptionally well positioned to deliver scalable, dependable
              fleet-charging solutions across the UK and Europe. The investment
              will accelerate the deployment of EO’s commercial-grade charging
              infrastructure and its flagship software and service offering,
              Charge Assurance™, which provides fleet operators with end-to-end
              visibility, management, and energy optimisation tools. These
              advancements will further strengthen EO’s role as a leading
              infrastructure and software partner for fleets navigating the
              complex transition to electric mobility. EO Charging continues to
              serve some of the world’s largest and most complex fleet operators,
              including Amazon, DHL, UPS, Tesco, GoAhead, Metroline, Stagecoach,
              and FedEx, with over a decade of expertise in EV charging
              infrastructure and management solutions.
            </p>
          </div>
        </div>
      </article>

      {/* ---- printed page 24 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-head-logo">
            <h2>Embedding ESG in Bank NXT’s Financing Strategy</h2>
            <img src={bankNxt} width="900" height="131"
                 style={{ '--w': '28.5cqw', '--wm': '160px' }}
                 className="rp-logo" alt="Bank NXT" />
          </div>

          <p>
            Bank NXT considers sustainable finance a cornerstone of its mission to
            foster long-term economic resilience and inclusive development. ESG
            criteria are integrated into financing activities to ensure that
            investments deliver both financial returns and meaningful
            environmental and social benefits. The bank’s sustainable finance
            strategy is underpinned by a thorough framework of policies and
            procedures with a sophisticated Environmental and Social Management
            System (ESMS) seamlessly integrated into the credit approval process.
            Aligned with the latest Central Bank of Egypt (CBE) guidelines and
            international standards, such as the Green Loan Principles (GLP) from
            the Loan Market Association (LMA) and the International Capital Market
            Association (ICMA), the ESMS enhances our ability to manage
            environmental and social risks.
          </p>

          <div className="rp-head-logo">
            <h2>Environmental Financing Portfolio</h2>
            <div className="rp-stat rp-stat--inline">
              <div className="rp-stat-fig"><span className="rp-stat-u">EGP 1,161 BN</span></div>
              <img className="rp-icon" src={handIcon} width="700" height="614"
                   style={{ '--w': '12.27cqw' }} alt="" />
            </div>
          </div>

          <p className="rp-lead rp-lead--sm">
            Bank NXT has developed a comprehensive Environmental Financing
            Portfolio spanning key industries such as energy efficiency solutions,
            waste management systems, renewable energy installations, and
            climate-smart agriculture initiatives. As of Q4 2025, total deployed
            was EGP 1.161 Bn, encompassing 25 projects across a variety of
            sectors, reflecting our commitment to supporting projects that drive
            environmental sustainability and resource efficiency. Our effective
            project selection process ensures allocated funds are actively
            contributing to environmental improvements.
          </p>

          <figure className="rp-figure-fig rp-chart">
            <div className="rp-pie" style={pieStops(LENDING)} />
            <ul className="rp-key">
              {LENDING.map(([label, share, colour]) => (
                <li key={label} style={{ '--k': colour }}>
                  <b>{share}%</b> {label}
                </li>
              ))}
            </ul>
            <figcaption className="rp-caption rp-caption--large">
              Environmental Lending Portfolio (Q4 2025)
            </figcaption>
          </figure>
        </div>
      </article>

      {/* ---- printed page 25 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-head-logo">
            <h2>Retail Green Energy Loans</h2>
            <img className="rp-logo" src={tomorrow} width="900" height="319"
                 style={{ '--w': '19.7cqw', '--wm': '130px' }} alt="Tomorrow" />
          </div>

          <p>
            Bank NXT also offers Retail Green Loans to finance eco-friendly
            vehicle purchases (electric or hybrid) and renewable energy
            installations, such as solar panels, to empower individual customers
            to reduce their carbon footprint and support the transition to a
            lower-carbon economy.
          </p>

          <img className="rp-figure" src={teamPhoto} width="1400" height="426"
               alt="Bank NXT and Tomorrow Solar teams at the partnership signing" />

          <div className="rp-cols">
            <p>
              As part of this commitment, Bank NXT has partnered with Tomorrow
              Solar to provide financing solutions for residential solar energy
              installations, making clean energy more accessible to households.
              The programme offers competitive interest rates, full administrative
              fee waivers, and flexible repayment terms of up to seven years,
              reducing financial barriers for customers and simplifying the
              transition to renewable energy. By facilitating widespread adoption
              of solar power, the initiative supports reductions in fossil fuel
              use and aligns with national clean energy targets, including Egypt
              Vision 2030.
            </p>
            <p>
              This partnership reflects Bank NXT’s broader sustainability
              strategy, emphasizing environmental stewardship, community
              empowerment, and the promotion of a green economy. By enabling
              households to switch to solar energy, the initiative not only
              contributes to lowering carbon emissions but also fosters economic
              and social benefits, strengthening energy independence and
              resilience at the household level. It underscores the bank’s
              commitment to practical solutions that advance sustainable
              development and long-term environmental goals.
            </p>
          </div>

          <div className="rp-head-logo">
            <h2>Green Mobility Solutions with Valu</h2>
            <img className="rp-logo" src={infinity} width="900" height="248"
                 style={{ '--w': '24.3cqw', '--wm': '150px' }} alt="Infinity" />
          </div>

          <div className="rp-two">
            <p>
              As part of its commitment to supporting the transition to a more
              sustainable and low-carbon economy, Valu has spearheaded strategic
              partnerships aimed at expanding access to green mobility solutions
              and supporting locally developed clean technologies. In December
              2025, Valu partnered with Infinity, Africa’s largest renewable
              energy and electric vehicle (EV) charging provider, to offer
              flexible payment and financing options for home EV chargers and
              public charging services. This initiative features 0% interest
              financing, zero down payment options, and cashback incentives and
              aims to make electric vehicle ownership and charging more
              financially accessible, thereby helping reduce
              transportation-related emissions and promote sustainable mobility
              across Egypt.
            </p>
            <img className="rp-media" src={evCar} width="853" height="773"
                 alt="An electric car at a charging point" />
          </div>
        </div>
      </article>

      {/* ---- printed page 26 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <img className="rp-logo" src={volta} width="900" height="377"
               style={{ '--w': '17.4cqw', '--wm': '120px' }} alt="Voltä" />

          <img className="rp-figure" src={voltaCar} width="1400" height="586"
               alt="A Voltä neighbourhood electric vehicle on the road" />

          <div className="rp-cols">
            <p>
              Building on this momentum, Valu recently announced a strategic
              collaboration with Voltä, an Egyptian-engineered producer of
              neighbourhood electric vehicles (NEVs). Under this partnership, Valu
              provides tailored financing solutions—including zero-interest
              12-month plans and extended tenors—to make Voltä’s locally
              manufactured electric vehicles more accessible to residents of
              modern communities. By enabling broader access to affordable,
              high-quality EVs designed for everyday use, this collaboration
              supports the adoption of low-emission urban transportation and
              strengthens the local clean-technology ecosystem.
            </p>
            <p>
              In 2025, Valu also entered the second year of its partnership with
              KarmSolar, MENA’s leading multi-utility renewable energy provider,
              to further expand the Electric Vehicle (EV) charging network in
              District 5. The collaboration continues to advance sustainable
              mobility solutions by increasing the number of EV charging stations
              across the district, including the residential compound. Drivers can
              seamlessly charge their vehicles using Valu’s flexible payment
              solutions directly through the Karm application.
            </p>
          </div>

          <blockquote className="rp-quote rp-quote--right">
            <p>
              ‘At Valu, we continue to build on our existing partnerships in
              Egypt’s renewable energy sector to provide solutions that enrich our
              customers’ lives and support the country’s sustainability goals. Our
              collaboration with Infinity allows us to offer flexible financing
              solutions within the electric vehicle (EV) ecosystem, facilitating
              the adoption of electric mobility for more individuals.’
            </p>
            <p className="rp-quote-name">Walid Hassouna</p>
            <p className="rp-quote-role">CEO, Valu</p>
          </blockquote>

          <div className="rp-cols">
            <p>
              Valu also onboarded multiple electric vehicle brands to provide
              seamless and flexible financing options for customers. Partnerships
              include leading EV manufacturers and distributors such as Avatar,
              Zeeker, Sparked EV, Lotus, and Lynk &amp; Co. Through Valu’s
              integrated financing programme, customers can purchase EV models
              from these brands with reduced financial barriers, supporting
              broader adoption of electric vehicles across Egypt and strengthening
              Valu’s commitment to affordable and accessible sustainable mobility.
            </p>
            <p>
              Together, these initiatives illustrate how Valu leverages its
              financial technology expertise to address environmental challenges,
              reduce barriers to sustainable products and services, and accelerate
              the adoption of mobility solutions that contribute to a cleaner,
              more resilient economy.
            </p>
          </div>
        </div>
      </article>

      {/* ---- printed page 27 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h2>
            Green Industry with<br />
            <span className="rp-deep">EFG Corp-Solutions</span>
          </h2>

          <p>
            EFG Corp-Solutions has made significant strides in advancing
            environmental finance by integrating sustainable investment practices
            into its core operations. By leveraging its factoring and leasing
            services, it enables clients to align economic growth with
            environmental stewardship, contributing measurable impacts in carbon
            reduction and resource efficiency across in key sectors across its
            investment portfolio.
          </p>

          <img className="rp-icon" src={iconTextiles} alt="" />
          <h3>Textiles</h3>

          <div className="rp-two">
            <p>
              EFG Corp-Solutions has extended a financing package of USD 3MM to a
              leading textile manufacturer, where the client’s agenda undertakes
              the acceleration of its environmental transformation plan for 2025.
              The company’s targeted 40% reduction in carbon-dioxide emissions
              marks a significant shift toward cleaner, more responsible
              production. The funded upgrades directly address the sector’s most
              critical pressure point where the manufacturing processes account
              for roughly 44% of total energy consumption across the fashion and
              textile industry, making decarbonization at this stage both a
              strategic imperative and a high-impact intervention. By empowering
              the client to adopt energy-efficient technologies and greener
              operating models, EFG Corp-Solutions is not only supporting a single
              factory’s transition but actively contributing to the reduction of
              industrial emissions within one of the most resource-intensive
              segments of the textile value chain.
            </p>
            <div>
              <Stat figure="USD 3M" unit="M" big="financing package" />
              <div className="rp-stat rp-stat--inline">
                <div className="rp-stat-fig">
                  <span className="rp-stat-n">40</span>
                  <span className="rp-stat-u">%</span>
                </div>
                <p>target reduction<br />emissions in CO2</p>
              </div>
            </div>
          </div>

          <img className="rp-figure rp-bleed-img" src={city27} width="1500" height="625" alt="" />
        </div>
      </article>

      {/* ---- printed pages 28 and 29 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-sectors">
            <section>
              <img className="rp-icon" src={iconPackaging} width="600" height="525" alt="" />
              <h3>Packaging</h3>
              <p>
                The Egyptian government, in partnership with the Ministry of
                Environment, has introduced a series of initiatives to advance the
                sustainable environmental practices embedded within the National
                Sustainable Development Strategy ‘Egypt 2030’. Aligned with the
                country’s broader sustainability agenda, authorities have rolled
                out regulatory and financial measures to accelerate the shift
                toward recycled paper–based packaging, including requirements that
                incentivize the use of eco-friendly materials and reduce reliance
                on plastics. These efforts are complemented by targeted incentives
                such as tax benefits and subsidies that encourage businesses to
                adopt sustainable packaging solutions. In support of this national
                transition and in line with its ESG mandate, EFG Corp-Solutions in
                2025 financed one of Egypt’s leading printing and packaging group
                with a USD 4MM facility to promote the expansion of environmentally
                responsible packaging production.
              </p>
              <Stat pre="USD" figure="4M" unit="M" big="Financing Facility" />
              <div className="rp-stat rp-stat--inline">
                <img className="rp-icon" src={iconGrowth} width="800" height="744"
                     style={{ '--w': '21.32cqw' }} alt="" />
                <p>Expansion in environmentally responsible packaging production</p>
              </div>
            </section>

            <section>
              <img className="rp-icon" src={iconLogistics} width="600" height="378" alt="" />
              <h3>Transportation &amp; Logistics</h3>
              <p>
                EFG Corp-Solutions has extended a credit facility with total
                amount of EGP 75MM to a shipment company to support the expansion
                of its geographical warehouses across different regions. As a
                result, operations have become more centralized, with one or two
                main regional warehouses supplying smaller satellite warehouses
                that handle sovereign orders. This centralized structure
                significantly reduces transportation costs and carbon emissions,
                as larger consolidated shipments move to smaller warehouses before
                last-mile delivery takes place. Additionally, due to the company’s
                rapidly growing volume, it now has the capacity to combine over
                ten orders heading to the same location into a single delivery
                trip. Instead of dispatching individual orders by motorcycles,
                these consolidated batches are delivered using a single vehicle,
                which greatly lowers both operational costs and overall carbon
                emissions.
              </p>
              <Stat figure="75" unit={"EGP\nMM"} stack>Financing Package</Stat>
              <div className="rp-stat rp-stat--inline">
                <img className="rp-icon" src={iconCo2} width="900" height="520"
                     style={{ '--w': '22.68cqw' }} alt="" />
                <p>Reduction in CO2 emissions Through increased efficiency</p>
              </div>
            </section>

            <section>
              <img className="rp-icon" src={iconAgriculture} width="600" height="504" alt="" />
              <h3>Agriculture</h3>
              <p>
                Egypt has introduced the Sustainable Agricultural Development
                Strategy as part of its broader commitment to promoting
                environmentally responsible farming practices. In alignment with
                these goals, EFG Corp-Solutions played a pivotal role in advancing
                sustainable agribusiness by extending a financing facility of EGP
                100MM to a company operating with a clear mandate to expand its
                green footprint, acquiring land for reclamation and cultivation
                and adopting eco-conscious production methods. EFG Corp-Solutions
                also extended a revolving credit facility of EGP 25MM to an
                agri-business dedicated to strengthening the agricultural
                ecosystem through the adoption of green energy solutions. Through
                those partnerships, both entities contribute to enhancing
                environmental stewardship within Egypt’s agribusiness sector while
                reinforcing long-term sustainability objectives.
              </p>
              <Stat pre="EGP" figure="25" unit="MM">
                revolving credit facility for green energy solutions in agriculture
              </Stat>
              <Stat pre="EGP" figure="100" unit="MM">
                financing facility for land reclamation &amp; agri-tech
              </Stat>
            </section>

            <section>
              <img className="rp-icon" src={iconTourism} width="597" height="495" alt="" />
              <h3>Tourism</h3>
              <p>
                Egypt’s national agenda places strong emphasis on embedding
                sustainable environmental practices within the tourism sector,
                recognizing the industry’s critical role in conserving
                biodiversity and restoring ecosystem balance. A flagship example
                of this commitment is the “Green Star Hotel” programme, an advanced
                eco-certification scheme that sets stringent standards for energy
                efficiency, water conservation, waste reduction, and overall
                environmental stewardship across the hospitality industry. In
                2025, EFG Corp-Solutions has capitalized on its YoY contribution
                towards sustainable tourism by further allocating USD 20MM during
                2025 to finance clients actively engaged in eco-tourism
                transformation. This financing has empowered hotel operators to
                upgrade their facilities, adopt green technologies, and
                successfully obtain certification under the Green Star Hotel
                Programme.
              </p>
              <Stat figure="20" unit={"USD\nMM"} stack>Financing for Eco-tourism</Stat>
              <div className="rp-stat rp-stat--inline">
                <img className="rp-icon" src={iconCertification} width="600" height="569"
                     style={{ '--w': '9.58cqw' }} alt="" />
                <p>Certification under the Green Star Hotel Program</p>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* ---- printed pages 30 and 31 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-note">
            <h3>Green Bonds</h3>
            <p>
              EFG Hermes Asset Management Egypt invested in the Egyptian sovereign
              Eurobond to enhance portfolio diversification, liquidity, and yield.
              Given its short duration, the position helped reduce volatility
              while preserving ready liquidity. As a sovereign issue, the issuer
              indicated that proceeds would finance greenfield projects; however,
              specific allocations were not disclosed in the public materials
              reviewed, and no external standards or second-party opinion were
              cited. EFG Hermes Asset Management Egypt held the green bond until
              maturity.
            </p>
          </div>

          <p className="rp-glance">
            <b>Green Financing:</b> 2025 Progress at a Glance
          </p>

          <div className="rp-statcols">
            <div className="rp-statcol rp-statcol--olive">
              <h3>Vortex Energy</h3>
              <dl>
                {vortexFigures.map(([v, l]) => (
                  <Fragment key={l}><dt>{v}</dt><dd>{l}</dd></Fragment>
                ))}
              </dl>
            </div>
            <div className="rp-statcol rp-statcol--teal">
              <h3>EO Charging</h3>
              <dl>
                {eoFigures.map(([v, l]) => (
                  <Fragment key={l}><dt>{v}</dt><dd>{l}</dd></Fragment>
                ))}
              </dl>
            </div>
          </div>

          <p className="rp-band">Green Financing</p>
          <ul className="rp-rows">
            {greenFinancingRows.map((r) => <li key={r}>{r}</li>)}
          </ul>

          <img className="rp-figure rp-bleed-img" src={greenFinancing} width="1400" height="746" alt="" />
        </div>
      </article>

      {/* ---- printed page 32 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3><span className="rp-deep">Toward Net Zero:</span> <span className="rp-accent">Emissions &amp; Waste Management</span></h3>
          <p>
            Understanding our environmental impact begins with measuring it. EFG
            Holding released its second Carbon Footprint Report - the first
            comprehensive assessment encompassing all its facilities and
            operations - covering the reporting period from January 1 to December
            31, 2024. This year has been designated as the base year against which
            all future assessments will be benchmarked.
          </p>

          <div className="rp-goals">
            <h3>Goals</h3>
            <ul>
              <li>Measure, disclose and understand greenhouse gas emissions associated with our activities.</li>
              <li>Identify where emissions are highest, how they can be reduced, and how our operations can become ever more efficient and resilient.</li>
              <li>Reduce our environmental impact.</li>
            </ul>
          </div>

          <h3>EFG Holding Carbon Footprint Report</h3>
          <p>
            Understanding our environmental impact begins with measuring it. EFG
            Holding released its second{' '}
            <span className="rp-link">Carbon Footprint Report</span> - the first
            comprehensive assessment encompassing all its facilities and
            operations - covering the reporting period from January 1 to December
            31, 2024. This year has been designated as the base year against which
            all future assessments will be benchmarked.
          </p>
          <p>
            This analysis provides the foundation for informed decision-making,
            targeted reduction initiatives, and transparent climate reporting,
            reinforcing our commitment to responsible growth and long-term
            environmental stewardship. Prepared in alignment with internationally
            recognized frameworks and methodologies, including the Greenhouse Gas
            Protocol, the 2006 IPCC Guidelines for National Greenhouse Gas
            Inventories (with 2019 refinements), and the ISO 14064-1:2018
            standard, the report systematically evaluates the Group’s greenhouse
            gas (GHG) emissions across the three internationally recognized
            scopes:
          </p>

          <div className="rp-scopes">
            <div className="rp-scope">
              <h3>Scope 1</h3>
              <p>Direct emissions from EFG’s owned assets (e.g., fuel use in generators and company vehicles).</p>
            </div>
            <div className="rp-scope">
              <h3>Scope 2</h3>
              <p>Indirect emissions from purchased energy, primarily electricity consumption.</p>
            </div>
            <div className="rp-scope">
              <h3>Scope 3</h3>
              <p>Other indirect emissions from value-chain activities, including purchased goods and services, waste, water use, business travel, and employee commuting</p>
            </div>
          </div>
        </div>
      </article>

      {/* ---- printed page 33 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-two">
            <div>
              <p>
                EFG Holding adopts the operational control approach to calculate
                its carbon footprint. Under this method, our assessment covers all
                operations where we exercise direct operational control. This
                includes 9 facilities (one headquarter and eight branches).
              </p>
              <p>
                After a rigorous data collection and assessment process for all
                EFG Holding’s 9 facilities, total emissions for 2024 were
                calculated at 8,027 mtCO2 e. Scope 1 represented a modest 7% of
                total emissions, Scope 2 accounted for a significant portion (25%)
                tied to purchased electricity, while Scope 3 was identified as the
                largest contributor at 68%, particularly from employee commuting,
                and business travel. These insights provide a clear roadmap for
                prioritizing reduction efforts and aligning with global climate
                targets.
              </p>
            </div>
            <div className="rp-badges">
              <img src={badges} width="168" height="500"
                   alt="Greenhouse Gas Protocol, ISO 14064 and IPCC" />
            </div>
          </div>

          <div className="rp-two">
            <figure className="rp-chart rp-chart--donut">
              <div className="rp-ring" style={pieStops(SHARE)}>
                <div><span>Share of Scope</span><b>1,2 &amp; 3</b></div>
                {arcLabels(SHARE).map(([share, angle, dark]) => (
                  <span key={share} className={`rp-arc${dark ? ' rp-arc--dark' : ''}`}
                        style={{ '--a': `${angle}deg` }}>{share}%</span>
                ))}
              </div>
              <table className="rp-scopetable">
                <caption className="sr-only">Emissions by scope, 2024</caption>
                <tbody>
                  {SCOPE_TOTALS.map(([name, value, colour, ink]) => (
                    <tr key={name}>
                      <th scope="row" style={{ '--k': colour, '--ink': ink }}>{name}</th>
                      {/* the print sets each total in its own bar's green,
                          except the pale one, which takes the body ink */}
                      <td style={{ '--k': colour, '--rp-figure-ink': colour === '#b5ffd1' ? 'var(--sr-ink)' : colour }}>
                        {value} mtCO<sup>2</sup>e
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </figure>
            <div className="rp-metrics">
              {metrics.map(([label, value, unit, icon]) => (
                <div className="rp-metric" key={label}>
                  <div>
                    <p className="rp-metric-label">{label}</p>
                    <p className="rp-metric-value">{value} <small>{unit}</small></p>
                  </div>
                  <img src={icon} width="300" height="300" alt="" />
                </div>
              ))}
            </div>
          </div>

          <p>
            While only Scope 1 and Scope 2 reporting is mandatory under the GHG
            Protocol, EFG Holding has voluntarily expanded its reporting to
            include several relevant Scope 3 emission categories. This proactive
            approach reflects our commitment to transparency and to aligning with
            international best practices.
          </p>
        </div>
      </article>

      {/* ---- printed page 34 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-head-logo">
            <h2>Findings</h2>
            <p className="rp-lead rp-lead--sm">
              The findings of our carbon footprint assessment provide a clear view
              of where our emissions occur and where action is most needed.
            </p>
          </div>

          <div className="rp-findings">
            {findings.map((scope) => (
              <div className={`rp-scope-block rp-scope--${scope.n}`} key={scope.n}>
                <div>
                  <p className="rp-scope-name">Scope {scope.n}</p>
                  <p className="rp-scope-kind">{scope.kind}</p>
                </div>
                <div>
                  {scope.groups.map((g) => (
                    <div className="rp-fgroup" key={g.title}>
                      <p className="rp-fgroup-title">{g.title}</p>
                      <div className="rp-fitems">
                        {g.items.map(([value, unit, note, icon]) => (
                          <div className="rp-fitem" key={note + value}>
                            <div>
                              <p className="rp-fitem-value">{value}{unit && <small> {unit}</small>}</p>
                              <p className="rp-fitem-note">{note}</p>
                            </div>
                            <img src={icon} width="220" height="220" alt="" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* ---- printed page 35 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h2>Decarbonization Plan</h2>
          <p>
            EFG Holding has developed a comprehensive decarbonization roadmap as
            part of its long-term commitment to sustainability and alignment with
            global climate goals. The plan sets out a series of proposed actions
            and strategic initiatives designed to progressively reduce operational
            emissions as a start with financed emissions following as ESG
            integration matures. It should be noted that they are preliminary in
            nature and will be subject to rigorous research, detailed assessment,
            and comprehensive feasibility analysis to ensure their effectiveness,
            viability, and sustained impact prior to implementation.
          </p>

          <div className="rp-decarb">
            {decarbonisation.map(([icon, title, items]) => (
              <div className="rp-decarb-row" key={title}>
                <img src={icon} width="400" height="385" alt="" />
                <div>
                  <h3>{title}</h3>
                  <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>

          <div className="rp-notice">
            <p>
              These initiatives are underpinned by our robust and continuing ESG
              integration efforts and the strong foundations laid among our
              employees on the importance of participation and individual
              responsibility when it comes to sustainability.
            </p>
          </div>
        </div>
      </article>

      {/* ---- printed page 36 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>EFG Holding Financed Emissions Report</h3>
          <div className="rp-cols">
            <p>
              In 2025, EFG Holding released its first{' '}
              <span className="rp-link">financed emissions assessment</span>. As a
              pilot exercise, the report focuses on a single line of business, EFG
              Corp-Solutions, with the aim of progressively expanding coverage to
              additional business lines in future assessments. The analysis
              addresses three carbon-intensive sectors within EFG Corp-Solutions’
              Leasing and Factoring portfolios: Oil &amp; Gas, Real Estate, and
              Transport. It has been conducted in alignment with the methodologies
              of the Partnership for Carbon Accounting Financials (PCAF), which
              offers financial institutions guidance for measuring Scope 3,
              Category 15 emissions associated with investment activities. It also
              adheres to the Greenhouse Gas (GHG) Protocol developed by the World
              Resources Institute (WRI) and follows the core principles of
              relevance, completeness, consistency, transparency, and accuracy,
              establishing a strong foundation for EFG Holding’s ongoing efforts
              to measure, manage, and ultimately reduce the climate impact of its
              financing activities. The assessment is based on EFG Corp-Solutions’
              leasing &amp; factoring portfolio data as of 31st December 2024 and
              considers 2024 the base year for the Commercial Real Estate, Oil
              &amp; Gas and Transport sectors for all future financed emissions
              tracking and comparisons.
            </p>
          </div>

          <h3 className="rp-h3--sm">2024 financed emissions totals</h3>
          <p className="rp-olive">
            EFG Corp-Solutions pilot financed emissions assessment includes 3
            sectors, Commercial and Residential Real Estate, Oil &amp; Gas and
            Transport.
          </p>
          <div className="rp-head-logo">
            <p className="rp-olive">
              EFG Corp-Solutions total financed emissions for the year 2024 =
            </p>
            <p className="rp-total">400,563 mtCO<sup>2</sup>e</p>
          </div>

          <div className="rp-tablewrap">
            <table className="rp-financed">
              <caption className="sr-only">
                EFG Corp-Solutions financed emissions by sector, 2024
              </caption>
              <thead>
                <tr>
                  <th scope="col" rowSpan={2}>Sector</th>
                  <th scope="col" rowSpan={2} className="rp-num">Financed emissions<br /><small>(mtO<sub>2</sub>e)</small></th>
                  <th scope="col" rowSpan={2} className="rp-num">Financed emissions intensity<br /><small>(mtO<sub>2</sub>e/$M lent)</small></th>
                  <th scope="col" colSpan={2}>Percentage</th>
                  <th scope="col" rowSpan={2} className="rp-num">Data quality score</th>
                </tr>
                <tr>
                  <th scope="col" className="rp-num">Exposure from carbon intensive sectors</th>
                  <th scope="col" className="rp-num">Financed emissions</th>
                </tr>
              </thead>
              <tbody>
                {FINANCED.map(([sector, emissions, intensity, exposure, share, quality], i) => (
                  <tr key={i}>
                    <th scope="row">{sector}</th>
                    <td className="rp-num">{emissions}</td>
                    <td className="rp-num">{intensity}</td>
                    <td className="rp-num">{exposure}</td>
                    <td className="rp-num">{share}</td>
                    <td className="rp-num">{quality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rp-callouts">
            <p><b>Highest emitting sector</b> Over 17 times bigger than emissions of all other sectors combined!</p>
            <p><b>Highest emission intensity</b> Over 92 times bigger than emission intensity of all other sectors combined!</p>
          </div>
        </div>
      </article>

      {/* ---- printed page 37 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>Bank NXT – <span className="rp-accent">Carbon Footprint and Climate Action</span></h3>
          <p>
            Bank NXT continues to position climate action as both a core
            responsibility and a strategic opportunity to advance sustainable
            banking. Its fourth annual carbon footprint report, using 2021 as a
            base year, reflects a strong commitment to transparency, measurable
            progress, and leadership in the transition to a low-carbon economy.
          </p>
          <p>
            The assessment covers the period from January 1 to December 31, 2024,
            and includes Scope 1, Scope 2, and key Scope 3 emissions. Prepared in
            alignment with leading international standards—including the GHG
            Protocol Corporate Standard, the 2019 Refinements to the 2006 IPCC
            Guidelines, and ISO 14064-1:2018—the report demonstrates tangible
            progress while identifying areas requiring further action.
          </p>
          <p>
            Informed by these findings, Bank NXT has developed a comprehensive
            decarbonization strategy targeting significant reductions in
            operational emissions and broader greenhouse gas impacts, reinforcing
            its role as a catalyst for sustainable finance.
          </p>

          <img className="rp-figure" src={mou} width="1400" height="462"
               alt="Bank NXT signing the memorandum of understanding with the GREET consortium" />

          <h4 className="rp-subhead">
            Advancing Climate Transition through partnership with the GIZ’s GREET Programme
          </h4>
          <p>
            As part of its commitment to advancing its climate transition
            strategy, Bank NXT signed a Memorandum of Understanding (MoU) with a
            consortium comprising of Frankfurt School of Finance &amp; Management,
            and Chemonics, as part of the German development programme, Green
            Recovery for the Egyptian Economy Transformation (GREET). The MoU
            establishes a framework for cooperation under the Third Work Package
            of the Green Capacity Development Programme, funded by the (GIZ Egypt)
            on behalf of the German Federal Ministry for Economic Cooperation and
            Development (BMZ).
          </p>
          <p>
            The agreement aims to provide the bank with a comprehensive technical
            assistance package to develop and implement an ambitious Climate
            Transition Plan, reinforcing the bank’s position as a leader in
            sustainable finance in Egypt. The technical assistance focuses on
            supporting Egyptian financial institutions in transitioning to a
            green, climate-resilient economy.
          </p>
          <p>
            This MoU underscores Bank NXT’s strong commitment to integrating
            sustainability into its operations and business strategy and
            highlights the bank’s proactive approach in supporting Egypt’s
            transition toward a green economy, building trust among clients,
            partners, and stakeholders alike.
          </p>

          <img className="rp-figure" src={partners} width="1400" height="172"
               alt="German Cooperation, GIZ, Frankfurt School of Finance & Management and Bank NXT" />
        </div>
      </article>

      {/* ---- printed page 38 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>Tanmeyah – <span className="rp-accent">Environmental Performance and Operational Sustainability</span></h3>
          <p>
            Tanmeyah continued to advance its environmental commitments in 2025,
            translating its ESG strategy into measurable and verifiable outcomes.
            Through the publication of its Carbon Footprint (CFP) reports and the
            implementation of targeted carbon reduction initiatives, the Company
            strengthened its environmental transparency and operational
            efficiency.
          </p>
          <p>
            In the second half of 2025, Tanmeyah achieved LEED certification for
            its Head Office, reinforcing its commitment to sustainable building
            standards and resource efficiency. Complementing this milestone, the
            Company implemented a series of environmental initiatives focused on
            digitization, employee awareness, carpooling promotion, encouragement
            of electric transportation, and paper-use optimization.
          </p>
          <p><strong>These efforts generated tangible environmental benefits, including:</strong></p>
          <ul className="rp-bullets">
            <li>Savings of approximately 16 million paper sheets annually</li>
            <li>Elimination of 65,000 disposable cups</li>
            <li>Reduction of 16,000 litres of fuel consumption</li>
            <li>Annual energy savings of 109,594 kWh</li>
            <li>Achievement of an 81% recycling rate</li>
          </ul>
          <p>
            Collectively, these initiatives demonstrate Tanmeyah’s progress in
            reducing its operational footprint while enhancing efficiency,
            fostering a culture of environmental responsibility, and contributing
            to broader climate action objectives.
          </p>

          <h3>Dematerialisation &amp; Digitalisation</h3>
          <div className="rp-cols">
            <p>
              As a key pillar of its ESG strategy, EFG Holding is advancing
              digitalization and dematerialization initiatives to drive
              sustainable and efficient operations. By reducing reliance on
              paper-based processes and adopting digital documentation, automated
              workflows, and integrated platforms, the Firm minimizes its
              environmental footprint while enhancing operational performance. EFG
              Holding has undergone significant digitalization over the past few
              years. For instance, in 2025, the HR department finalized the
              blueprint for an in-house Applicant Tracking System that is
              launching in Q2 of 2026 and will facilitate their entire Talent
              Acquisition process. The IT department has also undergone
              significant dematerialization. This has been done through migrating
              systems onto cloud rather than using on premises data centres, use of
              external environments with environment certifications, use of
              SecurePrint to ensure better printing experience and reduce
              accidental or duplicate prints, leading to less unnecessary paper and
              energy used. Furthermore, IT has replaced old hardware with a new
              server, to reduce physical resource dependence and leading to lower
              electricity and cooling demand. The R&amp;D department has created a
              digitalized system for the reception desk to input the names of
              guests and interns, to minimize entrance queue and increase
              efficiency. Moreover, a facial recognition system has been introduced
              at the entrance.
            </p>
          </div>

          <div className="rp-demat">
            {dematerialisation.map(([icon, lines], i) => (
              <Fragment key={i}>
                {i > 0 && <span className="rp-demat-arrow" aria-hidden="true">▶</span>}
                <div className="rp-demat-box">
                  <img src={icon} alt="" />
                  <p>{lines.map((l, k) => <Fragment key={k}>{k > 0 && <br />}{l}</Fragment>)}</p>
                </div>
              </Fragment>
            ))}
            <p className="rp-demat-caption">
              Embedding digital solutions across the Group to enhance efficiency,
              reduce resource use, and support sustainable growth.
            </p>
          </div>
        </div>
      </article>

      {/* ---- printed page 39 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-cols">
            <p>
              There are many similar initiatives throughout the Group. The EFG
              Foundation has introduced an Enterprise Resource Planning (ERP)
              system at its Young Scholars’ Academy that allows for the
              digitalization of student records and attendance tracking, financial
              oversight and payroll systems, and teacher performance management,
              increasing efficiency and conserving resources. Bank NXT has
              partnered with UiPath and BMB Egypt to accelerate intelligent
              automation and bolster its digital transformation strategy. Tanmeyah
              has partnered with AMAN Holding to launch new digital channels for
              loan disbursement and payment collection, eliminating the need to
              visit branches or adhere to working hours. In partnership with Vlens,
              Tanmeyah has also enhanced its digital onboarding capabilities,
              reducing acquisition friction, improving turnaround times, and
              strengthening data capture for credit assessment. Kaf Insurance has
              launched an SME portal to expedite digital transformation, leading to
              the reduction of paper usage and streamlining operations.
            </p>
          </div>

          <div className="rp-progress">
            <p className="rp-progress-title">
              <b>Emissions &amp; Waste Management</b>2025 Progress at a Glance
            </p>
            <h3>Reporting &amp; Disclosure</h3>
            <ul>
              <li>EFG Holding released second CFP report based on consistent measurement &amp; monitoring of key parameters.</li>
              <li>Bank NXT released its 4th annual CFP report.</li>
              <li>Tanmeyah achieved LEED certification for its head office and released its second CFP report.</li>
            </ul>
            <h3>Resource Management</h3>
            <ul>
              <li>Comprehensive drive to increase dematerialization through diverse digitalization initiatives across the Firm.</li>
              <li>Monthly waste reporting to monitor, analyse, and improve waste management performance (organic waste, paper, carton, plastic bottles, bags and cups).</li>
            </ul>
          </div>

          <h3>
            Climate Action Through Education –{' '}
            <span className="rp-accent">The EFG Hermes Applied Technology School</span>
          </h3>
          <p>
            In September 2025, the EFG Foundation launched the EFG Hermes Applied
            Technology School (ATS) – Agri-Tech Specialization in El-Tod, Luxor in
            partnership with the Ministry of Education and Technical Education
            under the Applied Technology Schools (ATS) Initiative, marking the
            first-of-its-kind Agri-Tech specialization within applied technology
            schools in Egypt.
          </p>

          <div className="rp-goals">
            <h3>Goals</h3>
            <ul>
              <li>Provide youth in Luxor with access to modern, applied technical education that prepares them for emerging green jobs, entrepreneurship, and scalable agri-business pathways.</li>
              <li>Develop talents that can contribute to Egypt’s transition toward a green, innovation-driven economy.</li>
            </ul>
          </div>
        </div>
      </article>

      {/* ---- printed page 40 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <p>
            Agriculture is a cornerstone of Egypt’s economy, but the sector
            continues to face structural challenges including resource
            inefficiency, climate stress, outdated production methods, and a
            widening gap between education systems and labour-market needs. Youth
            in rural Upper Egypt often lack access to modern, applied technical
            education that prepares them for emerging green jobs,
            entrepreneurship, or scalable agri-business pathways. Addressing this
            gap requires an approach that equips young people with market-relevant
            skills, entrepreneurial thinking, and a sustainability mindset, while
            embedding education directly within real production and business
            environments.
          </p>

          <div className="rp-two">
            <p>
              Rooted in the Foundation’s core pillars of Youth Development and
              Climate Action, the school introduces a next-generation model of
              technical education, one that places employability, applied
              learning, and real-world exposure at the centre of the educational
              experience. The initiative capitalizes on the EFG Foundation’s
              long-standing success in Luxor—most notably through the Young
              Scholars’ Academy and extends the integrated development model to
              agricultural development by equipping youth with the skills,
              mindset, and confidence required to participate meaningfully in
              Egypt’s transition toward a green, innovation-driven economy.
            </p>
            <blockquote className="rp-quote rp-quote--right">
              <p>
                ‘The school reflects our commitment to empowering young people with
                the capabilities to thrive in a changing world. By investing in
                applied, future-ready education, we’re laying the groundwork for a
                generation of climate-conscious agricultural professionals who can
                lead Egypt’s green transition’
              </p>
              <p className="rp-quote-name">Hanaa Helmy</p>
              <p className="rp-quote-role">
                Group Chief Sustainability Officer, EFG Holding &amp; CEO, EFG Foundation
              </p>
            </blockquote>
          </div>

          <p>
            The EFG Hermes ATS – Agri-Tech was designed as a scalable,
            employability-driven model for applied learning. To ensure relevance,
            employability, and future readiness, EFG Foundation curated and led a
            multi-stakeholder curriculum development workshop to ensure diversity
            of perspectives. The Competency-Based Education curriculum was
            co-designed with diverse partners from academia, industry,
            accelerators and civil society to meet labour-market needs. The aim of
            the workshop was to ensure that curriculum competencies were grounded
            in actual hiring needs, operational realities, and emerging sector
            trends rather than just traditional academic progression.
          </p>

          <blockquote className="rp-quote rp-quote--right">
            <p>
              ‘Education is the cornerstone of inclusive development With the
              launch of this Agri-Tech School, we’re not only reimagining
              education, but we’re also building a bridge between opportunity and
              impact for Egypt’s youth, especially in underserved areas.’
            </p>
            <p className="rp-quote-name">Mona Zulficar</p>
            <p className="rp-quote-role">Chairperson EFG Holding &amp; the EFG Foundation</p>
          </blockquote>
        </div>
      </article>

      {/* ---- printed page 41 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>
            Mapping the Future:<br />
            <span className="rp-accent">Curriculum Development Workshop Participants*</span>
          </h3>

          <div className="rp-participants">
            {participants.map(([title, names, photo]) => (
              <div className="rp-participant" key={title}>
                <div className="rp-participant-body">
                  <h3>{title}</h3>
                  <p>{names}</p>
                </div>
                <img src={photo} width="700" height="395" alt="" />
              </div>
            ))}
          </div>

          <p className="rp-footnote">
            * Selected participants to illustrate the breadth of interest across
            organizations and stakeholders.
          </p>
        </div>
      </article>

      {/* ---- printed pages 42 and 43 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>
            The curriculum combines local context with international best
            practices and is designed around three core pillars:
          </h3>

          <p className="rp-curriculum">Integrated Curriculum</p>

          <div className="rp-pillars">
            {pillars.map(([n, title]) => (
              <div className="rp-pillar-head" key={n}>
                <p className="rp-pillar-n">{n}</p>
                <p className="rp-pillar-t">{title}</p>
              </div>
            ))}
            {pillars.map(([n, , body]) => (
              <div className="rp-pillar-body" key={`${n}-body`}><p>{body}</p></div>
            ))}
          </div>

          <div className="rp-outcome">
            <h3>Graduate Outcome</h3>
            <p>
              Technical proficiency, workplace-ready skills, and the
              entrepreneurial capability needed to access quality jobs or create
              new economic opportunities within Egypt’s green economy.
            </p>
          </div>

          <div className="rp-cols">
            <p>
              The EFG Hermes ATS state-of-the-art campus supports this holistic
              approach to education with advanced science and microbiology
              laboratories; digital and computer labs; classrooms equipped with
              smart boards; extensive sports facilities, as well as art and music
              rooms and a fully equipped theatre. In addition to reflecting the EFG
              Foundation’s commitment to the arts, drama and performing arts
              classes reinforce creativity, communication, emotional intelligence,
              and leadership, critical competencies for employability and personal
              development. Together with the Ministry of Education and Technical
              Education, the EFG Foundation and EduCloud, a pioneering EduTech
              solutions provider, formed a joint academic and admissions panel,
              overseeing governance, quality standards, and selection processes.
              The school has secured accreditation from the German-Arab Chamber of
              Industry and Commerce (AHK), enabling student registration within the
              AHK database and opening pathways for further training and employment
              in Germany. The school is also in the process of obtaining ETKAAN
              accreditation, aligning it with Egypt’s national quality framework
              for technical education.
            </p>
            <p>
              Following a rigorous application process, entrance examinations, and
              panel interviews, the school welcomed its first cohort of 75 students
              in September 2025. In parallel, 26 teachers and administrative staff
              were carefully selected to ensure strong technical expertise,
              pedagogical capability, and alignment with the school’s mission. The
              teaching team, led by a female principal, completed intensive
              induction training covering the competency-based education
              methodology, AI-enabled learning tools, active learning approaches,
              and capstone supervision. Ahead of the academic year, students
              participated in a preparatory bootcamp delivered in partnership with
              Berlitz Egypt and Wellspring, focusing on communication, leadership,
              teamwork, and confidence-building.
            </p>
          </div>

          <div className="rp-progress" style={{ '--rp-progress-size': '3.696cqw' }}>
            <p className="rp-progress-title">
              <b>Climate Action Through Education</b>2025 Progress at a Glance
            </p>
            <ul>
              <li>Establishment of the EFG Hermes ATS – Agri-tech in Luxor in August 2025.</li>
              <li>Multi-stakeholder curriculum development workshop.</li>
              <li>Integrated the competency-based education curriculum including 3-year intensive English-German language instruction.</li>
              <li>Accreditation from the German-Arab Chamber of Industry and Commerce (secured) and ETKAAN (ongoing).</li>
              <li>Induction training for 26 teachers and administrative staff</li>
              <li>Accepted first cohort of 75 students.</li>
              <li>Berlitz language bootcamp for accepted students.</li>
              <li>Wellspring soft skills camp day.</li>
              <li>A 3-feddan water-energy-food nexus farm.</li>
              <li>Capacity building programme for 270 farmers.</li>
              <li>Sport for Development Day for 160 local children</li>
            </ul>
          </div>
        </div>
      </article>

      {/* ---- printed page 44 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>The Power of Partnership</h3>
          <p>
            The EFG Foundation firmly believes in the importance of partnerships
            in leveraging resources and ensuring long-term project
            sustainability. Delivering a holistic agri-tech education model
            requires collaboration across sectors through strategic partnerships
            with agricultural enterprises, technology providers, educators,
            government, and development institutions. By working collectively,
            partners not only expand opportunities for students but also
            contribute to building a more resilient and inclusive green economy,
            one that is responsive to evolving environmental and economic
            realities.
          </p>

          <div className="rp-allies">
            {allies.map((a) => (
              <div className={`rp-ally${a.flip ? ' rp-ally--flip' : ''}`} key={a.title}>
                <div className="rp-ally-box">
                  <h4>{a.title}</h4>
                  <p>{a.body}</p>
                </div>
                <img src={a.logo} alt={a.name} />
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* ---- printed page 45 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>Laying the Groundwork</h3>
          <p>
            The EFG Foundation’s deep experience in establishing successful
            educational models, particularly the Young Scholars’ Academy has
            highlighted the importance of preparation and training on both sides
            of the classroom to improve chances of success. Two preparatory
            programmes (one for teachers and educators and one for admitted
            students) were implemented to lay the groundwork for the first cohort
            of students at the EFG Hermes ATS – Agri-Tech.
          </p>

          <div className="rp-tiles">
            {groundwork.slice(0, 3).map(([photo, caption]) => (
              <figure className="rp-tile" key={caption}>
                <img src={photo} width="700" height="553" alt="" />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>

          <p>
            The intensive <strong>Berlitz Egypt</strong> bootcamp was the crucial
            first step for our students, preparing them for the three-year
            programme taught entirely in English. Beyond vocabulary, they learned
            to share ideas with clarity, shape their personal brand, and master
            teamwork.
          </p>
          <p>
            Built on a rigorous and immersive approach, the programme equips
            students to actively think and communicate in English from day one.
            Our partnership with Berlitz Egypt extends beyond the bootcamp,
            ensuring continuous language development aligned with their academic
            and professional journey. Students also took part in a special camp
            day organized by Wellspring to build the trust, confidence, and
            connection that are the foundation of great learning.
          </p>
          <p>
            For teachers, the Induction Training is the essential first step to
            lead the new AI-driven, Competency-Based Education model. The aim is
            to equip educators with smart tools to become mentors and coaches
            capable of unlock the full potential of every student. Through
            specialized training, our teachers are leading a shift to active
            learning. Our classrooms are now dynamic learning communities where
            students are encouraged to question, discuss, and think critically.
          </p>

          <div className="rp-tiles">
            {groundwork.slice(3).map(([photo, caption]) => (
              <figure className="rp-tile" key={caption}>
                <img src={photo} width="700" height="522" alt="" />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
