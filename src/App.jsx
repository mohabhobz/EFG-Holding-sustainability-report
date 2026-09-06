import { lazy, Suspense, useEffect, useState } from 'react';

import Header from './components/layout/Header';
import PageSkeleton from './components/layout/PageSkeleton';
import PageNav from './components/PageNav';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { contents, report } from './data/contents';

/**
 * App
 * ---
 * Path-based routing, deliberately dependency-free while the site is a set of
 * static documents. When anything needs a real router this is the single place
 * to introduce one, without touching a page component.
 *
 * Three things it does beyond mapping a path to a component:
 *
 * 1. EACH SECTION IS CODE-SPLIT. A section is up to twenty-eight printed
 *    pages of inlined SVG, and a reader who opens the foreword should not
 *    download all five sections to read it. React.lazy plus a Suspense
 *    boundary means a section arrives only when asked for, and PageSkeleton
 *    holds one page's printed aspect while it does.
 *
 * 2. Every entry in the printed contents resolves. No route in the index lands
 *    on a placeholder.
 *
 * 3. In-site links are intercepted so navigation does not reload the document,
 *    which would throw away scroll position and re-request every asset. It is
 *    done once, here, on the document — so Header, Footer and PageNav are plain
 *    `<a href>` with no click handler of their own.
 */
const routes = {
  /* `/` is the contents page — the report opens on its own index, which is what
   * a reader of the PDF sees first too. It is not lazy: it is small, and it is
   * the most likely first paint. */
  '/': Home,
  '/abbreviations': lazy(() => import('./pages/Abbreviations')),
  '/chairpersons-foreword': lazy(() => import('./pages/ChairpersonsForeword')),
  '/ceo-note': lazy(() => import('./pages/CeoNote')),
  '/introduction': lazy(() => import('./pages/Introduction')),
  '/environmental-stewardship': lazy(() => import('./pages/EnvironmentalStewardship')),
  '/social-investment': lazy(() => import('./pages/SocialInvestment')),
  '/governance-ethics': lazy(() => import('./pages/GovernanceEthics')),
  '/stakeholder-engagement': lazy(() => import('./pages/StakeholderEngagement')),
  '/from-clarity-to-impact': lazy(() => import('./pages/FromClarityToImpact')),
  '/appendix-carbon': lazy(() => import('./pages/AppendixCarbon')),
};

/* Vite's base — '/' on Vercel, '/<repo>/' when published to a GitHub Pages
 * project page. Paths are stored WITHOUT it so the route table stays readable,
 * and it is put back on every history entry. */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
const strip = (p) => (BASE && p.startsWith(BASE) ? p.slice(BASE.length) : p) || '/';
const withBase = (p) => `${BASE}${p}`;

export default function App() {
  const [path, setPath] = useState(() => strip(window.location.pathname));

  useEffect(() => {
    const onPop = () => setPath(strip(window.location.pathname));
    window.addEventListener('popstate', onPop);

    /* Intercept same-origin left-clicks on plain links. Modified clicks
     * (new tab, download, target=_blank) are left to the browser. */
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target.closest?.('a');
      if (!link || link.target || link.hasAttribute('download')) return;

      const url = new URL(link.href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      /* A same-page anchor is a jump link, not a navigation — leave it to the
         browser so `scroll-behavior: smooth` does its job. */
      if (url.hash && url.pathname === window.location.pathname) return;
      /* An in-site href is authored without the base ("/introduction"); add it
         before comparing and before pushing, or the first click leaves the
         site. */
      if (BASE && !url.pathname.startsWith(BASE)) url.pathname = withBase(url.pathname);

      event.preventDefault();
      if (url.pathname === window.location.pathname && url.search === window.location.search) {
        return;
      }
      window.history.pushState(null, '', url.pathname + url.search + url.hash);
      setPath(strip(url.pathname));
      window.scrollTo(0, 0);
    };

    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('popstate', onPop);
      document.removeEventListener('click', onClick);
    };
  }, []);

  /* The document title follows the route, so browser history and a shared tab
   * both say which section they are. */
  useEffect(() => {
    const entry = contents.find((c) => c.href === path);
    document.title = entry && entry.href !== '/'
      ? `${entry.label} — ${report.title} · ${report.org}`
      : `${report.title} — ${report.org}`;
  }, [path]);

  const Page = routes[path];

  return (
    <>
      <a className="sr-only" href="#main">Skip to content</a>
      <Header path={path} />
      <main id="main">
        {Page ? (
          <Suspense fallback={<PageSkeleton />}>
            <Page />
          </Suspense>
        ) : (
          <NotFound />
        )}
      </main>
      {/* Mounted once, outside the Suspense boundary, because it is fixed to
          the viewport rather than part of any page — the AR does the same. */}
      <PageNav path={path} />
    </>
  );
}
