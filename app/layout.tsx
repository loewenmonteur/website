import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Premium, modern font
import "./globals.css";
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LÖWENTRAFO - Dominance in Craftsmanship & Performance",
  description: "Das ultimative System für Handwerk, Bodybuilding und die Trafo-Vision. Werde zum Meister deines Lebens.",
  keywords: ["Handwerk", "Fitness", "Mindset", "Performance", "Orkun K.", "Löwenmonteur", "Bodybuilding"],
  authors: [{ name: "Orkun K." }],
  alternates: {
    canonical: "https://loewentrafo.de",
  },
  openGraph: {
    title: "LÖWENTRAFO - Leistung im Leben",
    description: "Körper. Arbeit. Verantwortung. Das System für Transformation.",
    url: "https://loewentrafo.de",
    siteName: "LÖWENTRAFO",
    locale: "de_DE",
    images: [
      {
        url: "/images/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "LÖWENTRAFO Brand Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LÖWENTRAFO",
    description: "Das System für echte Macher.",
    images: ["/images/brand/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LÖWENTRAFO",
  "url": "https://loewentrafo.de",
  "logo": "https://loewentrafo.de/images/brand/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Orkun K."
  },
  "description": "Premium Coaching & System-Struktur für Handwerker und Performer.",
  "sameAs": [
    "https://instagram.com/fitnessorkun"
  ]
};

import { SmoothScroll } from "@/components/SmoothScroll";
import { CookieBanner } from "@/components/CookieBanner";
import { AIFloatingButton } from "@/components/AIFloatingButton";
import { StripeProvider } from "@/components/StripeProvider";

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
            {children}
          </SmoothScroll>
          <CookieBanner />
          <AIFloatingButton />
        </StripeProvider>
      </body>
    </html>
  );
}
