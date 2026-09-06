/**
 * Appendix 1 – 2025 Carbon Emissions — printed pages 128–129.
 *
 * The route is this list of pages and nothing else. Each page is the PDF's own
 * page, fetched as SVG when it comes near the viewport; see
 * src/components/Spread.jsx.
 */
import Spread from '../components/Spread';

export default function AppendixCarbon() {
  return (
    <Spread pages={[128, 129]} title={"Appendix 1 \u2013 2025 Carbon Emissions"} />
  );
}
