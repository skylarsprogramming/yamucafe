import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cafeyamu.de";

export const metadata: Metadata = {
  title: "Café Yamu — coffee • eatery • vibes | Köln-Nippes",
  description:
    "Ausgiebig frühstücken in Köln-Nippes: großzügige Frühstücksplatten, Eierspezialitäten, Bowls und Kaffeespezialitäten. Christinastraße 64, 50733 Köln.",
  openGraph: {
    title: "Café Yamu — coffee • eatery • vibes | Köln-Nippes",
    description:
      "Ausgiebig frühstücken in Köln-Nippes: Frühstücksplatten, Eierspezialitäten, Bowls und Kaffee.",
    url: siteUrl,
    siteName: "Café Yamu",
    locale: "de_DE",
    type: "website",
    images: [{ url: `${siteUrl}/images/outside.png`, width: 1200, height: 630, alt: "Café Yamu Storefront" }],
  },
  twitter: { card: "summary_large_image", title: "Café Yamu — coffee • eatery • vibes" },
  robots: "index, follow",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["CafeOrCoffeeShop", "Restaurant"],
  name: "Café Yamu",
  description:
    "Beliebtes Frühstücks- und Brunch-Café am Wilhelmplatz in Köln-Nippes mit großzügigen Frühstücksplatten, Smoothie-Bowls, Eierspezialitäten und hochwertigen Kaffeespezialitäten.",
  url: siteUrl,
  image: `${siteUrl}/images/outside.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Christinastraße 64",
    postalCode: "50733",
    addressLocality: "Köln",
    addressCountry: "DE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "17:30",
    },
  ],
  servesCuisine: ["Breakfast", "Brunch", "Cafe"],
  sameAs: ["https://www.instagram.com/cafeyamu/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
