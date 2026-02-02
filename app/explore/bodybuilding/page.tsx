"use client";

import { useEffect, useRef } from "react";
import { PreOrderButton } from "@/components/PreOrderButton";
import { Target, Flame, Zap, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

export default function BodybuildingExplorePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-zinc-950 text-foreground flex flex-col relative overflow-hidden selection:bg-yellow-500 selection:text-black">
      {/* Background Visuals */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#1a1a1e_0%,#09090b_60%)] -z-10" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Pillar II: Eisen & Ästhetik</span>
          </div>
          <h1 className="fade-up text-5xl md:text-9xl font-black tracking-tighter uppercase leading-none text-white">
            Eisen &<br /><span className="text-zinc-800">Stahl</span>
          </h1>
          <p className="fade-up text-xl md:text-3xl font-bold text-zinc-500 max-w-2xl mx-auto tracking-tight leading-tight">
            Vom Handwerker zum modernen Athleten. Bodybuilding ist die härteste Schule der Welt.
          </p>
        </div>
      </section>

      {/* Main Feature: The Lion Den */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12 order-2 lg:order-1 fade-up">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Das Training</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Wir folgen keinem Trend. Wir folgen dem Eisen. Unser System ist optimiert für Männer, die tagsüber körperlich arbeiten und abends im Gym ihre Grenzen verschieben.
            </p>
            <div className="grid gap-6">
              {[
                { title: "Progressive Überlastung", icon: Target, desc: "Systematische Steigerung deiner Kraftwerte Woche für Woche." },
                { title: "Ästhetische Symmetrie", icon: Activity, desc: "Wir bauen einen Körper, der Stärke nicht nur besitzt, sondern auch ausstrahlt." },
                { title: "Eisen-Mindset", icon: Zap, desc: "Lerne, den Schmerz zu lieben und ihn zur Transformation zu nutzen." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-3xl bg-zinc-900/50 border border-zinc-900 group">
                   <item.icon className="w-10 h-10 text-yellow-500 shrink-0 group-hover:scale-110 transition-transform" />
                   <div>
                      <h4 className="text-xl font-black uppercase text-white mb-2 tracking-tighter">{item.title}</h4>
                      <p className="text-zinc-500 text-sm">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 fade-up">
             <div className="aspect-square bg-zinc-900 rounded-[3rem] border border-zinc-800 overflow-hidden shadow-2xl relative group">
                <Image 
                  src="/images/championships/nrw_champion_pose.png"
                  alt="Orkun on stage - NRW Landesmeister"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
             </div>
             <Flame className="absolute -bottom-10 -right-10 w-40 h-40 text-yellow-500/10 -rotate-12 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Championship Proof Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-zinc-900/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">
          <div className="space-y-4 fade-up">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-yellow-500">Die ultimative Prüfung</h2>
            <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">Vom NRW Champion zur<br />Deutschen Spitze</h3>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed font-bold">
              Nach dem NRW-Sieg kam der mentale Crash. Doch das Support-System aus Familie, Freunden und Trainern hielt den Kurs. Heute ist dieser Triumph der Beweis für die Kraft des LÖWENTRAFO Systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {[
              { img: "/images/championships/nrw_stage_overview.png", label: "NRW Meisterschaft", pos: "Gesamtsieg" },
              { img: "/images/championships/orkun_champion_medal.png", label: "Deutsche Meisterschaft", pos: "1. Platz" },
              { img: "/images/championships/german_champion_pose.png", label: "DBFV e.V. Posing", pos: "Dominanz" }
            ].map((item, i) => (
              <div key={i} className="group fade-up space-y-4">
                <div className="aspect-4/5 bg-zinc-900 rounded-3xl border border-zinc-900 overflow-hidden relative shadow-2xl">
                  <Image 
                    src={item.img}
                    alt={item.label}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500 mb-1">{item.pos}</p>
                    <p className="text-xl font-black uppercase text-white tracking-tighter">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Teaser: Nutrition */}
      <section className="py-24 px-6 bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center fade-up">
           <div className="flex-1 relative">
              <div className="aspect-16/10 bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl">
                 <Image 
                    src="/brain/6236508e-f6dd-4e9f-84cf-689f93580393/nutrition_steak_bowl_1770068868595.png"
                    alt="Löwen-Küche high protein"
                    fill
                    className="object-cover"
                 />
              </div>
              <div className="absolute -top-4 -left-4 px-6 py-2 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                EAT-Modul Preview
              </div>
           </div>
           <div className="flex-1 space-y-8">
              <div className="space-y-4">
                 <h2 className="text-sm font-black uppercase tracking-[0.4em] text-emerald-500">Ernährung</h2>
                 <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Fuel your<br />Evolution</h3>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Kein Verzicht, sondern Strategie. Wir zeigen dir, wie du im anstrengenden Job-Alltag auf dem Bau oder im Büro deine Proteine deckst und Fett verbrennst.
              </p>
              <div className="flex flex-wrap gap-4">
                 {["High Protein", "Quick Prep", "Budget Friendly", "Performance Focus"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-500">{tag}</span>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Final Sales CTA */}
      <section className="py-32 px-6 text-center">
         <div className="fade-up space-y-12">
           <h2 className="text-4xl md:text-9xl font-black uppercase mb-4 tracking-tighter text-white">
             Werde zum<br /><span className="text-zinc-800">Eisen-Löwen</span>
           </h2>
           <p className="text-zinc-500 max-w-sm mx-auto mb-10 text-lg font-bold">
             Starte deine physische Revolution jetzt vor allen anderen.
           </p>
           <div className="flex flex-col items-center gap-8">
              <PreOrderButton className="h-24 px-20 text-2xl shadow-2xl rounded-2xl" />
              <Link href="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700 hover:text-white transition-colors">Zurück zur Startseite</Link>
           </div>
         </div>
      </section>

      {/* Small Footer */}
      <footer className="py-10 px-6 text-center border-t border-zinc-900/10 text-[9px] font-mono text-zinc-900 uppercase tracking-widest">
         No Pain. No Trafo. © 2026 Löwentrafo
      </footer>
    </main>
  );
}
