/**
 * Abbreviations — printed page 3.
 *
 * The route is this list of pages and nothing else. Each page is the PDF's own
 * page, fetched as SVG when it comes near the viewport; see
 * src/components/Spread.jsx.
 */
import Spread from '../components/Spread';

export default function Abbreviations() {
  return (
    <Spread pages={[3]} title={"Abbreviations"} />
  );
}
