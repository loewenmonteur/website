"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, Dumbbell, Radio, ArrowRight } from "lucide-react";

export default function HubsSection() {
  return (
    <section className="py-24 px-6 bg-zinc-950 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-zinc-900/20 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          
          {/* Station I: Handwerk & Betriebe */}
          <div className="space-y-8 group fade-up relative">
            <div className="absolute -inset-4 bg-zinc-900/50 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 overflow-hidden">
              <Image 
                src="/images/handwerk/orkun_shk_master.png"
                alt="SHK Backdrop"
                fill
                className="object-cover opacity-10 group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-yellow-500/50 transition-all duration-500 shadow-xl">
              <Users className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Pillar I</p>
              <h3 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter leading-[0.85]">
                Handwerk &<br />Betriebe
              </h3>
              <p className="text-zinc-500 text-lg font-bold leading-tight tracking-tight">
                Wir bringen Disziplin, Stolz und Systematik zurück in den Betrieb. Gegen den Fachkräftemangel, für die Meisterschaft.
              </p>
            </div>
            <Link href="/explore/handwerk" className="inline-flex items-center gap-2 text-yellow-500 text-sm font-black uppercase tracking-widest group-hover:gap-4 transition-all">
              Mehr erfahren <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Station II: Athleten & Performer */}
          <div className="space-y-8 group fade-up">
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-yellow-500/50 transition-all duration-500 shadow-xl">
              <Dumbbell className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Pillar II</p>
              <h3 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter leading-[0.85]">
                Athleten &<br />Performer
              </h3>
              <p className="text-zinc-500 text-lg font-bold leading-tight tracking-tight">
                Vom Eisen geformt, durch das System getragen. Deine physische Evolution als Basis für deinen Erfolg im modernen Leben.
              </p>
            </div>
            <Link href="/explore/bodybuilding" className="inline-flex items-center gap-2 text-yellow-500 text-sm font-black uppercase tracking-widest group-hover:gap-4 transition-all">
              Jetzt starten <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Station III: Social Impact */}
          <div className="space-y-8 group fade-up">
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-yellow-500/50 transition-all duration-500 shadow-xl">
              <Radio className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Pillar III</p>
              <h3 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter leading-[0.85]">
                Vision &<br />Reichweite
              </h3>
              <p className="text-zinc-500 text-lg font-bold leading-tight tracking-tight">
                Reichweite mit Substanz. Wir nutzen die Sichtbarkeit, um das Handwerk wieder sexy zu machen. Seid auf der Reise dabei.
              </p>
            </div>
            <Link href="/explore/trafo" className="inline-flex items-center gap-2 text-yellow-500 text-sm font-black uppercase tracking-widest group-hover:gap-4 transition-all">
              Die Vision sehen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
