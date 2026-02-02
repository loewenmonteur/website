import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Trophy, ArrowRight, Zap, Target } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Header & Status */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">
            Cockpit
          </h1>
          <p className="text-zinc-500">System Status: <span className="text-emerald-500 font-mono text-sm uppercase">Active • Phase 1</span></p>
        </div>
        <div className="flex items-center gap-6 text-sm font-mono text-zinc-500 bg-zinc-900/50 p-3 rounded-lg border border-zinc-900">
           <div className="flex items-center gap-2">
             <Zap className="w-4 h-4 text-yellow-500" /> 
             <span>Streak: 12</span>
           </div>
           <div className="w-px h-4 bg-zinc-800" />
           <div className="flex items-center gap-2">
             <Trophy className="w-4 h-4 text-zinc-400" /> 
             <span>Rank: Welpling</span>
           </div>
        </div>
      </div>

      {/* 2. The ONE Thing (Daily Focus) */}
      <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-yellow-500/20 shadow-[0_0_30px_rgba(250,204,21,0.05)] relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-yellow-500/20 transition-all duration-1000" />
         
         <CardContent className="p-8 relative">
           <div className="flex items-start justify-between mb-8">
             <div>
               <h2 className="text-sm font-mono uppercase tracking-widest text-yellow-500 mb-2">Daily Prime Focus</h2>
               <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
                 TRAIN: Push Alpha
               </h3>
             </div>
             <Button size="icon" className="h-12 w-12 rounded-full bg-yellow-500 text-black hover:bg-yellow-400">
               <ArrowRight className="w-6 h-6" />
             </Button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-400 border-t border-zinc-800/50 pt-6">
             <div className="flex items-center gap-3">
               <CheckCircle2 className="w-5 h-5 text-emerald-500" />
               <span>Morning Routine: Done</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-5 h-5 rounded-full border-2 border-zinc-700 flex items-center justify-center" />
               <span className="text-white">Workout: Open (45min)</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-5 h-5 rounded-full border-2 border-zinc-700 flex items-center justify-center" />
               <span className="text-zinc-500">Evening Reset: Pending</span>
             </div>
           </div>
         </CardContent>
      </Card>

      {/* 3. Quick Access / Radar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Next Meal */}
        <Link href="/eat" className="block group">
          <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all h-full">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4 text-zinc-400 group-hover:text-yellow-500 transition-colors">
                <Target className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider">Next Fuel</span>
              </div>
              <p className="text-xl font-bold text-white mb-1">Post-Workout Shake</p>
              <p className="text-zinc-500 text-sm">Whey + Banane • 16:00 Uhr</p>
            </CardContent>
          </Card>
        </Link>

        {/* Challenge Status */}
        <Link href="/prove" className="block group">
           <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all h-full">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4 text-zinc-400 group-hover:text-yellow-500 transition-colors">
                <Trophy className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider">Active Challenge</span>
              </div>
              <p className="text-xl font-bold text-white mb-1">Morning Protocol</p>
              <div className="w-full bg-zinc-800 h-1.5 mt-3 rounded-full overflow-hidden">
                <div className="bg-yellow-500 h-full w-[85%]" />
              </div>
              <p className="text-right text-xs text-yellow-500 mt-1 font-mono">Day 6/7</p>
            </CardContent>
          </Card>
        </Link>
        
        {/* Leadership Content */}
        <Link href="/lead" className="block group md:col-span-2 lg:col-span-1">
           <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            
            {/* Placeholder for Video Thumbnail */}
            <div className="absolute inset-0 bg-zinc-800/50 z-0" />

            <CardContent className="p-6 relative z-20 flex flex-col justify-end h-full min-h-[160px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">New</span>
                <span className="text-zinc-300 text-xs font-mono uppercase">Leadership</span>
              </div>
              <p className="text-lg font-bold text-white leading-tight">
                "Disziplin ist Freiheit"
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

    </div>
  );
}
