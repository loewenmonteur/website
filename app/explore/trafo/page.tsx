import { PreOrderButton } from "@/components/PreOrderButton";
import { Zap, Brain, Activity, ArrowRight, CheckCircle2, Quote, LayoutDashboard, Rocket } from "lucide-react";
import Link from "next/link";

export default function TrafoExplorePage() {
  const synergySteps = [
    { title: "Physisches Fundament", icon: Activity, desc: "Ohne einen starken Körper gibt es keinen starken Geist. TRAIN & EAT bilden die Basis." },
    { title: "Operative Struktur", icon: LayoutDashboard, desc: "MOVE schafft die Routinen, die deinen Tag vom Chaos befreien." },
    { title: "Mentale Meisterschaft", icon: Brain, desc: "LEAD & PROVE transformieren deine Haltung und lassen dich als Leader wachsen." },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-foreground flex flex-col relative overflow-hidden selection:bg-yellow-500 selection:text-black">
      {/* Background Visuals */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#18181b_0%,#09090b_60%)] -z-10" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Pillar III: Die Trafo</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white">
            Die<br /><span className="text-zinc-700">Synergie</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-zinc-400 max-w-2xl mx-auto tracking-tight">
            Wir verbinden Sport, Arbeit und Leben zu einem einzigen, hocheffizienten System. Das ist die wahre Transformation.
          </p>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Das Blueprint</h2>
              <p className="text-zinc-500 leading-relaxed text-lg">
                Die meisten Menschen versuchen, ihre Lebensbereiche zu trennen. Wir tun das Gegenteil: Wir integrieren sie. Dein Training befähigt deine Arbeit. Deine Arbeit finanziert deine Leidenschaft. Deine Haltung bestimmt alles.
              </p>
            </div>
            
            <div className="space-y-8">
              {synergySteps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-yellow-500/50 transition-colors duration-500">
                    <step.icon className="w-5 h-5 text-zinc-600 group-hover:text-yellow-500" />
                  </div>
                  <div className="space-y-1 pt-2">
                    <h3 className="text-sm font-black uppercase text-white tracking-widest">{step.title}</h3>
                    <p className="text-xs text-zinc-600 leading-relaxed uppercase tracking-tighter font-bold">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="w-full aspect-square bg-[radial-gradient(circle_at_50%_50%,#27272a_0%,#09090b_70%)] rounded-full border border-zinc-900 flex items-center justify-center relative group">
                <Zap className="w-32 h-32 text-yellow-500/10 group-hover:text-yellow-500/20 transition-all duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-[80%] h-[80%] rounded-full border border-dashed border-zinc-800 animate-[spin_20s_linear_infinite] opacity-50" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-[60%] h-[60%] rounded-full border border-dashed border-zinc-700 animate-[spin_15s_linear_infinite_reverse] opacity-30" />
                </div>
             </div>
             <div className="absolute -top-4 -left-4 p-6 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl animate-bounce">
                <Rocket className="w-6 h-6 text-yellow-500" />
             </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 bg-zinc-900/5 text-center">
         <div className="max-w-3xl mx-auto space-y-8">
            <Quote className="w-16 h-16 text-zinc-900 mx-auto" />
            <p className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white italic leading-tight">
              &quot;Du bist kein Handwerker, kein Sportler, kein Vater. Du bist EINE Person. Hör auf, dein Leben zu stückeln. Werde ganzheitlich stark.&quot;
            </p>
            <p className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">— Orkun (Der Löwenmonteur)</p>
         </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 px-6 text-center border-t border-zinc-900 bg-linear-to-b from-zinc-950 to-zinc-900">
         <h2 className="text-4xl md:text-7xl font-black uppercase mb-4 tracking-tighter text-white">
           Starte deine<br/><span className="text-zinc-700">Ganzwerdung</span>
         </h2>
         <p className="text-zinc-400 max-w-sm mx-auto mb-10 text-sm">
           Sichere dir deinen Platz in der ersten Alpha-Runde und erlebe das volle System.
         </p>
         <div className="flex flex-col items-center gap-6">
            <PreOrderButton className="h-20 px-16 text-xl shadow-[0_0_30px_rgba(250,204,21,0.15)]" />
            <Link href="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors">Zurück zur Startseite</Link>
         </div>
      </section>

      {/* Small Footer */}
      <footer className="py-10 px-6 text-center border-t border-zinc-900/10 text-[9px] font-mono text-zinc-800 uppercase tracking-widest">
         Alpha Phase. Synergy first. © 2026 Löwentrafo
      </footer>
    </main>
  );
}
