"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Container from "@/components/Container";
import {useThemeContext} from "@/context/ThemeContext";

const links = [
  {to: "/", label: "Home"},
  {to: "/about", label: "Chi sono"},
  {to: "/projects", label: "Progetti"},
  {to: "/contact", label: "Contatti"},
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const {isDark, toggleTheme} = useThemeContext();

  // Chiudi menu al cambio pagina
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-base-100 transition-all duration-300 ${
        scrolled || menuOpen ? "border-b border-base-300 shadow-sm" : ""
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/public"
            className="font-display font-bold text-xl tracking-tight text-ink hover:text-accent transition-colors"
          >
            matteo<span className="text-accent">.</span>fredi
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({to, label}) => (
              <li key={to}>
                <Link
                  href={to}
                  className={`font-body text-sm font-medium tracking-wide transition-colors relative group ${
                    isActive(to) ? "text-accent" : "text-muted hover:text-ink"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                      isActive(to) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + theme toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme}/>
            <a
              href="mailto:matteofredi.developer@gmail.com"
              className="inline-flex items-center gap-2 bg-ink text-chalk font-display font-semibold text-sm px-5 py-2.5
              rounded-full hover:bg-accent transition-colors duration-200">
              Contattami
            </a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme}/>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-base-200 transition-colors "
              aria-label="Apri menu"
            >
              <span
                className={`block h-0.5 bg-ink rounded-full transition-all duration-300 ${menuOpen ? "w-5 rotate-45 translate-y-2" : "w-5"}`}/>
              <span
                className={`block h-0.5 bg-ink rounded-full transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4"}`}/>
              <span
                className={`block h-0.5 bg-ink rounded-full transition-all duration-300 ${menuOpen ? "w-5 -rotate-45 -translate-y-2" : "w-5"}`}/>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-base-100 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-72 border-t border-base-300" : "max-h-0"}`}>
        <Container>
          <ul className="flex flex-col py-4 gap-1">
            {links.map(({to, label}) => (
              <li key={to}>
                <Link
                  href={to}
                  className={`block px-3 py-2.5 rounded-lg font-body font-medium text-sm transition-colors ${
                    isActive(to)
                      ? "bg-base-200 text-accent"
                      : "text-muted hover:bg-base-200 hover:text-ink"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="mailto:matteofredi.developer@gmail.com"
                className="block px-3 py-2.5 bg-ink text-chalk rounded-lg font-display font-semibold text-sm text-center hover:bg-accent transition-colors">
                Contattami
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}

// ── ThemeToggle ──────────────────────────────────────────────────────────────
function ThemeToggle({isDark, onToggle}: { isDark: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Passa al tema chiaro" : "Passa al tema scuro"}
      className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-base-200 transition-colors text-base-content/60 hover:text-base-content"
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4"/>
          <path strokeLinecap="round"
                d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      )}
    </button>
  );
}