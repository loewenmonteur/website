"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/Footer";

const StorySection = dynamic(() => import("@/components/sections/StorySection"), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-zinc-950" />
});
const EvolutionSection = dynamic(() => import("@/components/sections/EvolutionSection"), { 
  ssr: false,
  loading: () => <div className="py-24 bg-zinc-950" />
});
const PillarsSection = dynamic(() => import("@/components/sections/PillarsSection"), { 
  ssr: false,
  loading: () => <div className="py-48 bg-zinc-950" />
});
const HubsSection = dynamic(() => import("@/components/sections/HubsSection"), { 
  ssr: false,
  loading: () => <div className="py-24 bg-zinc-950" />
});
const StageSection = dynamic(() => import("@/components/sections/StageSection"), { 
  ssr: false,
  loading: () => <div className="py-48 bg-zinc-950" />
});
const GritSection = dynamic(() => import("@/components/sections/GritSection"), { 
  ssr: false,
  loading: () => <div className="py-48 bg-zinc-950" />
});
const SneakPeakSection = dynamic(() => import("@/components/sections/SneakPeakSection"), { 
  ssr: false,
  loading: () => <div className="py-48 bg-zinc-950" />
});
const DokuSection = dynamic(() => import("@/components/sections/DokuSection"), { 
  ssr: false,
  loading: () => <div className="py-48 bg-zinc-950" />
});
const FrameworkSection = dynamic(() => import("@/components/sections/FrameworkSection"), { 
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
      <StorySection />
      <EvolutionSection />
      <PillarsSection />
      <HubsSection />
      <StageSection />
      <GritSection />
      <SneakPeakSection />
      <DokuSection />
      <FrameworkSection />
      <SalesFunnelSection />
      
      <Footer />
    </main>
  );
}
