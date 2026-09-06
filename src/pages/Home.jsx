/**
 * The report's front door — printed page 2, the contents, under the cover.
 *
 * The printed cover (page 0) is not in the stack: the route opens on the
 * annual report's cover treatment instead, carrying this report's own title,
 * theme line, year and signatory mark. See src/components/ReportCover.jsx.
 *
 * There is no printed page 1 — the file's cover is a single A4 page and the
 * inside front cover is not in it.
 */
import ReportCover from '../components/ReportCover';
import Spread from '../components/Spread';

export default function Home() {
  return (
    <>
      <ReportCover />
      <Spread pages={[2]} title="Contents" />
    </>
  );
}
