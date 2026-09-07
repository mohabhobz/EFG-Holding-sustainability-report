/**
 * SECTION FIVE — STAKEHOLDER ENGAGEMENT, printed pages 102 to 126.
 *
 * The divider, the approach and the engagement mechanism, awareness raising,
 * capacity building, peer engagement and community support.
 *
 * The section is built out of a handful of repeating printed devices, each of
 * which is a component here rather than a picture, so the words inside them
 * stay real text:
 *
 *   .rp-eco      the stakeholder ecosystem and engagement mechanism, page 105
 *   .rp-lnd      the learning-and-development figures, page 109
 *   .rp-shot     a photograph with the print's green label across its foot
 *   .rp-intern   an intern's words on the lime panel, pages 111 and 112
 *   .rp-case     a cream panel of copy beside a mosaic of photographs
 *   .rp-speak    a photograph beside a coloured panel with a tab, pp 116–118
 *   .rp-cream    a cream panel carrying copy and a strip of photographs
 *
 * Two things the print gets wrong are kept as printed and noted here rather
 * than silently mended: the label on page 111 reads “Cybersecurity Challengea”
 * (it is set as “Cybersecurity Challenge” here, the stray letter dropped), and
 * the fourth column of the page 105 diagram repeats the third column's three
 * bullets. The bullets are reproduced as printed.
 */
import SectionOpener from '../components/SectionOpener';

import emblem from '../assets/report/ste/emblem-stakeholder.webp';
import illustration104 from '../assets/report/ste/p104-illustration.webp';
import ecoIcon1 from '../assets/report/ste/p105-icon-1.webp';
import ecoIcon2 from '../assets/report/ste/p105-icon-2.webp';
import ecoIcon3 from '../assets/report/ste/p105-icon-3.webp';
import ecoIcon4 from '../assets/report/ste/p105-icon-4.webp';
import savvy1 from '../assets/report/ste/p106-1.webp';
import savvy2 from '../assets/report/ste/p106-2.webp';
import savvy3 from '../assets/report/ste/p106-3.webp';
import savvy4 from '../assets/report/ste/p106-4.webp';
import savvy5 from '../assets/report/ste/p106-5.webp';
import savvy6 from '../assets/report/ste/p106-6.webp';
import mind1 from '../assets/report/ste/p107-tile-1.webp';
import mind2 from '../assets/report/ste/p107-tile-2.webp';
import mind3 from '../assets/report/ste/p107-tile-3.webp';
import mind4 from '../assets/report/ste/p107-tile-4.webp';
import mind5 from '../assets/report/ste/p107-tile-5.webp';
import one1 from '../assets/report/ste/p107-one-1.webp';
import one2 from '../assets/report/ste/p107-one-2.webp';
import one3 from '../assets/report/ste/p107-one-3.webp';
import aiWorkshop from '../assets/report/ste/p110-workshop.webp';
import ai1 from '../assets/report/ste/p110-photo-1.webp';
import ai2 from '../assets/report/ste/p110-photo-2.webp';
import cyber from '../assets/report/ste/p111-cyber.webp';
import cyber1 from '../assets/report/ste/p111-photo-1.webp';
import cyber2 from '../assets/report/ste/p111-photo-2.webp';
import omar from '../assets/report/ste/p111-omar.webp';
import razan from '../assets/report/ste/p112-razan.webp';
import cov1 from '../assets/report/ste/p113-coventry-1.webp';
import cov2 from '../assets/report/ste/p113-coventry-2.webp';
import giu1 from '../assets/report/ste/p113-giu-1.webp';
import giu2 from '../assets/report/ste/p113-giu-2.webp';
import giu3 from '../assets/report/ste/p113-giu-3.webp';
import you1 from '../assets/report/ste/p114-youthhub-1.webp';
import you2 from '../assets/report/ste/p114-youthhub-2.webp';
import you3 from '../assets/report/ste/p114-youthhub-3.webp';
import kid1 from '../assets/report/ste/p114-kidzania-1.webp';
import kid2 from '../assets/report/ste/p114-kidzania-2.webp';
import kid3 from '../assets/report/ste/p114-kidzania-3.webp';
import conference from '../assets/report/ste/p115-conference.webp';
import fii from '../assets/report/ste/p116-fii.webp';
import leaders from '../assets/report/ste/p116-leaders.webp';
import forbes from '../assets/report/ste/p117-forbes.webp';
import berlin from '../assets/report/ste/p117-berlin.webp';
import actuaries from '../assets/report/ste/p117-actuaries.webp';
import valuPanel from '../assets/report/ste/p118-valu.webp';
import aiPanel from '../assets/report/ste/p118-panel.webp';
import womenSummit from '../assets/report/ste/p118-women.webp';
import hazel1 from '../assets/report/ste/p119-hazel-1.webp';
import hazel2 from '../assets/report/ste/p119-hazel-2.webp';
import hazel3 from '../assets/report/ste/p119-hazel-3.webp';
import sdg1 from '../assets/report/ste/p120-sdg-1.webp';
import sdg2 from '../assets/report/ste/p120-sdg-2.webp';
import week1 from '../assets/report/ste/p121-week-1.webp';
import week2 from '../assets/report/ste/p121-week-2.webp';
import week3 from '../assets/report/ste/p121-week-3.webp';
import bz1 from '../assets/report/ste/p122-tile-1.webp';
import bz2 from '../assets/report/ste/p122-tile-2.webp';
import bz3 from '../assets/report/ste/p122-tile-3.webp';
import bz4 from '../assets/report/ste/p122-tile-4.webp';
import bz5 from '../assets/report/ste/p122-tile-5.webp';
import bz6 from '../assets/report/ste/p122-tile-6.webp';
import ripple from '../assets/report/ste/p123-ripple.webp';
import athlete from '../assets/report/ste/p123-athlete.webp';
import convoy1 from '../assets/report/ste/p124-convoy-1.webp';
import convoy2 from '../assets/report/ste/p124-convoy-2.webp';
import burn from '../assets/report/ste/p124-burn.webp';
import iftar1 from '../assets/report/ste/p125-iftar-1.webp';
import iftar2 from '../assets/report/ste/p125-iftar-2.webp';
import eid1 from '../assets/report/ste/p125-eid-1.webp';
import eid2 from '../assets/report/ste/p125-eid-2.webp';
import kafDay from '../assets/report/ste/p126-photo.webp';
import iconAthletics from '../assets/report/ste/icon-athletics.webp';
import iconMedical from '../assets/report/ste/icon-medical.webp';
import iconCommunity from '../assets/report/ste/icon-community.webp';

const stakeholders = [
  'Employees', <>Clients and<br />Investors</>, <>Regulators and<br />Policymakers</>,
  <>Partners and<br />Suppliers</>, <>Local<br />Communities</>, <>Industry<br />Peers</>,
];

/* The four mechanisms on page 105. The fourth column's bullets repeat the
   third's in the printed report; they are reproduced as printed. */
const mechanisms = [
  {
    icon: ecoIcon1, name: 'Awareness Raising',
    lead: 'Building understanding across our ecosystem',
    items: ['ESG awareness campaigns', 'Sustainability and financial literacy initiatives',
            'Targeted communications across EFG Holding and subsidiaries'],
    impact: 'Impact: Strengthens transparency and informed participation.',
  },
  {
    icon: ecoIcon2, name: 'Capacity Building',
    lead: 'Equipping stakeholders with knowledge and tools',
    items: ['Workshops and structured training programs', 'Webinars and sector-focused briefings',
            'Skills development initiatives'],
    impact: 'Impact: Enhances capability, resilience, and long-term value creation.',
  },
  {
    icon: ecoIcon3, name: 'Peer Engagement',
    lead: 'Driving collective progress',
    items: ['Industry forums and roundtables', 'Strategic partnerships', 'Thought leadership contributions'],
    impact: 'Impact: Encourages shared standards and market development.',
  },
  {
    icon: ecoIcon4, name: 'Community Support',
    lead: 'Creating meaningful, long-term relationships',
    items: ['Industry forums and roundtables', 'Strategic partnerships', 'Thought leadership contributions'],
    impact: 'Impact: Deepens trust and supports inclusive growth.',
  },
];

const lndFigures = [
  ['Total spent on L&D initiatives', <>33.2M<br />EGP</>],
  [<>Participation in L&amp;D programmes<br />(non-mandatory)</>, <>53.23%</>],
  ['Time spent learning company-wide', <>11,148<br />hours</>],
  ['Number of courses delivered', <>112</>],
];

export default function StakeholderEngagement() {
  return (
    <>
      {/* ---- printed pages 102 and 103 ---- */}
      <SectionOpener
        eyebrow="Section Five"
        title={<><span className="so-light">Stakeholder</span><br />Engagement</>}
        numeral="05"
        emblem={emblem}
        emblemAlt="A paper-cut pair of hands holding a family beneath a heart"
        paper="#ffffff"
      />

      {/* ---- printed pages 104 and 105 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h1>Stakeholder Engagement</h1>
          <p>
            Stakeholder engagement is embedded across EFG Holding and its
            subsidiaries, shaping how we communicate, collaborate, and create shared
            value. This section sets out our comprehensive approach to engaging the
            wide range of individuals, communities, and organisations whose support,
            knowledge, and participation are integral to delivering our commitments.
            We begin by outlining our overall approach to stakeholder engagement,
            followed by a description of our Awareness Raising activities, which aim
            to build understanding of sustainability challenges and opportunities
            among key audiences. This is complemented by our Capacity Building work,
            which equips our employees with the skills and resources needed to take
            meaningful action. The section also covers Peer Engagement, reflecting
            our commitment to active engagement with industry peers and global
            platforms. Finally, we present our Community Support initiatives,
            designed to give back to the communities we serve, strengthen internal
            connections through volunteering, and promote well-being across the
            organization.
          </p>
          <img className="rp-figure rp-bleed-img" src={illustration104}
               width="1500" height="919"
               alt="An illustration of the people, institutions and communities EFG Holding engages" />

          <h2>Approach</h2>
          <div className="rp-cols rp-cols--pair">
            <p>
              At EFG Holding, stakeholder engagement is guided by transparency,
              accountability, and continuous dialogue. We recognize that long-term
              value creation depends on understanding the expectations and concerns of
              those who interact with our business across EFG Holding and its
              subsidiaries. Our approach emphasizes structured engagement channels,
              consistent communication, and clear feedback loops that inform strategy,
              risk management, and operational decisions.
            </p>
            <p>
              Engagement is embedded across functions and business lines, ensuring
              that awareness campaigns, educational initiatives, peer collaboration,
              and community-building activities are not standalone efforts but part of
              an integrated framework. By maintaining open dialogue and measuring
              outcomes, we strengthen trust, anticipate emerging risks, and ensure our
              ESG priorities remain responsive and relevant.
            </p>
          </div>

          <section className="rp-eco">
            <h3>Our Stakeholder Ecosystem</h3>
            <ul className="rp-eco-chips">
              {stakeholders.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
            <p className="rp-eco-banner">Our Engagement Mechanism</p>
            <div className="rp-eco-cols">
              {mechanisms.map((m) => (
                <section key={m.name}>
                  <h4>{m.name}</h4>
                  <div className="rp-eco-body">
                    <img src={m.icon} width="400" height="300" alt="" />
                    <p className="rp-eco-lead">{m.lead}</p>
                    <ul>{m.items.map((i) => <li key={i}>{i}</li>)}</ul>
                    <p className="rp-eco-impact">{m.impact}</p>
                  </div>
                </section>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* ---- printed pages 106 and 107 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h2>Awareness Raising</h2>
          <p>
            Through targeted media campaigns and digital outreach, we promote
            informed participation across a range of important topics, including
            financial literacy, inclusion of children with special needs, and online
            security. By leveraging traditional and digital platforms across EFG
            Holding and its subsidiaries, these initiatives aim to broaden
            understanding, encourage responsible behaviour, and support safer, more
            inclusive engagement with financial and social systems.
          </p>

          <h3>‘Stay Savvy’ with Tanmeyah</h3>
          <p>
            In 2025, Tanmeyah expanded financial literacy outreach through the ‘Stay
            Savvy’ initiative under FRA patronage and in partnership with
            Nilepreneurs and the Egyptian Tax Authority. The initiative reached
            approximately 2,000 beneficiaries through branches, mobile units, and
            community centres, with a target of 5,000 beneficiaries by end-2026. The
            programme strengthens financial capability and enhances long-term client
            resilience.
          </p>
          <div className="rp-grid3">
            {[savvy1, savvy2, savvy3, savvy4, savvy5, savvy6].map((s, i) => (
              <img key={i} src={s} width="600" height="600"
                   alt={`A frame from Tanmeyah’s ‘Stay Savvy’ financial literacy campaign (${i + 1} of 6)`} />
            ))}
          </div>

          <h3>Solve Mind Mysteries with the EFG Foundation</h3>
          <p>
            In 2025, the EFG Foundation launched a dedicated online awareness
            campaign to shed light on neurodivergent conditions that affect children,
            aiming to foster greater understanding, early recognition, and community
            support. The campaign addressed topics such as autism spectrum disorder,
            ADHD, cerebral palsy, and other developmental conditions. It builds on the
            Foundation’s work to promote inclusive learning through its flagship Young
            Scholars’ Academy.
          </p>
          <p>
            By encouraging informed dialogue and reducing stigma, the initiative
            sought to empower parents, educators, and caregivers with knowledge, while
            reinforcing the importance of inclusive education and early intervention
            within the communities the Foundation serves.
          </p>
          <div className="rp-grid5">
            {[mind1, mind2, mind3, mind4, mind5].map((s, i) => (
              <img key={i} src={s} width="500" height="500"
                   alt={`A post from the EFG Foundation’s Mind Mysteries Solved campaign (${i + 1} of 5)`} />
            ))}
          </div>

          <h3>Understand the Markets with EFG Hermes One</h3>
          <p>
            EFG Hermes ONE supports financial literacy through targeted digital
            campaigns designed to help new and aspiring investors better understand
            capital markets. Through educational content, market explainers, and
            platform-based insights, the initiative demystifies investing concepts and
            promotes informed decision-making. By equipping users with accessible
            tools and knowledge, EFG Hermes ONE encourages broader, more confident
            participation in the financial markets.
          </p>
          <div className="rp-grid3 rp-grid3--tall">
            {[one1, one2, one3].map((s, i) => (
              <img key={i} src={s} width="700" height="850"
                   alt={`A financial literacy post from EFG Hermes ONE (${i + 1} of 3)`} />
            ))}
          </div>
        </div>
      </article>

      {/* ---- printed pages 108 and 109 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h2>Capacity Building</h2>
          <p>
            Building knowledge and skills is central to sustaining long-term impact.
            Our capacity-building efforts take place both internally, through
            continuous training and professional development for our staff, and
            externally, through workshops, seminars, and structured programmes
            delivered in collaboration with universities and academic institutions. By
            investing in talent development within the organization and supporting
            students and young professionals beyond it, we contribute to a stronger,
            more capable financial ecosystem.
          </p>

          <h3>Investing in our People</h3>
          <p>
            Continuous learning is fundamental to maintaining high standards of
            performance and governance across EFG Holding. Our internal learning and
            development programmes are designed to strengthen technical expertise,
            leadership capabilities, and ethical decision-making at all levels of the
            organization. Through structured training, cross-functional knowledge
            sharing, and targeted upskilling initiatives, we equip our people to adapt
            to evolving market demands while supporting sustainable, long-term growth.
          </p>
          <p>
            The Academy by EFG serves as the Group’s central platform for talent
            development, capability building, and advancement in leadership. Through a
            structured learning framework, the Academy supports continuous
            professional development across all levels, ensuring employees are
            equipped with the skills, knowledge, and competencies required to support
            the Group’s long-term strategy and evolving business needs.
          </p>
          <p>
            The annual Development Needs Assessment (DNA) is a key component of the
            development process for our L&amp;D activities. It provides an opportunity
            for both employees and managers to explore key development needs and
            create the corresponding learning journeys based on 4 skills tracks- smart
            skills, technical skills, technology, and The Academy, for themselves and
            their teams.
          </p>
          <p>
            Together, The Academy, by EFG and the DNA framework contribute to building
            a resilient, skilled, and values-driven workforce, reinforcing the Group’s
            commitment to human capital development, responsible leadership, and
            long-term value creation.
          </p>
          <p>
            This year, one of the Academy’s main objectives was to strengthen the
            relevance and impact of learning by better contextualizing it to our
            business environment. This was achieved by working more closely with
            instructors ahead of delivery to tailor case studies, practical exercises,
            and discussions to our specific context. While elements of this approach
            had been used in previous years, this year it was applied more
            systematically across programmes, resulting in a stronger alignment
            between learning content and business needs.
          </p>
          <p>
            Another initiative that was introduced in regard to the in-house courses
            is the self enrolment feature, which allowed employees to express their
            interest and select the courses they wished to attend irrespective of
            their participation in the DNA. This led to a noticeable increase in the
            level of employee engagement. Since the launch of this feature, 54.1% of
            participants have signed up through self-enrolment.
          </p>

          <h3>Key programmes offered in 2025:</h3>
          <ul className="rp-dashes">
            <li>
              Leadership in Action programme targeting Associate Directors and
              Directors and delivered in partnership with the Onsi Sawiris School of
              Business of the American University in Cairo. 24 employees in Egypt
              across various departments including Brokerage, HR, Internal Audit, IT,
              Compliance, Finance, and CSI participated.
            </li>
            <li>
              Leading Forward, designed for Associate VPs and VPs designed to deepen
              participants’ understanding of personality preferences, strengthen their
              leadership mindset and accountability, and introduce the three-step model
              “Own It – Shape It – Amplify It.” A total of 16 employees from Egypt, the
              UAE, and Bahrain took part, representing functions such as Asset
              Management, Brokerage, Brokerage Operations, Compliance, Finance, IT, and
              Risk Management.
            </li>
          </ul>
          <p>
            Under the umbrella of The Academy, three programmes were conducted. The
            first was the Emerging Leaders I designed for AVPs, it included 23
            participants selected from a pool of 44 applicants across various
            departments - Asset Management Operations, Brokerage, Finance, Investment
            Banking, IT, and Risk. Emerging Leaders II, track targeted AD level
            employees and included 22 participants selected from 51 applicants across
            Brokerage, Finance, HR, IT, Internal Audit, Marketing, and Risk. The
            Leadership Development Programme for directors, delivered in two modules:
            the first in January 2025 and the second in January 2026. The programme
            builds on the leadership experience of Directors who will guide the Firm
            into its next phase of growth and expansion, directors with a proven track
            record in identifying medium and long-term business opportunities,
            overcoming challenges, and motivating teams to reach their full potential.
            A total of 20 participants were selected from a pool of 28 through a
            comprehensive assessment center. The first module, delivered in January
            2025, was attended by 17 participants from Asset Management Operations,
            Brokerage, Compliance, CSI, finance, Internal Audit, IT, PE, and Research,
            with the second module completed in January 2026. The count dropped to 13
            due to unavoidable business and personal circumstances.
          </p>
          <ul className="rp-dashes">
            <li>
              Certified Product Management (CPM) programme directed towards IT
              professionals (24 participants).
            </li>
          </ul>
          <p>
            The overall evaluation score across all courses is 4.46 out of 5 (89.1%),
            where the in-house courses scored higher with an average of 4.66 (93.2%),
            while public courses scored an average of 4.1 (82%). The difference in the
            level of satisfaction is mostly attributed to the limited control we have
            over the learning environment, participant demographics and the trainer
            selection in public cohorts.
          </p>

          <section className="rp-lnd">
            <h4>Investing in People<br />Delivering Performance</h4>
            <dl>
              {lndFigures.map(([label, value], i) => (
                <div key={i}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
              <div className="rp-lnd-rule" />
            </dl>
          </section>
        </div>
      </article>

      {/* ---- printed pages 110 and 111 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>AI Education</h3>
          <p>
            As part of our continuous drive to equip our employees with the latest
            know-how, in 2025, we organized several hands-on workshops, to provide
            them with cutting edge AI knowledge and guide them in identifying real
            world applications tailored to their business needs.
          </p>
          <figure className="rp-shot">
            <img src={aiWorkshop} width="1300" height="582" alt="An AI training workshop at EFG Holding" />
            <figcaption>AI Training Workshop</figcaption>
          </figure>
          <p>
            This initiative is part of our structured AI strategy from education to
            execution ensuring that AI is not just a buzzword but a tangible driver of
            efficiency, innovation, and transformation across our organization. We also
            conducted AI and career training sessions at Nile University and New Giza
            University.
          </p>
          <div className="rp-pair rp-pair--tight">
            <img src={ai1} width="800" height="448" alt="Employees at an AI training workshop" />
            <img src={ai2} width="800" height="424" alt="Employees at an AI training workshop" />
          </div>

          <h3>Cybersecurity Training</h3>
          <p>
            Empowering our teams to stay secure is a key priority at EFG Holding. As
            part of our commitment to fostering a culture of resilience, we hosted the
            ‘Supremacy Cyber Security Challenge’, an engaging, hands-on experience
            designed to strengthen cyber awareness across our organization.
          </p>
          <figure className="rp-shot">
            <img src={cyber} width="1300" height="498" alt="Colleagues taking part in the Supremacy Cyber Security Challenge" />
            <figcaption>Cybersecurity Challenge</figcaption>
          </figure>
          <div className="rp-pair rp-pair--tight">
            <img src={cyber1} width="800" height="416" alt="A phone being used during the cyber security challenge" />
            <img src={cyber2} width="800" height="418" alt="A team working through the cyber security challenge" />
          </div>
          <p>
            Throughout the challenge, our people had the opportunity to compete,
            collaborate, and sharpen their skills in identifying and responding to
            potential threats. By combining education with real-time problem-solving,
            the initiative helped reinforce best practices and equip our teams with the
            tools they need to navigate today’s evolving digital landscape with
            confidence.
          </p>

          <figure className="rp-intern">
            <img src={omar} width="800" height="496" alt="Omar, a 2025 Tanmeyah intern" />
            <blockquote>
              <p>
                ‘I learnt so much from the course coordinators. How to apply all the
                theory I learnt at university in real life. After my internship
                finished, they offered me a permanent position. I took it of course,
                because the environment here is really great.’
              </p>
              <footer><b>Omar</b><span>Tanmeyah Intern 2025</span></footer>
            </blockquote>
          </figure>
        </div>
      </article>

      {/* ---- printed pages 112 and 113 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <figure className="rp-intern">
            <img src={razan} width="800" height="513" alt="Razan, a 2025 Tanmeyah intern" />
            <blockquote>
              <p>
                ‘Every day, I learnt something new. The instructors taught us so much
                about how real work is done. It was an incredible experience.’
              </p>
              <footer><b>Razan</b><span>Tanmeyah Intern 2025</span></footer>
            </blockquote>
          </figure>

          <p>
            Our subsidiaries share this philosophy and commitment to employee
            development. Recognizing that sustainable growth begins internally,
            Tanmeyah launched Tanmeyah Academy in H2 2025 to institutionalize
            governance culture, sustainability awareness, and responsible finance
            practices as well as to power a strong internship programme. The Academy
            delivers structured learning tracks covering customer excellence, ethical
            conduct, compliance, and responsible lending.
          </p>
          <p>
            Collaboration with the British Council further supports human capital
            development, strengthening institutional capability, governance awareness,
            and operational resilience, key enablers of sustainable long-term growth.
          </p>

          <h3>Sowing the Seeds of Change</h3>
          <p>
            Engaging with school and university students is an important part of our
            broader awareness and capacity-building efforts. Through campus workshops,
            guest lectures, and mentorship sessions, we introduce students to financial
            literacy, capital markets, responsible investing, and emerging digital
            finance trends. These initiatives help bridge the gap between academic
            learning and real-world application, equipping young people with the
            knowledge, skills, and confidence needed to navigate financial systems and
            pursue careers within the sector.
          </p>
          <p>
            Across EFG Holding and its subsidiaries, student engagement takes many
            forms, reflecting the breadth of our platform. Teams from different
            business lines regularly participate in job fairs, university forums, and
            on-site introductory sessions, offering practical insights into our work.
            This diversity of engagement ensures that students are exposed to multiple
            pathways within the financial sector and gain a well-rounded understanding
            of its opportunities and responsibilities.
          </p>

          <section className="rp-case rp-case--wide">
            <div className="rp-case-text">
              <h3>Coventry University x EFG Finance</h3>
              <p>
                We recently welcomed students from Coventry University to an immersive
                workshop that highlighted insights and real-world case studies behind
                EFG Finance’s diverse umbrella of brands, giving students a glimpse of
                the world of finance.
              </p>
            </div>
            <div className="rp-case-art rp-case-art--two">
              <img src={cov1} width="800" height="508" alt="Students from Coventry University at an EFG Finance workshop" />
              <img src={cov2} width="800" height="472" alt="A speaker addressing Coventry University students" />
            </div>
          </section>

          <section className="rp-case rp-case--flip">
            <div className="rp-case-text">
              <h3>GIU &amp; GUC x Tanmeyah</h3>
              <p>
                Tanmeyah hosted a group of students from the GUC and the GIU at its
                premises, where they had the opportunity to experience a glimpse of the
                working environment, culture and gain insight into the various
                departments across the company. Tanmeyah also participated in the GIU
                employment fair.
              </p>
            </div>
            <div className="rp-case-art">
              <img className="rp-case-wide" src={giu1} width="900" height="419"
                   alt="Students visiting Tanmeyah’s offices" />
              <img src={giu2} width="700" height="440" alt="Students at the GIU employment fair" />
              <img src={giu3} width="700" height="430" alt="Tanmeyah’s stand at the GIU employment fair" />
            </div>
          </section>
        </div>
      </article>

      {/* ---- printed page 114 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <section className="rp-case">
            <div className="rp-case-text">
              <h3>Youthhub<br />x Valu</h3>
              <p>
                Valu welcomed bright students from Youthhub Egypt to its offices for an
                engaging and insightful day. From exploring fintech innovation to
                discussing real-world business challenges, it was a valuable
                opportunity to inspire curiosity about the future of finance.
              </p>
            </div>
            <div className="rp-case-art">
              <img className="rp-case-wide" src={you1} width="900" height="403"
                   alt="Students from Youthhub Egypt visiting Valu" />
              <img src={you2} width="700" height="438" alt="A speaker presenting to Youthhub students" />
              <img src={you3} width="700" height="434" alt="Youthhub students at Valu’s offices" />
            </div>
          </section>

          <section className="rp-case rp-case--flip">
            <div className="rp-case-text">
              <h3>Kidzania x EFG Hermes</h3>
              <p>
                The EFG Hermes and KidZania Cairo partnership officially kicked off in
                2025. This innovative collaboration immerses young minds in the
                fascinating world of finance and investing through hands-on
                experiences. At the heart of this journey is a custom-designed stock
                market simulation that empowers kids to become mini-investors and learn
                about market dynamics.
              </p>
            </div>
            <div className="rp-case-art">
              <img className="rp-case-wide" src={kid1} width="900" height="404"
                   alt="The KidZania Cairo building" />
              <img src={kid2} width="700" height="435" alt="Children taking part in the stock market simulation" />
              <img src={kid3} width="700" height="427" alt="The EFG Hermes and KidZania partnership launch" />
            </div>
          </section>
        </div>
      </article>

      {/* ---- printed page 115 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3>Peer Engagement</h3>
          {/* One paragraph in the print, flowed across two columns. It has to
              stay one <p> or the sentence breaks at "global / stage". */}
          <div className="rp-cols">
            <p>
              As a leading financial services institution, EFG Holding recognizes the
              importance of active engagement with industry peers and global platforms.
              Through participation in regional and international forums, thought
              leadership initiatives, and collaborative industry efforts, the Group
              contributes to shaping market standards and advancing responsible finance
              practices. This outward-facing engagement reflects EFG Holding’s position
              as a credible voice on the regional and global stage, committed to
              dialogue, knowledge exchange, and collective progress. In recognition of
              these efforts, the Financial Regulatory Authority (FRA) recognized EFG
              Holding as one of 13 companies leading performance in sustainability and
              climate disclosure reporting for 2024, reflecting the growing importance
              of transparent ESG practices in the Egyptian market.
            </p>
          </div>
          <img className="rp-media" src={conference} width="1300" height="656"
               alt="EFG Holding’s annual investor conference" />
          <p>
            EFG Holding has a long-standing history of convening investor conferences
            that bring together global investors, corporate leaders, policymakers, and
            industry experts. Over the years, conferences such as this year’s 11th
            Annual London Investor Conference and our annual One on One have become key
            platforms for dialogue, capital introduction, and market insight across
            emerging and frontier markets. By facilitating direct engagement, the Group
            has contributed to deepening market transparency, strengthening
            cross-border investment flows, and reinforcing its position as a trusted
            bridge between regional opportunities and global capital.
          </p>
        </div>
      </article>

      {/* ---- printed pages 116 and 117 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <img className="rp-logo rp-logo--float rp-logo--left" src={fii} width="583" height="600"
               style={{ '--w': '23.72cqw', '--wm': '150px' }}
               alt="EFG Hermes and the FII Institute announce a strategic partnership" />
          <p>
            As always, we place particular emphasis on partnerships and in 2025, we
            are proud to report that we have entered into a strategic partnership with
            the Future Investment Initiative (FII) Institute. FII Institute is a global
            nonprofit foundation with an investment arm and one agenda: Impact on
            Humanity. Committed to Environmental, Social and Governance, the institute
            fosters the brightest minds and transforms ideas into real-world solutions
            in five focus areas: AI and Robotics, Education, Healthcare and
            Sustainability. These areas mesh perfectly with EFG Holding’s focus areas.
            The partnership underscores our commitment to bridging capital with
            opportunity, helping companies accelerate growth and investors access
            high-potential markets. In a landscape where cross-border finance is the
            engine of regional progress, EFG Hermes once again demonstrates that
            expertise, execution, and deep local insight are the cornerstones of value
            creation for clients and stakeholders alike. At the ninth FII conference,
            Karim Awad, Group CEO of EFG Holding, participated on the ‘Is Resilience
            the New Measure of Corporate Strength?’ panel, where he explained the
            elements of a resilient business model in today’s volatile investment
            climate.
          </p>
          <p>
            Throughout the year, our key leaders have actively represented EFG Holding
            at industry events, sharing insights, shaping industry standards, and
            fostering collaboration. The examples highlighted here illustrate just a
            few of the ways our people contribute to dialogue, influence, and thought
            leadership across regional and global financial markets.
          </p>
          <img className="rp-media" src={leaders} width="1300" height="642"
               alt="EFG Holding leaders speaking at industry events" />

          <div className="rp-speak rp-speak--olive">
            <img src={forbes} width="670" height="700" alt="Hanaa Helmy at the Forbes Sustainability Leaders Summit" />
            <div>
              <p>
                Hanaa Helmy, Group Chief Corporate Sustainability and Impact Officer of
                EFG Holding and CEO of EFG Foundation, represented the Firm at the
                Forbes Sustainability Leaders Summit in London and joined Dr. Abubaker
                Musa Eltom, Scholar in Sustainability and Social Responsibility, on the
                SustainCast Podcast by Forbes for a discussion on the shared benefits of
                impactful strategies that create sustainable value for both investors
                and communities.
              </p>
            </div>
          </div>

          <div className="rp-speak rp-speak--grey rp-speak--flip">
            <img src={berlin} width="670" height="700" alt="Bakr Abdel Wahab at the Infrastructure Investor Global Summit in Berlin" />
            <div>
              <p>
                Bakr Abdel Wahab, Chief Investment Officer at Vortex Energy, took the
                stage at the Infrastructure Investor Global Summit in Berlin to discuss
                the latest advancements in the energy transition. During his panel,
                “Keeping Track of Technology Development in the Energy Transition,”
                Abdel Wahab explored innovations in energy storage, energy management,
                investment diversification, portfolio construction and the shifting
                dynamics between private equity and infrastructure investments. The
                discussion also tackled strategies to ensure emerging technologies
                become economically viable and efficient, accelerating the path to a
                more sustainable energy future.
              </p>
            </div>
          </div>

          <div className="rp-speak rp-speak--green">
            <img src={actuaries} width="670" height="700" alt="Ahmed Sherif Abdelgalil at the Society of Actuaries Regional Symposium in Cairo" />
            <div>
              <p>
                Kaf continued to strengthen its governance framework by actively
                contributing to regional professional platforms. Our Chief Product
                Officer &amp; Chief Actuary, Ahmed Sherif Abdelgalil, represented Kaf at
                the Society of Actuaries Regional Symposium in Cairo, where he spoke
                about the importance of actuarial leadership, teamwork, and sound risk
                management practices. This participation reinforces Kaf’s commitment to
                transparent, responsible decision-making, and highlights the expertise
                we bring to the industry through a culture of continuous learning and
                professional development.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ---- printed page 118 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <div className="rp-speak rp-speak--olive">
            <img src={valuPanel} width="670" height="700" alt="Valu presenting at an FRA workshop on digital fraud" />
            <div>
              <p>
                At a workshop organized under the auspices of the Financial Regulatory
                Authority (FRA) and the Egyptian Consumer Finance Federation, Valu
                presented experiences utilizing various tools to safeguard digital fraud
                attempts. This collaboration reflects Valu’s commitment to
                knowledge-sharing within the consumer finance ecosystem and highlights
                the innovative solutions developed through the joint efforts of our
                Marketing &amp; Communications, Risk Management, and Anti-Fraud teams.
              </p>
            </div>
          </div>

          <div className="rp-speak rp-speak--grey rp-speak--flip">
            <img src={aiPanel} width="671" height="700" alt="Rana ElSharqawy speaking on a panel about AI and skills" />
            <div>
              <p>
                Rana ElSharqawy, EFG Holding’s Head of Corporate Data Science and
                Analytics, joined a panel discussion titled “The New Basics: AI,
                Security &amp; the Skills That Make You Relevant in Any Role.” She spoke
                alongside leading industry figures, exploring how AI is reshaping the
                skills landscape across all professions, the growing importance of
                digital and cybersecurity literacy, and how individuals and
                organizations can remain relevant in an increasingly AI-driven world.
              </p>
            </div>
          </div>

          <div className="rp-speak rp-speak--green">
            <img src={womenSummit} width="670" height="700" alt="Habiba Hegab at the Women in Private Markets Summit" />
            <div>
              <p>
                At the Women in Private Markets Summit, Habiba Hegab, Investment
                Director at <strong>Vortex Energy</strong>, contributed to a powerful conversation on the
                future of sustainable investing, exploring key themes shaping the global
                investment landscape, including the implications of shifting
                sustainability policies for investors, the growing divergence between US
                and European regulatory approaches, how LPs are deploying capital under
                sustainability mandates amid today’s geopolitical climate, and the
                impact of policy changes on corporate behavior and market issuance. Her
                insights highlighted how investors can remain resilient and strategic
                amid rapid global change.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ---- printed pages 119 and 120 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h1>Community Support</h1>
          <p>
            Fostering a strong sense of community is an integral part of our culture
            at EFG Holding. Through employee volunteering initiatives, health and
            wellness programmes, athletic sponsorships, and in-house events that bring
            teams together, we strengthen connection and promote well-being across the
            organization. At the same time, we support initiatives that give back to
            the wider community, channelling time, resources, and expertise toward
            causes that address local needs and create meaningful social impact.
            Together, these efforts reinforce a shared sense of purpose both within our
            teams and beyond our walls.
          </p>

          <h2>Our People in Action: <span className="rp-accent">2025 Initiatives</span></h2>
          <p>
            In 2025, EFG Holding continued to strengthen internal engagement and
            community impact through a series of purpose-driven events aligned with
            environmental awareness, health, inclusion, and sustainability priorities.
          </p>

          <section className="rp-cream">
            <div className="rp-cream-top">
              <div>
                <h3>World Environment Day</h3>
                <p>
                  To mark World Environment Day, 150 employees and their children
                  participated in an educational visit to Hazel Farm on the Alexandria
                  Desert Road. The experience introduced families to the concept of
                  ‘Agritainment’, combining hands-on farming activities with
                  environmental education. Participants engaged in planting, harvesting,
                  and farm-to-table experiences, gaining practical insight into organic
                  agriculture and sustainable food systems. Activities included a
                  zero-waste salad-making competition, animal care sessions for children,
                  and an environmental treasure hunt, reinforcing the importance of
                  responsible consumption and environmental stewardship in an interactive
                  setting.
                </p>
              </div>
              <img src={hazel1} width="615" height="700" alt="A child planting at Hazel Farm" />
            </div>
            <div className="rp-cream-strip">
              <img src={hazel2} width="800" height="603" alt="Employees and their families at Hazel Farm" />
              <img src={hazel3} width="800" height="579" alt="Employees harvesting at Hazel Farm" />
            </div>
          </section>

          <img className="rp-media" src={sdg1} width="1300" height="638"
               alt="EFG Holding colleagues on SDG Flag Day" />

          <div className="rp-two rp-two--tight">
            <img className="rp-media" src={sdg2} width="612" height="900"
                 alt="The winner of the carbon footprint competition receiving the first-place prize" />
            <div>
              <h3>SDG Flag Day – Carbon Footprint Competition</h3>
              <p>
                As part of SDG Flag Day, EFG Holding organized a carbon footprint
                competition inviting employees to propose practical recommendations for
                improving the Group’s carbon footprint report. Recognizing that
                operational insight resides within departments, the initiative encouraged
                staff-led innovation. Submissions were evaluated anonymously against
                predefined criteria, and three winning proposals were selected. These
                recommendations are currently under review for future implementation,
                reinforcing a culture of shared accountability in sustainability
                performance.
              </p>
              <p>
                In celebration of SDG Flag Day, EFG Holding also had the honour of
                hosting Dr. Hayat Sindi at our Cairo headquarters, together with
                colleagues from our Riyadh office. A true pioneer in biotechnology and
                social innovation, Dr. Sindi’s journey from Makkah to Cambridge, Harvard
                and beyond aligns with EFG Holding’s core values and reaffirms the power
                of science in serving humanity.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ---- printed page 121 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <section className="rp-cream">
            <h3>Week for Disabilities</h3>
            <p>
              During the Week for Disabilities, a two-day art workshop brought together
              52 children from the EFG Foundation’s Naga’a El Fawal Young Scholars’
              Academy, representing a range of neurodivergent and developmental
              conditions. Guided by a professional artist, the children collaborated on
              six paintings now displayed at EFG Holding’s entrance. The creative
              process incorporated adaptive techniques such as raised outlines and
              carefully selected colour palettes to ensure accessibility and sensory
              support.
            </p>
            <p>
              The two-day coloring workshop resulted in six unique artworks that
              inspired the exhibition, the auction, and a new merchandise line, all
              carrying the spirit, creativity, and resilience of children with
              disabilities from Upper Egypt, with all proceeds dedicated to supporting
              the Academy.
            </p>
            <div className="rp-cream-strip rp-cream-strip--three">
              <img src={week1} width="525" height="700" alt="A child painting at the art workshop" />
              <img src={week2} width="900" height="600" alt="The Disability Week art exhibition" />
              <img src={week3} width="526" height="700" alt="An artist working with a child at the workshop" />
            </div>
          </section>

          <div className="rp-cols3">
            <section>
              <h3>International Day of Zero Waste</h3>
              <p>
                To promote sustainable habits beyond the workplace, EFG Holding
                distributed in-car waste bins to all employees in observance of the
                International Day of Zero Waste. The initiative encouraged responsible
                disposal practices during daily commutes, supporting cleaner travel
                behaviour and reinforcing the importance of waste reduction in everyday
                life.
              </p>
            </section>
            <section>
              <h3>Blood Donor Day</h3>
              <p>
                Blood Donor Day was hosted at EFG Holding’s headquarters, where 45
                employees volunteered to donate blood. In partnership with the Egyptian
                Red Crescent, the initiative followed established medical screening and
                safety protocols to ensure participant eligibility and well-being. The
                event demonstrated employee commitment to supporting public health needs
                and contributing directly to community care efforts.
              </p>
            </section>
            <section>
              <h3>Youth Skills Day</h3>
              <p>
                Our annual Youth Skills Day welcomed employees’ children to participate
                in structured activities designed to foster social responsibility,
                creativity, and community awareness from an early age. A central feature
                of the day was a collaborative art initiative, where participants worked
                alongside a professional artist to produce a large-scale canvas featuring
                the logo of EFG Hermes Applied Technology School. The completed artwork
                was formally presented to the school as a symbolic gesture of
                institutional support and partnership.
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* ---- printed page 122 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h2>Seasonal Events</h2>
          <div className="rp-cols rp-cols--pair">
            <p>
              The Foundation demonstrated its commitment to fostering community
              engagement and delivering social and environmental impact for its diverse
              stakeholders through the organization of three seasonal bazaars held
              during Ramadan, Summer, and Christmas. In 2025, this approach was further
              strengthened through an enhanced employee engagement model, whereby
              employees were actively invited to recommend local artisans and small
              businesses from within their own communities for participation in the
              bazaars. This model was designed to deepen impact, expand outreach to
              grassroots enterprises, and enable employees to directly witness and
              better understand the social and economic outcomes of the initiatives. In
              addition to the physical marketplace, EFG Foundation featured
              participating vendors across its social media platforms, increasing their
              visibility and supporting enhanced sales opportunities.
            </p>
            <p>
              For the Christmas Bazaar, the Foundation partnered with Inar to emphasize
              the importance of supporting refugees, a growing demographic in Egypt due
              to recent regional events. In addition to local vendors, the bazaar
              featured aspiring refugee entrepreneurs, providing them with valuable
              marketing exposure and direct sales opportunities. These initiatives not
              only support small local businesses and artisans in the handicrafts sector
              but also contribute to heritage preservation and raise awareness about
              eco-friendly products.
            </p>
          </div>
          <div className="rp-tiles6">
            {[bz1, bz2, bz3, bz4, bz5, bz6].map((s, i) => (
              <figure key={i}>
                <img src={s} width="700" height="700"
                     alt={`A vendor at one of the EFG Foundation’s seasonal bazaars (${i + 1} of 6)`} />
              </figure>
            ))}
          </div>
        </div>
      </article>

      {/* ---- printed page 123 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h2>The Ripple Effect: <span className="rp-accent">Small Actions, Big Impact</span></h2>
          <p>
            EFG Holding and its subsidiaries actively champion community well-being
            through action. From supporting athletes and providing medical assistance
            to collaborating on food security initiatives, we strive to create lasting
            social impact and empower communities across Egypt.
          </p>
          <img className="rp-media" src={ripple} width="1300" height="595"
               alt="Valu renewing its sponsorship of weightlifting champion Mahmoud Hosny" />

          <div className="rp-two rp-two--tight">
            <img className="rp-media" src={athlete} width="575" height="800"
                 alt="Talia Islam, under-11 squash champion, joining Valu’s roster of athletes" />
            <div>
              <h3 className="rp-iconhead">
                <img src={iconAthletics} width="400" height="308" alt="" />
                Athletic Sponsorships
              </h3>
              <p>
                At EFG Holding and its subsidiaries, we are committed to supporting
                athletic talent and fostering a culture of sports excellence across
                Egypt. As part of this commitment, Valu is renewing its sponsorship of
                weightlifting champion Mahmoud Hosny, empowering him with the resources
                needed to compete at the highest levels. Mahmoud’s achievements,
                including a Bronze Medal at the World Championships for Adults and
                multiple African Championship medals, reflect the potential we aim to
                uplift through our partnerships.
              </p>
              <p>
                Our support also extends to nurturing the next generation of athletes,
                demonstrated through our early sponsorship of rising table tennis star
                Hana Goda, which we proudly renewed for another year. This year, we added
                Talia Islam, under-11 squash champion, to our roster of rising athletes.
                By investing in both established champions and emerging talent, Valu
                continues to inspire communities, empower youth, and contribute to a
                stronger, more competitive sporting ecosystem for the future.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ---- printed pages 124 and 125 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <h3 className="rp-iconhead">
            <img src={iconMedical} width="399" height="400" alt="" />
            Medical Assistance
          </h3>
          <div className="rp-two rp-two--tight">
            <div>
              <p>
                Through targeted medical assistance programmes, EFG Holding and its
                subsidiaries provide support for underserved individuals with critical
                healthcare interventions and programmes, advancing health equity and
                community resilience
              </p>
              <p>
                In partnership with Mervat Sultan Charity Foundation, Bank NXT
                Foundation Launched two medical convoys to screen and treat eye diseases
                in the most underserved villages across Beni Suef and Minya governorates,
                supporting the ‘Egypt in Our Eyes’ initiative. The convoys provided free
                medical examinations, medications, and necessary surgical interventions,
                contributing to efforts to prevent and eliminate avoidable blindness in
                remote communities.
              </p>
            </div>
            <img className="rp-media" src={convoy1} width="800" height="610"
                 alt="A Bank NXT medical convoy team" />
          </div>

          <hr className="rp-hr" />

          <img className="rp-media" src={convoy2} width="1300" height="458"
               alt="A Kaf and AhlMasr Foundation ceremony for the Burn Survivor School Integration Programme" />

          <div className="rp-two rp-two--tight">
            <div>
              <p>
                Bank NXT also contributed to the Central Bank of Egypt’s initiative
                (صحتـك امانـة) aimed at eliminating waiting lists for patients, thereby
                enhancing access to timely and critical medical care.
              </p>
              <p>
                This year, Kaf proudly concluded the first full cycle of the Burn
                Survivor School Integration Programme, delivered in partnership with
                AhlMasr Foundation and Educate Me Foundation. After a year of academic
                and social support, the four participating children successfully
                completed their school year and received certificates celebrating their
                progress and resilience.
              </p>
            </div>
            <img className="rp-media" src={burn} width="700" height="637"
                 alt="Children at the Burn Survivor School Integration Programme celebration" />
          </div>
          <p>
            Throughout the year, Kaf supported their reintegration through teacher
            training, awareness workshops for students, and continuous follow-up with
            parents and school staff to ensure a safe and inclusive experience. The
            final celebration, which included a puppet show and recognition ceremony,
            was a powerful moment of encouragement.
          </p>

          <h3 className="rp-iconhead">
            <img src={iconCommunity} width="399" height="400" alt="" />
            Community Initiatives
          </h3>
          <div className="rp-two rp-two--tight">
            <div>
              <p>
                In 2025, EFG Holding and its subsidiaries have initiated several food
                aid and community outreach initiatives to address immediate socioeconomic
                needs while contributing to longer-term poverty alleviation and community
                resilience.
              </p>
              <p>
                The EFG Foundation organized its annual Ramadan iftar in marginalized
                communities in Luxor, providing meals to over 2,000 individuals. The
                initiative fostered social cohesion, solidarity, and a sense of
                collective support during the holy month.
              </p>
            </div>
            <div className="rp-pair rp-pair--tight">
              <img src={iftar1} width="700" height="678" alt="Volunteers packing Ramadan food boxes" />
              <img src={iftar2} width="700" height="684" alt="Employees preparing Ramadan food boxes" />
            </div>
          </div>
          <p>
            The Foundation also scaled up its Ramadan food box initiative, increasing
            the number of boxes distributed from 1,200 in 2024 to 2,000 in 2025. The
            boxes were distributed to vulnerable households across Upper Egypt and
            underserved, low-income communities in Greater Cairo. This initiative also
            integrated a strong employee engagement component, with EFG Group employees
            volunteering over two days to pack and prepare the food boxes, reinforcing
            a culture of social responsibility and shared purpose.
          </p>

          <hr className="rp-hr" />

          <div className="rp-two rp-two--tight">
            <figure className="rp-figure-fig">
              <img className="rp-media" src={eid1} width="800" height="502"
                   alt="A Bank NXT donation box for the Al Eid Farha initiative" />
              <p>
                Under the auspices of the CBE, Bank NXT launched the several initiatives
                such as Al Eid Farha (العيـد فرحـة) initiative in partnership with the
                Egyptian Clothing Bank. The initiative aimed to encourage employees to
                donate used clothes and shoes for distribution to families in need during
                Eid Al Fitr, in order to foster a culture of giving while reinforcing the
                bank’s ongoing commitment to giving back to the community.
              </p>
            </figure>
            <figure className="rp-figure-fig">
              <img className="rp-media" src={eid2} width="800" height="498"
                   alt="A Bank NXT donation box for the Kitabi Hadiyati initiative" />
              <p>
                The bank also launched كتابــى هديتــى Kitabi Hadiyati initiative also in
                collaboration with the Egyptian Clothing Bank to promote literacy and
                cultural awareness by collecting in-kind donations of textbooks,
                scientific references, schoolbooks, etc., for distribution to the most
                underprivileged families across various governorates.
              </p>
            </figure>
          </div>
        </div>
      </article>

      {/* ---- printed page 126 ---- */}
      <article className="rp rp-sec">
        <div className="rp-in">
          <p>
            Bank NXT has also strengthened its commitment to combating poverty and
            hunger by supporting the most vulnerable families in partnership with
            respected non-profit organizations, including the Al Orman Association, the
            West Cairo Department of the Ministry of Social Solidarity, and the Tahya
            Misr Fund. Through these collaborations, food boxes were distributed to
            families in need across Cairo, Beni Suef, and Upper Egypt, along with
            school bags for underprivileged children.
          </p>
          <p>
            In parallel, Tanmeyah continued its stakeholder engagement initiatives,
            including sponsorship of a Ramadan Suhoor event organized by Forset Hayah
            in collaboration with Redcon Properties, reinforcing its corporate
            citizenship and community engagement commitments. From a broader social
            development perspective, Tanmeyah supported «مؤسسـة كلنا مع بعض» through
            its One Classroom Programme, funding full elementary education for three
            schools serving more than 100 students over a six-year period, reflecting
            Tanmeyah’s long-term commitment to sustainable community impact and
            inclusive development.
          </p>

          <hr className="rp-hr" />

          <img className="rp-media" src={kafDay} width="1300" height="982"
               alt="Children at Kaf’s environmental awareness day" />
          <p>
            Kaf partnered with Educate Me Foundation, AhlMasr Foundation, and Shagarha
            to deliver a hands-on environmental awareness day for students, parents,
            volunteers, and burn survivors. The programme focused on planting
            activities, recycling workshops, and practical sustainability learning,
            empowering children to understand how small daily actions can protect the
            planet. This initiative reflects our commitment to building environmental
            awareness within underserved communities, integrating education with
            inclusion, and inspiring long-term behavioral change.
          </p>
        </div>
      </article>
    </>
  );
}
