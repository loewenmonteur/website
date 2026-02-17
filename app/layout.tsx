import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Premium, modern font
import "./globals.css";
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LÖWENMONTEUR - Dominance in Craftsmanship",
  description: "Das ultimative System für Handwerk, Bodybuilding und Persönlichkeit. Werde zum Meister deines Lebens.",
  keywords: ["Handwerk", "Fitness", "Mindset", "Performance", "Orkun K.", "Löwenmonteur", "Bodybuilding"],
  authors: [{ name: "Orkun Arslanmekik" }],
  alternates: {
    canonical: "https://www.loewenmonteur.de",
  },
  openGraph: {
    title: "LÖWENMONTEUR - Dominance in Craftsmanship",
    description: "Körper. Arbeit. Verantwortung. Das System für Transformation.",
    url: "https://www.loewenmonteur.de",
    siteName: "LÖWENMONTEUR",
    locale: "de_DE",
    images: [
      {
        url: "/images/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "LÖWENMONTEUR Brand Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LÖWENMONTEUR",
    description: "Das System für echte Macher.",
    images: ["/images/brand/logo.png"],
  },
  icons: {
    icon: "/images/brand/logo.png",
    shortcut: "/images/brand/logo.png",
    apple: "/images/brand/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LÖWENMONTEUR",
  "url": "https://www.loewenmonteur.de",
  "logo": "https://www.loewenmonteur.de/images/brand/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Orkun Arslanmekik"
  },
  "description": "Premium Coaching & System-Struktur für Handwerker und Performer.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 1", 
    "addressLocality": "Duisburg",
    "postalCode": "47051",
    "addressCountry": "DE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-123-456789",
    "contactType": "customer service",
    "areaServed": "DE",
    "availableLanguage": "German"
  },
  "sameAs": [
    "https://instagram.com/fitnessorkun"
  ]
};

import { SmoothScroll } from "@/components/SmoothScroll";
import { CookieBanner } from "@/components/CookieBanner";
import { StripeProvider } from "@/components/StripeProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { InfoBar } from "@/components/InfoBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${outfit.variable} font-sans bg-background text-foreground antialiased selection:bg-yellow-500 selection:text-black`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <StripeProvider>
          <SmoothScroll>
            <InfoBar />
            {children}
            <ScrollToTop />
          </SmoothScroll>
          <CookieBanner />
        </StripeProvider>
      </body>
    </html>
  );
}
