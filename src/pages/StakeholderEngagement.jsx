/**
 * Stakeholder Engagement — printed pages 104–126.
 *
 * The printed divider spread that opens the section in the book is NOT in this
 * list — it is replaced by a section cover once the artwork lands; see
 * src/components/SectionCover.jsx.
 *
 * Every page below is the PDF's own page, fetched as SVG when it comes near
 * the viewport; see src/components/Spread.jsx.
 */
import Spread from '../components/Spread';

export default function StakeholderEngagement() {
  return (
    <Spread pages={[104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126]} title={"Stakeholder Engagement"} />
  );
}
