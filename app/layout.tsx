import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Premium, modern font
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LÖWENTRAFO - Leistung im Leben",
  description: "Ein System für Körper, Arbeit und Verantwortung.",
};

import { SmoothScroll } from "@/components/SmoothScroll";
import { CookieBanner } from "@/components/CookieBanner";

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
      </body>
    </html>
  );
}
