"use client";

import { Utensils, ShoppingCart, Leaf, Wallet, Sparkles, Check } from "lucide-react";
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

           {/* Shopping List Generator */}
           <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl space-y-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Wallet className="w-32 h-32" />
               </div>
              <div className="flex items-center gap-2 relative z-10">
                 <ShoppingCart className="w-5 h-5 text-yellow-500" />
                 <h3 className="text-sm font-black uppercase text-white">Einkaufslisten-Generator</h3>
              </div>
              
              <div className="space-y-6 relative z-10">
                 {/* 1. Recipe Selection (Visual Only for Demo) */}
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Rezept wählen</label>
                    <div className="flex gap-2">
                         <button className="px-4 py-2 text-xs font-bold uppercase rounded-lg bg-yellow-500 text-black border border-yellow-500">
                             Hähnchen & Reis
                         </button>
                         <button className="px-4 py-2 text-xs font-bold uppercase rounded-lg bg-zinc-900 text-zinc-500 border border-zinc-700 hover:border-zinc-500 transition-colors">
                             Magerquark Shake
                         </button>
                    </div>
                 </div>

                 {/* 2. Budget vs Premium Toggle with State */}
                 <ShoppingListDemo />

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
 
 function ShoppingListDemo() {
    const [mode, setMode] = useState<"budget" | "premium">("budget");
    const [showResult, setShowResult] = useState(false);
 
    const budgetList = [
      { item: "Hähnchen (TK, Großpackung)", price: "8.00€" },
      { item: "Reis (5kg Sack)", price: "1.50€" },
      { item: "TK-Brokkoli", price: "2.20€" },
      { item: "Discounter Quark", price: "0.80€" }
    ];
 
    const premiumList = [
       { item: "Bio-Hähnchenbrust", price: "22.00€" },
       { item: "Basmati (Premium)", price: "4.50€" },
       { item: "Frisches Markt-Gemüse", price: "8.90€" },
       { item: "Bio Skyr", price: "2.50€" }
     ];
 
     const currentList = mode === "budget" ? budgetList : premiumList;
     const totalPrice = currentList.reduce((acc, item) => acc + parseFloat(item.price.replace("€", "")), 0).toFixed(2);
 
    return (
       <div className="space-y-6">
          {/* Mode Toggle */}
          <div className="space-y-2">
             <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Modus Wählen</label>
             <div className="grid grid-cols-2 gap-2 bg-zinc-950/50 p-1 rounded-xl border border-zinc-800">
                <button 
                   onClick={() => { setMode("budget"); setShowResult(false); }}
                   className={`py-2 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-2 ${mode === "budget" ? "bg-zinc-800 text-white shadow-lg border border-zinc-700" : "text-zinc-600 hover:text-zinc-400"}`}
                >
                   <Wallet className="w-3 h-3" />
                   Budget
                </button>
                <button 
                   onClick={() => { setMode("premium"); setShowResult(false); }}
                   className={`py-2 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-2 ${mode === "premium" ? "bg-yellow-500 text-black shadow-lg" : "text-zinc-600 hover:text-zinc-400"}`}
                >
                   <Leaf className="w-3 h-3" />
                   Premium
                </button>
             </div>
          </div>
 
          {/* Generate Button */}
          {!showResult && (
             <button 
                onClick={() => setShowResult(true)}
                className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-black uppercase text-xs tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all border border-white/10"
             >
                <Sparkles className="w-4 h-4 text-yellow-500" />
                Liste Berechnen
             </button>
          )}
 
          {/* Result View */}
          {showResult && (
             <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3">
                   {currentList.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-xs border-b border-zinc-900 pb-2 last:border-0 last:pb-0">
                         <span className="font-bold text-zinc-400">{item.item}</span>
                         <span className={mode === "budget" ? "text-emerald-500 font-mono" : "text-zinc-300 font-mono"}>{item.price}</span>
                      </div>
                   ))}
                   <div className="pt-2 border-t border-zinc-800 flex justify-between items-center">
                      <span className="text-[10px] uppercase font-black tracking-widest text-yellow-500">Gesamt</span>
                      <span className="text-xl font-black text-white font-mono">{totalPrice}€</span>
                   </div>
                </div>
                <div className="flex justify-center">
                   <p className="text-[10px] text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-500" />
                      Erfolgreich generiert
                   </p>
                </div>
             </div>
          )}
       </div>
    );
 }
