"use client";

import { useState } from "react";

import { Crown, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function CommunityView() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
       
       <div className="flex justify-center py-4" style={{ perspective: "1000px" }}>
          <motion.div 
            className="relative w-full max-w-sm aspect-16/10 cursor-pointer group"
            onClick={() => setIsFlipped(!isFlipped)}
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
          >
             {/* --- FRONT SIDE (Member Card) --- */}
             <div 
               className="absolute inset-0 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-black"
               style={{ backfaceVisibility: "hidden" }}
             >
                 {/* Gradient Background */}
                 <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-black to-zinc-900" />
                 <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />
                 
                 {/* Golden Accents */}
                 <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-[60px]" />
                 <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/5 rounded-full blur-[60px]" />
                 
                 {/* Content */}
                 <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                       <div className="flex items-center gap-3">
                          <div className="p-2 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                             <Crown className="w-5 h-5 text-yellow-500" />
                          </div>
                          <div>
                             <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none mb-1">Pass</span>
                             <span className="block text-sm font-black uppercase text-white tracking-widest leading-none">Löwen Member</span>
                          </div>
                       </div>
                       <span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1 rounded bg-black/50">#0001</span>
                    </div>
                    
                    <div className="flex justify-between items-end">
                       <div>
                          <p className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">Status</p>
                          <p className="text-xl font-black uppercase text-transparent bg-clip-text bg-linear-to-r from-yellow-500 via-yellow-200 to-yellow-500 bg-size-[200%_auto] animate-shimmer">
                            Alpha Founder
                          </p>
                       </div>
                       <ShieldCheck className="w-8 h-8 text-zinc-800" />
                    </div>
                 </div>
                 
                 {/* Click Hint */}
                 <div className="absolute bottom-2 right-1/2 translate-x-1/2 text-[9px] text-zinc-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Klicken zum Wenden
                 </div>
                 
                 {/* Shine Effect */}
                 <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
             </div>

             {/* --- BACK SIDE (Benefits) --- */}
             <div 
                className="absolute inset-0 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 p-5 flex flex-col"
                style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
             >
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-900">
                    <TrendingUp className="w-4 h-4 text-yellow-500" />
                    <h3 className="text-xs font-black uppercase text-white tracking-wider">Partner Vorteile</h3>
                </div>

                <div className="space-y-2 flex-1 overflow-y-auto pr-1 custom-scrollbar">
                   {[
                     { name: "Supplement Store", discount: "-15%", code: "LÖWEN15" },
                     { name: "Gym Wear Pro", discount: "-20%", code: "TRAFO20" },
                     { name: "Meal Prep Service", discount: "-10%", code: "HEALTHY10" },
                   ].map((partner, i) => (
                     <div key={i} className="flex items-center justify-between p-2.5 bg-zinc-900/50 border border-zinc-900 rounded-lg hover:border-yellow-500/20 transition-colors">
                        <div>
                           <p className="text-[10px] font-black text-zinc-300 uppercase leading-tight">{partner.name}</p>
                           <p className="text-[9px] text-zinc-500 font-bold uppercase">{partner.discount} Rabatt</p>
                        </div>
                        <code className="px-2 py-1 bg-black rounded text-[9px] font-mono text-yellow-500 border border-yellow-500/10">
                           {partner.code}
                        </code>
                     </div>
                   ))}
                </div>
                
                <div className="mt-3 pt-2 border-t border-zinc-900 text-center">
                    <p className="text-[9px] text-zinc-600 uppercase tracking-widest">Nur für Mitglieder</p>
                </div>
             </div>

          </motion.div>
       </div>



    </div>
  );
}
