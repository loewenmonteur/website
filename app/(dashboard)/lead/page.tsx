import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight, Video, FileText, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LeadPage() {
  const activeTopic = {
    title: "Disziplin ist Freiheit",
    speaker: "Orkun",
    duration: "4:20 Min",
    description: "Warum Struktur die Voraussetzung für wahre Freiheit im SHK-Handwerk ist.",
    quote: "Du entscheidest nicht über deine Zukunft. Du entscheidest über deine Gewohnheiten – und deine Gewohnheiten entscheiden über deine Zukunft."
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Module Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-500 mb-1">Modul LEAD</h1>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-2">Haltung & Führung</h2>
          <p className="text-xs font-mono text-zinc-500">
            Vom Sichtbaren zum Tragfähigen.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content: Video/Input */}
        <div className="lg:col-span-8 space-y-6">
          <Card className="bg-zinc-950 border-zinc-900 overflow-hidden group">
            <div className="aspect-video bg-zinc-900 flex items-center justify-center relative">
               <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
               <Button size="icon" className="h-20 w-20 rounded-full bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105 transition-all z-20">
                 <Play className="w-8 h-8 fill-current ml-1" />
               </Button>
            </div>
            <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-black uppercase bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-zinc-400 flex items-center gap-1.5">
                    <Video className="w-3 h-3" /> Systematischer Impuls
                  </span>
                  <span className="text-[10px] font-mono text-zinc-600">{activeTopic.duration}</span>
                </div>
               <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">{activeTopic.title}</h3>
               <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                 {activeTopic.description}
               </p>
               <Button className="w-full md:w-auto bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800 font-bold uppercase tracking-widest px-8">
                 Vollbild Modus
               </Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/10 border-zinc-900 border-l-4 border-l-yellow-500/50">
            <CardContent className="p-8">
               <Quote className="w-8 h-8 text-yellow-500/20 mb-4" />
                <p className="text-lg font-bold text-zinc-300 italic leading-relaxed">
                  &quot;{activeTopic.quote}&quot;
                </p>
            </CardContent>
          </Card>
        </div>

        {/* Right Rail: Library/Reflections */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Themenbibliothek</h3>
            {[
              "Eigentum & Verantwortung",
              "Systematische Ruhe",
              "Der Preis der Meisterschaft"
            ].map((topic, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-zinc-900 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all cursor-pointer group">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-zinc-700" />
                  <span className="text-xs font-bold text-zinc-500 group-hover:text-zinc-300">{topic}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-800" />
              </div>
            ))}
          </div>

          <Card className="bg-yellow-500 text-black border-none">
            <CardContent className="p-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70">Integration</h4>
              <p className="font-bold text-sm mb-4">Integriere diesen Impuls systematisch in deinen Meister-Alltag.</p>
              <Button className="w-full bg-black text-white hover:bg-zinc-900 text-[10px] font-black uppercase tracking-widest h-10 border-none">
                Bestätigen
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  );
}
