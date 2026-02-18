"use client";

import { useRef, useState } from "react";
import { Droplets, Flame, Building2, Key, Construction, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PartnerSection() {
  return (
    <section className="py-32 px-6 bg-zinc-950 border-t border-zinc-900/30 relative overflow-hidden">
      {/* Background Ambience & Noise */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#18181b_0%,#09090b_60%)] -z-10" />

      
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6 relative z-10">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500 drop-shadow-md">Expansion</h2>
          <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">Neue Horizonte</h3>
          <p className="text-zinc-500 text-lg font-bold max-w-2xl mx-auto leading-relaxed">
            Wir erweitern das Territorium. Spezialisierte Lösungen für SHK und Immobilienwirtschaft in Vorbereitung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          <SpotlightCard 
            theme="blue"
            icon={<Droplets className="w-6 h-6 text-blue-500" />}
            badge="Coming Soon 2026"
            title="Sanitär, Heizung"
            highlight="Klima"
            description="Meisterschaft im Handwerk. Prozesse, die fließen wie Wasser und brennen wie Feuer."
            footerIcons={[<Flame key="f" className="w-5 h-5" />, <Construction key="c" className="w-5 h-5" />]}
            footerText="System-Integration"
          />

          <SpotlightCard 
            theme="yellow"
            icon={<Building2 className="w-6 h-6 text-yellow-500" />}
            badge="In Planung"
            title="Real Estate"
            highlight="Tycoon"
            description="Vom Objekt zur Rendite. Wir bauen das Fundament für dein Immobilien-Imperium."
            footerIcons={[<Key key="k" className="w-5 h-5" />, <Building2 key="b" className="w-5 h-5" />]}
            footerText="Pre-Register Soon"
          />

        </div>
      </div>
    </section>
  );
}

function SpotlightCard({ 
  theme = "blue", 
  icon, 
  badge, 
  title, 
  highlight, 
  description, 
  footerIcons, 
  footerText 
}: {
  theme: "blue" | "yellow";
  icon: React.ReactNode;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  footerIcons: React.ReactNode[];
  footerText: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const accentColor = theme === "blue" ? "59, 130, 246" : "234, 179, 8"; // Tailwind blue-500 / yellow-500
  const borderColor = theme === "blue" ? "border-blue-500/20" : "border-yellow-500/20";
  const badgeBg = theme === "blue" ? "bg-blue-500/10" : "bg-yellow-500/10";
  const badgeBorder = theme === "blue" ? "border-blue-500/20" : "border-yellow-500/20";
  const badgeText = theme === "blue" ? "text-blue-400" : "text-yellow-500";
  const highlightText = theme === "blue" ? "text-blue-500" : "text-yellow-500";

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-[2.5rem] border border-zinc-800 bg-zinc-900/40 overflow-hidden group transition-colors duration-500`}
    >
      {/* Spotlight Canvas */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(${accentColor}, 0.15), transparent 40%)`,
        }}
      />
      {/* Border Highlight via Spotlight */}
      <div 
         className="absolute inset-0 z-0 rounded-[2.5rem] pointer-events-none transition-opacity duration-300"
         style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(${accentColor}, 0.3), transparent 40%)`,
            maskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
            maskComposite: `exclude`,
            WebkitMaskComposite: `xor`,
            padding: '1px' // Border width
         }}
      />

      <div className="relative z-10 p-8 md:p-12 flex flex-col h-full justify-between space-y-8">
        <div className="flex justify-between items-start">
          <div className={`w-14 h-14 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-center backdrop-blur-sm group-hover:${borderColor} transition-colors duration-500 shadow-lg`}>
            {icon}
          </div>
          <div className={`px-3 py-1 rounded-full ${badgeBg} border ${badgeBorder} ${badgeText} text-[10px] font-black uppercase tracking-widest backdrop-blur-sm`}>
            {badge}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tighter leading-[0.9]">
            {title}<br /><span className={highlightText}>{highlight}</span>
          </h4>
          <p className="text-zinc-500 font-bold leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-4 border-t border-zinc-800/50 flex items-center gap-4 text-zinc-600">
          {footerIcons}
          <span className="text-xs font-black uppercase tracking-widest ml-auto group-hover:text-zinc-400 transition-colors">
            {footerText}
          </span>
        </div>
      </div>
    </div>
  );
}
