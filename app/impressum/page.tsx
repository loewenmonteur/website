import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, MapPin, Info } from "lucide-react";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-foreground flex flex-col relative overflow-hidden selection:bg-yellow-500 selection:text-black">
      {/* Background Visuals */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#1a1a1e_0%,#09090b_80%)] -z-10" />
      
      <div className="max-w-4xl mx-auto px-6 py-32 space-y-24 z-10 w-full">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">Zurück zur Base</span>
        </Link>

        {/* Header */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
             <ShieldCheck className="w-3 h-3 text-yellow-500" />
             <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Rechtliches</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
            Impres<br /><span className="text-zinc-800">sum.</span>
          </h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-zinc-900">
           <div className="space-y-12">
              <section className="space-y-4">
                 <h2 className="text-xs font-black uppercase tracking-[0.3em] text-yellow-500 flex items-center gap-2">
                    <Info className="w-3 h-3" /> Angaben gemäß § 5 TMG
                 </h2>
                 <div className="text-zinc-400 text-lg font-bold leading-relaxed">
                    Orkun K.<br />
                    Löwenmonteur Framework<br />
                    <span className="text-yellow-500/50 bg-yellow-500/5 px-2 rounded">[Straße Hausnummer]</span><br />
                    <span className="text-yellow-500/50 bg-yellow-500/5 px-2 rounded">[PLZ Ort]</span>
                 </div>
              </section>

              <section className="space-y-4">
                 <h2 className="text-xs font-black uppercase tracking-[0.3em] text-yellow-500 flex items-center gap-2">
                    <Mail className="w-3 h-3" /> Kontakt
                 </h2>
                 <div className="text-zinc-400 text-lg font-bold leading-relaxed underline decoration-zinc-800 underline-offset-8">
                    E-Mail: mail@loewentrafo.de<br />
                    Telefon: <span className="text-yellow-500/50 bg-yellow-500/5 px-2 rounded">[Deine Telefonnummer]</span>
                 </div>
              </section>
           </div>

           <div className="space-y-12">
              <section className="space-y-4">
                 <h2 className="text-xs font-black uppercase tracking-[0.3em] text-yellow-500 flex items-center gap-2">
                    <MapPin className="w-3 h-3" /> Register & Steuer
                 </h2>
                 <div className="space-y-6">
                    <div>
                       <p className="text-[10px] font-black uppercase text-zinc-600 mb-1">Berufsbezeichnung</p>
                       <p className="text-white font-bold">Installateur- und Heizungsbauermeister</p>
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase text-zinc-600 mb-1">Aufsichtsbehörde</p>
                       <p className="text-white font-bold"><span className="text-yellow-500/50 bg-yellow-500/5 px-2 rounded">Handwerkskammer [Deine Stadt]</span></p>
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase text-zinc-600 mb-1">USt-IdNr.</p>
                       <p className="text-white font-bold"><span className="text-yellow-500/50 bg-yellow-500/5 px-2 rounded">[Umsatzsteuer-Identifikationsnummer]</span></p>
                    </div>
                 </div>
              </section>
           </div>
        </div>

        {/* Disclaimer */}
        <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-900/50 space-y-6">
           <h3 className="text-sm font-black uppercase text-white tracking-widest">Haftungsausschluss</h3>
           <div className="space-y-4 text-xs text-zinc-500 leading-relaxed">
              <p>
                 Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
              <p>
                 Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>
           </div>
        </div>

        {/* Footer info */}
        <p className="text-[9px] font-mono text-zinc-800 uppercase tracking-[0.5em] pt-12">
           Löwenmonteur © 2026. Dominance in Craftsmanship.
        </p>
      </div>
    </main>
  );
}
