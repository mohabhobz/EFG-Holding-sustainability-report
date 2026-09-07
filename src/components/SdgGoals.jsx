/**
 * SDG GOALS — the row of goal marks the report puts beside each initiative.
 *
 * The marks are the United Nations' own artwork, lifted from the printed page
 * one square per goal, so they are pictures and stay pictures. What was type —
 * the initiative each row names — is type.
 *
 * The print sometimes repeats a mark inside one row (page 16 sets goal 9 twice
 * against EFG SME Financing). That is the report's, and it is kept, so the row
 * on the site holds exactly what the row on the page holds.
 */
const files = import.meta.glob('../assets/report/sdg/*.webp', { eager: true, import: 'default' });
const art = Object.fromEntries(
  Object.entries(files).map(([p, url]) => [Number(p.match(/goal-(\d+)/)[1]), url]),
);

export const GOAL_NAMES = {
  1: 'No Poverty',
  2: 'Zero Hunger',
  3: 'Good Health and Well-Being',
  4: 'Quality Education',
  5: 'Gender Equality',
  7: 'Affordable and Clean Energy',
  8: 'Decent Work and Economic Growth',
  9: 'Industry, Innovation and Infrastructure',
  10: 'Reduced Inequalities',
  11: 'Sustainable Cities and Communities',
  12: 'Responsible Consumption and Production',
  13: 'Climate Action',
  16: 'Peace, Justice and Strong Institutions',
  17: 'Partnerships for the Goals',
};

export default function SdgGoals({ goals }) {
  return (
    <div className="rp-sdg-goals">
      {goals.map((g, i) => (
        <img
          key={`${g}-${i}`}
          src={art[g]}
          width="128"
          height="128"
          alt={`Sustainable Development Goal ${g}: ${GOAL_NAMES[g]}`}
        />
      ))}
    </div>
  );
}
