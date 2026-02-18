"use client";

import { PreOrderButton } from "@/components/PreOrderButton";
import TrafoSection from "@/components/trafo/TrafoSection";
import TrafoGallery from "@/components/trafo/TrafoGallery";

import FAQSection from "@/components/sections/FAQSection";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { gsap } from "gsap";

export default function TrafoExplorePage() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-zinc-950 text-foreground flex flex-col relative overflow-hidden selection:bg-yellow-500 selection:text-black">
      {/* Background Visuals - YouTube Archive Loop */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-black/80 z-10" /> {/* Heavy overlay for readability */}
        <iframe 
          className="w-full h-full object-cover scale-[1.35] opacity-60 grayscale brightness-75"
          src="https://www.youtube.com/embed/s-Amde2FQKw?autoplay=1&mute=1&loop=1&playlist=s-Amde2FQKw&controls=0&showinfo=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3" 
          allow="autoplay; encrypted-media"
          title="Löwentrafo Doku Archive"
        />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 text-center z-10 relative">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6 shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">TRANSFORMATION STARTEN</span>
          </div>
          <h1 className="fade-up text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white drop-shadow-2xl">
            LÖWEN<span className="text-zinc-500">TRAFO</span>
          </h1>
          <p className="fade-up text-xl md:text-2xl font-bold text-zinc-400 max-w-2xl mx-auto tracking-tight">
            Der Zugang für Menschen, die Verantwortung tragen.
          </p>

          <p className="fade-up text-sm md:text-base text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Egal ob als Single, in einer Partnerschaft oder als alleinerziehender Elternteil – das Löwentrafo System ist universell adaptierbar. Es bietet die Struktur, die jeder Mensch benötigt, um sein volles Potenzial zu entfalten, unabhängig von der aktuellen Lebenssituation.
          </p>
          
          {/* Watch Doku Trigger */}
          <div className="fade-up pt-8 flex justify-center">
            <a 
              href="https://youtu.be/s-Amde2FQKw?si=s15raUErJJYM15tA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-yellow-500/50 transition-all backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-8 border-l-black border-b-[5px] border-b-transparent ml-1" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Dokumentation</p>
                <p className="text-xs text-white uppercase font-black tracking-wider group-hover:text-yellow-500 transition-colors">Das Manifest ansehen</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Trafo System Sections — Scroll Reveal */}
      <section className="z-10 relative">
        <div className="fade-up w-full max-w-5xl mx-auto">
           <TrafoSection />
        </div>
      </section>

      {/* Gallery Loop */}
      <TrafoGallery />




      {/* Quote Section */}


      {/* What's Included Section */}
      <section className="py-24 px-6 bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center space-y-4">
             <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">System-Inhalt</h2>
             <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter">Was du bekommst</h3>
          </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 {
                   title: "Individuelle Transformation",
                   desc: "1 Mensch = 1 Zugang. Die Löwen-Trafo ist kein Massenprodukt. Alle Pläne werden individuell abgestimmt.",
                   features: ["Maßgeschneiderte Pläne", "Persönliches Setup", "1:1 Struktur"]
                 },
                 {
                   title: "Trainingspläne",
                   desc: "Kompromisslose Übungsvideos. Ein System, das Ergebnisse liefert, ohne Ausreden.",
                   features: ["Strukturierte Abläufe", "Video-Bibliothek", "Maximaler Fortschritt"]
                 },
                 {
                   title: "Ernährungspläne",
                   desc: "Inklusive Kochbuch – kein Rätselraten mehr. Energie für den Job und das Gym.",
                   features: ["Individuelle Guides", "Einfache Rezepte", "Effizientes Meal Prep"]
                 },
                 {
                   title: "Mentoring",
                   desc: "Werde zum Löwen. Die Mentalität für Sport, Arbeit und dein ganzes Leben.",
                   features: ["Mindset-Strategien", "Community-Support", "Direktes Feedback"]
                 }
               ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-yellow-500/30 transition-all group">
                     <h4 className="text-2xl font-black uppercase text-white mb-4 tracking-tighter">{item.title}</h4>
                     <p className="text-zinc-500 mb-8 h-20">{item.desc}</p>
                     <ul className="space-y-3">
                        {item.features.map((feat, j) => (
                          <li key={j} className="flex items-center gap-3 text-sm text-zinc-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                            {feat}
                          </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
            
            <div className="mt-16 text-center space-y-2 py-8 border-t border-zinc-900/50">
               <p className="text-xl md:text-2xl font-black uppercase tracking-widest text-white">Keine Ausreden. Keine halben Sachen.</p>
               <p className="text-zinc-500 font-bold uppercase tracking-widest">Du kommst nicht zum Spielen. Du kommst, um stärker zu werden.</p>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Antworten auf deine Fragen"
        items={[
          {
            question: "Ist das Programm für Anfänger geeignet?",
            answer: "Absolut. Das LöwenTrafo System holt dich da ab, wo du stehst. Egal ob du noch nie trainiert hast oder schon fortgeschritten bist – die Pläne sind skalierbar."
          },
          {
            question: "Brauche ich ein Fitnessstudio?",
            answer: "Für optimale Ergebnisse empfehlen wir ein Gym. Es gibt jedoch auch Home-Workout Varianten im System, falls du es zeitlich mal nicht schaffst."
          },
          {
            question: "Wie viel Zeit muss ich investieren?",
            answer: "Das System ist für arbeitende Menschen konzipiert. Rechne mit ca. 45-60 Minuten Training, 4-mal pro Woche. Meal Prep und Mindset-Routinen lassen sich in den Alltag integrieren."
          },
          {
            question: "Was kostet die Mitgliedschaft?",
            answer: "Aktuell befinden wir uns in der Pre-Launch Phase. Die genauen Preise werden zum Start im Mai 2026 bekanntgegeben. Wer sich jetzt auf die Liste setzt, erhält Early-Bird Konditionen."
          },
          {
            question: "Kann ich das neben der Arbeit und Familie machen?",
            answer: "Ja. Das ist der Kern des Systems. Wir bringen Struktur in dein Chaos, damit du MEHR Energie für Familie und Arbeit hast, nicht weniger."
          }
        ]}
      />

      {/* CTA Footer */}
      <section className="py-32 px-6 text-center border-t border-zinc-900 bg-linear-to-b from-zinc-950 to-zinc-900">
         <h2 className="text-4xl md:text-7xl font-black uppercase mb-4 tracking-tighter text-white">
           Starte deine<br/><span className="text-zinc-700">Ganzwerdung</span>
         </h2>
         <p className="text-zinc-400 max-w-sm mx-auto mb-10 text-sm">
           Der offizielle Launch ist im <span className="text-white font-bold">Mai 2026</span>. Sichere dir bis dahin deinen Platz im System.
         </p>
         <div className="flex flex-col items-center gap-6">
            <PreOrderButton className="h-20 px-16 text-xl shadow-[0_0_30px_rgba(250,204,21,0.15)]" />
            <Link href="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors">Zurück zur Startseite</Link>
         </div>
      </section>

      {/* Small Footer */}
      <Footer />
    </main>
  );
}
