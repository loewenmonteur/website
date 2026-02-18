import Link from "next/link";
import { ArrowLeft, Lock, ShieldCheck, Database, FileText, Globe } from "lucide-react";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-foreground flex flex-col relative overflow-hidden selection:bg-yellow-500 selection:text-black">
      {/* Background Visuals */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#18181b_0%,#09090b_80%)] -z-10" />
      
      <div className="max-w-4xl mx-auto px-6 py-32 space-y-24 z-10 w-full">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">Zurück zur Base</span>
        </Link>

        {/* Header */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
             <FileText className="w-3 h-3 text-yellow-500" />
             <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">DSGVO Konformität</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.8] sm:leading-none">
            Datenschutz
          </h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
           {[
            {
              title: "1. Datenschutz auf einen Blick",
              icon: Lock,
              content: "Wir behandeln deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung. Wenn du diese Website benutzt, werden verschiedene personenbezogene Daten erhoben."
            },
            {
              title: "2. Datenerfassung & Hosting",
              icon: Database,
              content: "Unsere Website wird bei Vercel gehostet. Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit Vercel geschlossen."
            },
            {
              title: "3. Stripe Zahlungsdienst",
              icon: ShieldCheck,
              content: "Für Zahlungen nutzen wir Stripe. Stripe verarbeitet Daten wie Name, Adresse und Bankverbindung zur Abwicklung der Transaktion. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)."
            },
            {
              title: "4. Deine Rechte",
              icon: Globe,
              content: "Du hast jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck deiner gespeicherten Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten."
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
              <h3 className="text-sm font-black uppercase text-zinc-600 tracking-[0.3em]">Allgemeine Hinweise</h3>
              <div className="prose prose-invert max-w-none text-sm text-zinc-500 space-y-6 leading-relaxed">
                 <p>
                    <strong>Verantwortliche Stelle:</strong> FO-LM UG (haftungsbeschränkt), B. Arslanmekik, Jägerstr. 47, 47166 Duisburg. E-Mail: management@loewenmonteur.de.
                 </p>
                 <p>
                    <strong>SSL- bzw. TLS-Verschlüsselung:</strong> Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du an der Adresszeile des Browsers (https://).
                 </p>
                 <p>
                    <strong>Cookies:</strong> Wir verwenden überwiegend technisch notwendige Cookies zur Funktionsfähigkeit der Website. Soweit Tracking-Cookies eingesetzt werden, erfolgt dies nur nach deiner ausdrücklichen Einwilligung via Consent-Banner.
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
