/**
 * Governance & Ethics — printed pages 82–101.
 *
 * The printed divider spread that opens the section in the book is NOT in this
 * list — it is replaced by a section cover once the artwork lands; see
 * src/components/SectionCover.jsx.
 *
 * Every page below is the PDF's own page, fetched as SVG when it comes near
 * the viewport; see src/components/Spread.jsx.
 */
import Spread from '../components/Spread';

export default function GovernanceEthics() {
  return (
    <Spread pages={[82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101]} title={"Governance & Ethics"} />
  );
}
