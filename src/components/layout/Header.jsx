import { useEffect, useRef, useState } from 'react';
import Container from './Container';
import Logo from '../ui/Logo';
import { contents, primaryNav, report } from '../../data/contents';

/**
 * HEADER — the report's own navigation, not a generic site bar.
 *
 * On a wide screen the row is the lockup and the five NUMBERED sections, which
 * are the document's spine. Nothing else competes with them.
 *
 * THE CONTENTS CONTROL IS THERE AT EVERY WIDTH, because the bar carries five
 * of eleven entries. It opens the full index — all eleven, in the order
 * printed page 2 gives them. Below 1100px the five links do not fit either and
 * the control carries the lot.
 */
export default function Header({ path }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  const btnRef = useRef(null);

  /* While the overlay is open the page behind must not scroll, and Escape
   * should close it. Both are torn down on unmount so nothing leaks. */
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  /* App intercepts in-site clicks on the document, so every link below is a
   * plain <a href>. The overlay only has to close itself when the route it
   * pointed at actually arrives. */
  useEffect(() => { setOpen(false); }, [path]);

  return (
    <>
      <header className="hdr no-print">
        <Container className="hdr-in">
          <a className="hdr-brand" href="/" aria-label="EFG Holding — contents">
            <Logo />
          </a>

          <nav className="hdr-nav" aria-label="Report sections">
            <ul>
              {primaryNav.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    aria-current={s.href === path ? 'page' : undefined}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* The annual report's menu icon — three bars, no square. It is the
              whole control on a narrow screen, with no label beside it. */}
          <button
            ref={btnRef}
            type="button"
            className="hdr-btn"
            aria-expanded={open}
            aria-controls="contents-panel"
            aria-label="Contents"
            onClick={() => setOpen(true)}
          >
            <span className="glyph" aria-hidden="true"><i /><i /><i /></span>
          </button>
        </Container>
      </header>

      <div
        className="ix"
        id="contents-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contents-title"
        hidden={!open}
        onClick={(e) => e.target === e.currentTarget && setOpen(false)}
      >
        <div className="ix-in">
          <div className="ix-top">
            <div>
              <h2 id="contents-title">Content<br />Page</h2>
              <p>{report.title} — {report.theme}.</p>
            </div>
            <button ref={closeRef} type="button" className="ix-close" onClick={() => setOpen(false)} aria-label="Close contents">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <ol className="ix-list">
            {contents.map((c) => (
              <li key={c.href} className={c.href === path ? 'is-current' : undefined}>
                <a href={c.href}>
                  {/* No "Section N" above the name. The list is eleven pages
                      and nothing else; the number told a reader of the bound
                      report where a tab began, which a list of links does not
                      need. `eyebrow` stays in contents.js as the print's own
                      wording. */}
                  <span className="ix-name">{c.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
