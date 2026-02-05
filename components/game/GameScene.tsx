import { Grid, ContactShadows, Environment } from "@react-three/drei";
import Player from "./Player";
import BabyLion from "./BabyLion";
import Station from "./Station";

export default function GameScene() {
  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#18181b" roughness={0.8} metalness={0.2} />
      </mesh>
      
      <Grid 
        position={[0, 0.01, 0]} 
        args={[50, 50]} 
        cellSize={1} 
        cellThickness={0.5} 
        cellColor="#3f3f46" 
        sectionSize={5} 
        sectionThickness={1}
        sectionColor="#52525b"
        fadeDistance={20}
        infiniteGrid
      />

      <ContactShadows resolution={1024} scale={50} blur={2} opacity={0.5} far={10} color="#000000" />

      {/* Characters */}
      <Player />
      <BabyLion position={[2, 0.5, 2]} />

      {/* Stations */}
      <Station position={[-3, 0, -2]} type="workout" />
      <Station position={[3, 0, -2]} type="shake" />
      
      {/* Decorative Gym Elements (Simple Geometry) */}
      <mesh position={[-5, 1, 5]} castShadow receiveShadow>
         <boxGeometry args={[2, 2, 2]} />
         <meshStandardMaterial color="#27272a" />
      </mesh>
      <mesh position={[5, 1, 5]} castShadow receiveShadow>
         <boxGeometry args={[2, 4, 2]} />
         <meshStandardMaterial color="#27272a" />
      </mesh>

    </>
  );
}
