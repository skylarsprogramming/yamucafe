"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#fruehstueck", label: "Frühstück" },
  { href: "#infos", label: "Infos" },
  { href: "#galerie", label: "Galerie" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      role="banner"
      aria-label="Hauptnavigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-offwhite/95 shadow-soft backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="#home"
          className="focus-ring relative z-10 flex shrink-0 items-center rounded-2xl"
          aria-label="Café Yamu Startseite"
        >
          <Image
            src="/images/logo.png"
            alt="Café Yamu — coffee • eatery • vibes"
            width={140}
            height={48}
            className="h-10 w-auto object-contain md:h-12"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex" role="menubar">
          {NAV_LINKS.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                className="focus-ring rounded-2xl px-4 py-2 text-sm font-medium text-espresso transition-colors hover:bg-gold/10 hover:text-gold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="focus-ring relative z-10 flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-1.5 rounded-2xl md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Menü öffnen oder schließen"
        >
          <span className="sr-only">{mobileOpen ? "Menü schließen" : "Menü öffnen"}</span>
          <span
            className={`block h-0.5 w-5 rounded-full bg-espresso transition-all ${
              mobileOpen ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-espresso transition-all ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-espresso transition-all ${
              mobileOpen ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-espresso/10 bg-offwhite md:hidden"
            aria-hidden={!mobileOpen}
          >
            <ul className="flex flex-col px-4 py-4 gap-1" role="menubar">
              {NAV_LINKS.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    role="menuitem"
                    onClick={() => setMobileOpen(false)}
                    className="focus-ring block rounded-2xl px-4 py-3 text-espresso hover:bg-gold/10"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
