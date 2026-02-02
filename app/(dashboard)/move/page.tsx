import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, ListTodo, Sun, Moon, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MovePage() {
  const morningRoutine = [
    { time: "06:00", activity: "Aufstehen (Kein Snooze)", completed: true },
    { time: "06:05", activity: "Wasser + Salz/Limette", completed: true },
    { time: "06:15", activity: "Mobility Flow (10 Min)", completed: false },
    { time: "06:30", activity: "Deep Work Block I", completed: false },
  ];

  const eveningRoutine = [
    { time: "21:30", activity: "Digital Detox (Kein Screen)", completed: false },
    { time: "22:00", activity: "Evening Reset / Journaling", completed: false },
    { time: "22:30", activity: "Lights Out", completed: false },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Module Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-500 mb-1">Modul MOVE</h1>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-2">Struktur & Routinen</h2>
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5"><ListTodo className="w-3.5 h-3.5" /> 7 Aktive Routinen</span>
            <span className="px-2 py-0.5 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-400">System Modus: Präzision</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Morning Prime */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 flex items-center gap-2">
            <Sun className="w-4 h-4 text-yellow-500" /> Morning Prime
          </h3>
          <div className="space-y-3">
            {morningRoutine.map((item, idx) => (
              <Card key={idx} className={`bg-zinc-900/20 border-zinc-800 transition-all cursor-pointer hover:bg-zinc-900/40 ${item.completed ? 'opacity-50' : ''}`}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-zinc-500">{item.time}</span>
                    <p className={`text-sm font-bold ${item.completed ? 'text-zinc-500 line-through' : 'text-white'}`}>{item.activity}</p>
                  </div>
                  {item.completed ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Circle className="w-5 h-5 text-zinc-800" />}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Evening Reset */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 flex items-center gap-2">
            <Moon className="w-4 h-4 text-zinc-500" /> Evening Reset
          </h3>
          <div className="space-y-3">
            {eveningRoutine.map((item, idx) => (
              <Card key={idx} className="bg-zinc-900/20 border-zinc-800 transition-all cursor-pointer hover:bg-zinc-900/40">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-zinc-500">{item.time}</span>
                    <p className="text-sm font-bold text-white">{item.activity}</p>
                  </div>
                  <Circle className="w-5 h-5 text-zinc-800" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Weekly Structure View (PRD: Wochenstruktur) */}
      <div className="space-y-4 pt-8 border-t border-zinc-900">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 flex items-center gap-2">
          <Calendar className="w-4 h-4" /> Wochenstruktur
        </h3>
        <Card className="bg-zinc-900/10 border-zinc-900 divide-y divide-zinc-900">
          <div className="grid grid-cols-7 text-center p-4 border-b border-zinc-900">
             {['M', 'D', 'M', 'D', 'F', 'S', 'S'].map((day, i) => (
               <span key={i} className="text-[10px] font-black text-zinc-700">{day}</span>
             ))}
          </div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-500">Aktives Fokus-Protokoll</span>
              <span className="text-white font-bold uppercase tracking-widest text-[10px]">90/90/1 Regel</span>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-zinc-950/50 border border-zinc-900 text-zinc-400 text-xs leading-relaxed italic">
              &quot;Wer den Morgen beherrscht, beherrscht den Tag. Wer den Tag beherrscht, beherrscht das Leben.&quot;
            </div>
            <Button variant="link" className="p-0 h-auto text-yellow-500 text-[10px] font-black uppercase tracking-widest mt-6 group" asChild>
              <Link href="/move/habits">
                Habit Tracking <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
