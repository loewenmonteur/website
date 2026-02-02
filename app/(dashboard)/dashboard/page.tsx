import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Trophy, ArrowRight, Zap, Target, Calendar } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  // Mock data for PRD compliance
  const userData = {
    day: 7,
    totalDays: 30,
    phase: "Fundament",
    streak: 12,
    rank: "Welpling",
    philosophy: "Vom Sichtbaren zum Tragfähigen."
  };

  const weekDays = [
    { label: "M", status: "done" },
    { label: "D", status: "done" },
    { label: "M", status: "done" },
    { label: "D", status: "done" },
    { label: "F", status: "done" },
    { label: "S", status: "active" },
    { label: "S", status: "pending" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Status Header (Identity Layer) */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white mb-1">
              Willkommen, Löwe
            </h1>
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider">
              Tag {userData.day} von {userData.totalDays} • Status: {userData.philosophy}
            </p>
          </div>
          <div className="flex items-center gap-4 bg-zinc-900/50 px-4 py-2 rounded-lg border border-zinc-900 border-b-yellow-500/50 relative group">
             <div className="flex items-center gap-2">
               <Zap className="w-4 h-4 text-yellow-500" /> 
               <span className="text-sm font-bold text-white">{userData.streak} Tage Substanz</span>
             </div>
             {/* Micro-Onboarding Tooltip */}
             <div className="absolute -bottom-12 right-0 w-64 p-3 bg-yellow-500 text-black text-[10px] font-black uppercase rounded shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
               Motivation ist flüchtig. Deine Streak ist der Beweis für dein System.
             </div>
          </div>
        </div>
        
        {/* Overall Progress Bar */}
        <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
          <div 
            className="h-full bg-linear-to-r from-yellow-600 to-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.3)]" 
            style={{ width: `${(userData.day / userData.totalDays) * 100}%` }} 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Focus & Weekly */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* 2. Heute-Fokus (Core Action Block) */}
          <Card className="bg-zinc-900/40 border-zinc-800 relative overflow-hidden group">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xs font-black uppercase tracking-[0.2em] text-yellow-500/80 mb-2">Heutiger Fokus</h2>
                  <h3 className="text-4xl font-black uppercase text-white tracking-tight">System Prime</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-yellow-500/20 flex items-center justify-center text-yellow-500">
                  <Target className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              <div className="space-y-4">
                {/* Max 3 points per PRD */}
                {[
                  { label: "TRAIN: Push Alpha (Körper)", completed: false, href: "/train" },
                  { label: "EAT: High Protein Focus (Fuel)", completed: true, href: "/eat" },
                  { label: "LEAD: Verantwortung (Haltung)", completed: false, href: "/lead" }
                ].map((task, idx) => (
                  <Link key={idx} href={task.href}>
                    <div className={`group/item flex items-center justify-between p-4 rounded-xl border transition-all mb-3 ${
                      task.completed 
                        ? 'bg-zinc-900/20 border-zinc-800/50 opacity-50' 
                        : 'bg-zinc-900/60 border-zinc-800 hover:border-yellow-500/30 hover:bg-zinc-900/80'
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          task.completed 
                            ? 'bg-emerald-500 border-emerald-500' 
                            : 'border-zinc-700 group-hover/item:border-yellow-500'
                        }`}>
                          {task.completed && <CheckCircle2 className="w-4 h-4 text-black" />}
                        </div>
                        <span className={`font-bold uppercase tracking-tight ${task.completed ? 'text-zinc-500 line-through' : 'text-zinc-100'}`}>
                          {task.label}
                        </span>
                      </div>
                      {!task.completed && <ArrowRight className="w-5 h-5 text-zinc-700 group-hover/item:text-yellow-500 translate-x-0 group-hover/item:translate-x-1 transition-all" />}
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 3. Wochenüberblick (Orientierung) */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Analyse KW 05
              </h3>
              <span className="text-xs font-mono text-zinc-600">85% Adhärenz</span>
            </div>
            <div className="flex justify-between items-end h-16 gap-2">
              {weekDays.map((day, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-3">
                  <div className={`w-full rounded-t-sm transition-all ${
                    day.status === 'done' ? 'h-full bg-yellow-500' : 
                    day.status === 'active' ? 'h-[40%] bg-zinc-800 animate-pulse' : 
                    'h-[10%] bg-zinc-900'
                  }`} />
                  <span className={`text-[10px] font-black ${day.status === 'active' ? 'text-yellow-500' : 'text-zinc-600'}`}>
                    {day.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Module Quick Access & Proof */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* 4. Module Quick Access */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-4">Module OS</h3>
            {[
              { name: "TRAIN", progress: "Phase 1", icon: Zap, href: "/train" },
              { name: "EAT", progress: "Fuel Plan", icon: Target, href: "/eat" },
              { name: "MOVE", progress: "90%", icon: Zap, href: "/move" },
              { name: "LEAD", progress: "1 Video", icon: Trophy, href: "/lead" },
              { name: "PROVE", progress: "Active", icon: Trophy, href: "/prove" },
            ].map((mod) => (
              <Link key={mod.name} href={mod.href}>
                <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-900 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-800 transition-all group">
                  <div className="flex items-center gap-4">
                    <mod.icon className="w-5 h-5 text-zinc-600 group-hover:text-yellow-500 transition-colors" />
                    <div>
                      <p className="font-black text-xs uppercase text-white tracking-widest">{mod.name}</p>
                      <p className="text-[10px] text-zinc-600 font-mono uppercase">{mod.progress}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-800 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>
            ))}
          </div>

          {/* 5. Proof / Commitment */}
          <Card className="bg-yellow-500 border-none text-black overflow-hidden relative">
            <Trophy className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10 rotate-12" />
            <CardContent className="p-6">
               <h3 className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70 italic">Current Challenge</h3>
               <p className="text-xl font-black uppercase tracking-tighter leading-tight mb-4 text-black/90">
                 Morning Protocol<br />7 Tage Fokus
               </p>
               <Button className="w-full bg-black text-white hover:bg-zinc-900 border-none text-xs font-black uppercase tracking-widest h-10">
                 Beweis erbringen
               </Button>
            </CardContent>
          </Card>

        </div>
      </div>

    </div>
  );
}
