/**
 * Introduction — printed pages 10–17.
 *
 * The printed divider spread that opens the section in the book is NOT in this
 * list — it is replaced by a section cover once the artwork lands; see
 * src/components/SectionCover.jsx.
 *
 * Every page below is the PDF's own page, fetched as SVG when it comes near
 * the viewport; see src/components/Spread.jsx.
 */
import Spread from '../components/Spread';

export default function Introduction() {
  return (
    <Spread pages={[10, 11, 12, 13, 14, 15, 16, 17]} title={"Introduction"} />
  );
}
