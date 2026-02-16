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
      {/* Background Visuals - YouTube Archive Loop */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-black/80 z-10" /> {/* Heavy overlay for readability */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay z-20" />
        <iframe 
          className="w-full h-full object-cover scale-[1.35] opacity-60 grayscale brightness-75"
          src="https://www.youtube.com/embed/s-Amde2FQKw?autoplay=1&mute=1&loop=1&playlist=s-Amde2FQKw&controls=0&showinfo=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3" 
          allow="autoplay; encrypted-media"
          title="Löwentrafo Doku Archive"
        />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 text-center z-10 relative">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6 shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">System Online</span>
          </div>
          <h1 className="fade-up text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white drop-shadow-2xl">
            LÖWEN<span className="text-zinc-500">TRAFO</span>
          </h1>
          <p className="fade-up text-xl md:text-2xl font-bold text-zinc-400 max-w-2xl mx-auto tracking-tight">
            Der Zugang für Männer, die Verantwortung tragen.
          </p>
          
          {/* Watch Doku Trigger */}
          <div className="fade-up pt-8 flex justify-center">
            <a 
              href="https://youtu.be/s-Amde2FQKw?si=s15raUErJJYM15tA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-yellow-500/50 transition-all backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-black border-b-[5px] border-b-transparent ml-1" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Dokumentation</p>
                <p className="text-xs text-white uppercase font-black tracking-wider group-hover:text-yellow-500 transition-colors">Das Manifest ansehen</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* The Trafo Box Interaction */}
      <section className="py-12 px-6 flex justify-center min-h-[500px] z-10 relative">
        <div className="fade-up w-full">
           <TrafoBox />
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 bg-zinc-900/40 backdrop-blur-sm text-center mt-auto relative z-10">
         <div className="max-w-3xl mx-auto space-y-8">
            <Quote className="w-16 h-16 text-zinc-900 mx-auto" />
            <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white italic leading-tight drop-shadow-lg">
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
