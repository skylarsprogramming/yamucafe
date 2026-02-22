"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ROUTE_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Christinastra%C3%9Fe+64%2C+50733+K%C3%B6ln";
const INSTAGRAM_URL = "https://www.instagram.com/cafeyamu/";

export default function CTABand() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-gradient-to-br from-gold/15 to-espresso/10 py-16 md:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <motion.h2
          id="cta-heading"
          className="text-2xl font-bold text-espresso md:text-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Komm vorbei — wir freuen uns auf dich.
        </motion.h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={ROUTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex rounded-2xl bg-gold px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-gold-dark hover:shadow-lift"
          >
            Route planen
          </Link>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex rounded-2xl border-2 border-espresso/30 bg-white/80 px-6 py-3 text-sm font-semibold text-espresso transition hover:border-gold hover:bg-gold/5 hover:text-gold"
          >
            Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
