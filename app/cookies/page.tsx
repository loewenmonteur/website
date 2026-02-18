import Link from "next/link";
import { ArrowLeft, Cookie, ShieldCheck, Info, Lock } from "lucide-react";

export default function CookiePolicyPage() {
  const sections = [
    {
      title: "1. Einführung",
      icon: Info,
      content: "Unsere Website, https://www.loewentrafo.de (im Folgenden: 'Die Website') verwendet Cookies und ähnliche Technologien. In diesem Dokument informieren wir dich über die Verwendung von Cookies auf unserer Website."
    },
    {
      title: "2. Was sind Cookies?",
      icon: Cookie,
      content: "Ein Cookie ist eine einfache kleine Datei, die gemeinsam mit den Seiten einer Internetadresse versendet und vom Webbrowser auf dem PC oder einem anderen Gerät gespeichert werden kann."
    },
    {
      title: "3. Technische Cookies",
      icon: Lock,
      content: "Einige Cookies stellen sicher, dass bestimmte Teile der Website ordnungsgemäß funktionieren und deine Benutzereinstellungen erhalten bleiben (z.B. Warenkorb). Diese können wir ohne Einwilligung platzieren."
    },
    {
      title: "4. Marketing & Tracking",
      icon: ShieldCheck,
      content: "Marketing- / Tracking-Cookies werden zur Erstellung von Benutzerprofilen verwendet, um Werbung anzuzeigen oder den Benutzer über mehrere Websites hinweg zu verfolgen."
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-foreground flex flex-col relative overflow-hidden selection:bg-yellow-500 selection:text-black">
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#18181b_0%,#09090b_80%)] -z-10" />
      
      <div className="max-w-4xl mx-auto px-6 py-32 space-y-24 z-10 w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">Zurück zur Base</span>
        </Link>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
             <Cookie className="w-3 h-3 text-yellow-500" />
             <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Compliance</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.8] sm:leading-none">
            Cookie Policy
          </h1>
        </div>

        <div className="space-y-12">
           {sections.map((section, idx) => (
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

        <div className="space-y-8 pt-12 border-t border-zinc-900">
           <h3 className="text-sm font-black uppercase text-zinc-600 tracking-[0.3em]">Weitere Details</h3>
           <div className="prose prose-invert max-w-none text-sm text-zinc-500 space-y-6 leading-relaxed">
              <p>
                 <strong>Einwilligung:</strong> Wenn du unsere Website das erste Mal besuchst, zeigen wir dir ein Pop-Up mit einer Erklärung über Cookies. Mit der Nutzung stimmst du den notwendigen Cookies zu.
              </p>
              <p>
                 <strong>Deine Rechte:</strong> Du hast das Recht auf Auskunft, Berichtigung und Löschung deiner Daten. Kontaktiere uns dazu bitte per E-Mail.
              </p>
              <p>
                 <strong>Kontakt:</strong> FO-LM UG (haftungsbeschränkt), Bianca Arslanmekik, Jägerstr. 47, 47166 Duisburg. E-Mail: management@loewenmonteur.de.
              </p>
           </div>
        </div>

        <p className="text-[9px] font-mono text-zinc-800 uppercase tracking-[0.5em] pt-12 pb-24 sm:pb-12">
           LÖWENTRAFO © 2026. Dominance in Craftsmanship.
        </p>
      </div>
    </main>
  );
}
