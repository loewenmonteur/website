"use client";

import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const OriginStorySection = dynamic(() => import("@/components/sections/OriginStorySection"), { 
  ssr: false,
  loading: () => <div className="py-24 bg-zinc-950" />
});
const StageSection = dynamic(() => import("@/components/sections/StageSection"), { 
  ssr: false,
  loading: () => <div className="py-24 bg-zinc-950" />
});
const GritSection = dynamic(() => import("@/components/sections/GritSection"), { 
  ssr: false,
  loading: () => <div className="py-24 bg-zinc-950" />
});

export default function OrkunPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-foreground flex flex-col relative overflow-hidden selection:bg-yellow-500 selection:text-black">
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#18181b_0%,#09090b_60%)] -z-10" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />

      <section className="pt-32 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
          Der Architekt
        </h1>
        <p className="text-zinc-500 font-bold uppercase tracking-widest">
          Hinter dem System
        </p>
      </section>

      <OriginStorySection />
      <StageSection />
      <GritSection />

      <div className="py-24 text-center">
         <p className="text-zinc-500 text-sm mb-4">Mehr über Bodybuilding & Fitness?</p>
         <a href="https://www.fitnessorkun.de" target="_blank" rel="noopener noreferrer" className="text-yellow-500 font-bold uppercase tracking-widest hover:underline">
            Zu FitnessOrkun.de
         </a>
      </div>

      <Footer />
    </main>
  );
}
