"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function DokuSection() {
  return (
    <section className="py-48 px-6 bg-zinc-950 border-y border-zinc-900/50">
      <div className="max-w-4xl mx-auto text-center space-y-16">
         <div className="space-y-4">
           <h2 className="text-sm font-black uppercase tracking-[0.4em] text-zinc-600">Film & Dokumentation</h2>
           <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">Vom Sichtbaren <span className="text-zinc-800">zum Tragfähigen</span></h3>
         </div>
         
         <div className="space-y-12">
           <a 
             href="https://youtu.be/s-Amde2FQKw?si=s15raUErJJYM15tA"
             target="_blank"
             rel="noopener noreferrer"
             className="block aspect-video bg-zinc-900 rounded-[3rem] border-8 border-zinc-900/50 shadow-[0_0_80px_rgba(0,0,0,1)] relative overflow-hidden group cursor-pointer lg:scale-110"
           >
                <Image 
                  src="/images/doku/main.jpg"
                  alt="Doku teaser background"
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover opacity-20 filter grayscale group-hover:scale-105 transition-all duration-2000"
                />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-700" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                 <div className="w-28 h-28 rounded-full bg-white/5 backdrop-blur-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-yellow-500 transition-all duration-700">
                    <Play className="w-10 h-10 text-white group-hover:text-black fill-current ml-1" />
                 </div>
                 <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Dokumentation ansehen</p>
                    <div className="h-px w-20 bg-yellow-500 mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                 </div>
              </div>
           </a>

           {/* Documentary Snapshot Preview */}
           <div className="flex flex-col items-center gap-12 pt-12">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
               {[
                 "/images/doku/workshop_01.jpg",
                 "/images/doku/training.jpg",
                 "/images/doku/reality_10.jpg",
                 "/images/doku/meister.jpg"
               ].map((src, i) => (
                 <div key={i} className="aspect-square bg-zinc-900 rounded-2xl md:rounded-3xl border border-zinc-900 overflow-hidden relative shadow-2xl group/snap">
                   <Image 
                     src={src}
                     alt={`Snapshot ${i}`}
                     fill
                     sizes="(max-width: 768px) 50vw, 25vw"
                     className="object-cover grayscale group-hover/snap:grayscale-0 transition-all duration-700 group-hover/snap:scale-110"
                   />
                   <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 group-hover/snap:opacity-100 transition-opacity" />
                 </div>
               ))}
             </div>
           </div>
         </div>
      </div>
    </section>
  );
}
