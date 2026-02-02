import { PreOrderButton } from "@/components/PreOrderButton";
import { CheckCircle2, Flame, Wind, Droplets, Trophy, Brain, Zap, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden selection:bg-white selection:text-black">
      {/* Background Visuals */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_#27272a_0%,_#09090b_50%)] -z-10" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6 sm:p-12 z-10 animate-in fade-in zoom-in duration-1000">
        <div className="space-y-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">System Operational</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 via-yellow-600 to-zinc-800 uppercase leading-[0.9]">
            Löwen<br className="md:hidden" />trafo
          </h1>
          
          <p className="text-xl md:text-3xl font-light text-zinc-400 max-w-2xl mx-auto tracking-wide leading-relaxed">
            Leistung im Leben. <span className="text-white font-medium">Nicht nur im Gym.</span>
          </p>

          <div className="pt-10">
            <PreOrderButton />
          </div>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-500">Die Transformation zur Meisterschaft</h2>
          <blockquote className="text-3xl md:text-5xl font-serif italic leading-tight text-zinc-300">
            &quot;Wahre Meisterschaft beginnt im Kopf und zeigt sich in der Kraft deiner Taten. Wir sprengen Grenzen, wo andere aufgeben.&quot;
          </blockquote>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Disziplin */}
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors group">
            <Brain className="w-10 h-10 text-zinc-500 group-hover:text-white mb-6 transition-colors" />
            <h3 className="text-xl font-bold uppercase tracking-wider mb-3">Disziplin</h3>
            <p className="text-zinc-400 leading-relaxed">
              Der Bodybuilding-Mindset: Wer seinen Körper beherrscht, beherrscht sein Handwerk. Konsequenz in jeder Handlung.
            </p>
          </div>

          {/* Kraft */}
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors group">
            <Zap className="w-10 h-10 text-zinc-500 group-hover:text-white mb-6 transition-colors" />
            <h3 className="text-xl font-bold uppercase tracking-wider mb-3">Kraft</h3>
            <p className="text-zinc-400 leading-relaxed">
              Rohe Energie, kanalisiert in technische Perfektion und unaufhaltsame Qualität. Power für den Bau.
            </p>
          </div>

          {/* Führung */}
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors group">
            <Users className="w-10 h-10 text-zinc-500 group-hover:text-white mb-6 transition-colors" />
            <h3 className="text-xl font-bold uppercase tracking-wider mb-3">Führung</h3>
            <p className="text-zinc-400 leading-relaxed">
              Vom Monteur zum Leader – Orkun führt das Rudel mit eiserner Disziplin an. Lead by example.
            </p>
          </div>
        </div>
      </section>

      {/* SHK Kern */}
      <section className="py-24 px-6 border-y border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-tighter text-zinc-800">
            Der SHK Kern
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                <Droplets className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold uppercase">Sanitär</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Vom High-End Bad-Design bis zur komplexen Trinkwasser-Systemtechnik. Wir schaffen hygienische Perfektion.
              </p>
            </div>

            <div className="space-y-4">
               <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                <Flame className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold uppercase">Heizung</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Effiziente Wärmepumpen, moderne Gas-Brennwerttechnik und autarke Energiesysteme für dein Revier.
              </p>
            </div>

            <div className="space-y-4 group">
               <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 group-hover:border-yellow-500/50 transition-colors">
                <Wind className="w-6 h-6 text-zinc-400 group-hover:text-yellow-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold uppercase">Klima</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Präzise Luftführung und intelligente Klimalösungen für maximale Performance in jeder Umgebung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Guide */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Vom Welpling<br /><span className="text-zinc-600">zum Meister</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Der Mangel an Fachkräften ist kein Schicksal, sondern ein Ruf zur Führung. 
              Wir bilden nicht nur Monteure aus – wir formen die Leader von morgen.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                <span>Mindset Wechsel: Vom Monteur zum Leader</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                <span>System Prime Code: Digitale Baupläne</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                <span>Marken Dominanz: Werde zur Instanz</span>
              </li>
            </ul>
          </div>
          
          <div className="relative aspect-square md:aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 group">
             {/* Abstract Visual Placeholder */}
             <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 opacity-80" />
             <div className="absolute inset-0 flex items-center justify-center">
                <Trophy className="w-24 h-24 text-zinc-700 group-hover:text-zinc-500 transition-colors duration-500" />
             </div>
             <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">Guide Status</div>
                <div className="text-xl font-bold">Löwentransformation</div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 px-6 text-center bg-zinc-950 border-t border-zinc-900">
         <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">
           Sichere dir<br/><span className="text-zinc-600">Deine Transformation</span>
         </h2>
         <p className="text-zinc-400 max-w-md mx-auto mb-10">
           Werde Teil des Rudels. Starte deine Reise zur Meisterschaft heute.
         </p>
         <PreOrderButton className="h-20 px-12 text-xl" />
         
         <div className="mt-16 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-center items-center gap-6 text-xs text-zinc-600 font-mono tracking-widest uppercase">
            <span>Established in Master Craftsmanship</span>
            <span className="hidden md:block">•</span>
            <span>Ruhr-Gebiet</span>
         </div>
      </section>
    </main>
  );
}
