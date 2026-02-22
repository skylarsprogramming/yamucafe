"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const GALLERY_ITEMS = [
  { src: "/images/essen.png", alt: "Frühstückstisch mit Platten und Bowls", size: "tall" as const },
  { src: "/images/outside.png", alt: "Café Yamu Storefront in Köln-Nippes", size: "wide" as const },
  { src: "/images/logo.png", alt: "Yamu Logo", size: "small" as const },
  { src: "/images/cup.png", alt: "Café Yamu To-Go Becher", size: "small" as const },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = useCallback((index: number) => setLightboxIndex(index), []);
  const close = useCallback(() => setLightboxIndex(null), []);

  return (
    <section
      id="galerie"
      aria-labelledby="gallery-heading"
      className="bg-offwhite py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2
          id="gallery-heading"
          className="text-center text-2xl font-bold text-espresso md:text-3xl"
        >
          Galerie
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-espresso/80">
          Einblicke in unser Café und unsere Küche.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => open(index)}
              className="focus-ring group relative aspect-[4/5] overflow-hidden rounded-2xl bg-espresso/5 md:aspect-square"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              aria-label={`Bild öffnen: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Bild vergrößert anzeigen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/80 p-4"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="focus-ring absolute right-4 top-4 rounded-2xl bg-white/90 px-4 py-2 text-espresso hover:bg-white"
              aria-label="Lightbox schließen"
            >
              Schließen
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_ITEMS[lightboxIndex].src}
                alt={GALLERY_ITEMS[lightboxIndex].alt}
                width={900}
                height={600}
                className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
