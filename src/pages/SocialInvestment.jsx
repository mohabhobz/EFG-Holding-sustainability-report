/**
 * Social Investment — printed pages 48–79.
 *
 * The printed divider spread that opens the section in the book is NOT in this
 * list — it is replaced by a section cover once the artwork lands; see
 * src/components/SectionCover.jsx.
 *
 * Every page below is the PDF's own page, fetched as SVG when it comes near
 * the viewport; see src/components/Spread.jsx.
 */
import Spread from '../components/Spread';

export default function SocialInvestment() {
  return (
    <Spread pages={[48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]} title={"Social Investment"} />
  );
}
