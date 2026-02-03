"use client";

import { useState, useEffect, useCallback } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe, Appearance } from "@stripe/stripe-js";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier?: string;
  amount?: number;
}

export function PaymentModal({ isOpen, onClose, tier, amount }: PaymentModalProps) {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchIntent = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, tier }),
      });
      const data = await res.json();
      setClientSecret(data.clientSecret);
    } catch (err) {
      console.error("Error creating payment intent:", err);
    } finally {
      setLoading(false);
    }
  }, [amount, tier]);

  useEffect(() => {
    if (isOpen && !clientSecret) {
      fetchIntent();
    }
  }, [isOpen, clientSecret, fetchIntent]);

  const appearance: Appearance = {
    theme: 'night',
    variables: {
      colorPrimary: '#eab308',
      colorBackground: '#09090b',
      colorText: '#ffffff',
      colorDanger: '#ef4444',
      fontFamily: 'Inter, system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '12px',
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-yellow-500/10"
          >
            <div className="px-8 py-6 border-b border-zinc-900 flex items-center justify-between bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Sicherer Checkout</h3>
                  <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Powered by Stripe</p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Schließen"
                className="w-10 h-10 rounded-full hover:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                  <Loader2 className="w-8 h-8 text-yellow-500 animate-spin" />
                  <p className="text-sm font-black uppercase tracking-widest text-zinc-500">System wird verschlüsselt...</p>
                </div>
              ) : clientSecret ? (
                <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                  <CheckoutForm />
                </Elements>
              ) : (
                <div className="text-center py-12">
                   <p className="text-red-500 font-bold">Verbindungsfehler. Bitte versuchen Sie es später erneut.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });
    if (error) {
       setErrorMessage(error.message || "Ein unbekannter Fehler ist aufgetreten.");
    }
    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <PaymentElement />
      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold">
          {errorMessage}
        </div>
      )}
      <div className="pt-4 space-y-4">
        <Button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full h-14 text-lg bg-yellow-500 text-black hover:bg-yellow-400 font-black uppercase tracking-tighter"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Verarbeitung...
            </>
          ) : (
            "Jetzt sicher bezahlen"
          )}
        </Button>
      </div>
    </form>
  );
}
