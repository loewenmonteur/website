"use client";

import { useState, useEffect, useCallback } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe, Appearance } from "@stripe/stripe-js";
import { ShieldCheck, Loader2, Tag, Check, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const REGULAR_PRICE = 29900; // 299€ in cents
const EARLYBIRD_PRICE = 9900; // 99€ in cents

export default function CheckoutPage() {
  const [promoCode, setPromoCode] = useState("");
  const [appliedCode, setAppliedCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [currentPrice, setCurrentPrice] = useState(REGULAR_PRICE);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const applyPromoCode = () => {
    setPromoError("");
    if (promoCode.trim().toUpperCase() === "EARLYBIRD") {
      setAppliedCode("EARLYBIRD");
      setCurrentPrice(EARLYBIRD_PRICE);
      setClientSecret(""); // Reset to fetch new intent with discounted price
    } else {
      setPromoError("Ungültiger Code");
    }
  };

  const removePromoCode = () => {
    setAppliedCode("");
    setPromoCode("");
    setCurrentPrice(REGULAR_PRICE);
    setClientSecret(""); // Reset to fetch new intent with full price
  };

  const fetchIntent = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: currentPrice,
          tier: "trafo",
          promoCode: appliedCode || undefined,
        }),
      });
      const data = await res.json();
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    } catch (err) {
      console.error("Error creating payment intent:", err);
    } finally {
      setLoading(false);
    }
  }, [currentPrice, appliedCode]);

  useEffect(() => {
    if (!clientSecret) {
      fetchIntent();
    }
  }, [clientSecret, fetchIntent]);

  const appearance: Appearance = {
    theme: "night",
    variables: {
      colorPrimary: "#eab308",
      colorBackground: "#18181b",
      colorText: "#ffffff",
      colorDanger: "#ef4444",
      fontFamily: "Inter, system-ui, sans-serif",
      spacingUnit: "4px",
      borderRadius: "12px",
    },
  };

  const discount = REGULAR_PRICE - currentPrice;
  const hasDiscount = discount > 0;

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
                  EARLYBIRD Rabatt
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

        {/* Payment Section */}
        <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6">
          <h2 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-6">
            Zahlungsinformationen
          </h2>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <Loader2 className="w-8 h-8 text-yellow-500 animate-spin" />
              <p className="text-sm font-black uppercase tracking-widest text-zinc-500">
                Wird vorbereitet...
              </p>
            </div>
          ) : clientSecret ? (
            <Elements
              stripe={stripePromise}
              options={{ clientSecret, appearance }}
            >
              <CheckoutForm price={currentPrice} />
            </Elements>
          ) : (
            <div className="text-center py-12">
              <p className="text-red-500 font-bold">
                Verbindungsfehler. Bitte laden Sie die Seite neu.
              </p>
            </div>
          )}
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-col items-center gap-4">
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

function CheckoutForm({ price }: { price: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessing(true);
    setErrorMessage("");

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      setErrorMessage(
        error.message || "Ein unbekannter Fehler ist aufgetreten."
      );
    }
    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full h-14 text-lg bg-yellow-500 text-black hover:bg-yellow-400 font-black uppercase tracking-tighter rounded-xl transition-all"
      >
        {isProcessing ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Verarbeitung...
          </>
        ) : (
          <>
            Jetzt sicher bezahlen — {(price / 100).toFixed(2).replace(".", ",")}€
            <Sparkles className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
}
