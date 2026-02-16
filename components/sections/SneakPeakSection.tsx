"use client";

import Image from "next/image";
import { Target, Utensils, Users } from "lucide-react";

export default function SneakPeakSection() {
  return (
    <section className="py-24 md:py-48 px-6 bg-[radial-gradient(circle_at_0%_50%,#1a1a1e_0%,#09090b_100%)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
           
           {/* Left: The Book (Visual Anchor) */}
           <div className="w-full lg:w-1/2 relative group perspective-1000">
              <div className="relative w-[300px] md:w-[450px] aspect-[1/1.4] mx-auto transform rotate-y-[-15deg] group-hover:rotate-y-0 transition-transform duration-700 ease-out preserve-3d">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full transform scale-75 animate-pulse" />
                  
                  <Image 
                    src="/images/book_cover.jpg"
                    alt="Die Löwentransformation - Das Buch"
                    fill
                    sizes="(max-width: 768px) 80vw, 40vw"
                    className="object-contain drop-shadow-2xl z-10"
                    loading="lazy"
                  />
              </div>
           </div>

           {/* Right: The Content (System Pillars) */}
           <div className="w-full lg:w-1/2 space-y-12">
              <div className="space-y-6">
                 <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">Warum Löwentrafo?</h2>
                 <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                    Mehr als nur<br /><span className="text-zinc-800">ein Buch.</span>
                 </h3>
                 <p className="text-zinc-400 text-lg md:text-xl font-bold leading-relaxed max-w-lg">
                    Kein theoretisches Blabla. Ein operatives System für Menschen, die im Alltag funktionieren müssen.
                 </p>
              </div>

               <div className="space-y-8">
                  {/* Feature 1: Der Plan */}
                  <div className="flex gap-6 group">
                     <div className="w-12 h-12 shrink-0 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors">
                        <Target className="w-6 h-6 text-white group-hover:text-yellow-500 transition-colors" />
                     </div>
                     <div className="space-y-2">
                        <h4 className="text-xl font-black uppercase text-white tracking-wide">Der Plan</h4>
                        <p className="text-zinc-500 font-medium leading-relaxed">
                           Vergiss komplizierte Wissenschaft. Du bekommst einen einfachen, klaren Ablauf für dein Training, der Ergebnisse liefert.
                        </p>
                     </div>
                  </div>

                  {/* Feature 2: Energie */}
                  <div className="flex gap-6 group">
                     <div className="w-12 h-12 shrink-0 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                        <Utensils className="w-6 h-6 text-white group-hover:text-emerald-500 transition-colors" />
                     </div>
                     <div className="space-y-2">
                        <h4 className="text-xl font-black uppercase text-white tracking-wide">Energie</h4>
                        <p className="text-zinc-500 font-medium leading-relaxed">
                           Keine Hunger-Diäten. Lerne, wie du dich und deine Familie gesund ernährst, ohne ein Vermögen auszugeben.
                        </p>
                     </div>
                  </div>

                  {/* Feature 3: Gemeinschaft */}
                  <div className="flex gap-6 group">
                     <div className="w-12 h-12 shrink-0 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors">
                        <Users className="w-6 h-6 text-white group-hover:text-yellow-500 transition-colors" />
                     </div>
                     <div className="space-y-2">
                        <h4 className="text-xl font-black uppercase text-white tracking-wide">Gemeinschaft</h4>
                        <p className="text-zinc-500 font-medium leading-relaxed">
                           Du bist nicht allein. Ein Netzwerk aus Menschen, die vor den gleichen Herausforderungen stehen wie du.
                        </p>
                     </div>
                  </div>
               </div>

        </div>
      </div>
    </div>
  </section>
  );
}
