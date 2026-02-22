"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ROUTE_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Christinastra%C3%9Fe+64%2C+50733+K%C3%B6ln";
const INSTAGRAM_URL = "https://www.instagram.com/cafeyamu/";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-offwhite via-cream to-gold/5 pt-20 pb-16 md:min-h-[85vh] md:pt-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:flex-row md:gap-16 md:px-6">
        <motion.div
          className="flex flex-1 flex-col justify-center text-center md:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1
            id="hero-heading"
            className="text-3xl font-bold tracking-tight text-espresso sm:text-4xl md:text-5xl lg:text-[2.75rem]"
          >
            Ausgiebig frühstücken in Köln-Nippes
          </h1>
          <p className="mt-4 max-w-lg text-lg text-espresso/85 md:mt-6">
            Großzügige Frühstücksplatten, Eierspezialitäten, Bowls und frischer Kaffee — in
            gemütlicher Atmosphäre am Wilhelmplatz. coffee • eatery • vibes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start md:mt-10">
            <Link
              href={ROUTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center rounded-2xl bg-gold px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-gold-dark hover:shadow-lift"
            >
              Route planen
            </Link>
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center rounded-2xl border-2 border-espresso/30 bg-transparent px-6 py-3 text-sm font-semibold text-espresso transition hover:border-gold hover:bg-gold/5 hover:text-gold"
            >
              Instagram
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative flex flex-1 justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gold/10 blur-2xl" />
            <Image
              src="/images/cup.png"
              alt="Café Yamu To-Go Becher"
              width={380}
              height={420}
              className="relative drop-shadow-lift rounded-2xl object-contain"
              priority
              sizes="(max-width: 768px) 280px, 380px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
