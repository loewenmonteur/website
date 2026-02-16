"use client";

import { PreOrderButton } from "@/components/PreOrderButton";
import TrafoBox from "@/components/trafo/TrafoBox";
import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";

export default function TrafoExplorePage() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-zinc-950 text-foreground flex flex-col relative overflow-hidden selection:bg-yellow-500 selection:text-black">
      {/* Background Visuals */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#18181b_0%,#09090b_60%)] -z-10" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6 shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">System Online v1.0</span>
          </div>
          <h1 className="fade-up text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white">
            LÖWEN<span className="text-zinc-800">TRAFO</span>
          </h1>
          <p className="fade-up text-xl md:text-2xl font-bold text-zinc-500 max-w-2xl mx-auto tracking-tight">
            Dein Zugang zum System. <span className="text-zinc-300">Training, Ernährung, Mindset.</span>
          </p>
        </div>
      </section>

      {/* The Trafo Box Interaction */}
      <section className="py-12 px-6 flex justify-center min-h-[500px]">
        <div className="fade-up w-full">
           <TrafoBox />
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 bg-zinc-900/5 text-center mt-auto">
         <div className="max-w-3xl mx-auto space-y-8">
            <Quote className="w-16 h-16 text-zinc-900 mx-auto" />
            <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white italic leading-tight">
              &quot;Ich bin nicht das Ziel. Ich bin der Beweis, dass ein System funktioniert. Fitness war der Einstieg – Ordnung ist das Ziel.&quot;
            </p>
            <p className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">— Trafo System Architekt</p>
         </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 px-6 text-center border-t border-zinc-900 bg-linear-to-b from-zinc-950 to-zinc-900">
         <h2 className="text-4xl md:text-7xl font-black uppercase mb-4 tracking-tighter text-white">
           Starte deine<br/><span className="text-zinc-700">Ganzwerdung</span>
         </h2>
         <p className="text-zinc-400 max-w-sm mx-auto mb-10 text-sm">
           Sichere dir deinen Platz in der ersten Alpha-Runde und erlebe das volle System.
         </p>
         <div className="flex flex-col items-center gap-6">
            <PreOrderButton className="h-20 px-16 text-xl shadow-[0_0_30px_rgba(250,204,21,0.15)]" />
            <Link href="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors">Zurück zur Startseite</Link>
         </div>
      </section>

      {/* Small Footer */}
      <footer className="py-10 px-6 text-center border-t border-zinc-900/10 text-[9px] font-mono text-zinc-800 uppercase tracking-widest">
         Alpha Phase. Synergy first. © 2026 Löwentrafo
      </footer>
    </main>
  );
}
