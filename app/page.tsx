"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/Footer";

const SneakPeakSection = dynamic(() => import("@/components/sections/SneakPeakSection"), { 
  ssr: false,
  loading: () => <div className="py-48 bg-zinc-950" />
});
const DokuSection = dynamic(() => import("@/components/sections/DokuSection"), { 
  ssr: false,
  loading: () => <div className="py-48 bg-zinc-950" />
});
const SalesFunnelSection = dynamic(() => import("@/components/sections/SalesFunnelSection"), { 
  ssr: false,
  loading: () => <div className="py-48 bg-zinc-950" />
});

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-foreground flex flex-col relative overflow-hidden selection:bg-yellow-500 selection:text-black">
      {/* Background Visuals */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#18181b_0%,#09090b_60%)] -z-10" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />

      <HeroSection />
      
      {/* Trafo Specific Content */}
      <SneakPeakSection />
      <DokuSection />
      <SalesFunnelSection />

      {/* Navigation to other Worlds */}
      <section className="py-24 border-t border-zinc-900 bg-black/50">
        <div className="max-w-6xl mx-auto px-6">
           <h2 className="text-2xl font-black uppercase text-center text-zinc-700 mb-12 tracking-widest">Weitere Dimensionen</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Orkun */}
              <a href="/orkun" className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 relative aspect-video flex items-center justify-center hover:border-yellow-500/30 transition-colors">
                  <div className="text-center z-10 relative">
                     <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter group-hover:text-yellow-500 transition-colors">Der Architekt</h3>
                     <p className="text-zinc-500 text-xs uppercase tracking-widest mt-2">Orkun & Bodybuilding</p>
                  </div>
              </a>
              {/* Monteur */}
              <a href="/monteur" className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 relative aspect-video flex items-center justify-center hover:border-yellow-500/30 transition-colors">
                  <div className="text-center z-10 relative">
                     <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter group-hover:text-yellow-500 transition-colors">Löwenmonteur</h3>
                     <p className="text-zinc-500 text-xs uppercase tracking-widest mt-2">Handwerk & Montage</p>
                  </div>
              </a>
           </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
