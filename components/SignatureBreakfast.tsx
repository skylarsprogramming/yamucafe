"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    title: "Frühstücksplatten",
    description: "Großzügige Platten mit Käse, Aufschnitt, Brot, Aufstrichen und frischen Beilagen — auch vegetarisch.",
    icon: "🍰",
  },
  {
    title: "Eierspezialitäten",
    description: "Avocado-Toast mit pochiertem Ei, Rührei-Variationen und mehr — frisch und lecker.",
    icon: "🍳",
  },
  {
    title: "Bowls & Kaffee",
    description: "Smoothie-Bowls, Pancakes und Kaffeespezialitäten: Espresso, Cappuccino, Flat White.",
    icon: "☕",
  },
];

export default function SignatureBreakfast() {
  return (
    <section
      id="fruehstueck"
      aria-labelledby="signature-heading"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h2
          id="signature-heading"
          className="text-center text-2xl font-bold text-espresso md:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Unser Frühstück
        </motion.h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-espresso/80">
          Frische Zutaten, gemütliche Atmosphäre — genau dein Start in den Tag.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              className="group rounded-2xl border border-espresso/10 bg-offwhite p-6 shadow-soft transition hover:border-gold/30 hover:shadow-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <span className="text-3xl" aria-hidden="true">
                {card.icon}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-espresso">{card.title}</h3>
              <p className="mt-2 text-sm text-espresso/80">{card.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
