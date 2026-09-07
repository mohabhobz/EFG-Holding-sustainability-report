/**
 * CHAIRPERSON'S FOREWORD — printed pages 4 and 5, as a web page.
 *
 * The words, the colours, the weights, the proportions and the order are the
 * report's. The shape is the web's: a heading is an `h1`, a paragraph is a `p`
 * holding the whole paragraph, the portrait is an `img`. Nothing is positioned
 * by coordinate and nothing is cut into lines — a line breaks where the
 * reader's screen makes it break, which is the only thing that makes a page
 * work on every screen.
 *
 * The two printed pages are one page here. A page break in the middle of a
 * sentence is a fact about paper.
 *
 * The styling is in src/styles/report.css, measured off the PDF. The only
 * thing set inline is the exception to its paragraph: the theme, which the
 * print sets in bold inside the running text.
 */
import portrait from '../assets/report/mona-zulficar.webp';
import signature from '../assets/report/mona-zulficar-signature.webp';

export default function ChairpersonsForeword() {
  return (
    <article className="rp">
      <div className="rp-in">
        <div className="rp-open">
          <h1>Chairperson’s Foreword</h1>
          <img
            className="rp-portrait"
            src={portrait}
            width="994"
            height="1000"
            alt="Mona Zulficar, Chairperson of EFG Holding"
          />
        </div>

        <p>
          It gives me great pleasure to present you with our Annual
          Sustainability Report for the year 2025. This year’s report is guided
          by the theme{' '}
          <strong>‘The Power of Clarity: Transparent Goals, Tangible Progress.’</strong>{' '}
          It reflects EFG Holding’s continued commitment to responsible growth,
          accountability, and long-term value creation. This commitment is
          anchored in EFG Holding’s core values: Expertise, Forward Thinking,
          Empathy, Commitment to Excellence, Integrity, and Value Creation. This
          approach is further reinforced by our alignment with the United
          Nations Sustainable Development Goals (UN SDGs), particularly those
          relating to decent work and economic growth, sustainable cities and
          communities, quality education, good health and wellbeing, and climate
          action. These frameworks guide us in how we set priorities, measure
          progress, and deliver meaningful impact across our environmental,
          social, and governance pillars. We strive to be an example of
          transparency for our peers, consistently upholding the highest
          standards of governance and fostering trust among our stakeholders.
        </p>

        <p>
          At EFG Holding, we always pride ourselves on our innovation, on being
          able to pinpoint the solutions that reap the most benefits. The impact
          of our pioneering mindset can be clearly seen across our operations,
          but one area in particular stands out for me, year after year. The
          integrated sustainable development (ISD) undertaken by the EFG
          Foundation in Upper Egypt demonstrates the endless possibilities for
          social impact that come with dedication and a clear understanding both
          of the challenges and of the immense opportunities to be found in our
          rural communities. We have for example, the Young Scholars’ Academy
          that has grown from a modest preschool in an underserved village to a
          vibrant educational hub that provides a blueprint for the potential of
          community-centred education. This year, the EFG Hermes Applied
          Technology School (ATS) – Agri-Tech demonstrates yet another innovative
          approach: addressing climate change through vocational education
          designed to instill students with an understanding of how preserving
          the environment can be a source of opportunity and long-term
          prosperity.
        </p>

        <p>
          The efforts of the EFG Foundation are just one example of how we
          innovate by setting transparent goals designed to achieve tangible
          impact and create lasting value for our stakeholders and the
          communities we serve.
        </p>

        <p>
          I invite you to explore this report and learn more about our
          sustainability initiatives and achievements, and I thank you for your
          continued trust and support.
        </p>

        <p>Sincerely yours,</p>

        <img
          className="rp-signature"
          src={signature}
          width="722"
          height="367"
          alt=""
        />
        <p className="rp-name">Mona Zulficar</p>
        <p className="rp-role">Chairperson</p>
      </div>
    </article>
  );
}
