import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/cafeyamu/";
const ROUTE_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Christinastra%C3%9Fe+64%2C+50733+K%C3%B6ln";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="kontakt"
      role="contentinfo"
      className="bg-espresso text-offwhite py-12 md:py-16"
      aria-label="Seitenfuß"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Adresse
            </h3>
            <p className="mt-2 text-sm text-offwhite/90">
              Christinastraße 64
              <br />
              50733 Köln
            </p>
            <Link
              href={ROUTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-gold underline decoration-gold/50 underline-offset-2 hover:decoration-gold"
            >
              Route planen
            </Link>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Öffnungszeiten
            </h3>
            <ul className="mt-2 space-y-0.5 text-sm text-offwhite/90">
              <li>Montag–Samstag: 07:30–17:30</li>
              <li>Sonntag: 09:00–17:30</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Folgen
            </h3>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-offwhite/90 underline decoration-gold/50 underline-offset-2 hover:text-gold hover:decoration-gold"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-offwhite/20 pt-8">
          <p className="text-sm text-offwhite/70">
            © {currentYear} Café Yamu. Alle Rechte vorbehalten.
          </p>
          <nav aria-label="Rechtliche Links">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-offwhite/70 underline-offset-2 hover:text-offwhite"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-offwhite/70 underline-offset-2 hover:text-offwhite"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
