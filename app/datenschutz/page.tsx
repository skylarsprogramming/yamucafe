import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-offwhite px-4 py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold text-espresso">Datenschutz</h1>
        <p className="mt-4 text-espresso/80">
          Placeholder — Datenschutzerklärung folgt.
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
