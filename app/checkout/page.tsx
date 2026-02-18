"use client";

import { useState } from "react";
import { ShieldCheck, Loader2, Tag, Check, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const REGULAR_PRICE = 29900; // 299€
const LOEWE_PRICE = 9900; // 99€

export default function CheckoutPage() {
  const [promoCode, setPromoCode] = useState("");
  const [appliedCode, setAppliedCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [error, setError] = useState("");

  const currentPrice = appliedCode === "LOEWE" ? LOEWE_PRICE : REGULAR_PRICE;
  const discount = REGULAR_PRICE - currentPrice;
  const hasDiscount = discount > 0;

  const applyPromoCode = () => {
    setPromoError("");
    if (promoCode.trim().toUpperCase() === "LOEWE") {
      setAppliedCode("LOEWE");
    } else {
      setPromoError("Ungültiger Code");
    }
  };

  const removePromoCode = () => {
    setAppliedCode("");
    setPromoCode("");
  };

  const handleCheckout = async () => {
    setIsRedirecting(true);
    setError("");

    try {
      const res = await fetch("/api/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          promoCode: appliedCode || undefined,
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Checkout konnte nicht gestartet werden.");
        setIsRedirecting(false);
      }
    } catch {
      setError("Verbindungsfehler. Bitte versuche es erneut.");
      setIsRedirecting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,#18181b_0%,#09090b_60%)] -z-10" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Zurück
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-yellow-500" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">
                Checkout
              </h1>
              <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">
                Sicherer Checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 mb-6">
          <h2 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-4">
            Bestellübersicht
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-white font-bold">LöwenTrafo System</span>
              <span className={`font-black text-lg ${hasDiscount ? "line-through text-zinc-600" : "text-white"}`}>
                {(REGULAR_PRICE / 100).toFixed(2).replace(".", ",")}€
              </span>
            </div>

            {hasDiscount && (
              <div className="flex justify-between items-center text-green-400">
                <span className="flex items-center gap-2 text-sm font-bold">
                  <Tag className="w-4 h-4" />
                  LOEWE Rabatt
                </span>
                <span className="font-black">
                  -{(discount / 100).toFixed(2).replace(".", ",")}€
                </span>
              </div>
            )}

            <div className="border-t border-zinc-800 pt-3 flex justify-between items-center">
              <span className="text-sm font-black uppercase tracking-widest text-zinc-400">
                Gesamt
              </span>
              <span className="text-2xl font-black text-yellow-500">
                {(currentPrice / 100).toFixed(2).replace(".", ",")}€
              </span>
            </div>
          </div>
        </div>

        {/* Promo Code Section */}
        <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 mb-6">
          <h2 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-4">
            Gutscheincode
          </h2>

          {appliedCode ? (
            <div className="flex items-center justify-between p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-sm font-black text-green-400 uppercase tracking-wider">
                    {appliedCode}
                  </p>
                  <p className="text-xs text-green-400/60">
                    200€ Frühbucher-Rabatt aktiv
                  </p>
                </div>
              </div>
              <button
                onClick={removePromoCode}
                className="text-xs text-zinc-500 hover:text-white transition-colors underline"
              >
                Entfernen
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => {
                  setPromoCode(e.target.value.toUpperCase());
                  setPromoError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && applyPromoCode()}
                placeholder="Code eingeben"
                className="flex-1 h-12 px-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-600 text-sm font-bold uppercase tracking-wider focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all"
              />
              <Button
                onClick={applyPromoCode}
                disabled={!promoCode.trim()}
                className="h-12 px-6 rounded-xl bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700 hover:border-zinc-600 font-black uppercase tracking-wider text-sm disabled:opacity-30"
              >
                Einlösen
              </Button>
            </div>
          )}

          {promoError && (
            <p className="mt-3 text-sm text-red-400 font-bold">{promoError}</p>
          )}
        </div>

        {/* Checkout CTA */}
        <div className="space-y-4">
          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold">
              {error}
            </div>
          )}

          <Button
            onClick={handleCheckout}
            disabled={isRedirecting}
            className="w-full h-16 text-lg bg-yellow-500 text-black hover:bg-yellow-400 font-black uppercase tracking-tighter rounded-xl transition-all shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30"
          >
            {isRedirecting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Weiterleitung zu Stripe...
              </>
            ) : (
              <>
                Jetzt sicher bezahlen — {(currentPrice / 100).toFixed(2).replace(".", ",")}€
                <Sparkles className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>

          <p className="text-center text-[10px] text-zinc-600 font-bold uppercase tracking-wider">
            Du wirst zu Stripe weitergeleitet, um die Zahlung sicher abzuschließen
          </p>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-zinc-600">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              256-Bit SSL Verschlüsselung
            </span>
          </div>
          <p className="text-[10px] font-mono text-zinc-800 uppercase tracking-widest">
            Löwenmonteur © 2026
          </p>
        </div>
      </div>
    </div>
  );
}
