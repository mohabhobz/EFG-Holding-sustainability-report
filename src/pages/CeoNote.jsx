/**
 * A Note From Our CEO — printed pages 6–7.
 *
 * The route is this list of pages and nothing else. Each page is the PDF's own
 * page, fetched as SVG when it comes near the viewport; see
 * src/components/Spread.jsx.
 */
import Spread from '../components/Spread';

export default function CeoNote() {
  return (
    <Spread pages={[6, 7]} title={"A Note From Our CEO"} />
  );
}
