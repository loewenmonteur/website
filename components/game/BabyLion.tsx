import { Text, Float } from "@react-three/drei";
import { useGameStore } from "@/store/useGameStore";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function BabyLion({ position }: { position: [number, number, number] }) {
  const quest = useGameStore((s) => s.activeQuest);
  const groupRef = useRef<any>();

  useFrame((state) => {
    if (groupRef.current) {
        groupRef.current.lookAt(0, 0.5, 0); // Always look at world center (player)
    }
  });

  return (
    <group position={position} ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#f59e0b" roughness={0.4} />
          <mesh position={[0.2, 0.2, 0.3]}>
             <sphereGeometry args={[0.05, 16, 16]} />
             <meshStandardMaterial color="black" />
          </mesh>
          <mesh position={[-0.2, 0.2, 0.3]}>
             <sphereGeometry args={[0.05, 16, 16]} />
             <meshStandardMaterial color="black" />
          </mesh>
        </mesh>
      </Float>

      <Text 
        position={[0, 1.2, 0]} 
        fontSize={0.25} 
        color="white" 
        anchorX="center" 
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="black"
        font="/fonts/Inter-Bold.ttf" // Assuming standard font availability, might fallback
      >
        {quest === "warmup"
          ? "Zeit fürs Training! 💪"
          : "Protein Shake! 🥤"}
      </Text>
    </group>
  );
}
