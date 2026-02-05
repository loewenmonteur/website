"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Dumbbell, Zap, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PillarsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
       // Pillar Cards stagger
       gsap.from(".pillar-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pillars-section py-48 px-6 bg-zinc-950 border-t border-zinc-900/30">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-6">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">Das Universum</h2>
          <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">Die 3 Welten</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          
          {/* Pillar 1: Handwerk */}
          <Link href="/explore/handwerk" className="pillar-card group cursor-pointer">
            <div className="h-[600px] bg-zinc-900 rounded-4xl border border-zinc-800 p-10 flex flex-col justify-end relative overflow-hidden transition-all duration-700 hover:border-yellow-500/50 hover:shadow-[0_0_60px_rgba(250,204,21,0.1)]">
              <Image 
                src="/images/handwerk/orkun_shk_master.png"
                alt="Handwerk Mastery"
                fill
                className="object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500">Pillar I</h4>
                  <h5 className="text-4xl font-black uppercase text-white tracking-tighter leading-none">Handwerk &<br />Betriebe</h5>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed font-bold group-hover:text-zinc-300 transition-colors">
                  Wir bringen Disziplin, Stolz und Systematik zurück in den Betrieb. Gegen den Fachkräftemangel, für die Meisterschaft.
                </p>
                <div className="pt-4 flex items-center gap-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  Mehr erfahren <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </Link>

          {/* Pillar 2: Bodybuilding */}
          <Link href="/explore/bodybuilding" className="pillar-card group cursor-pointer md:mt-12">
            <div className="h-[600px] bg-zinc-900 rounded-4xl border border-zinc-800 p-10 flex flex-col justify-end relative overflow-hidden transition-all duration-700 hover:border-yellow-500/50 hover:shadow-[0_0_60px_rgba(250,204,21,0.1)]">
              <Image 
                src="/images/championships/german_champion_pose.png"
                alt="Training Iron Gym"
                fill
                className="object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500">Pillar II</h4>
                  <h5 className="text-4xl font-black uppercase text-white tracking-tighter leading-none">Eisen &<br />Ästhetik</h5>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed font-bold group-hover:text-zinc-300 transition-colors">
                  Das Training als Labor der Transformation. Wir lehren die Liebe zum harten Training und die physische Dominanz.
                </p>
                <div className="pt-4 flex items-center gap-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  Mehr erfahren <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </Link>

          {/* Pillar 3: Die Trafo */}
          <Link href="/explore/trafo" className="pillar-card group cursor-pointer">
            <div className="h-[600px] bg-zinc-900 rounded-4xl border border-yellow-500/30 p-10 flex flex-col justify-end relative overflow-hidden transition-all duration-700 hover:border-yellow-500/50 hover:shadow-[0_0_60px_rgba(250,204,21,0.2)]">
              <div className="absolute inset-0 bg-[url('/images/handwerk/synergy_detail.png')] bg-cover bg-center opacity-20 filter grayscale group-hover:scale-110 transition-all duration-1000" />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500">Pillar III</h4>
                  <h5 className="text-4xl font-black uppercase text-white tracking-tighter leading-none">Sport, Arbeit<br />& Leben</h5>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed font-black group-hover:text-zinc-300 transition-colors">
                  Die ultimative Synergie. Ein operatives System für den modernen High-Performer im Handwerk.
                </p>
                <div className="pt-4 flex items-center gap-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  Mehr erfahren <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
