import Link from "next/link";
import { ArrowLeft, Lock, ShieldCheck, Database, FileText, Globe } from "lucide-react";

export default function DatenschutzPage() {
  const sections = [
    {
      title: "1. Datenschutz auf einen Blick",
      icon: Lock,
      content: "Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung."
    },
    {
      title: "2. Datenerfassung auf unserer Webseite",
      icon: Database,
      content: "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder bei der Registrierung (Name, E-Mail)."
    },
    {
      title: "3. Stripe Zahlungsabwicklung",
      icon: ShieldCheck,
      content: "Wir nutzen Stripe zur Abwicklung von Zahlungen. Dabei werden Zahlungsdaten an Stripe übermittelt. Stripe ist DSGVO-konform und nutzt modernste Verschlüsselungstechnologien."
    },
    {
      title: "4. Cookies & Analyse",
      icon: Globe,
      content: "Unsere Webseite verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen."
    }
  ];

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
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
            Daten<br /><span className="text-zinc-800">schutz.</span>
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
                 <strong>Verantwortliche Stelle:</strong> Orkun K., [Straße], [Ort]. Bei Fragen rufen Sie uns an oder schreiben Sie eine E-Mail an mail@loewentrafo.de.
              </p>
              <p>
                 <strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung:</strong> Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
              <p>
                 <strong>Beschwerderecht bei der zuständigen Aufsichtsbehörde:</strong> Im Falle von datenschutzrechtlichen Verstößen steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
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
