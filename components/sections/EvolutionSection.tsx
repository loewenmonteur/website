"use client";

import Image from "next/image";

export default function EvolutionSection() {
  return (
    <section className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto border border-zinc-900 rounded-[3rem] p-12 lg:p-24 overflow-hidden relative group/grid">
         <div className="absolute inset-0 opacity-5 group-hover/grid:opacity-10 transition-opacity duration-1000">
           <Image 
             src="/images/doku/evolution.jpg"
             alt="Evolution Background"
             fill
             className="object-cover"
           />
         </div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-linear-to-b from-yellow-500/20 via-zinc-900 to-transparent hidden lg:block" />
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
            <div className="space-y-8">
               <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">Vergangenheit</p>
                  <h4 className="text-4xl font-black uppercase text-zinc-400 tracking-tighter">Fitnessorkun</h4>
               </div>
               <ul className="space-y-4">
                  {["Reichweite & Sichtbarkeit", "Motivation als Treibstoff", "Ästhetik im Vordergrund", "Social Media Fokus"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-zinc-700 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                      {item}
                    </li>
                  ))}
               </ul>
               <p className="text-zinc-600 text-sm italic">&quot;Gezeigt, was möglich ist.&quot;</p>
            </div>

            <div className="space-y-8">
               <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-500">Zukunft</p>
                  <h4 className="text-4xl font-black uppercase text-white tracking-tighter shadow-yellow-500/10 shadow-2xl">LÖWENTRAFO</h4>
               </div>
               <ul className="space-y-4">
                  {["Substanz & Tragfähigkeit", "Struktur als Fundament", "Haltung & Führung", "Alltagstaugliches System"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-zinc-300 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      {item}
                    </li>
                  ))}
               </ul>
               <p className="text-yellow-500 text-sm font-black italic">&quot;Gebaut, was tragfähig bleibt.&quot;</p>
            </div>
         </div>
      </div>
    </section>
  );
}
