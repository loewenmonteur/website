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
        
        <div className="flex flex-col gap-0 md:grid md:grid-cols-3 md:gap-8 relative">
          
          {/* Pillar 1: Handwerk - Sticky Stack */}
          <div className="sticky top-[15vh] md:static mb-[50vh] md:mb-0 z-10">
            <Link href="/explore/handwerk" className="pillar-card group cursor-pointer block">
              <div className="h-[65vh] md:h-[600px] bg-zinc-950 rounded-[2.5rem] md:rounded-4xl border border-zinc-800 p-8 md:p-10 flex flex-col justify-end relative overflow-hidden transition-all duration-700 hover:border-yellow-500/50 hover:shadow-[0_0_60px_rgba(250,204,21,0.1)] shadow-2xl">
                <Image 
                  src="/images/handwerk/orkun_shk_master.png"
                  alt="Handwerk Mastery"
                  fill
                  className="object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="relative z-10 space-y-4 md:space-y-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500">Pillar I</h4>
                    <h5 className="text-4xl md:text-4xl font-black uppercase text-white tracking-tighter leading-none">Handwerk &<br />Betriebe</h5>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed font-bold group-hover:text-zinc-200 transition-colors">
                    Wir bringen Disziplin, Stolz und Systematik zurück in den Betrieb.
                  </p>
                  <div className="pt-2 md:pt-4 flex items-center gap-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                    Mehr erfahren <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Pillar 2: Bodybuilding - Sticky Stack - Eisen Theme */}
          <div className="sticky top-[17vh] md:static mb-[50vh] md:mb-0 z-20">
            <Link href="/explore/bodybuilding" className="pillar-card group cursor-pointer block md:mt-12">
              <div className="h-[65vh] md:h-[600px] bg-zinc-900 rounded-[2.5rem] md:rounded-4xl border border-zinc-700/50 p-8 md:p-10 flex flex-col justify-end relative overflow-hidden transition-all duration-700 hover:border-blue-400/50 hover:shadow-[0_0_60px_rgba(96,165,250,0.1)] shadow-2xl">
                <Image 
                  src="/images/championships/german_champion_pose.png"
                  alt="Training Iron Gym"
                  fill
                  className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
                <div className="relative z-10 space-y-4 md:space-y-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Dumbbell className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Pillar II</h4>
                    <h5 className="text-4xl md:text-4xl font-black uppercase text-white tracking-tighter leading-none">Eisen &<br />Ästhetik</h5>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed font-bold group-hover:text-blue-100 transition-colors">
                    Das Training als Labor der Transformation. Physische Dominanz.
                  </p>
                  <div className="pt-2 md:pt-4 flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                    Mehr erfahren <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Pillar 3: Trafo - Sticky Stack - Purple/Gold Theme */}
          <div className="sticky top-[19vh] md:static z-30">
            <Link href="/explore/trafo" className="pillar-card group cursor-pointer block">
              <div className="h-[65vh] md:h-[600px] bg-zinc-900 rounded-[2.5rem] md:rounded-4xl border border-purple-500/30 p-8 md:p-10 flex flex-col justify-end relative overflow-hidden transition-all duration-700 hover:border-purple-500/60 hover:shadow-[0_0_60px_rgba(168,85,247,0.2)] shadow-2xl">
                <div className="absolute inset-0 bg-[url('/images/handwerk/synergy_detail.png')] bg-cover bg-center opacity-30 filter grayscale group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-linear-to-t from-[#0f0518] via-[#0f0518]/50 to-transparent" />
                <div className="relative z-10 space-y-4 md:space-y-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-400">Pillar III</h4>
                    <h5 className="text-4xl md:text-4xl font-black uppercase text-white tracking-tighter leading-none">Sport, Arbeit<br />& Leben</h5>
                  </div>
                  <p className="text-purple-100/60 text-sm leading-relaxed font-black group-hover:text-purple-100 transition-colors">
                    Die ultimative Synergie. Das operative System für High-Performer.
                  </p>
                  <div className="pt-2 md:pt-4 flex items-center gap-2 text-purple-400 text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                    Mehr erfahren <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
