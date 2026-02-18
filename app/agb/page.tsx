import Link from "next/link";
import { ArrowLeft, ShieldCheck, Scale, Handshake, ScrollText } from "lucide-react";

export default function AGBPage() {
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
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.8] sm:leading-none">
            AGB
          </h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
           {[
            {
              title: "1. Geltungsbereich",
              icon: Scale,
              content: "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Erbringung von Coaching-Dienstleistungen und die Lieferung von digitalen Inhalten (z.B. Trainingspläne, Video-Kurse), die zwischen der FO-LM UG (haftungsbeschränkt) und dem Kunden abgeschlossen werden."
            },
            {
              title: "2. Vertragsschluss",
              icon: Handshake,
              content: "Die Darstellung der Leistungen auf der Website stellt kein rechtlich bindendes Angebot dar. Durch den Abschluss des Bezahlvorgangs über Stripe gibt der Kunde ein verbindliches Angebot ab. Der Vertrag kommt durch unsere ausdrückliche Bestätigung oder durch Bereitstellung der Leistung zustande."
            },
            {
              title: "3. Leistungen & Mitwirkung",
              icon: ShieldCheck,
              content: "Unsere Leistungen umfassen Coaching und digitale Inhalte. Der Erfolg des Coachings hängt maßgeblich von der aktiven Teilnahme und Umsetzung des Kunden ab. Eine medizinische Beratung oder Heilversprechen sind ausdrücklich nicht Gegenstand des Vertrages."
            },
            {
              title: "4. Preise & Zahlung",
              icon: ShieldCheck,
              content: "Es gelten die zum Zeitpunkt der Bestellung angegebenen Preise. Die Zahlung erfolgt über Stripe. Bei Ratenzahlungsmodellen verpflichtet sich der Kunde zur fristgerechten Deckung seines Kontos."
            },
            {
              title: "5. Nutzungsrechte",
              icon: ScrollText,
              content: "Sämtliche digitalen Inhalte sind urheberrechtlich geschützt. Der Kunde erhält ein einfaches, nicht übertragbares Recht zur persönlichen Nutzung. Eine Weitergabe an Dritte oder kommerzielle Nutzung ist untersagt."
            }
           ].map((section, idx) => (
            <div key={idx} className="p-6 sm:p-10 rounded-3xl sm:rounded-4xl bg-zinc-900/40 border border-zinc-800/50 hover:border-yellow-500/20 transition-all group">
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

        {/* Detailed Info */}
        <div className="space-y-12 pt-12 border-t border-zinc-900">
           <section className="space-y-6">
              <h3 className="text-sm font-black uppercase text-white tracking-[0.3em]">Widerrufsrecht</h3>
              <div className="prose prose-invert max-w-none text-sm text-zinc-500 space-y-4 leading-relaxed bg-zinc-900/30 p-8 rounded-3xl border border-zinc-900">
                 <p className="font-bold text-white uppercase tracking-tighter">Widerrufsbelehrung für digitale Inhalte</p>
                 <p>
                    Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
                 </p>
                 <p className="bg-yellow-500/10 text-yellow-500 p-4 rounded-xl text-xs border border-yellow-500/20">
                    <strong>Wichtiger Hinweis:</strong> Dein Widerrufsrecht erlischt bei digitalen Inhalten (z.B. Sofort-Downloads) vorzeitig, sobald wir mit der Ausführung des Vertrags begonnen haben, nachdem du ausdrücklich zugestimmt hast und bestätigt hast, dass du dein Widerrufsrecht verlierst.
                 </p>
              </div>
           </section>

           <section className="space-y-6">
              <h3 className="text-sm font-black uppercase text-white tracking-[0.3em]">Haftung & Sonstiges</h3>
              <div className="prose prose-invert max-w-none text-sm text-zinc-500 space-y-4 leading-relaxed">
                 <p>
                    <strong>Haftung:</strong> Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Für leichte Fahrlässigkeit haften wir nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht).
                 </p>
                 <p>
                    <strong>Anwendbares Recht:</strong> Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist Duisburg.
                 </p>
              </div>
           </section>
        </div>

        {/* Footer info */}
        <p className="text-[9px] font-mono text-zinc-800 uppercase tracking-[0.5em] pt-12 pb-24 sm:pb-12">
           LÖWENTRAFO © 2026. Dominance in Craftsmanship.
        </p>
      </div>
    </main>
  );
}
