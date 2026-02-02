import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Play, CheckCircle2, Info, ChevronRight, Clock, Flame, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrainPage() {
  // Mock Active Plan Data according to PRD (Active Plan Only)
  const activePlan = {
    title: "Lion Strength Phase I",
    session: "Push Alpha",
    exercises: [
      { name: "Bankdrücken (Langhantel)", sets: "3 x 10", weight: "85kg", tempo: "3-0-1-0", status: "completed" },
      { name: "Schulterdrücken (KH)", sets: "3 x 12", weight: "24kg", tempo: "2-1-1-0", status: "current" },
      { name: "Dips", sets: "3 x RPE 9", weight: "Bodyweight", tempo: "3-1-1-1", status: "pending" },
    ],
    stats: {
      duration: "55m",
      intensity: "High"
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Module Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-500 mb-1">Modul TRAIN</h1>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-2">{activePlan.session}</h2>
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {activePlan.stats.duration}</span>
            <span className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5" /> {activePlan.stats.intensity}</span>
            <span className="px-2 py-0.5 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-400">{activePlan.title}</span>
          </div>
        </div>
        <Button className="bg-yellow-500 text-black hover:bg-yellow-400 font-black uppercase tracking-widest px-8">
          Session starten <Play className="ml-2 w-4 h-4 fill-current" />
        </Button>
      </div>

      {/* 2. Active Session Card (Exercise Execution) */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Übungsliste</h3>
        
        {activePlan.exercises.map((ex, idx) => (
          <Card key={idx} className={`border-zinc-800 bg-zinc-900/20 transition-all ${
            ex.status === 'current' ? 'ring-1 ring-yellow-500/50 bg-zinc-900/40 border-yellow-500/20' : 
            ex.status === 'completed' ? 'opacity-50 grayscale select-none' : ''
          }`}>
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-zinc-800/50">
                {/* Visual Block (Video/Image Placeholder) */}
                <div className="w-full md:w-32 aspect-video md:aspect-square bg-zinc-800/50 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                   <Dumbbell className="w-6 h-6 text-zinc-700" />
                </div>

                {/* Details Block */}
                <div className="flex-1 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{ex.name}</h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono">
                      <span className="text-yellow-500 font-bold">{ex.sets}</span>
                      <span className="text-zinc-500">Last: {ex.weight}</span>
                      <span className="text-zinc-500 flex items-center gap-1">Focus: {ex.tempo} <Info className="w-3 h-3" /></span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {ex.status === 'completed' ? (
                      <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase tracking-widest">
                        <CheckCircle2 className="w-5 h-5" /> Erledigt
                      </div>
                    ) : ex.status === 'current' ? (
                      <Button size="sm" className="bg-white text-black hover:bg-zinc-200 font-bold px-4 h-9">
                        Track Set <ChevronRight className="ml-1 w-4 h-4" />
                      </Button>
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-800">Locked</span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 3. Secondary info (PRD: Archiv / Plans) */}
      <div className="pt-8 border-t border-zinc-900">
         <Link href="/train/archive" className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
            Vergangene Einheiten <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
         </Link>
      </div>

    </div>
  );
}
