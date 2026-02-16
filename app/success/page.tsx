"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Crown, Zap, Loader2, XCircle } from "lucide-react";

interface SessionData {
  status: string;
  payment_status: string;
  customer_email?: string;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [session, setSession] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(!!sessionId);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!sessionId) return;

    fetch(`/api/checkout-session?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(true);
        } else {
          setSession(data);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [sessionId]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-yellow-500 animate-spin" />
      </div>
    );
  }

  // Error / incomplete payment
  if (error || (session && session.payment_status !== "paid")) {
    return (
      <div className="min-h-screen bg-zinc-950 text-foreground flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a1a1e_0%,#09090b_80%)] -z-10" />
        <div className="space-y-8 max-w-2xl">
          <XCircle className="w-24 h-24 text-red-500 mx-auto" />
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Zahlung nicht abgeschlossen
          </h1>
          <p className="text-lg text-zinc-400">
            Etwas ist schiefgelaufen. Bitte versuche es erneut.
          </p>
          <Button
            asChild
            className="h-16 px-10 text-lg rounded-2xl bg-yellow-500 text-black hover:bg-yellow-400 font-black uppercase tracking-tighter"
          >
            <Link href="/checkout">Zurück zum Checkout</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Success!
  return (
    <div className="min-h-screen bg-zinc-950 text-foreground flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a1a1e_0%,#09090b_80%)] -z-10" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />

      <div className="space-y-12 max-w-2xl relative z-10">
        <div className="relative inline-block">
          <CheckCircle2 className="w-32 h-32 text-yellow-500 mb-6 relative z-10 animate-in zoom-in duration-500" />
          <Crown className="absolute -top-4 -right-4 w-12 h-12 text-yellow-500/20 rotate-12" />
        </div>

        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
            Willkommen im<br />
            <span className="text-zinc-800">Rudel.</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-zinc-400 tracking-tight leading-tight italic">
            &quot;Die Transformation hat offiziell begonnen.&quot;
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-900 space-y-4">
          <Zap className="w-8 h-8 text-yellow-500 mx-auto animate-pulse" />
          <p className="text-sm font-black uppercase tracking-widest text-zinc-500">
            Dein Pionier-Status wird aktiviert. Check dein Postfach
            {session?.customer_email && (
              <span className="text-yellow-500/60"> ({session.customer_email})</span>
            )}{" "}
            für die ersten Instruktionen.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Button
            asChild
            className="h-20 px-12 text-lg rounded-2xl bg-white text-black hover:bg-zinc-200 transition-all shadow-2xl"
          >
            <Link href="/">Zurück zur Base</Link>
          </Button>
          <p className="text-[10px] font-mono text-zinc-800 uppercase tracking-widest">
            Löwenmonteur © 2026. Dominance in Craftsmanship.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-yellow-500 animate-spin" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
