"use client";

import { useState } from "react";
import { Bell, X } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 mx-auto flex min-h-[4.5rem] w-full max-w-6xl items-center justify-between px-4 sm:min-h-24 sm:px-6 lg:px-8">
        {/* Menu */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#eadfd3] bg-white/60 text-[#17352b] transition-colors hover:bg-white sm:h-14 sm:w-14"
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <span className="flex w-6 flex-col gap-1.5">
              <span className="h-0.5 w-full rounded-full bg-current" />
              <span className="h-0.5 w-full rounded-full bg-current" />
              <span className="h-0.5 w-full rounded-full bg-current" />
            </span>
          )}
        </button>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-transparent bg-white/50 text-[#17352b] transition-colors hover:bg-white sm:h-14 sm:w-14"
        >
          <Bell className="h-6 w-6 stroke-[1.7]" />

          <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-[#ed6817] sm:right-3 sm:top-3" />
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#fffaf3] p-5 sm:hidden">
          <div className="flex items-center justify-end">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#eadfd3] bg-white"
            >
              <X className="h-6 w-6 text-[#17352b]" />
            </button>
          </div>

          <nav className="mt-16 grid gap-5">
            <a
              href="#explore-law"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-[#103b2c]"
            >
              Explore Law
            </a>

            <a
              href="#ask-legal-ai"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-[#103b2c]"
            >
              Ask Legal AI
            </a>

            <a
              href="#know-your-rights"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-[#103b2c]"
            >
              Know Your Rights
            </a>
          </nav>
        </div>
      )}
    </>
  );
}