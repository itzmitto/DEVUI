import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchPages } from "../../data/navigation";
import Icon from "../ui/Icon";

type Props = { onOpenMobile: () => void };

export default function Topbar({ onOpenMobile }: Props) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const matches = searchPages
    .filter((page) => page.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 9);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen((value) => !value);
      }
      if (event.key === "Escape") setSearchOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
    else setQuery("");
  }, [searchOpen]);

  function selectResult(path: string) {
    navigate(path);
    setSearchOpen(false);
  }

  return (
    <>
      <header className="topbar">
        <button
          type="button"
          className="mobile-menu-button"
          aria-label="Open menu"
          onClick={onOpenMobile}
        >
          <Icon name="ri-menu-line" />
        </button>
        <button
          type="button"
          className="top-search"
          onClick={() => setSearchOpen(true)}
          aria-label="Zoek naar componenten"
        >
          <Icon name="ri-search-line" className="search-icon" />
          <span>Zoek een component, template of snippet...</span>
          <kbd>Ctrl&nbsp;&nbsp; K</kbd>
        </button>
        <nav className="top-nav" aria-label="Extra navigatie">
          <Link to="/docs">Docs</Link>
          <Link to="/changelog" className="changelog-link">
            Changelog
            <span className="new-dot" />
          </Link>
          <a
            href="https://github.com/itzmitto/DEVUI"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <Icon name="ri-github-fill" /> GitHub
          </a>
          <Link to="/login" className="login-button">
            Inloggen
          </Link>
        </nav>
      </header>

      {searchOpen && (
        <div
          className="search-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSearchOpen(false);
          }}
        >
          <div
            className="search-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Zoeken"
          >
            <div className="dialog-input-wrap">
              <Icon name="ri-search-line" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && matches[0])
                    selectResult(matches[0].path);
                }}
                placeholder="Zoek pagina's en componenten..."
              />
              <button onClick={() => setSearchOpen(false)} aria-label="Sluiten">
                <kbd>Esc</kbd>
              </button>
            </div>
            <div className="search-results">
              <p className="search-kicker">PAGINA'S EN CATEGORIEËN</p>
              {matches.length === 0 ? (
                <p className="no-results">Geen resultaten gevonden.</p>
              ) : (
                matches.map((item) => (
                  <button
                    className="search-result"
                    key={item.path}
                    onClick={() => selectResult(item.path)}
                  >
                    <Icon name={item.icon} />
                    <span>{item.title}</span>
                    <Icon name="ri-arrow-right-up-line" />
                  </button>
                ))
              )}
            </div>
            <div className="search-footer">
              <span>
                <kbd>↵</kbd> om te openen
              </span>
              <span>
                <kbd>Esc</kbd> sluiten
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
