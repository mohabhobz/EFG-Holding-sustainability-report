/**
 * A NOTE FROM OUR CEO — printed pages 6 and 7, as a web page.
 *
 * The same page as the Chairperson's Foreword: portrait and title at the top,
 * the letter as whole paragraphs, then the signature, the name and the role.
 * The three measurements that differ from the Foreword — a wider portrait, a
 * tighter paragraph space, a taller gap under the signature — are set once as
 * custom properties on `.rp-ceo` in src/styles/report.css, not repeated here.
 *
 * The fourth paragraph runs across the fold in print, starting on page 6 and
 * finishing on page 7. It is one paragraph, because that is what it is.
 */
import portrait from '../assets/report/karim-awad.webp';
import signature from '../assets/report/karim-awad-signature.webp';

export default function CeoNote() {
  return (
    <article className="rp">
      <div className="rp-in rp-ceo">
        <div className="rp-open">
          <h1>A Note From Our CEO</h1>
          <img
            className="rp-portrait"
            src={portrait}
            width="1000"
            height="894"
            alt="Karim Awad, Group Chief Executive Officer of EFG Holding"
          />
        </div>

        <p>
          In a year marked by rapid transformation and evolving expectations,
          EFG Holding has remained focused on delivering sustainable growth
          through clarity, accountability, and disciplined execution. Guided by
          this year’s theme, “The Power of Clarity: Transparent Goals, Tangible
          Progress”, we continue to strengthen how we define our priorities,
          measure our impact, and communicate our progress.
        </p>

        <p>
          Over the past year, EFG Holding has continued to make tangible
          progress in advancing its environmental agenda. Through our green
          financing activities, we are actively supporting the transition to a
          low-carbon economy across key sectors, including renewable energy,
          sustainable mobility, and green industry. Over the past year, this
          momentum has accelerated significantly, with environmental financing
          portfolios expanding across our subsidiaries, including Bank NXT and
          Corp-Solutions, reflecting a growing commitment to sustainable
          investment and impact-driven growth. In parallel, we have strengthened
          our approach to measuring and managing our environmental footprint,
          with enhanced carbon footprint and financed emissions reporting both
          on the holding company level and across our subsidiaries, alongside
          ongoing efforts in digitalization and dematerialization to reduce
          resource consumption and improve operational efficiency.
        </p>

        <p>
          Our social investment efforts remain focused on driving inclusive
          growth and expanding access to opportunity. Across our platforms, we
          promote economic empowerment through financial inclusion and fintech
          innovation, with Tanmeyah and EFG Finance-SMEs at the forefront of
          efforts to enhance the SME landscape. We also invest in healthcare and
          education through platforms such as the Egypt Education platform (EEP)
          and the Saudi Education Platform (SEP), in tandem with advisory
          services that strengthen these key sectors across the region. The work
          of the EFG Foundation, including initiatives such as the Young
          Scholars’ Academy and the EFG Hermes Applied Technology School (ATS) –
          Agri-Tech, continues to play a vital role in delivering sustainable,
          long-term social impact.
        </p>

        <p>
          As always, we believe that partnerships are key to leveraging our
          resources and augmenting the impact of our efforts. Collaborations
          with prominent organizations such as the Magdi Yacoub Heart Foundation
          and El Sewedy Technical Academy in Egypt extend the reach of our
          social investments and ensure successful outcomes. At the same time,
          we are committed to engaging the wide range of individuals,
          communities, and organisations whose support, knowledge, and
          participation are integral to delivering value to our stakeholders. We
          are particularly proud that we have been recognised by the Financial
          Regulatory Authority (FRA) for our leadership in sustainability and
          climate disclosure reporting.
        </p>

        <p>
          These efforts are underpinned by a strong commitment to governance and
          ethics. We continue to enhance our governance framework and board
          oversight, while embedding ESG considerations across our business
          lines and core functions from risk management and compliance to human
          resources and information security. At the same time, we are
          leveraging data science, artificial intelligence, and digital
          innovation to strengthen decision-making, improve transparency, and
          support more effective oversight across the Group and its
          subsidiaries.
        </p>

        <p>
          I would like to extend my sincere appreciation to our employees, whose
          dedication, expertise, and commitment are the driving force behind our
          achievements and continued progress. They play a crucial role in our
          ongoing success, and we take pride in investing in their well-being
          and empowering them to excel and flourish.
        </p>

        <p>
          We remain focused on the journey ahead, not on what we have achieved
          so far. There is still much to be done, but by maintaining clarity in
          our goals and discipline in our delivery, we aim to create long-term
          value for our stakeholders while contributing meaningfully to
          sustainable development.
        </p>

        <p>
          On behalf of the Board, I would like to thank our stakeholders for
          their continued trust and partnership.
        </p>

        <p>Sincerely yours,</p>

        <img
          className="rp-signature"
          src={signature}
          width="766"
          height="295"
          alt=""
        />
        <p className="rp-name">Karim Awad</p>
        <p className="rp-role">Group Chief Executive Officer</p>
      </div>
    </article>
  );
}
