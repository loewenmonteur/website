"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { PreOrderButton } from "@/components/PreOrderButton";

export default function StageSection() {
  return (
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
            <div className="relative grid grid-cols-2 gap-4">
              <div className="relative aspect-3/4 bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl group/img">
                <Image 
                  src="/images/championships/orkun_champion_medal.png"
                  alt="Orkun Arslanmekik - Champion Medal"
                  fill
                  className="object-cover group-hover/img:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Deutscher Meister</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative aspect-square bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl group/img">
                  <Image 
                    src="/images/championships/orkun_backstage_abs.png"
                    alt="Orkun Backstage - System Evidence"
                    fill
                    className="object-cover grayscale group-hover/img:grayscale-0 group-hover/img:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Backstage Fokus</p>
                  </div>
                </div>
                <div className="relative aspect-square bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl group/img">
                  <Image 
                    src="/images/championships/nrw_champion_pose.png"
                    alt="Orkun NRW Champion Pose"
                    fill
                    className="object-cover grayscale group-hover/img:grayscale-0 group-hover/img:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">NRW Landesmeister</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
