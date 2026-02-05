"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Quote, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils"; // Assuming utils exist, or I'll use simple class logic

gsap.registerPlugin(ScrollTrigger);

export default function OriginStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"vision" | "evolution">("vision");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Desktop Parallax for Image
      gsap.to(".story-image", {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-48 px-6 bg-zinc-950 relative overflow-hidden">
      
      {/* Mobile Tab Switcher */}
      <div className="lg:hidden flex justify-center mb-12 sticky top-20 z-30">
        <div className="flex bg-zinc-900/80 backdrop-blur-md p-1.5 rounded-full border border-zinc-800 shadow-xl">
          <button
            onClick={() => setActiveTab("vision")}
            className={cn(
              "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300",
              activeTab === "vision" ? "bg-yellow-500 text-black shadow-lg" : "text-zinc-500 hover:text-white"
            )}
          >
            Vision
          </button>
          <button
            onClick={() => setActiveTab("evolution")}
            className={cn(
              "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300",
              activeTab === "evolution" ? "bg-zinc-800 text-white shadow-lg" : "text-zinc-500 hover:text-white"
            )}
          >
            Evolution
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* VISION CONTENT (StorySection equivalent) */}
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center transition-opacity duration-500",
          activeTab === "vision" ? "block opacity-100" : "hidden lg:grid opacity-0 lg:opacity-100" // Always show on LG, toggle on Mobile
        )}>
          {/* Text Content */}
          <div className="space-y-10 order-2 lg:order-1">
             <div className="space-y-4">
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">Die Herkunft</h2>
                <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                  Vom Sichtbaren<br /><span className="text-zinc-800">zum Tragfähigen</span>
                </h3>
             </div>
             
             <p className="text-zinc-400 leading-relaxed text-lg md:text-2xl font-bold tracking-tight italic border-l-4 border-yellow-500 pl-8 py-4 bg-yellow-500/5 rounded-r-xl">
                &quot;Ich bin nicht das Ziel. Ich bin der Beweis, dass ein System funktioniert. Fitnessorkun war der Einstieg – Löwentrafo ist das Fundament.&quot;
             </p>

             <div className="space-y-6 pt-4">
                 <p className="text-zinc-500 text-base md:text-lg leading-relaxed">
                    Viele kennen Orkun als <strong>Fitnessorkun</strong>. Ein Gesicht, eine Reichweite, eine sichtbare Transformation. Doch wahre Ordnung entsteht nicht durch Sichtbarkeit, sondern durch Substanz. LÖWENTRAFO ist die Konsequenz aus Jahren an der Front: Weg vom Influencer-Dasein, hin zum Systembau für Männer mit Verantwortung.
                 </p>
                 <div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-900 group">
                    <Quote className="w-8 h-8 text-yellow-500/20 group-hover:text-yellow-500 transition-colors" />
                    <p className="text-xs font-black uppercase tracking-widest text-white italic">Kein Influencer-Projekt. Ein operatives System.</p>
                 </div>
             </div>
          </div>

          {/* Image Content */}
          <div className="relative order-1 lg:order-2 group">
             <div className="story-image aspect-4/5 bg-zinc-900 rounded-[2.5rem] border border-zinc-800 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] relative">
                <Image 
                  src="/images/handwerk/orkun_leadership_blaumann.png"
                  alt="Orkun portrait in Blaumann"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-12 left-12 right-12 space-y-2">
                   <p className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-500">Der Systembauer</p>
                   <p className="text-4xl font-black uppercase text-white tracking-tighter">Orkun Arslanmekik</p>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/5 blur-[80px] rounded-full -z-10" />
          </div>
        </div>

        {/* EVOLUTION CONTENT (EvolutionSection equivalent) */}
        <div className={cn(
            "mt-24 lg:mt-48 transition-all duration-500",
            activeTab === "evolution" ? "block opacity-100 translate-y-0" : "hidden lg:block opacity-0 lg:opacity-100 translate-y-10 lg:translate-y-0" // Toggle on mobile, always show on LG
        )}>
           <div className="border border-zinc-900 rounded-[3rem] p-8 md:p-12 lg:p-24 overflow-hidden relative group/grid bg-zinc-900/20">
             {/* Background Image reused/styled */}
             <div className="absolute inset-0 opacity-5 group-hover/grid:opacity-10 transition-opacity duration-1000 pointer-events-none">
               <Image 
                 src="/images/doku/evolution.jpg"
                 alt="Evolution Background"
                 fill
                 className="object-cover"
               />
             </div>
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-linear-to-b from-yellow-500/20 via-zinc-900 to-transparent hidden lg:block" />

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
                {/* PAST */}
                <div className="space-y-8">
                   <div className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">Vergangenheit</p>
                      <h4 className="text-3xl md:text-4xl font-black uppercase text-zinc-400 tracking-tighter">Fitnessorkun</h4>
                   </div>
                   <ul className="space-y-4">
                      {["Reichweite & Sichtbarkeit", "Motivation als Treibstoff", "Ästhetik im Vordergrund", "Social Media Fokus"].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-zinc-600 font-bold text-sm md:text-base">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 shrink-0" />
                          {item}
                        </li>
                      ))}
                   </ul>
                </div>

                {/* FUTURE */}
                <div className="space-y-8">
                   <div className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-500">Zukunft</p>
                      <h4 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tighter shadow-yellow-500/10 shadow-2xl">LÖWENTRAFO</h4>
                   </div>
                   <ul className="space-y-4">
                      {["Substanz & Tragfähigkeit", "Struktur als Fundament", "Haltung & Führung", "Alltagstaugliches System"].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-zinc-300 font-bold text-sm md:text-base">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-yellow-500/10 text-yellow-500 shrink-0">
                              <Check className="w-3 h-3" />
                          </div>
                          {item}
                        </li>
                      ))}
                   </ul>
                   <div className="pt-4">
                       <p className="text-yellow-500 text-sm font-black italic border-l-2 border-yellow-500 pl-4">&quot;Gebaut, was tragfähig bleibt.&quot;</p>
                   </div>
                </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
