/**
 * From Clarity to Impact — printed page 127.
 *
 * The route is this list of pages and nothing else. Each page is the PDF's own
 * page, fetched as SVG when it comes near the viewport; see
 * src/components/Spread.jsx.
 */
import Spread from '../components/Spread';

export default function FromClarityToImpact() {
  return (
    <Spread pages={[127]} title={"From Clarity to Impact"} />
  );
}
