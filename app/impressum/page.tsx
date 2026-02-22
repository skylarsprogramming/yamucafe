import Link from "next/link";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-offwhite px-4 py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold text-espresso">Impressum</h1>
        <p className="mt-4 text-espresso/80">
          Placeholder — Angaben gemäß § 5 TMG folgen.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block text-gold underline underline-offset-2 hover:text-gold-dark"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
