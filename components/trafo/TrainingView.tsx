"use client";

import { Play, Calculator, Flame } from "lucide-react";
import Image from "next/image";

export default function TrainingView() {
  const units = [
    { 
      titel: "Push Day A", 
      desc: "Brust, Schulter, Trizeps - Fokus Hypertrophie", 
      duration: "65 min",
      intensity: "High",
      image: "/images/trafo/training_push.png" 
    },
    { 
      titel: "Pull Day A", 
      desc: "Rücken, Bizeps, Hintere Schulter - Fokus Breite", 
      duration: "70 min",
      intensity: "High",
      image: "/images/trafo/training_pull.png" // Now potentially generated
    },
    { 
      titel: "Leg Day", 
      desc: "Quadrizeps Fokus mit Kniebeuge Varianten", 
      duration: "80 min",
      intensity: "Extreme",
      image: "/images/trafo/training_legs.png" 
    },
    { 
      titel: "Push Day B", 
      desc: "Schulter Fokus & Obere Brust", 
      duration: "60 min",
      intensity: "Mid-High",
      image: "/images/doku/reality_04.jpg" // Fallback/Placeholder
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
         <div className="space-y-2">
           <h2 className="text-3xl font-black uppercase text-white tracking-tighter">Dein Schlachtplan</h2>
           <p className="text-zinc-400 text-sm max-w-md">
              Kein Rätselraten mehr. Jeder Satz, jede Wiederholung ist vorgegeben. 
              Wir nutzen progressive Overload als Kernprinzip.
           </p>
         </div>
         <div className="flex gap-4">
            <div className="text-right">
               <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Split</p>
               <p className="text-sm font-black text-white">Push / Pull / Legs</p>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div className="text-right">
               <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Frequenz</p>
               <p className="text-sm font-black text-white">4-6 Tage / Woche</p>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {units.map((unit, i) => (
          <div key={i} className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all cursor-pointer shadow-lg hover:shadow-yellow-500/10">
            <div className="aspect-video relative overflow-hidden">
               <Image 
                  src={unit.image}
                  alt={unit.titel}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
               />
               <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
               
               <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="flex gap-2">
                     <span className="px-2 py-1 bg-zinc-950/80 backdrop-blur rounded-md text-[10px] uppercase font-bold text-zinc-300 flex items-center gap-1 border border-zinc-800">
                       <Calculator className="w-3 h-3" /> {unit.duration}
                     </span>
                     <span className="px-2 py-1 bg-zinc-950/80 backdrop-blur rounded-md text-[10px] uppercase font-bold text-zinc-300 flex items-center gap-1 border border-zinc-800">
                       <Flame className="w-3 h-3 text-red-500" /> {unit.intensity}
                     </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                     <Play className="w-4 h-4 text-black fill-current" />
                  </div>
               </div>
            </div>
            
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                 <h3 className="text-xl font-black uppercase text-white tracking-tight">{unit.titel}</h3>
                 {i === 0 && <span className="text-[10px] font-black bg-yellow-500 text-black px-1.5 py-0.5 rounded uppercase">Start</span>}
              </div>
              <p className="text-xs text-zinc-500 font-bold mb-4">{unit.desc}</p>
              
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                 <div className="h-full bg-zinc-600 w-3/4 rounded-full group-hover:bg-yellow-500 transition-colors" />
              </div>
              <p className="text-[10px] text-zinc-600 mt-1 uppercase tracking-wider text-right">Progress</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-xl flex items-start gap-4">
         <div className="p-2 bg-yellow-500/10 rounded-lg shrink-0">
            <Play className="w-5 h-5 text-yellow-500" />
         </div>
         <div>
            <h4 className="text-sm font-black uppercase text-yellow-500">Erklärvideos inklusive</h4>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Jede Übung wird in 4K erklärt. Winkel, Tempo, Atemtechnik. Keine Fehler mehr.
            </p>
         </div>
      </div>
    </div>
  );
}
