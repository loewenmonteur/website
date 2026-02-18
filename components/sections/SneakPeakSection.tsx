"use client";

import Image from "next/image";


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
                   {/* Feature 1: Training */}
                   <div className="flex gap-6 group">
                       <div className="w-12 h-12 shrink-0 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors">
                       </div>
                      <div className="space-y-2">
                         <h4 className="text-xl font-black uppercase text-white tracking-wide">Trainingspläne</h4>
                         <p className="text-zinc-500 font-medium leading-relaxed">
                            Kompromisslose Übungsvideos. Ein System, das Ergebnisse liefert, ohne Ausreden.
                         </p>
                      </div>
                   </div>
 
                   {/* Feature 2: Ernährung */}
                   <div className="flex gap-6 group">
                       <div className="w-12 h-12 shrink-0 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors">
                       </div>
                      <div className="space-y-2">
                         <h4 className="text-xl font-black uppercase text-white tracking-wide">Ernährungspläne</h4>
                         <p className="text-zinc-500 font-medium leading-relaxed">
                            Inklusive Kochbuch – kein Rätselraten mehr. Optimale Energie für deinen Erfolg.
                         </p>
                      </div>
                   </div>
 
                   {/* Feature 3: Mentoring */}
                   <div className="flex gap-6 group">
                       <div className="w-12 h-12 shrink-0 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors">
                       </div>
                      <div className="space-y-2">
                         <h4 className="text-xl font-black uppercase text-white tracking-wide">Mentoring</h4>
                         <p className="text-zinc-500 font-medium leading-relaxed">
                            Zum Löwen werden. Die Mentalität für Sport, Arbeit und dein ganzes Leben.
                         </p>
                      </div>
                   </div>
                </div>
 
                <div className="pt-4 border-t border-zinc-900">
                   <p className="text-sm font-black uppercase tracking-widest text-yellow-500 mb-2">Keine halben Sachen. Nur Fortschritt.</p>
                   <p className="text-zinc-500 text-xs italic">Du kommst nicht zum Spielen. Du kommst, um stärker zu werden.</p>
                </div>

        </div>
      </div>
    </div>
  </section>
  );
}
