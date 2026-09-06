/**
 * Environmental Stewardship — printed pages 20–45.
 *
 * The printed divider spread that opens the section in the book is NOT in this
 * list — it is replaced by a section cover once the artwork lands; see
 * src/components/SectionCover.jsx.
 *
 * Every page below is the PDF's own page, fetched as SVG when it comes near
 * the viewport; see src/components/Spread.jsx.
 */
import Spread from '../components/Spread';

export default function EnvironmentalStewardship() {
  return (
    <Spread pages={[20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]} title={"Environmental Stewardship"} />
  );
}
