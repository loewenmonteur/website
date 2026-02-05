"use client";

import { PreOrderButton } from "@/components/PreOrderButton";

export default function SalesFunnelSection() {
  return (
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
  );
}
