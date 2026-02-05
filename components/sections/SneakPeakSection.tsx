"use client";

import Image from "next/image";
import Link from "next/link";
import { Target, Utensils, Bot, Sparkles } from "lucide-react";

export default function SneakPeakSection() {
  return (
    <section className="py-48 px-6 bg-[radial-gradient(circle_at_50%_0%,#1a1a1e_0%,#09090b_100%)]">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
           <div className="space-y-6 max-w-2xl">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">Sneak Peak</h2>
              <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">Digitale<br /><span className="text-zinc-800">Meisterschaft</span></h3>
           </div>
           <p className="text-zinc-500 text-lg font-bold max-w-sm border-l-2 border-zinc-900 pl-6">
              Exklusive Einblicke in die App-Inhalte, Trainingspläne und das Löwen-Kochbuch.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           {/* Content 1: Training */}
           <div className="group relative">
              <div className="aspect-16/10 bg-zinc-900 rounded-4xl border border-zinc-800 overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-[url('/images/doku/training.jpg')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
                 <div className="absolute top-8 left-8 p-3 bg-zinc-950/80 backdrop-blur-md rounded-lg border border-zinc-800">
                    <Target className="w-5 h-5 text-yellow-500" />
                 </div>
                 <div className="absolute bottom-10 left-10 right-10">
                    <h4 className="text-2xl font-black uppercase text-white tracking-tighter mb-2">Train-Pedia</h4>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">Video-Anleitungen für maximale Effizienz im Gym.</p>
                 </div>
              </div>
           </div>
           
           {/* Content 2: Nutrition */}
           <div className="group relative md:mt-12">
              <div className="aspect-16/10 bg-zinc-900 rounded-4xl border border-zinc-800 overflow-hidden relative shadow-2xl">
                 <Image 
                    src="/images/doku/meal_prep.png"
                    alt="Performance Fueling"
                    fill
                    className="object-cover opacity-40 group-hover:scale-105 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
                 <div className="absolute top-8 left-8 p-3 bg-zinc-950/80 backdrop-blur-md rounded-lg border border-zinc-800">
                    <Utensils className="w-5 h-5 text-emerald-500" />
                 </div>
                 <div className="absolute bottom-10 left-10 right-10">
                    <h4 className="text-2xl font-black uppercase text-white tracking-tighter mb-2">Löwen-Küche</h4>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">Das Kochbuch für Männer, die keine Zeit zu verlieren haben.</p>
                 </div>
              </div>
           </div>

           {/* Content 3: Lion-AI */}
           <Link href="/ai-coach" className="group relative md:mt-24">
              <div className="aspect-16/10 bg-zinc-900 rounded-4xl border border-yellow-500/20 overflow-hidden relative shadow-2xl transition-all duration-500 hover:border-yellow-500/50">
                 <div className="absolute inset-0 bg-linear-to-br from-yellow-500/10 via-zinc-950 to-zinc-950 group-hover:bg-yellow-500/20 transition-all duration-500" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-20 h-20 text-yellow-500/10 group-hover:scale-110 transition-transform duration-1000" />
                 </div>
                 <div className="absolute top-8 left-8 p-3 bg-zinc-950/80 backdrop-blur-md rounded-lg border border-zinc-800">
                    <Bot className="w-5 h-5 text-yellow-500" />
                 </div>
                 <div className="absolute bottom-10 left-10 right-10">
                    <div className="inline-flex items-center gap-2 mb-2">
                      <h4 className="text-2xl font-black uppercase text-white tracking-tighter">Der Mentor</h4>
                      <span className="px-1.5 py-0.5 rounded bg-yellow-500 text-[8px] text-black font-black uppercase">Pionier</span>
                    </div>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">Der digitale Instinkt für den Meister-Alltag.</p>
                 </div>
              </div>
           </Link>
        </div>
      </div>
    </section>
  );
}
