"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Story Section Parallax
      gsap.to(".story-image", {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current, // Use ref as trigger context
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="story-section py-48 px-6 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10 order-2 lg:order-1">
          <div className="space-y-4">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">Die Evolution</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9]">
              Vom Sichtbaren<br /><span className="text-zinc-800">zum Tragfähigen</span>
            </h3>
          </div>
          <p className="text-zinc-400 leading-relaxed text-2xl font-bold tracking-tight italic border-l-4 border-yellow-500 pl-8 py-4">
            &quot;Ich bin nicht das Ziel. Ich bin der Beweis, dass ein System funktioniert. Fitnessorkun war der Einstieg – Löwentrafo ist das Fundament, das bleibt.&quot;
          </p>
          <div className="space-y-6 pt-4">
             <p className="text-zinc-500 text-lg leading-relaxed">
                Viele kennen Orkun als <strong>Fitnessorkun</strong>. Ein Gesicht, eine Reichweite, eine sichtbare Transformation. Doch wahre Ordnung entsteht nicht durch Sichtbarkeit, sondern durch Substanz. LÖWENTRAFO ist die Konsequenz aus Jahren an der Front: Weg vom Influencer-Dasein, hin zum Systembau für Männer mit Verantwortung.
             </p>
             <div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-900 group">
                <Quote className="w-8 h-8 text-yellow-500/20 group-hover:text-yellow-500 transition-colors" />
                <p className="text-xs font-black uppercase tracking-widest text-white italic">Kein Influencer-Projekt. Ein operatives System.</p>
             </div>
          </div>
        </div>
        
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
    </section>
  );
}
