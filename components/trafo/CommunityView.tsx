"use client";

import { Crown, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function CommunityView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
       
       {/* VIP Card - 3D Effect */}
       <div className="flex justify-center py-4">
          <motion.div 
            initial={{ rotateY: 0 }}
            whileHover={{ rotateY: 10,  scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full max-w-sm aspect-16/10 bg-black rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl group cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
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
             
             {/* Shine Effect */}
             <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
          </motion.div>
       </div>

       <div className="space-y-4">
          <div className="flex items-center gap-2">
             <TrendingUp className="w-4 h-4 text-yellow-500" />
             <h3 className="text-sm font-black uppercase text-white">Partner Vorteile</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
             {[
               { name: "Supplement Store", discount: "-15%", code: "LÖWEN15", color: "from-blue-500/20 to-blue-900/5" },
               { name: "Gym Wear Pro", discount: "-20%", code: "TRAFO20", color: "from-red-500/20 to-red-900/5" },
               { name: "Meal Prep Service", discount: "-10%", code: "HEALTHY10", color: "from-green-500/20 to-green-900/5" },
             ].map((partner, i) => (
               <div key={i} className={`flex items-center justify-between p-4 bg-linear-to-r ${partner.color} border border-zinc-900 rounded-xl hover:border-yellow-500/30 transition-all group cursor-copy`}>
                  <div>
                     <p className="text-xs font-black text-white uppercase">{partner.name}</p>
                     <p className="text-[10px] text-zinc-400 font-bold uppercase mt-0.5">{partner.discount} Sofort-Rabatt</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <code className="px-3 py-1.5 bg-black/50 backdrop-blur rounded-lg text-[10px] font-mono text-yellow-500 border border-yellow-500/20 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                        {partner.code}
                     </code>
                  </div>
               </div>
             ))}
          </div>
       </div>

       <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl text-center space-y-3">
          <p className="text-xs text-zinc-400">
             Werde Teil der Elite. Monatliche Calls, exklusive Events und ein Netzwerk aus Machern.
          </p>
          <button className="w-full py-2 bg-white text-black font-black uppercase text-xs tracking-widest rounded hover:bg-zinc-200 transition-colors">
             Community Beitreten
          </button>
       </div>

    </div>
  );
}
