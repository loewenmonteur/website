import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, ShieldAlert } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-foreground flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
       {/* Background Visuals */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#18181b_0%,#09090b_80%)] -z-10" />

      <div className="space-y-12 max-w-2xl relative z-10">
        <div className="relative inline-block">
          <AlertCircle className="w-32 h-32 text-zinc-700 mb-6" />
          <ShieldAlert className="absolute -top-4 -right-4 w-12 h-12 text-zinc-800 rotate-12" />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
            Abge<br /><span className="text-zinc-800">brochen.</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-zinc-400 tracking-tight leading-tight">
            Keine Sorge. Das Eisen läuft nicht weg.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
           <Button asChild className="h-20 px-12 text-lg rounded-2xl bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 transition-all">
              <Link href="/">Es war ein Fehler - Zurück</Link>
           </Button>
           <p className="text-[10px] font-mono text-zinc-900 uppercase tracking-widest">
             Löwenmonteur © 2026. Dominance in Craftsmanship.
           </p>
        </div>
      </div>
    </div>
  );
}
