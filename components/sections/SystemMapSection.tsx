"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Hammer, Dumbbell, Zap } from "lucide-react";

const pillars = [
  {
    title: "Handwerk",
    subtitle: "Führung & Struktur",
    icon: Hammer,
    href: "/explore/handwerk",
    image: "/images/handwerk/orkun_leadership_blaumann.png",
    color: "text-blue-500",
    description: "Baue deine Karriere auf einem festen Fundament. Für Macher und Anführer."
  },
  {
    title: "Trafo",
    subtitle: "Das System",
    icon: Zap,
    href: "/explore/trafo",
    image: "/images/brand/lion_head_black.png", // Using logo as abstract focus
    color: "text-yellow-500",
    description: "Die Synthese aus beiden Welten. Dein täglicher Begleiter für maximale Performance.",
    isCenter: true
  },
  {
    title: "Bodybuilding",
    subtitle: "Disziplin & Ästhetik",
    icon: Dumbbell,
    href: "/explore/bodybuilding",
    image: "/images/championships/orkun_posing_stage.jpg",
    color: "text-red-500",
    description: "Schmiede deinen Körper. Disziplin ist der Schlüssel zu allem."
  }
];

export default function SystemMapSection() {
  return (
    <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-sm font-black uppercase tracking-[0.4em] text-zinc-500">Navigation</h2>
           <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter">Das Ökosystem</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {pillars.map((pillar, i) => (
              <Link 
                key={i} 
                href={pillar.href}
                className={`group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 aspect-3/4 flex flex-col justify-end p-8 transition-all hover:border-zinc-700 ${pillar.isCenter ? 'md:-mt-8 md:mb-8 border-yellow-500/20 shadow-[0_0_50px_-12px_rgba(234,179,8,0.2)]' : ''}`}
              >
                 {/* Background Image / Overlay */}
                 <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className={`object-cover ${pillar.isCenter ? 'object-contain p-12' : 'object-cover'}`}
                    />
                 </div>
                 <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/80 to-transparent" />

                 {/* Content */}
                 <div className="relative z-10 space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3">
                       <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                       <span className={`text-xs font-black uppercase tracking-widest ${pillar.color}`}>{pillar.subtitle}</span>
                    </div>
                    
                    <h4 className="text-3xl font-black uppercase text-white tracking-tight">{pillar.title}</h4>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                       {pillar.description}
                    </p>

                    <div className="pt-4 flex items-center text-white font-bold text-sm uppercase tracking-wide group-hover:gap-4 transition-all">
                       <span>Erkunden</span>
                       <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                 </div>
              </Link>
           ))}
        </div>
      </div>
    </section>
  );
}
