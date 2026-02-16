"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/gallery/trafo/hf_20260216_185749_911e75e6-d208-4584-bc92-a5613e217fae.png",
  "/images/gallery/trafo/hf_20260216_185805_fd8e9274-9e07-44fd-b509-591781afe3ab.png",
  "/images/gallery/trafo/hf_20260216_185814_62996e2d-899a-470e-82ce-8b111edc4a34.png",
  "/images/championships/german_champion_pose.png",
  "/images/trafo/training_pull.png",
  "/images/championships/nrw_stage_overview.png",
  "/images/trafo/training_push.png",
];

export default function TrafoGallery() {
  return (
    <section className="py-24 bg-zinc-950 overflow-hidden relative">
      {/* Background Gradients for smooth fade */}
      <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-zinc-950 to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-zinc-950 to-transparent z-10" />

      <div className="flex">
        {/* First Loop */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-4 pr-4 shrink-0"
        >
          {images.map((src, index) => (
            <div
              key={`gallery-first-${index}`}
              className="relative w-[300px] md:w-[450px] aspect-4/5 rounded-2xl overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all duration-500 group"
            >
              <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
              <Image
                src={src}
                alt={`Trafo Impression ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, 450px"
              />
            </div>
          ))}
        </motion.div>

        {/* Second Loop (Duplicate) */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-4 pr-4 shrink-0"
        >
          {images.map((src, index) => (
            <div
              key={`gallery-second-${index}`}
              className="relative w-[300px] md:w-[450px] aspect-4/5 rounded-2xl overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all duration-500 group"
            >
              <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
              <Image
                src={src}
                alt={`Trafo Impression ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, 450px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
