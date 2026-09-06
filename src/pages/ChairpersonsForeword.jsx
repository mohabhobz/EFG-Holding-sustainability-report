/**
 * Chairperson’s Foreword — printed pages 4–5.
 *
 * The route is this list of pages and nothing else. Each page is the PDF's own
 * page, fetched as SVG when it comes near the viewport; see
 * src/components/Spread.jsx.
 */
import Spread from '../components/Spread';

export default function ChairpersonsForeword() {
  return (
    <Spread pages={[4, 5]} title={"Chairperson\u2019s Foreword"} />
  );
}
