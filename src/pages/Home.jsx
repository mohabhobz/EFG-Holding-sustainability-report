/**
 * THE FRONT DOOR — the printed cover, sheet 0, and nothing else.
 *
 * The cover is a page of the report like any other, so it gets a screen of its
 * own; the contents spread is the next one, at /contents. Everything on this
 * page lives in src/components/ReportCover.jsx, together with the printed
 * measurements it is built from.
 */
import ReportCover from '../components/ReportCover';

export default function Home() {
  return <ReportCover />;
}
