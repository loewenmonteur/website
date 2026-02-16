"use client";


import Image from "next/image";
export default function SalesFunnelSection() {
  return (
    <section className="py-24 md:py-48 px-6 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
       {/* Background Image */}
       <div className="absolute inset-0 z-0">
          <Image 
            src="/images/doku/main.jpg" 
            alt="Werde Teil vom Rudel" 
            fill 
            sizes="100vw"
            className="object-cover opacity-20 grayscale mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)]" />
       </div>

       <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
          <div className="space-y-4">
             <h3 className="text-sm font-black uppercase tracking-[0.5em] text-yellow-500">System Status: Online</h3>
             <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-widest leading-none drop-shadow-2xl">
               Werde Teil<br/><span className="text-zinc-500">des Rudels</span>
             </h2>
          </div>
          <div className="flex flex-col items-center gap-10">
             <div className="flex items-center gap-8 text-zinc-400 font-black uppercase tracking-[0.3em] text-[10px] bg-zinc-950/50 px-6 py-2 rounded-full border border-zinc-800 backdrop-blur-sm">
                <span>Struktur</span>
                <div className="w-10 h-px bg-zinc-700" />
                <span>Ordnung</span>
                <div className="w-10 h-px bg-zinc-700" />
                <span>Rückgrat</span>
             </div>
              <a href="/explore/trafo" className="h-24 px-20 text-2xl shadow-[0_0_50px_rgba(250,204,21,0.2)] rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase tracking-widest flex items-center justify-center transition-all hover:scale-105 hover:shadow-[0_0_80px_rgba(250,204,21,0.4)]">
                System Starten
              </a>
          </div>
       </div>
    </section>
  );
}
