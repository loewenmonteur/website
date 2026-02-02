import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Flame, CheckCircle2, ChevronRight, Apple, Beef, Leaf } from "lucide-react";
import Image from "next/image";

export default function EatPage() {
  const activePlan = {
    title: "System-Nahrung: Basis",
    style: "Protein-Fokus",
    sessions: [
      { name: "Präzisions-Start", type: "Frühstück", time: "07:30", items: "Oatmeal mit Whey & Beeren", completed: true },
      { name: "Meister-Mittag", type: "Mittagessen", time: "12:30", items: "Hähnchen mit Quinoa & Brokkoli", completed: false },
      { name: "Abend-Struktur", type: "Abendessen", time: "19:00", items: "Wildlachs mit Süßkartoffeln", completed: false },
    ]
  };

  const topRecipes = [
    { name: "Beef & Rice Bowl", tag: "Schnell", kcal: 850, protein: "55g", icon: Beef },
    { name: "Salmon Green Plate", tag: "Clean", kcal: 620, protein: "42g", icon: Leaf },
    { name: "Vegan Performance Pasta", tag: "Sport", kcal: 780, protein: "32g", icon: Apple },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Module Header */}
      <div className="flex flex-col md:flex-row md:items-stretch justify-between gap-8 h-48 md:h-32">
        <div className="flex flex-col justify-end">
          <h1 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-500 mb-1">Modul EAT</h1>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-2">{activePlan.title}</h2>
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5" /> {activePlan.style}</span>
            <span className="px-2 py-0.5 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-400">Aktiver Plan</span>
          </div>
        </div>
        <div className="flex-1 relative rounded-2xl overflow-hidden border border-zinc-900 group">
           <Image 
             src="/images/doku/details.jpg"
             alt="System Nutrition Context"
             fill
             className="object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700"
           />
           <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-transparent to-transparent" />
        </div>
      </div>

      {/* 2. Today's Plan */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Betriebsstoff-Zufuhr</h3>
          <span className="text-[10px] font-black uppercase text-zinc-800">Tragfähigkeit durch Nährstoffe</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activePlan.sessions.map((session, idx) => (
            <Card key={idx} className={`border-zinc-800 bg-zinc-900/20 ${session.completed ? 'opacity-50' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">{session.type} • {session.time}</span>
                  {session.completed && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                </div>
                <h4 className="font-bold text-white mb-1">{session.name}</h4>
                <p className="text-xs text-zinc-500 line-clamp-1">{session.items}</p>
                {!session.completed && (
                  <Button variant="link" className="p-0 h-auto text-yellow-500 text-[10px] font-black uppercase tracking-widest mt-4 group">
                    Details <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 3. Recipe List (PRD: Archiv / Filter) */}
      <div className="space-y-4 pt-8 border-t border-zinc-900">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Top Rezepte (MVP)</h3>
          <div className="flex gap-2 text-[10px] font-black uppercase tracking-tighter">
             <span className="px-2 py-1 bg-zinc-800 text-zinc-400 rounded cursor-pointer hover:text-white">Alle</span>
             <span className="px-2 py-1 text-zinc-600 cursor-pointer hover:text-white">Schnell</span>
             <span className="px-2 py-1 text-zinc-600 cursor-pointer hover:text-white">Sport</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topRecipes.map((recipe, idx) => (
            <Card key={idx} className="bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-600 group-hover:text-yellow-500 transition-colors">
                    <recipe.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase bg-zinc-900 px-2 py-0.5 rounded text-zinc-500">{recipe.tag}</span>
                </div>
                <h4 className="font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">{recipe.name}</h4>
                <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 15m</span>
                  <span className="flex items-center gap-1"><Flame className="w-3 h-3" /> {recipe.kcal}</span>
                  <span className="text-zinc-600">Prot: {recipe.protein}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}
