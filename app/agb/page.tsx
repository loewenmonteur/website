import Link from "next/link";
import { ArrowLeft, Gavel, ShieldCheck, Scale, Handshake, ScrollText } from "lucide-react";

export default function AGBPage() {
  const sections = [
    {
      title: "1. Geltungsbereich",
      icon: Scale,
      content: "Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die Lieferung von digitalen Inhalten und Dienstleistungen, die zwischen Orkun K. (Löwenmonteur) und Kunden abgeschlossen werden."
    },
    {
      title: "2. Vertragsschluss",
      icon: Handshake,
      content: "Die Präsentation der Leistungen auf der Webseite stellt kein rechtlich bindendes Angebot dar. Erst durch die Bestellung (Checkout via Stripe) gibt der Kunde ein verbindliches Angebot ab."
    },
    {
      title: "3. Preise & Zahlung",
      icon: ShieldCheck,
      content: "Alle Preise sind Endpreise. Die Zahlung erfolgt über die angebotenen Zahlungsmethoden von Stripe (Kreditkarte, SEPA, etc.)."
    },
    {
      title: "4. Widerrufsrecht",
      icon: Gavel,
      content: "Bei digitalen Inhalten erlischt das Widerrufsrecht vorzeitig, wenn wir mit der Vertragserfüllung begonnen haben, nachdem Sie ausdrücklich zugestimmt haben."
    }
  ];

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
             <ScrollText className="w-3 h-3 text-yellow-500" />
             <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Geschäftsbedingungen</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
            AG<br /><span className="text-zinc-800">B.</span>
          </h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
           {sections.map((section, idx) => (
             <div key={idx} className="p-10 rounded-4xl bg-zinc-900/40 border border-zinc-800/50 hover:border-yellow-500/20 transition-all group">
                <div className="flex items-start gap-6">
                   <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:text-yellow-500 transition-colors">
                      <section.icon className="w-6 h-6" />
                   </div>
                   <div className="space-y-4">
                      <h2 className="text-2xl font-black uppercase tracking-tighter text-white">{section.title}</h2>
                      <p className="text-zinc-500 leading-relaxed font-bold text-lg">{section.content}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* Detailed Info (Placeholder) */}
        <div className="space-y-8 pt-12 border-t border-zinc-900">
           <h3 className="text-sm font-black uppercase text-zinc-600 tracking-[0.3em]">Weitere Details</h3>
           <div className="prose prose-invert max-w-none text-sm text-zinc-500 space-y-6 leading-relaxed">
              <p>
                 <strong>Mängelhaftung:</strong> Es gelten die gesetzlichen Mängelhaftungsrechte.
              </p>
              <p>
                 <strong>Schlussbestimmungen:</strong> Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist, soweit gesetzlich zulässig, <span className="text-yellow-500/50 bg-yellow-500/5 px-1 rounded">[Deine Stadt]</span>.
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
