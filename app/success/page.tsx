"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Lock, Fingerprint, ShieldAlert, Award, Check, Building2, Loader2, XCircle } from "lucide-react";

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
    <div className="min-h-screen bg-zinc-950 text-foreground flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a1a1e_0%,#09090b_80%)] -z-10" />

      <div className="max-w-3xl w-full space-y-8 relative z-10 py-12">
        
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            <CheckCircle2 className="w-24 h-24 text-yellow-500 relative z-10 animate-in zoom-in duration-500" />
            <div className="absolute inset-0 bg-yellow-500/20 blur-2xl rounded-full" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
              Bestellung erfolgreich
            </h1>
            <p className="text-lg text-zinc-400 font-medium">
              Dein Platz in der Löwen-Trafo ist erfolgreich gesichert.
            </p>
          </div>
        </div>

        {/* Main Content Info Cards */}
        <div className="grid gap-4 md:grid-cols-2">
            
          {/* Start & Access */}
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500">
                 <Lock className="w-5 h-5" />
               </div>
               <h2 className="text-sm font-black uppercase tracking-wider text-white">Start & Zugang</h2>
            </div>
            <div className="space-y-3 text-sm text-zinc-400">
              <p>Die Löwen-Trafo befindet sich aktuell im Aufbau.</p>
              <p className="text-white font-bold">👉 Der vollständige Zugang zu allen Inhalten startet ab Mai.</p>
              <p>Du wirst automatisch per E-Mail informiert, sobald dein persönlicher App-Zugang freigeschaltet ist.</p>
              <p className="italic text-zinc-500">Bis dahin musst du nichts weiter tun.</p>
            </div>
          </div>

          {/* Individual Transformation */}
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                 <Fingerprint className="w-5 h-5" />
               </div>
               <h2 className="text-sm font-black uppercase tracking-wider text-white">Individuelle Transformation</h2>
            </div>
             <div className="space-y-3 text-sm text-zinc-400">
              <p><strong className="text-white">1 Mensch = 1 Zugang.</strong> Die Löwen-Trafo ist kein Massenprodukt.</p>
              <p>Alle Trainings-, Ernährungs- und Strukturpläne werden innerhalb der App individuell auf dich abgestimmt.</p>
            </div>
          </div>
        </div>

        {/* Security Section (Full Width) */}
         <div className="p-6 rounded-2xl bg-red-950/10 border border-red-900/20 backdrop-blur-sm">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                 <ShieldAlert className="w-5 h-5" />
               </div>
               <h2 className="text-sm font-black uppercase tracking-wider text-white">Persönlicher Zugang & Schutz</h2>
            </div>
            <ul className="space-y-2 text-sm text-zinc-400 list-disc list-inside marker:text-red-500/50">
               <li>Dein Zugang ist personenbezogen.</li>
               <li>Weitergabe an Dritte (privat oder geschäftlich) ist <strong className="text-white">nicht erlaubt</strong>.</li>
               <li>Kopieren, Teilen oder Weiterverkaufen von Inhalten ist untersagt.</li>
               <li>Die App nutzt technische Schutzmechanismen zur Erkennung von Mehrfachnutzung.</li>
            </ul>
             <p className="mt-4 text-xs text-red-400/80 font-bold uppercase tracking-wide">
               Bei Verstößen behalten wir uns vor, den Zugang ohne Erstattung zu sperren.
             </p>
          </div>

        {/* Features & Business (Grid) */}
         <div className="grid gap-4 md:grid-cols-2">
           {/* What to expect */}
           <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
               <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                 <Award className="w-5 h-5" />
               </div>
               <h2 className="text-sm font-black uppercase tracking-wider text-white">Was dich ab Mai erwartet</h2>
             </div>
             <ul className="space-y-2 text-sm text-zinc-400">
               <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Individuell abgestimmte Trainingspläne</li>
               <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Übungsvideos</li>
               <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Ernährungspläne & Digitales Kochbuch</li>
               <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Mentoring-Impulse (Disziplin, Alltag, Arbeit)</li>
               <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Lebenslanger Zugriff</li>
             </ul>
           </div>

           {/* Business Info */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-zinc-800 text-zinc-400">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-sm font-black uppercase tracking-wider text-white">Geschäftliche Nutzung</h2>
                </div>
                <p className="text-sm text-zinc-400 mb-4">
                  Die Löwen-Trafo ist ein persönliches Transformationsprogramm. Für Firmen oder Teams bieten wir separate Lösungen an.
                </p>
              </div>
              <div className="text-sm">
                  <span className="text-zinc-500">Kontakt: </span>
                  <a href="mailto:management@loewenmonteur.de" className="text-yellow-500 hover:underline font-medium">management@loewenmonteur.de</a>
              </div>
            </div>
         </div>

        {/* Footer / CTA */}
        <div className="flex flex-col items-center gap-8 pt-8 border-t border-zinc-900">
          <Button
            asChild
            className="h-16 px-10 text-lg rounded-xl bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-tight shadow-xl hover:shadow-2xl transition-all"
          >
            <Link href="/">Zurück zur Base</Link>
          </Button>
          
          <div className="text-center space-y-2">
             <p className="text-[10px] text-zinc-600 uppercase tracking-widest max-w-md mx-auto leading-relaxed">
               Kein medizinisches oder therapeutisches Angebot. Inhalte dienen der Orientierung, Motivation und Struktur. Ergebnisse können individuell variieren.
             </p>
             <p className="text-[10px] font-mono text-zinc-800 uppercase tracking-widest">
               Löwenmonteur © 2026
             </p>
          </div>
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
