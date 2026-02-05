"use client";

import { useRef, useEffect } from "react";
import { PreOrderButton } from "@/components/PreOrderButton";
import { gsap } from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
      });

      gsap.from(".hero-p", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 1,
        ease: "expo.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col items-center justify-center text-center p-6 sm:p-12 z-10 relative">
      <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/logo_transformation.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950/0 via-zinc-950/80 to-zinc-950" />
      
      <div className="space-y-8 max-w-6xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-xl mb-6 shadow-2xl">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Pre-Order Phase Aktiv</span>
        </div>
        
        <h1 className="hero-title text-6xl md:text-[12rem] font-black tracking-tighter uppercase leading-[0.85] md:leading-[0.8] text-white">
          <span className="block">Löwen</span>
          <span className="block text-zinc-800">trafo</span>
        </h1>
        
        <p className="hero-p text-xl md:text-3xl font-bold text-zinc-400 max-w-3xl mx-auto tracking-tight leading-tight mt-8">
          Fitnessorkun hat gezeigt, was möglich ist.<br />
          <span className="text-white">LÖWENTRAFO zeigt, was tragfähig ist.</span>
        </p>

        <div className="hero-p pt-12 flex flex-col items-center gap-6">
          <PreOrderButton className="h-24 px-20 text-2xl shadow-[0_0_50px_rgba(250,204,21,0.2)] rounded-2xl" />
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Inklusive Zugang zur Alpha-Phase</p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-px h-12 bg-zinc-500" />
      </div>
    </section>
  );
}
