"use client";

import { PreOrderButton } from "@/components/PreOrderButton";
import StageSection from "@/components/sections/StageSection";
import SneakPeakSection from "@/components/sections/SneakPeakSection";
import { useEffect, useRef } from "react";
import { Zap, Brain, Activity, Quote, LayoutDashboard, Rocket, Camera, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

  const synergySteps = [
    { title: "Physisches Fundament", icon: Activity, desc: "Ohne einen starken Körper gibt es keinen starken Geist. TRAIN & EAT bilden die Basis." },
    { title: "Operative Struktur", icon: LayoutDashboard, desc: "MOVE schafft die Routinen, die deinen Tag vom Chaos befreien." },
    { title: "Mentale Meisterschaft", icon: Brain, desc: "LEAD & PROVE transformieren deine Haltung und lassen dich als Leader wachsen." },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-zinc-950 text-foreground flex flex-col relative overflow-hidden selection:bg-yellow-500 selection:text-black">
      {/* Background Visuals */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#18181b_0%,#09090b_60%)] -z-10" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Pillar III: Die Trafo</span>
          </div>
          <h1 className="fade-up text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white">
            Die<br /><span className="text-zinc-700">Synergie</span>
          </h1>
          <p className="fade-up text-xl md:text-2xl font-bold text-zinc-400 max-w-2xl mx-auto tracking-tight">
            Wir verbinden Sport, Arbeit und Leben zu einem einzigen, hocheffizienten System. Das ist die wahre Transformation.
          </p>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12 fade-up">
            <div className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Vom Motivator zum Systembauer</h2>
              <div className="text-zinc-500 leading-relaxed text-lg space-y-4">
                <p>
                  <strong className="text-white">Fitnessorkun hat gezeigt, was möglich ist. Löwentrafo zeigt, was tragfähig ist.</strong>
                </p>
                <p>
                  Motivation ist flüchtig. Disziplin ohne Struktur zerbricht. Reichweite ersetzt keine Ordnung.
                  Löwentrafo ist kein Influencer-Projekt, sondern die technische Konsequenz aus Jahren an der Belastungsgrenze.
                  Wir bauen das System, das deinen Erfolg unvermeidbar macht – nicht, weil du motiviert bist, sondern weil du strukturiert bist.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              {synergySteps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-yellow-500/50 transition-colors duration-500">
                    <step.icon className="w-5 h-5 text-zinc-600 group-hover:text-yellow-500" />
                  </div>
                  <div className="space-y-1 pt-2">
                    <h3 className="text-sm font-black uppercase text-white tracking-widest">{step.title}</h3>
                    <p className="text-xs text-zinc-600 leading-relaxed uppercase tracking-tighter font-bold">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative fade-up">
             <div className="w-full aspect-square bg-zinc-900 rounded-[3rem] border border-zinc-900 overflow-hidden relative group shadow-2xl">
                <Image 
                  src="/images/handwerk/synergy_detail.png"
                  alt="Synergy of Craft and Fitness"
                  fill
                  priority
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Zap className="w-24 h-24 text-yellow-500/20 group-hover:text-yellow-500/40 transition-all duration-1000" />
                </div>
             </div>
             <div className="absolute -top-4 -left-4 p-6 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl animate-bounce z-10">
                <Rocket className="w-6 h-6 text-yellow-500" />
             </div>
          </div>
        </div>
      </section>

      {/* Stage Section: The Transformation */}
      <StageSection />

      {/* Evidence Log: The sheer volume of reality */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-yellow-500" />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500 text-left">Das Evidence Log</p>
              </div>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">Keine Fake-<br/><span className="text-zinc-800">Marketing</span> Welt</h2>
            </div>
            <p className="text-zinc-500 max-w-sm text-sm text-left">
              Wir dokumentieren jeden Schritt. Über 40 Stunden Videomaterial und tausende Bilder beweisen: LÖWENTRAFO ist kein Produkt vom Reißbrett, sondern aus dem echten Leben.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
            {/* Masonry-like grid using various spans */}
            {[
              { src: "/images/doku/reality_01.jpg", span: "col-span-2 row-span-2" },
              { src: "/images/doku/reality_02.jpg", span: "col-span-1 row-span-1" },
              { src: "/images/doku/reality_03.jpg", span: "col-span-1 row-span-2" },
              { src: "/images/doku/reality_04.jpg", span: "col-span-2 row-span-1" },
              { src: "/images/doku/reality_05.jpg", span: "col-span-1 row-span-1" },
              { src: "/images/doku/reality_06.jpg", span: "col-span-2 row-span-2" },
              { src: "/images/doku/reality_07.jpg", span: "col-span-2 row-span-1" },
              { src: "/images/doku/reality_08.jpg", span: "col-span-1 row-span-1" },
              { src: "/images/doku/reality_09.jpg", span: "col-span-1 row-span-2" },
              { src: "/images/doku/reality_10.jpg", span: "col-span-2 row-span-1" },
              { src: "/images/championships/german_championship_stage.png", span: "col-span-2 row-span-2" },
              { src: "/images/doku/main.jpg", span: "col-span-1 row-span-1" },
              { src: "/images/doku/meister.jpg", span: "col-span-1 row-span-1" },
            ].map((img, i) => (
              <div key={i} className={`${img.span} relative rounded-xl md:rounded-3xl overflow-hidden border border-zinc-900 group`}>
                <Image 
                  src={img.src}
                  alt={`Log evidence ${i}`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-zinc-950/80 backdrop-blur-sm p-1.5 md:p-2 rounded-lg border border-zinc-800">
                    <Eye className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />
                  </div>
                </div>
              </div>
            ))}
            <div className="col-span-2 row-span-1 md:row-span-2 bg-zinc-900/20 border border-zinc-900 rounded-xl md:rounded-3xl flex flex-col items-center justify-center p-6 text-center group cursor-pointer hover:border-yellow-500/30 transition-all">
               <Camera className="w-8 h-8 text-zinc-800 mb-4 group-hover:text-yellow-500 transition-colors" />
               <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-2">Gesamtes Archiv</p>
               <p className="text-xs text-zinc-800 font-bold uppercase tracking-tighter">1.432 Assets verfügbar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sneak Peak Section: Digital Mastery */}
      <SneakPeakSection />

      {/* Quote Section */}
      <section className="py-32 px-6 bg-zinc-900/5 text-center">
         <div className="max-w-3xl mx-auto space-y-8">
            <Quote className="w-16 h-16 text-zinc-900 mx-auto" />
            <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white italic leading-tight">
              &quot;Ich bin nicht das Ziel. Ich bin der Beweis, dass ein System funktioniert. Fitness war der Einstieg – Ordnung ist das Ziel.&quot;
            </p>
            <p className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">— Orkun (Der Löwenmonteur)</p>
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
