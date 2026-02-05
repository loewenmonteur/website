import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useGameStore } from "@/store/useGameStore";

export default function ShakeMiniGame() {
  const [power, setPower] = useState(0);
  const [feedback, setFeedback] = useState("");
  const addXP = useGameStore((s) => s.addXP);
  const setQuest = useGameStore((s) => s.setQuest);
  
  const meshRef = useRef<any>();

  useFrame((state, delta) => {
    if (power > 0) {
      setPower(Math.max(0, power - delta * 30)); // Decay power
    }
    if (meshRef.current) {
        meshRef.current.scale.y = 1 + power / 100;
        meshRef.current.rotation.y += power * 0.001;
    }
  });

  const handleClick = (e: any) => {
    e.stopPropagation();
    const newPower = Math.min(100, power + 20);
    setPower(newPower);
    
    if (newPower > 80) {
        addXP(10);
        setFeedback("PERFECT MIX! +10 XP");
        setQuest("warmup"); // Switch quest back
        
        // Reset feedback after delay
        setTimeout(() => setFeedback(""), 1000);
    }
  };

  return (
    <group position={[0, 1, 0]}>
        <mesh
        ref={meshRef}
        onClick={handleClick}
        position={[0, 0.5, 0]}
        castShadow
        >
            <cylinderGeometry args={[0.2, 0.25, 0.8, 16]} />
            <meshStandardMaterial color="#a855f7" transparent opacity={0.8} />
        </mesh>
        
        {/* Lid */}
        <mesh position={[0, 1, 0]}>
             <cylinderGeometry args={[0.22, 0.22, 0.2, 16]} />
             <meshStandardMaterial color="#333" />
        </mesh>

        <Text 
            position={[0, 1.5, 0]} 
            fontSize={0.2} 
            color="#a855f7"
            anchorX="center"
        >
            {feedback || (power > 0 ? `${Math.round(power)}%` : "Tap to Shake!")}
        </Text>
    </group>
  );
}
