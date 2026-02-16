"use client";

import { useEffect, useRef } from "react";
import { PreOrderButton } from "@/components/PreOrderButton";
import { Users, CheckCircle2, Trophy, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { gsap } from "gsap";

export default function HandwerkExplorePage() {
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
      {/* Background Visuals */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#18181b_0%,#09090b_60%)] -z-10" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm mb-6 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Pillar I: Handwerk & Führung</span>
          </div>
          <h1 className="fade-up text-5xl md:text-9xl font-black tracking-tighter uppercase leading-none text-white">
            Ehre &<br /><span className="text-zinc-800">Präzision</span>
          </h1>
          <p className="fade-up text-xl md:text-3xl font-bold text-zinc-500 max-w-2xl mx-auto tracking-tight leading-tight">
            Vom Löwenmonteur für die Elite des Handwerks. Systematischer Erfolg gegen den Fachkräftemangel.
          </p>
        </div>
      </section>

      {/* Narrative Section with Orkun */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group fade-up">
             <div className="aspect-4/5 bg-zinc-900 rounded-[2.5rem] border border-zinc-800 overflow-hidden shadow-2xl relative">
                <Image 
                  src="/images/handwerk/orkun_leadership_blaumann.png"
                  alt="Orkun Arslanmekik leading with discipline in high-end workwear"
                  fill
                  priority
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 to-transparent opacity-60" />
             </div>
             <div className="absolute -bottom-6 -left-6 p-8 bg-zinc-950 border border-zinc-900 rounded-3xl shadow-2xl max-w-sm">
                <p className="text-xs font-black uppercase tracking-widest text-yellow-500 mb-2">Die Mission</p>
                <p className="text-xl font-black uppercase text-white leading-tight italic">
                  &quot;Ein Meister ohne Disziplin ist nur ein Arbeiter mit Titel.&quot;
                </p>
             </div>
          </div>
          
          <div className="space-y-12 fade-up">
            <div className="space-y-6">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Was wir lösen</h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Der Handwerksbetrieb von heute braucht mehr als nur Werkzeug. Er braucht einen Code. Wir transformieren die Betriebskultur durch physische Stärke und operative Klarheit.
              </p>
            </div>
            
            <div className="grid gap-6">
              {[
                { title: "Azubi-Magnet", desc: "Werde der attraktivste Ausbildungsbetrieb der Region durch eine starke Kultur." },
                { title: "Krankheitsstand senken", desc: "Prävention durch das MOVE-Modul reduziert Ausfallzeiten drastisch." },
                { title: "Führungsschärfe", desc: "LEAD-Inhalte machen aus Polieren echte Vorbilder." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-yellow-500/30 transition-all group">
                  <h4 className="text-xl font-black uppercase text-white mb-2 tracking-tighter flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500" /> {item.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events & Cooperation Section */}
      <section className="py-32 px-6 relative overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
             <Image 
                src="/images/events_bg_texture.png" 
                alt="Industrial Events Background" 
                fill 
                className="object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-zinc-950/80" />
         </div>

         <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-up">
               <div>
                  <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500 mb-4">B2B & Partnerschaft</h2>
                  <h3 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter leading-none">
                     Events &<br />Kooperationen
                  </h3>
               </div>
               <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                  Löwenmonteur ist mehr als ein YouTube-Kanal. Es ist der Zugang zur neuen Generation des Handwerks. Wir suchen Partner, die Qualität genauso ernst nehmen wie wir.
               </p>
               <div className="flex flex-col gap-4">
                  <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-yellow-500/50 transition-colors group cursor-pointer">
                     <h4 className="text-xl font-black uppercase text-white mb-2 flex items-center gap-3">
                        <Users className="w-6 h-6 text-yellow-500" />
                        Werkzeughersteller
                     </h4>
                     <p className="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors">
                        Platzieren Sie Ihre Premium-Werkzeuge dort, wo sie geschätzt werden: In den Händen von Profis.
                     </p>
                  </div>
                  <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-yellow-500/50 transition-colors group cursor-pointer">
                     <h4 className="text-xl font-black uppercase text-white mb-2 flex items-center gap-3">
                        <Trophy className="w-6 h-6 text-yellow-500" />
                        Materialhandel
                     </h4>
                     <p className="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors">
                        Verbinden Sie sich direkt mit entscheidungskräftigen Handwerksbetrieben.
                     </p>
                  </div>
               </div>
               
               <div className="pt-8">
                  <a href="mailto:kooperation@loewenmonteur.de" className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-black font-black uppercase tracking-widest rounded-full hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                     Anfrage senden
                  </a>
               </div>
            </div>

            {/* Visual / Image Side */}
            <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl fade-up">
                {/* We'll use the generated image here once available, for now using a placeholder layout */}
                <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                    <p className="text-zinc-700 font-black uppercase tracking-widest">Event Visual Placeholder</p>
                </div>
            </div>
         </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 px-6 bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-4xl mx-auto text-center space-y-12 fade-up">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">Innungen & Partner</h2>
          <p className="text-zinc-400 text-lg">
            Wir arbeiten eng mit Innungen zusammen, um das Berufsbild SHK wieder zu dem zu machen, was es ist: Ein stolzer, hochtechnisierter Männerberuf.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="space-y-4">
                <Trophy className="w-10 h-10 text-yellow-500 mx-auto" />
                <h4 className="text-sm font-black uppercase text-white tracking-widest">Innungs-Talks</h4>
             </div>
             <div className="space-y-4">
                <Users className="w-10 h-10 text-yellow-500 mx-auto" />
                <h4 className="text-sm font-black uppercase text-white tracking-widest">Azubi-Bootcamps</h4>
             </div>
             <div className="space-y-4">
                <Clock className="w-10 h-10 text-yellow-500 mx-auto" />
                <h4 className="text-sm font-black uppercase text-white tracking-widest">Betriebs-System</h4>
             </div>
          </div>
        </div>
      </section>

      {/* Funnel CTA */}
      <section className="py-32 px-6 text-center">
         <div className="fade-up space-y-10">
           <h2 className="text-4xl md:text-8xl font-black uppercase mb-4 tracking-tighter text-white">
             Bereit für den<br/><span className="text-zinc-800">Vorverkauf?</span>
           </h2>
           <p className="text-zinc-500 max-w-md mx-auto mb-10 text-lg font-bold">
             Sichere dir das exklusive &quot;Betriebs-Paket&quot; in der Start-Phase.
           </p>
           <div className="flex flex-col items-center gap-8">
              <PreOrderButton className="h-24 px-20 text-2xl shadow-2xl rounded-2xl" />
              <Link href="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700 hover:text-white transition-colors">Zurück zur Startseite</Link>
           </div>
         </div>
      </section>

      {/* Small Footer */}
      <Footer />
    </main>
  );
}
