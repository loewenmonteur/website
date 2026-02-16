"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Clock,
  TrendingUp,
  Dumbbell,
  Zap,
  Wallet,
  Utensils,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CommunityView from "./CommunityView";

/* ------------------------------------------------------------------ */
/*  Scroll Reveal Wrapper                                              */
/* ------------------------------------------------------------------ */
function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const variants = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    scale: {
      hidden: { opacity: 0, scale: 0.85 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hidden EARLYBIRD Hint                                              */
/* ------------------------------------------------------------------ */
function EarlyHint({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 2.5, delay: 1.2 }}
      className={`font-mono select-none ${className}`}
    >
      {text}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature Card                                                       */
/* ------------------------------------------------------------------ */
function FeatureCard({
  icon: Icon,
  title,
  desc,
  delay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="p-5 md:p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col items-center text-center gap-3 backdrop-blur-sm hover:border-yellow-500/30 transition-colors group">
        <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors">
          <Icon className="w-4 h-4 text-yellow-500" />
        </div>
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">
            {title}
          </h4>
          {desc && <p className="text-xs text-zinc-400">{desc}</p>}
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Main TrafoSection Component                                        */
/* ------------------------------------------------------------------ */
export default function TrafoSection() {
  return (
    <div className="w-full space-y-0">
      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  TRAINING SECTION                                          */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="relative group overflow-hidden">
        {/* BG Image */}
        <div className="absolute inset-0 h-80 overflow-hidden z-0">
          <Image
            src="/images/gateway_work_new.png"
            alt="Training Background"
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover object-top opacity-25 group-hover:opacity-40 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
        </div>

        <div className="relative z-10 px-4 md:px-12 py-12 md:py-16 border-b border-zinc-800/30">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-2">
              Dein Training
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-zinc-500 text-sm md:text-base mb-8 max-w-2xl">
              Effektiv & Machbar. Ein System, das in deinen vollen Alltag passt,
              statt ihn zu sprengen.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <FeatureCard
              icon={Clock}
              title="Zeiteffizient"
              desc="45 Min. pro Einheit"
              delay={0.15}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Struktur"
              desc="Klarer, simpler Plan"
              delay={0.25}
            />
            <FeatureCard
              icon={Dumbbell}
              title="Muskelaufbau"
              desc="Sichtbare Ergebnisse"
              delay={0.35}
            />
          </div>

          {/* 🔑 Hidden Hint #1 */}
          <div className="mt-8 flex justify-end">
            <EarlyHint
              text="E•A•R•L•Y"
              className="text-[9px] text-zinc-800 tracking-[0.5em]"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  NUTRITION SECTION                                         */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="relative group overflow-hidden">
        <div className="absolute inset-0 h-80 overflow-hidden z-0">
          <Image
            src="/images/nutrition_father_a.png"
            alt="Nutrition Background"
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-700 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
        </div>

        <div className="relative z-10 px-4 md:px-12 py-12 md:py-16 border-b border-zinc-800/30">
          <Reveal direction="left">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-2">
              Deine Energie
            </h3>
          </Reveal>
          <Reveal delay={0.1} direction="left">
            <p className="text-zinc-500 text-sm md:text-base mb-8 max-w-2xl">
              Keine Verbote, kein Hungern. Einfache Ernährung für mehr Leistung
              im Job und Familie.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <FeatureCard
              icon={Zap}
              title="Power"
              desc="Energie für den Tag"
              delay={0.15}
            />
            <FeatureCard
              icon={Wallet}
              title="Günstig"
              desc="Schont den Geldbeutel"
              delay={0.25}
            />
            <FeatureCard
              icon={Utensils}
              title="Familientauglich"
              desc="Alle essen mit"
              delay={0.35}
            />
          </div>

          {/* 🔑 Hidden Hint #2 — fake promo code flash */}
          <Reveal delay={0.6}>
            <div className="mt-8 flex justify-center">
              <div className="px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800/50">
                <span className="text-[8px] md:text-[9px] font-mono text-zinc-700 tracking-wider">
                  ••• <span className="text-yellow-500/30">B•I•R•D</span> •••
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  MINDSET SECTION                                           */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="relative group overflow-hidden">
        <div className="absolute inset-0 h-80 overflow-hidden z-0">
          <Image
            src="/images/championships/orkun_dbfv_win.jpg"
            alt="Mindset Background"
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover object-top opacity-15 group-hover:opacity-25 transition-opacity duration-700 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
        </div>

        <div className="relative z-10 px-4 md:px-12 py-12 md:py-16 border-b border-zinc-800/30">
          <Reveal direction="right">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-2">
              Rückgrat
            </h3>
          </Reveal>
          <Reveal delay={0.1} direction="right">
            <p className="text-zinc-500 text-sm md:text-base mb-8 max-w-2xl">
              Haltung bewahren, wenn niemand zusieht.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {["Disziplin", "Verantwortung", "Konstanz"].map((item, i) => (
              <Reveal key={item} delay={0.15 + i * 0.1}>
                <div className="p-5 md:p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col items-center text-center gap-3 backdrop-blur-sm hover:border-yellow-500/30 transition-colors group/card">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 group-hover/card:bg-yellow-500/20 transition-colors">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                  </div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">
                    {item}
                  </h4>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 🔑 Hidden Hint #3 — divider with hidden text */}
          <div className="mt-10 flex items-center gap-3 justify-center">
            <div className="h-px w-16 bg-zinc-800" />
            <EarlyHint
              text="EARLYBIRD"
              className="text-[7px] text-zinc-900 tracking-[0.6em] uppercase"
            />
            <div className="h-px w-16 bg-zinc-800" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  COMMUNITY SECTION                                         */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="px-4 md:px-12 py-12 md:py-16 border-b border-zinc-800/30">
        <Reveal direction="scale">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-2">
            Teil des Rudels
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-zinc-500 text-sm md:text-base mb-8 max-w-2xl">
            Kein VIP Status. Löwen Member.
          </p>
        </Reveal>
        <Reveal delay={0.2} direction="scale">
          <CommunityView />
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  CTA FOOTER                                                */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="px-4 md:px-12 py-16 md:py-20 text-center bg-gradient-to-b from-zinc-950 to-black">
        <Reveal direction="scale">
          <p className="text-yellow-500 text-xs font-black uppercase tracking-widest mb-2">
            Launch: Mai 2026
          </p>
          <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-8">
            Bis dahin Zugang sichern
          </p>
          <Link
            href="/checkout"
            className="inline-block px-8 md:px-10 py-3 md:py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-yellow-500/20 hover:scale-105 text-sm md:text-base"
          >
            Zugang sichern
          </Link>
        </Reveal>

        {/* 🔑 Hidden Hint #4 — the final nudge */}
        <Reveal delay={0.8}>
          <p className="mt-10 text-[9px] text-zinc-800 italic max-w-xs mx-auto leading-relaxed">
            Kennst du das Codewort? Die frühen Löwen wissen Bescheid.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
