"use client";

import { Dumbbell, Utensils, ListTodo, GraduationCap, ShieldCheck, Zap } from "lucide-react";
import { PreOrderButton } from "@/components/PreOrderButton";

export default function FrameworkSection() {
  const modules = [
    { name: "TRAIN", icon: Dumbbell, desc: "Kraft & Leistungsfähigkeit für den Alltag eines Meisters." },
    { name: "EAT", icon: Utensils, desc: "Fuel-Strategien, die im vollen Terminkalender funktionieren." },
    { name: "MOVE", icon: ListTodo, desc: "Routinen, die Struktur und mentale Klarheit schaffen." },
    { name: "LEAD", icon: GraduationCap, desc: "Haltung und Führung als Fundament deines Betriebs." },
    { name: "PROVE", icon: ShieldCheck, desc: "Beweise durch Taten – Challenges für echte Resultate." },
  ];

  return (
    <section className="py-48 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="text-center space-y-8">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">Das Framework</h2>
          <h3 className="text-5xl md:text-9xl font-black uppercase tracking-tighter text-white leading-none">Full Access</h3>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
          {/* Mobile: Horizontal Scroll Container */}
          <div className="flex lg:contents overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 lg:pb-0 lg:mx-0 lg:px-0 scrollbar-hide">
            {modules.map((m, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center bg-zinc-900 p-8 md:p-10 rounded-3xl border border-zinc-800 hover:border-yellow-500/30 transition-all duration-500 group relative overflow-hidden flex flex-col">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/5 blur-2xl rounded-full group-hover:bg-yellow-500/10 transition-all" />
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 md:mb-8 text-zinc-700 group-hover:text-yellow-500 transition-colors duration-500">
                  <m.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="text-xl md:text-2xl font-black uppercase text-white mb-3 md:mb-4 tracking-tighter leading-none">{m.name}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-bold group-hover:text-zinc-300 transition-colors">{m.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-1 bg-yellow-500 rounded-4xl p-12 flex flex-col justify-between group cursor-pointer overflow-hidden relative shadow-[0_0_100px_rgba(234,179,8,0.15)] transition-transform duration-500 hover:scale-[1.02] mt-4 lg:mt-0">
             <Zap className="absolute -bottom-10 -right-10 w-48 h-48 text-black/10 -rotate-12 group-hover:scale-110 transition-transform duration-1000" />
             <div className="relative z-10 space-y-4">
               <h4 className="text-4xl md:text-5xl font-black uppercase text-black tracking-tighter leading-[0.85] mb-4 group-hover:translate-y-[-5px] transition-transform">Werde Teil<br />des Rudels</h4>
               <p className="text-black/60 text-sm font-black uppercase tracking-widest">Begrenzte Plätze verfügbar.</p>
             </div>
             <div className="relative z-10 pt-12">
               <PreOrderButton amount={9900} className="w-full bg-black text-white border-none hover:bg-zinc-900 h-20 text-lg rounded-xl shadow-2xl" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
