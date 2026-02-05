import { useRef, useState, useEffect } from "react";
import { useGameStore } from "@/store/useGameStore";
import { Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import ShakeMiniGame from "./ShakeMiniGame";

export default function Station({ position, type }: { position: [number, number, number], type: "workout" | "shake" }) {
  const addXP = useGameStore((s) => s.addXP);
  const setQuest = useGameStore((s) => s.setQuest);
  const activeQuest = useGameStore((s) => s.activeQuest);
  const playerPosition = useGameStore((s) => s.playerPosition);
  
  const [isClose, setClose] = useState(false);
  const meshRef = useRef<any>();
  const stationPos = new Vector3(...position);

  // Check distance
  useFrame((state) => {
    if (meshRef.current) {
         // Visual bobbing
         meshRef.current.position.y = 0.2 + Math.sin(state.clock.elapsedTime * 5) * 0.1;
    }
    
    // Proximity Check
    const playerVec = new Vector3(...playerPosition);
    const dist = stationPos.distanceTo(playerVec);
    setClose(dist < 3); // 3 units interaction range
  });

  // Handle 'E' key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
        if (e.code === "KeyE" && isClose && type === "workout") {
            addXP(25);
            setQuest("shake");
        }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isClose, type, addXP, setQuest]);

  const handleClick = () => {
    if (type === "workout") {
        addXP(25);
        setQuest("shake"); // Next quest
    }
  };

  const isTarget = (type === "workout" && activeQuest === "warmup") || (type === "shake" && activeQuest === "shake");

  return (
    <group position={position}>
      {/* Platform */}
      <mesh 
        receiveShadow 
        position={[0, 0.05, 0]}
      >
        <cylinderGeometry args={[1.2, 1.4, 0.1, 32]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Interactive Object */}
      {type === "workout" ? (
          <group>
            <mesh
                ref={meshRef}
                onClick={handleClick} // Fallback click
                position={[0, 0.2, 0]}
                castShadow
            >
                <boxGeometry args={[1.5, 0.1, 0.8]} />
                <meshStandardMaterial color={isClose ? "#ef4444" : "#991b1b"} />
            </mesh>
            
            {/* Proximity Prompt */}
            {isClose && (
                <Billboard position={[0, 2, 0]}>
                    <Text fontSize={0.3} color="white" outlineWidth={0.02} outlineColor="black">
                        Press E to Train
                    </Text>
                    <Text position={[0, -0.3, 0]} fontSize={0.15} color="#fbbf24">
                        (+25 XP)
                    </Text>
                </Billboard>
            )}
          </group>
      ) : (
          <ShakeMiniGame />
      )}

      {/* Quest Marker */}
      {isTarget && (
          <mesh position={[0, 2.5, 0]}>
              <coneGeometry args={[0.2, 0.5, 4]} />
              <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={2} />
          </mesh>
      )}
    </group>
  );
}
