"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Text", href: "#text" },
  { label: "Images", href: "#images" },
  { label: "Animations", href: "#animations" },
  { label: "Video", href: "#video" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/12 bg-slate-950/55 px-4 py-3 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-2xl sm:px-6">
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30">
            M
          </span>
          <span className="hidden sm:block">
            <span className="block text-xs font-medium uppercase tracking-[0.32em] text-cyan-100/75">
              Multimedia
            </span>
            <span className="block text-xs text-white/50">
              One-page project
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 rounded-full bg-current" />
            <span className="h-0.5 w-5 rounded-full bg-current" />
            <span className="h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      {isMenuOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-slate-950/85 p-3 text-white shadow-2xl shadow-slate-950/40 backdrop-blur-2xl md:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
