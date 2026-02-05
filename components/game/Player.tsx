import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";
import { useGameStore } from "@/store/useGameStore";

export default function Player() {
  const ref = useRef<any>();
  const [active, setActive] = useState(false);
  const { level } = useGameStore();

  useFrame((state) => {
    if (ref.current) {
      // Idle animation: slight bobbing
      ref.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      
      // Rotate if active (e.g., training)
      if (active) {
        ref.current.rotation.y += 0.1;
      } else {
        // Slowly face camera or mouse? Just consistent rotation for now
        ref.current.rotation.y += 0.01;
      }
    }
  });

  // Scale player based on level (Muscle Growth Shader simplified)
  const scale = 1 + (level - 1) * 0.1;

  return (
    <mesh 
      ref={ref} 
      position={[0, 0.5, 0]} 
      scale={[scale, scale, scale]}
      onClick={() => setActive(!active)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={active ? "#fbbf24" : "white"} roughness={0.3} metalness={0.2} />
    </mesh>
  );
}
