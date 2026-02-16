"use client";

import { Utensils, ShoppingCart, Leaf, Wallet, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function NutritionView() {
  const [activeTab, setActiveTab] = useState<"recipes" | "philosophy">("recipes");

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex gap-2 p-1 bg-zinc-900/50 rounded-xl w-fit border border-zinc-800/50">
        <button 
          onClick={() => setActiveTab("recipes")}
          className={`px-4 py-2 text-xs font-black uppercase rounded-lg transition-all ${activeTab === "recipes" ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20" : "text-zinc-500 hover:text-white"}`}
        >
          Rezepte & Budget
        </button>
        <button 
          onClick={() => setActiveTab("philosophy")}
          className={`px-4 py-2 text-xs font-black uppercase rounded-lg transition-all ${activeTab === "philosophy" ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20" : "text-zinc-500 hover:text-white"}`}
        >
          Philosophie
        </button>
      </div>

      {activeTab === "recipes" && (
        <div className="space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Recipe Card 1 */}
              <div className="group relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all cursor-pointer">
                 <Image 
                    src="/images/doku/meal_prep.png" // Fallback
                    alt="Löwen Reis"
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                 <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end mb-1">
                       <h3 className="text-lg font-black uppercase text-white">Löwen-Reis (Bulk)</h3>
                       <span className="text-xs font-bold text-green-400 bg-green-950/50 px-2 py-0.5 rounded border border-green-500/20">~2.50€</span>
                    </div>
                    <p className="text-xs text-zinc-400">Hähnchen, Reis, Brokkoli. Der Klassiker.</p>
                 </div>
              </div>

              {/* Recipe Card 2 */}
              <div className="group relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all cursor-pointer">
                 <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                    <Utensils className="w-12 h-12 text-emerald-500 opacity-20" />
                 </div>
                 <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                 <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end mb-1">
                       <h3 className="text-lg font-black uppercase text-white">Magerquark Shake</h3>
                       <span className="text-xs font-bold text-green-400 bg-green-950/50 px-2 py-0.5 rounded border border-green-500/20">~0.80€</span>
                    </div>
                    <p className="text-xs text-zinc-400">60g Protein. Low Budget. High Effizienz.</p>
                 </div>
              </div>
           </div>

           {/* Budget Comparison Visualization */}
           <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl space-y-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Wallet className="w-32 h-32" />
               </div>
              <div className="flex items-center gap-2 relative z-10">
                 <Wallet className="w-5 h-5 text-yellow-500" />
                 <h3 className="text-sm font-black uppercase text-white">Effizienz-Vergleich</h3>
              </div>
              
              <div className="space-y-4 relative z-10">
                 <div className="space-y-2">
                    <div className="flex justify-between text-xs uppercase font-bold text-zinc-500">
                       <span>Rumpsteak (1kg)</span>
                       <span className="text-red-500 line-through">~35.00€</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                       <div className="h-full w-full bg-red-500/50" />
                    </div>
                 </div>
                 
                 <div className="space-y-2">
                    <div className="flex justify-between text-xs uppercase font-bold text-zinc-500">
                       <span className="text-white">Hähnchen (1kg)</span>
                       <span className="text-emerald-500">~8.00€</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                       <div className="h-full w-[22%] bg-emerald-500" />
                    </div>
                 </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/50">
                   <button className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase text-xs tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-yellow-500/20 hover:scale-[1.02]">
                      <ShoppingCart className="w-4 h-4" />
                      Einkaufsliste generieren
                      <ArrowRight className="w-4 h-4 opacity-50" />
                   </button>
              </div>
           </div>
        </div>
      )}

      {activeTab === "philosophy" && (
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
           <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />
           
           <h3 className="text-2xl font-black uppercase text-white mb-6 relative z-10">Mentoring für <br/><span className="text-zinc-500">Sport und Leben</span></h3>
           
           <div className="space-y-6 relative z-10">
              <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-yellow-500 pl-4">
                Orkuns Erfahrung hat gezeigt: <strong className="text-white">Kontinuität schlägt Intensität.</strong> Keine Experimente. Verlass dich auf das Bewährte.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                 {[
                   "Disziplin ist Freiheit.",
                   "Einfachheit ist der Schlüssel zur Beständigkeit.",
                   "Dein Körper ist das Fundament für deinen geschäftlichen Erfolg."
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-zinc-950/50 rounded-lg border border-zinc-900">
                       <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                       <p className="text-xs text-zinc-300 font-bold uppercase">{item}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
