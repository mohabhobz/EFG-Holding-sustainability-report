/**
 * What the reader sees while a route's pages are still arriving. Each route is
 * code-split, so without this there is a white gap for the length of the
 * request. It holds one printed page's exact aspect ratio — 595.28 × 841.89pt
 * — so nothing shifts when the real page lands.
 */
export default function PageSkeleton() {
  return (
    <div className="sheets" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading</span>
      <div className="pg"><div className="pg-wait" aria-hidden="true" /></div>
    </div>
  );
}
