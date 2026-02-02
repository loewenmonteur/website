import { PreOrderButton } from "@/components/PreOrderButton";
import { CheckCircle2, Play, Trophy, Users, Star, Quote, ArrowRight, Dumbbell, Utensils, ListTodo, GraduationCap, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const modules = [
    { name: "TRAIN", icon: Dumbbell, desc: "Kraft & Leistungsfähigkeit für den Alltag eines Meisters." },
    { name: "EAT", icon: Utensils, desc: "Fuel-Strategien, die im vollen Terminkalender funktionieren." },
    { name: "MOVE", icon: ListTodo, desc: "Routinen, die Struktur und mentale Klarheit schaffen." },
    { name: "LEAD", icon: GraduationCap, desc: "Haltung und Führung als Fundament deines Betriebs." },
    { name: "PROVE", icon: ShieldCheck, desc: "Beweise durch Taten – Challenges für echte Resultate." },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-foreground flex flex-col relative overflow-hidden selection:bg-yellow-500 selection:text-black">
      {/* Background Visuals */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#27272a_0%,#09090b_50%)] -z-10" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none -z-10" />

      {/* 1. Impact Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 sm:p-12 z-10 animate-in fade-in zoom-in duration-1000 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?q=80&w=2532&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale mix-blend-luminosity" />
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950/0 via-zinc-950/80 to-zinc-950" />
        
        <div className="space-y-8 max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-xl mb-6 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Pre-Order Phase Aktiv</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
            Löwen<br />trafo
          </h1>
          
          <p className="text-xl md:text-3xl font-bold text-zinc-400 max-w-3xl mx-auto tracking-tight leading-tight">
            Vom Handwerker zum modernen <span className="text-white">High-Performer.</span><br />
            Die Transformation beginnt jetzt.
          </p>

          <div className="pt-12 flex flex-col items-center gap-6">
            <PreOrderButton className="h-20 px-16 text-xl shadow-[0_0_30px_rgba(250,204,21,0.2)]" />
            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Inklusive Zugang zur Alpha-Phase</p>
          </div>
        </div>
      </section>

      {/* 2. Wer ist der Löwenmonteur? */}
      <section className="py-32 px-6 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-yellow-500">Die Story</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
              Wer ist der<br /><span className="text-zinc-700">Löwenmonteur?</span>
            </h3>
            <p className="text-zinc-400 leading-relaxed text-lg italic border-l-2 border-zinc-800 pl-6">
              &quot;Ich war jahrelang nur im Betrieb. 12 Stunden Schuften, wenig Energie, keine Struktur. Ich habe den Preis gezahlt, bis ich verstanden habe: Transformation ist kein Zufall, sondern ein System.&quot;
            </p>
            <div className="space-y-4 pt-4">
               <p className="text-zinc-500 text-sm">
                 Orkun (Der Löwenmonteur) hat das System aus der Praxis für die Praxis entwickelt. Keine abgehobenen Fitness-Apps, sondern ein Framework für Männer, die im wahren Leben stehen.
               </p>
            </div>
          </div>
          <div className="relative group">
             <div className="aspect-square bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-linear-to-tr from-black via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Users className="w-32 h-32 text-zinc-950 opacity-10" />
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-[10px] font-black uppercase tracking-widest text-yellow-500 mb-2">CEO & Founder</p>
                  <p className="text-3xl font-black uppercase text-white tracking-tighter">Orkun K.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Doku Teaser: Einblicke ins wahre Leben */}
      <section className="py-32 px-6 border-y border-zinc-900 bg-[radial-gradient(circle_at_50%_0%,#18181b_0%,#09090b_100%)]">
        <div className="max-w-4xl mx-auto text-center space-y-12">
           <div className="space-y-4">
             <h2 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">Dokumentation</h2>
             <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">Einblicke ins <span className="text-zinc-700">wahre Leben</span></h3>
           </div>
           
           <div className="aspect-video bg-zinc-900 rounded-2xl border-4 border-zinc-800 shadow-2xl relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                 <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-all duration-500">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                 </div>
                 <p className="text-xs font-black uppercase tracking-widest text-white/50">Teaser ansehen</p>
              </div>
              <div className="absolute top-6 left-6 px-3 py-1 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-widest rounded-sm">
                Coming Soon
              </div>
           </div>
           
           <p className="text-zinc-500 text-sm max-w-2xl mx-auto">
             Die Dokumentation begleitet die ersten Löwen auf ihrem Weg. Kein Glanz, kein Filter – nur die harte Realität der Transformation im SHK-Handwerk.
           </p>
        </div>
      </section>

      {/* 4. Das System Explorer */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-yellow-500">Das System</h2>
            <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">Die 5 Säulen der <span className="text-zinc-700">Macht</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <Card key={i} className="bg-zinc-900/20 border-zinc-900 p-8 hover:border-yellow-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 text-zinc-600 group-hover:text-yellow-400 transition-colors">
                  <m.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black uppercase text-white mb-3 tracking-tighter">{m.name}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{m.desc}</p>
              </Card>
            ))}
            
            <div className="lg:col-span-1 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-8 flex flex-col justify-between group cursor-pointer overflow-hidden relative shadow-2xl">
               <Zap className="absolute -bottom-4 -right-4 w-32 h-32 text-black/10 -rotate-12" />
               <div className="relative z-10">
                 <h4 className="text-3xl font-black uppercase text-black tracking-tighter leading-none mb-4">Werde Teil der Alpha</h4>
                 <p className="text-black/70 text-sm font-bold">Die Plätze für die erste Runde sind limitiert.</p>
               </div>
               <div className="relative z-10 pt-8">
                 <PreOrderButton className="w-full bg-black text-white border-none hover:bg-zinc-900 h-14" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-zinc-950 border-t border-zinc-900 text-center">
         <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-zinc-400">
              Löwenmonteur <span className="text-zinc-800">Transformations</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-600">
               <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
               <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
               <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
            </div>
            
            <p className="text-[9px] font-mono text-zinc-800 uppercase tracking-widest">
              Built for Lions. Crafted in Master Craftsmanship. © 2026
            </p>
         </div>
      </footer>
    </main>
  );
}

// Simple Shadow Card Component internal to page for speed/cleanliness
function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`rounded-2xl shadow-2-xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  )
}
