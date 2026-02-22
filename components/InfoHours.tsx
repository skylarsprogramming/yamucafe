"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ROUTE_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Christinastra%C3%9Fe+64%2C+50733+K%C3%B6ln";
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.0!2d6.95!3d50.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU3JzM2LjAiTiA2wrU1NyczNi4wIkU!5e0!3m2!1sde!2sde!4v1";

export default function InfoHours() {
  return (
    <section
      id="infos"
      aria-labelledby="info-heading"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2
          id="info-heading"
          className="text-center text-2xl font-bold text-espresso md:text-3xl"
        >
          Infos & Öffnungszeiten
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-lg font-semibold text-espresso">Öffnungszeiten</h3>
              <ul className="mt-2 space-y-1 text-espresso/90" aria-label="Öffnungszeiten">
                <li>Montag–Samstag: 07:30–17:30</li>
                <li>Sonntag: 09:00–17:30</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-espresso">Adresse</h3>
              <p className="mt-2 text-espresso/90">
                Christinastraße 64
                <br />
                50733 Köln
              </p>
            </div>
            <p className="text-espresso/80">
              Mitten in Köln-Nippes, am Wilhelmplatz — wir freuen uns auf deinen Besuch.
            </p>
            <Link
              href={ROUTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex rounded-2xl bg-gold px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-dark"
            >
              Route planen
            </Link>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-2xl bg-espresso/5"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center justify-center gap-4 p-8 text-center md:min-h-[280px]">
              <p className="text-espresso/80">Café Yamu auf der Karte</p>
              <Link
                href={ROUTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-2xl border-2 border-gold bg-white px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-white"
              >
                In Google Maps öffnen
              </Link>
              <p className="text-sm text-espresso/60">
                Christinastraße 64, 50733 Köln
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
