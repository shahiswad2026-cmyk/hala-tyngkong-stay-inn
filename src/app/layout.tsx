import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Ha La Tyngkong Stay Inn | Peaceful Stay in Mawlynnong, Meghalaya",
  description:
    "Ha La Tyngkong Stay Inn in Mawlynnong, Meghalaya — comfortable Double Bed and Four-Bedded rooms with breakfast and all taxes included. A welcoming base for exploring Asia's cleanest village, the Riwai Living Root Bridge and the East Khasi Hills. Book directly on WhatsApp.",
  keywords: [
    "Ha La Tyngkong Stay Inn",
    "Hala Tyngkong Stay Inn",
    "Mawlynnong stay inn",
    "Stay in Mawlynnong",
    "Mawlynnong homestay Meghalaya",
    "Rooms in Mawlynnong village",
    "Stay near Living Root Bridge Riwai",
    "Meghalaya village stay",
    "East Khasi Hills accommodation",
  ],
  openGraph: {
    title:
      "Ha La Tyngkong Stay Inn | Peaceful Stay in Mawlynnong, Meghalaya",
    description:
      "Comfortable rooms and a welcoming base for exploring Mawlynnong village. Breakfast and all taxes included — check availability directly on WhatsApp.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ha La Tyngkong Stay Inn | Mawlynnong, Meghalaya",
    description:
      "A peaceful stay in Mawlynnong, Meghalaya. Check availability directly on WhatsApp.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#214E3B",
};

/**
 * Verified facts only (Google Maps listing, live 29 Sep 2026 — see
 * research/hala-property.json): name/category/address/phone/coords,
 * aggregate rating 4.6 from 107 reviews. Rates are owner-confirmed.
 */
const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Ha La Tyngkong Stay Inn",
  alternateName: "Hala Tyngkong Stay Inn",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Surok Mawlynnong",
    addressLocality: "Mawlynnong",
    addressRegion: "Meghalaya",
    postalCode: "793110",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.2025389,
    longitude: 91.9154208,
  },
  telephone: "+91 89745 35288",
  priceRange: "₹3,000 – ₹4,900",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "107",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
        />
      </body>
    </html>
  );
}
