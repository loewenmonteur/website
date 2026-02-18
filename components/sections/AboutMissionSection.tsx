"use client";

import Image from "next/image";
import { CheckCircle2, Award, Hammer } from "lucide-react";

export default function AboutMissionSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Image / Visual */}
        <div className="relative group">
           <div className="aspect-3/4 bg-zinc-900 rounded-[2.5rem] border border-zinc-800 overflow-hidden shadow-2xl relative">
              <Image 
                src="/images/doku/doku_bg_final.jpg"
                alt="Orkun Arslanmekik - Founder of LöwenMonteur"
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
           </div>
           
           {/* Floating Badge */}
           <div className="absolute -bottom-8 -right-8 p-6 bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                 <Award className="w-8 h-8 text-yellow-500" />
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Founded</p>
                    <p className="text-xl font-black uppercase text-white">2026</p>
                 </div>
              </div>
              <p className="text-xs text-zinc-400">
                Die erste Plattform, die Handwerk, Business und Athletik vereint.
              </p>
           </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-10">
           <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">Über uns</h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter leading-none">
                 Warum wir<br />das tun.
              </h3>
           </div>
           
           <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                 <strong className="text-white">Orkun Arslanmekik</strong> ist kein Theoretiker. Als gelernter Anlagenmechaniker SHK, Installateur und Betriebsleiter und aktiver Bodybuilder kennt er beide Welten: Die harte Realität auf der Baustelle und die absolute Disziplin des Leistungssports. Über die NRW-Meisterschaft qualifizierte er sich für die Deutsche Meisterschaft – und trat dort an.
              </p>
              <p>
                  LöwenTrafo ist die Antwort auf eine Lücke im System. Handwerker werden oft nur als &quot;Arbeitskraft&quot; gesehen, nicht als Athleten des Alltags. Wir ändern das. Wir geben dir die Werkzeuge für Körper, Geist und Karriere.
              </p>
           </div>

           <div className="grid gap-4">
              {[
                { icon: Hammer, text: "Aus der Praxis für die Praxis: Strategien, die auf der Baustelle funktionieren." },
                { icon: Award, text: "Meister-Niveau: Fachwissen trifft auf High-Performance Mindset." },
                { icon: CheckCircle2, text: "Ganzheitlich: Wir trainieren nicht nur Muskeln, sondern auch Charakter." }
              ].map((item, i) => (
                 <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-900">
                    <item.icon className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                    <p className="text-sm text-zinc-300 font-medium">{item.text}</p>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
