import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { profile } from "../data.js";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Resume", to: "/resume" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
];

export default function SiteLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="ambient-glow" aria-hidden="true" />
      <header className="site-header sticky top-0 z-50 border-b border-white/[0.07] bg-[#0b0f19]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-sm font-bold tracking-tight text-white sm:text-base"
          >
            Hassan<span className="text-cyan-300">.</span>
            <span className="ml-2 hidden font-medium text-slate-400 sm:inline">
              Byekwaso Onyango
            </span>
          </Link>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 text-slate-200 transition hover:border-cyan-300/40 hover:text-white md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav
            aria-label="Main navigation"
            className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-[#0b0f19]/95 p-4 shadow-2xl backdrop-blur-xl md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-white/[0.07] text-white"
                      : "text-slate-400 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 md:ml-2 md:mt-0"
            >
              Let&apos;s talk <ArrowUpRight size={16} />
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-slate-200">{profile.name}</p>
            <p className="mt-1">Web development · Language services · Digital support</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              className="transition hover:text-cyan-200"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="transition hover:text-cyan-200"
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="transition hover:text-cyan-200"
              href={`mailto:${profile.email}`}
            >
              Email
            </a>
          </div>
          <p>© {new Date().getFullYear()} Hassan Byekwaso</p>
        </div>
      </footer>
    </div>
  );
}
