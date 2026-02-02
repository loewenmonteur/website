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
  openGraph: {
    title: "LÖWENTRAFO - Leistung im Leben",
    description: "Körper. Arbeit. Verantwortung. Das System für Transformation.",
    url: "https://loewentrafo.de",
    siteName: "LÖWENTRAFO",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LÖWENTRAFO",
    description: "Das System für echte Macher.",
  },
};

import { SmoothScroll } from "@/components/SmoothScroll";
import { CookieBanner } from "@/components/CookieBanner";
import { AIFloatingButton } from "@/components/AIFloatingButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${outfit.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <CookieBanner />
        <AIFloatingButton />
      </body>
    </html>
  );
}
