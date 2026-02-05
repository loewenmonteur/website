"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, Stars } from "@react-three/drei";
import PhysicsScene from "@/components/game/PhysicsScene";
import { useGameStore } from "@/store/useGameStore";
import dynamic from "next/dynamic";

const MobileControls = dynamic(() => import("@/components/game/MobileControls"), { 
  ssr: false 
});

function UIOverlay() {
  const { xp, level, activeQuest } = useGameStore();
  
  return (
    <>
      <div className="absolute top-4 left-4 z-10 font-mono text-white pointer-events-none select-none">
        <div className="bg-black/50 p-4 rounded-xl backdrop-blur-md border border-white/10 space-y-2">
          <h1 className="text-xl font-black uppercase text-yellow-500">LionsGym <span className="text-xs text-white opacity-50">PHYSICS ALPHA</span></h1>
          
          <div className="flex items-center gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-400">Level</div>
              <div className="text-2xl font-bold">{level}</div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-400">XP</div>
              <div className="text-2xl font-bold text-blue-400">{xp}</div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10">
            <div className="text-[10px] uppercase tracking-widest text-zinc-400">Quest</div>
            <div className="text-sm font-bold text-green-400">{activeQuest === "warmup" ? "Warm Up!" : "Protein Time!"}</div>
          </div>
        </div>
        
        <div className="absolute top-[20vh] left-0 bg-black/50 p-4 rounded-xl backdrop-blur-md border border-white/10 max-w-[200px]">
          <p className="text-xs text-zinc-300">
            <span className="text-yellow-500 font-bold">Steuerung:</span><br/>
            Desktop: WASD + Space<br/>
            Mobile: Joystick (Links)
          </p>
        </div>
      </div>
      
      {/* Mobile Controls Overlay */}
      <MobileControls />
    </>
  );
}

export default function GamePage() {
  return (
    <div className="w-full h-screen bg-zinc-950 relative overflow-hidden">
      <UIOverlay />
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
        <Sky sunPosition={[100, 20, 100]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 20, 10]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={[2048, 2048]} 
        />
        <PhysicsScene />
      </Canvas>
    </div>
  );
}
