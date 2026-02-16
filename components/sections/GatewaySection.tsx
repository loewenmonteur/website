"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Hammer, Dumbbell } from "lucide-react";

export default function GatewaySection() {
  return (
    <section className="bg-zinc-950 border-t border-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Work / Monteur Gateway */}
        <Link href="/monteur" className="group relative h-[60vh] md:h-[80vh] overflow-hidden w-full block">
          <Image
            src="/images/gateway_sport_new.jpg"
            alt="Löwenmonteur - Handwerk"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-70"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          
          <div className="absolute bottom-0 left-0 right-0 p-12 flex flex-col items-end text-right justify-end h-full">
            <div className="flex items-center gap-3 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex-row-reverse">
              <span className="h-px w-12 bg-yellow-500" />
              <span className="text-yellow-500 font-black uppercase tracking-widest text-xs">Der Ursprung</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter mb-4">
              Arbeit
            </h2>
            <p className="text-zinc-400 text-lg max-w-md mb-8 transform transition-all duration-500 group-hover:text-white">
              Handwerk. Qualität. Montage. Das Fundament, auf dem wir bauen.
            </p>
            
            <div className="flex items-center gap-4 px-6 py-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm group-hover:bg-yellow-500 group-hover:border-yellow-500 group-hover:text-black transition-all flex-row-reverse">
              <Hammer className="w-5 h-5" />
              <span className="font-black uppercase tracking-widest text-sm">Löwenmonteur</span>
              <ArrowRight className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform rotate-180" />
            </div>
          </div>
        </Link>
 
        {/* Sport / Orkun Gateway */}
        <Link href="/orkun" className="group relative h-[60vh] md:h-[80vh] overflow-hidden w-full block border-t md:border-t-0 md:border-l border-zinc-900">
          <Image
            src="/images/gateway_work_new.png"
            alt="Der Architekt - Bodybuilding"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-left md:object-center transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-70"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          
          <div className="absolute bottom-0 left-0 right-0 p-12 flex flex-col items-start justify-end h-full">
            <div className="flex items-center gap-3 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <span className="h-px w-12 bg-yellow-500" />
              <span className="text-yellow-500 font-black uppercase tracking-widest text-xs">Die Vision</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter mb-4">
              Sport
            </h2>
            <p className="text-zinc-400 text-lg max-w-md mb-8 transform transition-all duration-500 group-hover:text-white">
              Bodybuilding. Disziplin. Mindset. Der Weg zur Meisterschaft.
            </p>
            
            <div className="flex items-center gap-4 px-6 py-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm group-hover:bg-yellow-500 group-hover:border-yellow-500 group-hover:text-black transition-all">
              <Dumbbell className="w-5 h-5" />
              <span className="font-black uppercase tracking-widest text-sm">FitnessOrkun</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
      
      {/* Footer Text for Context */}
      <div className="py-12 bg-black text-center border-t border-zinc-900">
         <p className="text-zinc-600 text-xs font-black uppercase tracking-[0.3em]">Weitere Bereiche</p>
      </div>
    </section>
  );
}
