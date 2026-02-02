import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ShieldCheck, ArrowRight, Star, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProvePage() {
  const activeChallenge = {
    title: "Morning Protocol",
    duration: "7 Tage",
    description: "Null Snooze. Wasser + Salz. 10 Min Mobility. 7 Tage in Folge konsequent sein.",
    progress: 85,
    days: "6 von 7"
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Module Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-500 mb-1">Modul PROVE</h1>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-2">Beweis & Challenge</h2>
          <p className="text-xs font-mono text-zinc-500">
            Tragfähigkeit entsteht durch Beweise – nicht durch Worte.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Challenge Block */}
        <div className="lg:col-span-8 space-y-6">
          <Card className="bg-linear-to-br from-zinc-900 to-zinc-950 border-yellow-500/20 p-8 relative overflow-hidden">
            <Trophy className="absolute -bottom-6 -right-6 w-48 h-48 opacity-5 -rotate-12" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="space-y-6 flex-1">
                <div>
                  <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-yellow-500 mb-4 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
                    <Star className="w-3 h-3 fill-current" /> Aktive Challenge
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter leading-none mb-4">
                    {activeChallenge.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
                    {activeChallenge.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-500 uppercase tracking-widest">Fortschritt</span>
                    <span className="text-yellow-500 font-bold">{activeChallenge.days} Erledigt</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-500 shadow-[0_0_15px_rgba(250,204,21,0.4)]" 
                      style={{ width: `${activeChallenge.progress}%` }} 
                    />
                  </div>
                </div>

                <Button className="w-full md:w-auto bg-yellow-500 text-black hover:bg-yellow-400 font-black uppercase tracking-widest px-12 h-14">
                  Beweis erbringen <ShieldCheck className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="w-full md:w-48 aspect-square rounded-2xl bg-zinc-950 border border-zinc-900 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group/reward">
                 <Image 
                   src="/images/championships/orkun_champion_medal.png"
                   alt="Mastery Goal"
                   fill
                   className="object-cover opacity-20 group-hover/reward:opacity-50 transition-opacity duration-700"
                 />
                 <div className="relative z-10">
                   <p className="text-xs font-mono text-zinc-600 uppercase mb-2">Preispool</p>
                   <Award className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                   <p className="text-sm font-black text-white uppercase leading-tight">Master Coaching Session</p>
                 </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-zinc-900/20 border-zinc-950 p-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-2">Teilnahmebedingungen</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Jeden Tag im Dashboard bestätigen. Bei einem Aussetzer wird der Streak zurückgesetzt.
              </p>
            </Card>
            <Card className="bg-zinc-900/20 border-zinc-950 p-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-2">Nächste Challenge</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                &quot;Digital Detox 2.0&quot; startet am 15.02.
              </p>
            </Card>
          </div>
        </div>

        {/* Right Rail: History */}
        <div className="lg:col-span-4 space-y-8">
           <div className="space-y-4">
             <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Vergangene Beweise</h3>
             {[
               "Pionier-Fundament Routine",
               "30 Tage No-Bread",
               "Handwerk Mastery Intro"
             ].map((proof, i) => (
               <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-900/20 group cursor-default">
                 <div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center">
                   <ShieldCheck className="w-5 h-5 text-zinc-800 group-hover:text-emerald-500/50 transition-colors" />
                 </div>
                 <div>
                   <p className="text-xs font-bold text-zinc-500">{proof}</p>
                   <p className="text-[10px] font-mono text-zinc-700 uppercase">Erfolgreich</p>
                 </div>
               </div>
             ))}
           </div>

           <Link href="/prove/rules" className="group flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all">
             <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Ehrenkodex lesen</span>
             <ArrowRight className="w-4 h-4 text-zinc-800 group-hover:text-white transition-colors" />
           </Link>
        </div>
      </div>

    </div>
  );
}
