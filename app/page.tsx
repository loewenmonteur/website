"use client";

import { useEffect, useRef } from "react";
import { PreOrderButton } from "@/components/PreOrderButton";
import { 
  Play, Users, Dumbbell, Utensils, ListTodo, 
  GraduationCap, ShieldCheck, Zap, ArrowRight,
  Target, Quote, Sparkles, Bot
} from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const modules = [
    { name: "TRAIN", icon: Dumbbell, desc: "Kraft & Leistungsfähigkeit für den Alltag eines Meisters." },
    { name: "EAT", icon: Utensils, desc: "Fuel-Strategien, die im vollen Terminkalender funktionieren." },
    { name: "MOVE", icon: ListTodo, desc: "Routinen, die Struktur und mentale Klarheit schaffen." },
    { name: "LEAD", icon: GraduationCap, desc: "Haltung und Führung als Fundament deines Betriebs." },
    { name: "PROVE", icon: ShieldCheck, desc: "Beweise durch Taten – Challenges für echte Resultate." },
  ];

  useEffect(() => {
    // Hero Animations
    const ctx = gsap.context(() => {
      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });

      gsap.from(".hero-p", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      // Story Section Parallax
      gsap.to(".story-image", {
        y: -50,
        scrollTrigger: {
          trigger: ".story-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Pillar Cards stagger
      gsap.from(".pillar-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".pillars-section",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-zinc-950 text-foreground flex flex-col relative overflow-hidden selection:bg-yellow-500 selection:text-black">
      {/* Background Visuals */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#18181b_0%,#09090b_60%)] -z-10" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />

      {/* 1. Impact Hero */}
      <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center text-center p-6 sm:p-12 z-10 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?q=80&w=2532&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale mix-blend-luminosity" />
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950/0 via-zinc-950/80 to-zinc-950" />
        
        <div className="space-y-8 max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-xl mb-6 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Pre-Order Phase Aktiv</span>
          </div>
          
          <h1 className="hero-title text-7xl md:text-[12rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            <span className="block">Löwen</span>
            <span className="block text-zinc-800">trafo</span>
          </h1>
          
          <p className="hero-p text-xl md:text-3xl font-bold text-zinc-400 max-w-3xl mx-auto tracking-tight leading-tight mt-8">
            Fitnessorkun hat gezeigt, was möglich ist.<br />
            <span className="text-white">LÖWENTRAFO zeigt, was tragfähig ist.</span>
          </p>

          <div className="hero-p pt-12 flex flex-col items-center gap-6">
            <PreOrderButton className="h-24 px-20 text-2xl shadow-[0_0_50px_rgba(250,204,21,0.2)] rounded-2xl" />
            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Inklusive Zugang zur Alpha-Phase</p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <div className="w-px h-12 bg-zinc-500" />
        </div>
      </section>

      {/* 2. Wer ist der Löwenmonteur? (Emotional Core) */}
      <section className="story-section py-48 px-6 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">Die Evolution</h2>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                Vom Sichtbaren<br /><span className="text-zinc-800">zum Tragfähigen</span>
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed text-2xl font-bold tracking-tight italic border-l-4 border-yellow-500 pl-8 py-4">
              &quot;Motivation ist flüchtig. Disziplin ohne Struktur zerbricht. Ich habe Jahre damit verbracht zu zeigen, was möglich ist – jetzt baue ich das System, das diese Leistung dauerhaft trägt.&quot;
            </p>
            <div className="space-y-6 pt-4">
               <p className="text-zinc-500 text-lg leading-relaxed">
                  Viele kennen Orkun als <strong>Fitnessorkun</strong>. Ein Gesicht, eine Reichweite, eine sichtbare Transformation. Doch wahre Ordnung entsteht nicht durch Sichtbarkeit, sondern durch Substanz. LÖWENTRAFO ist die Konsequenz aus Jahren an der Front: Weg vom Influencer-Dasein, hin zum Systembau für Männer mit Verantwortung.
               </p>
               <div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-900 group">
                  <Quote className="w-8 h-8 text-yellow-500/20 group-hover:text-yellow-500 transition-colors" />
                  <p className="text-xs font-black uppercase tracking-widest text-white italic">Kein Influencer-Projekt. Ein operatives System.</p>
               </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 group">
             <div className="story-image aspect-4/5 bg-zinc-900 rounded-[2.5rem] border border-zinc-800 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] relative">
                <Image 
                  src="/brain/6236508e-f6dd-4e9f-84cf-689f93580393/orkun_blaumann_portrait_1770068839138.png"
                  alt="Orkun portrait in Blaumann"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-12 left-12 right-12 space-y-2">
                   <p className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-500">Der Systembauer</p>
                   <p className="text-4xl font-black uppercase text-white tracking-tighter">Orkun Arslanmekik</p>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/5 blur-[80px] rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* Evolution Grid Section */}
      <section className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto border border-zinc-900 rounded-[3rem] p-12 lg:p-24 overflow-hidden relative group/grid">
           <div className="absolute inset-0 opacity-5 group-hover/grid:opacity-10 transition-opacity duration-1000">
             <Image 
               src="/images/doku/evolution.jpg"
               alt="Evolution Background"
               fill
               className="object-cover"
             />
           </div>
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-linear-to-b from-yellow-500/20 via-zinc-900 to-transparent hidden lg:block" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
              <div className="space-y-8">
                 <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">Vergangenheit</p>
                    <h4 className="text-4xl font-black uppercase text-zinc-400 tracking-tighter">Fitnessorkun</h4>
                 </div>
                 <ul className="space-y-4">
                    {["Reichweite & Sichtbarkeit", "Motivation als Treibstoff", "Ästhetik im Vordergrund", "Social Media Fokus"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-zinc-700 font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                        {item}
                      </li>
                    ))}
                 </ul>
                 <p className="text-zinc-600 text-sm italic">&quot;Gezeigt, was möglich ist.&quot;</p>
              </div>

              <div className="space-y-8">
                 <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-500">Zukunft</p>
                    <h4 className="text-4xl font-black uppercase text-white tracking-tighter shadow-yellow-500/10 shadow-2xl">LÖWENTRAFO</h4>
                 </div>
                 <ul className="space-y-4">
                    {["Substanz & Tragfähigkeit", "Struktur als Fundament", "Haltung & Führung", "Alltagstaugliches System"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-zinc-300 font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        {item}
                      </li>
                    ))}
                 </ul>
                 <p className="text-yellow-500 text-sm font-black italic">&quot;Gebaut, was tragfähig bleibt.&quot;</p>
              </div>
           </div>
        </div>
      </section>

      {/* 3. The Triple Pillar Universe */}
      <section className="pillars-section py-48 px-6 bg-zinc-950 border-t border-zinc-900/30">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">Das Universum</h2>
            <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">Die 3 Welten</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Pillar 1: Handwerk */}
            <Link href="/explore/handwerk" className="pillar-card group cursor-pointer">
              <div className="h-[600px] bg-zinc-900 rounded-4xl border border-zinc-800 p-10 flex flex-col justify-end relative overflow-hidden transition-all duration-700 hover:border-yellow-500/50 hover:shadow-[0_0_60px_rgba(250,204,21,0.1)]">
                <Image 
                  src="/brain/6236508e-f6dd-4e9f-84cf-689f93580393/handwerk_mastery_action_1770068852063.png"
                  alt="Handwerk Mastery"
                  fill
                  className="object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500">Pillar I</h4>
                    <h5 className="text-4xl font-black uppercase text-white tracking-tighter leading-none">Handwerk &<br />Betriebe</h5>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed font-bold group-hover:text-zinc-300 transition-colors">
                    Wir bringen Disziplin, Stolz und Systematik zurück in den Betrieb. Gegen den Fachkräftemangel, für die Meisterschaft.
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                    Mehr erfahren <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Pillar 2: Bodybuilding */}
            <Link href="/explore/bodybuilding" className="pillar-card group cursor-pointer md:mt-12">
              <div className="h-[600px] bg-zinc-900 rounded-4xl border border-zinc-800 p-10 flex flex-col justify-end relative overflow-hidden transition-all duration-700 hover:border-yellow-500/50 hover:shadow-[0_0_60px_rgba(250,204,21,0.1)]">
                <Image 
                  src="/brain/6236508e-f6dd-4e9f-84cf-689f93580393/training_iron_gym_1770068881023.png"
                  alt="Training Iron Gym"
                  fill
                  className="object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                    <Dumbbell className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500">Pillar II</h4>
                    <h5 className="text-4xl font-black uppercase text-white tracking-tighter leading-none">Eisen &<br />Ästhetik</h5>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed font-bold group-hover:text-zinc-300 transition-colors">
                    Das Training als Labor der Transformation. Wir lehren die Liebe zum harten Training und die physische Dominanz.
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                    Mehr erfahren <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Pillar 3: Die Trafo */}
            <Link href="/explore/trafo" className="pillar-card group cursor-pointer">
              <div className="h-[600px] bg-zinc-900 rounded-4xl border border-yellow-500/30 p-10 flex flex-col justify-end relative overflow-hidden transition-all duration-700 hover:border-yellow-500/50 hover:shadow-[0_0_60px_rgba(250,204,21,0.2)]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-20 filter grayscale group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500">Pillar III</h4>
                    <h5 className="text-4xl font-black uppercase text-white tracking-tighter leading-none">Sport, Arbeit<br />& Leben</h5>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed font-black group-hover:text-zinc-300 transition-colors">
                    Die ultimative Synergie. Ein operatives System für den modernen High-Performer im Handwerk.
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                    Mehr erfahren <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 4. The Stage Narrative */}
      <section className="py-48 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <div className="space-y-12">
              <div className="space-y-6">
                 <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">Die Transformation</h2>
                 <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85]">
                   Vom Social Media <span className="text-zinc-800">Druck</span><br />Zur <span className="text-yellow-500">Bühne</span>
                 </h3>
              </div>
              
              <div className="space-y-8">
                <p className="text-zinc-400 text-xl md:text-2xl font-bold leading-relaxed tracking-tight italic border-l-4 border-yellow-500 pl-8">
                  &quot;Früher war es Social Media Druck – heute ist es die Bühne meines Lebens. Wer NRW-Landesmeister und Deutscher Meister im Bodybuilding wird, während er Firma, Familie und Handwerk führt, hat kein Geheimnis. Er hat ein System.&quot;
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                      <p className="text-[10px] font-black uppercase tracking-widest text-yellow-500 mb-1">Erfolg I</p>
                      <p className="text-sm text-white font-bold">NRW Landesmeister</p>
                   </div>
                   <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                      <p className="text-[10px] font-black uppercase tracking-widest text-yellow-500 mb-1">Erfolg II</p>
                      <p className="text-sm text-white font-bold">Deutscher Meister</p>
                   </div>
                </div>
                <p className="text-zinc-500 text-lg leading-relaxed font-bold">
                  Orkun hat bewiesen: Man muss sich nicht entscheiden. Du kannst ein liebender Familienvater, ein erfolgreicher Unternehmer und ein Champion im Sport sein. LÖWENTRAFO ist der Beweis. Jeder kann es schaffen. Du auch?
                </p>
              </div>

              <div className="pt-8">
                <PreOrderButton className="h-20 px-12 group" />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-500/10 blur-[120px] rounded-full group-hover:bg-yellow-500/20 transition-all duration-1000" />
              <div className="relative aspect-video lg:aspect-square bg-zinc-900 rounded-4xl border border-zinc-800 overflow-hidden shadow-2xl">
                <Image 
                  src="/transformation-stage.webp"
                  alt="Transformation Stage"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8 text-center">
                   <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">Real Life Performance Mode</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Sneak Peak Section: Products & Insights */}
      <section className="py-48 px-6 bg-[radial-gradient(circle_at_50%_0%,#1a1a1e_0%,#09090b_100%)]">
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
             <div className="space-y-6 max-w-2xl">
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">Sneak Peak</h2>
                <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">Digitale<br /><span className="text-zinc-800">Meisterschaft</span></h3>
             </div>
             <p className="text-zinc-500 text-lg font-bold max-w-sm border-l-2 border-zinc-900 pl-6">
                Exklusive Einblicke in die App-Inhalte, Trainingspläne und das Löwen-Kochbuch.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {/* Content 1: Training */}
             <div className="group relative">
                <div className="aspect-16/10 bg-zinc-900 rounded-4xl border border-zinc-800 overflow-hidden relative shadow-2xl">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541534741688-6078c65b5a33?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-all duration-1000" />
                   <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
                   <div className="absolute top-8 left-8 p-3 bg-zinc-950/80 backdrop-blur-md rounded-lg border border-zinc-800">
                      <Target className="w-5 h-5 text-yellow-500" />
                   </div>
                   <div className="absolute bottom-10 left-10 right-10">
                      <h4 className="text-2xl font-black uppercase text-white tracking-tighter mb-2">Train-Pedia</h4>
                      <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">Video-Anleitungen für maximale Effizienz im Gym.</p>
                   </div>
                </div>
             </div>
             
             {/* Content 2: Nutrition */}
             <div className="group relative md:mt-12">
                <div className="aspect-16/10 bg-zinc-900 rounded-4xl border border-zinc-800 overflow-hidden relative shadow-2xl">
                   <Image 
                      src="/brain/6236508e-f6dd-4e9f-84cf-689f93580393/nutrition_steak_bowl_1770068868595.png"
                      alt="Performance Fueling"
                      fill
                      className="object-cover opacity-40 group-hover:scale-105 transition-all duration-1000"
                   />
                   <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
                   <div className="absolute top-8 left-8 p-3 bg-zinc-950/80 backdrop-blur-md rounded-lg border border-zinc-800">
                      <Utensils className="w-5 h-5 text-emerald-500" />
                   </div>
                   <div className="absolute bottom-10 left-10 right-10">
                      <h4 className="text-2xl font-black uppercase text-white tracking-tighter mb-2">Löwen-Küche</h4>
                      <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">Das Kochbuch für Männer, die keine Zeit zu verlieren haben.</p>
                   </div>
                </div>
             </div>

             {/* Content 3: Lion-AI */}
             <Link href="/ai-coach" className="group relative md:mt-24">
                <div className="aspect-16/10 bg-zinc-900 rounded-4xl border border-yellow-500/20 overflow-hidden relative shadow-2xl transition-all duration-500 hover:border-yellow-500/50">
                   <div className="absolute inset-0 bg-linear-to-br from-yellow-500/10 via-zinc-950 to-zinc-950 group-hover:bg-yellow-500/20 transition-all duration-500" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="w-20 h-20 text-yellow-500/10 group-hover:scale-110 transition-transform duration-1000" />
                   </div>
                   <div className="absolute top-8 left-8 p-3 bg-zinc-950/80 backdrop-blur-md rounded-lg border border-zinc-800">
                      <Bot className="w-5 h-5 text-yellow-500" />
                   </div>
                   <div className="absolute bottom-10 left-10 right-10">
                      <div className="inline-flex items-center gap-2 mb-2">
                        <h4 className="text-2xl font-black uppercase text-white tracking-tighter">Der Mentor</h4>
                        <span className="px-1.5 py-0.5 rounded bg-yellow-500 text-[8px] text-black font-black uppercase">Pionier</span>
                      </div>
                      <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">Der digitale Instinkt für den Meister-Alltag.</p>
                   </div>
                </div>
             </Link>
          </div>
        </div>
      </section>

      {/* 5. Doku Feature */}
      <section className="py-48 px-6 bg-zinc-950 border-y border-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center space-y-16">
           <div className="space-y-4">
             <h2 className="text-sm font-black uppercase tracking-[0.4em] text-zinc-600">Film & Dokumentation</h2>
             <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">Vom Sichtbaren <span className="text-zinc-800">zum Tragfähigen</span></h3>
           </div>
           
           <div className="aspect-video bg-zinc-900 rounded-[3rem] border-8 border-zinc-900/50 shadow-[0_0_80px_rgba(0,0,0,1)] relative overflow-hidden group cursor-pointer lg:scale-110">
                <Image 
                  src="/images/doku/main.jpg"
                  alt="Doku teaser background"
                  fill
                  className="object-cover opacity-20 filter grayscale group-hover:scale-105 transition-all duration-2000"
                />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-700" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                 <div className="w-28 h-28 rounded-full bg-white/5 backdrop-blur-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-yellow-500 transition-all duration-700">
                    <Play className="w-10 h-10 text-white group-hover:text-black fill-current ml-1" />
                 </div>
                 <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Dokumentation ansehen</p>
                    <div className="h-px w-20 bg-yellow-500 mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                 </div>
              </div>
           </div>
           
           <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-bold tracking-tight">
             Die ungeschönte Geschichte der Evolution von Fitnessorkun zu LÖWENTRAFO – Einblick in den Systembau.
           </p>
        </div>
      </section>

      {/* 6. Das System Module & Final CTA */}
      <section className="py-48 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="text-center space-y-8">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">Das Framework</h2>
            <h3 className="text-5xl md:text-9xl font-black uppercase tracking-tighter text-white leading-none">Full Access</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((m, i) => (
              <div key={i} className="bg-zinc-900 p-10 rounded-4xl border border-zinc-800 hover:border-yellow-500/30 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/5 blur-2xl rounded-full group-hover:bg-yellow-500/10 transition-all" />
                <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 text-zinc-700 group-hover:text-yellow-500 transition-colors duration-500">
                  <m.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black uppercase text-white mb-4 tracking-tighter leading-none">{m.name}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-bold group-hover:text-zinc-300 transition-colors">{m.desc}</p>
              </div>
            ))}
            
            <div className="lg:col-span-1 bg-yellow-500 rounded-4xl p-12 flex flex-col justify-between group cursor-pointer overflow-hidden relative shadow-[0_0_100px_rgba(234,179,8,0.15)] transition-transform duration-500 hover:scale-[1.02]">
               <Zap className="absolute -bottom-10 -right-10 w-48 h-48 text-black/10 -rotate-12 group-hover:scale-110 transition-transform duration-1000" />
               <div className="relative z-10 space-y-4">
                 <h4 className="text-4xl md:text-5xl font-black uppercase text-black tracking-tighter leading-[0.85] mb-4 group-hover:translate-y-[-5px] transition-transform">Werde Teil<br />der Alpha</h4>
                 <p className="text-black/60 text-sm font-black uppercase tracking-widest">Begrenzte Plätze verfügbar.</p>
               </div>
               <div className="relative z-10 pt-12">
                 <PreOrderButton className="w-full bg-black text-white border-none hover:bg-zinc-900 h-20 text-lg rounded-xl shadow-2xl" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Sales Funnel section */}
      <section className="py-48 px-6 bg-[radial-gradient(circle_at_50%_100%,#1a1a1e_0%,#09090b_80%)] border-t border-zinc-900">
         <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-4">
               <h3 className="text-sm font-black uppercase tracking-[0.5em] text-yellow-500">Ready to Ship</h3>
               <h2 className="text-6xl md:text-9xl font-black uppercase text-white tracking-widest leading-none">2026</h2>
            </div>
            <div className="flex flex-col items-center gap-10">
               <div className="flex items-center gap-8 text-zinc-600 font-black uppercase tracking-[0.3em] text-[10px]">
                  <span>Work</span>
                  <div className="w-10 h-px bg-zinc-800" />
                  <span>Sport</span>
                  <div className="w-10 h-px bg-zinc-800" />
                  <span>Life</span>
               </div>
               <PreOrderButton className="h-24 px-24 text-2xl shadow-2xl rounded-2xl" />
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-zinc-950 border-t border-zinc-900 text-center">
         <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-zinc-800 hover:text-zinc-600 transition-colors cursor-default">
              Löwenmonteur <span className="text-zinc-900">Framework</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700">
               <Link href="/impressum" className="hover:text-yellow-500 transition-colors">Impressum</Link>
               <Link href="/datenschutz" className="hover:text-yellow-500 transition-colors">Datenschutz</Link>
               <Link href="/agb" className="hover:text-yellow-500 transition-colors">AGB</Link>
            </div>
            
            <p className="text-[9px] font-mono text-zinc-900 uppercase tracking-widest">
              Löwenmonteur © 2026. Dominance in Craftsmanship.
            </p>
         </div>
      </footer>
    </main>
  );
}
