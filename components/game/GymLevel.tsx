import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { Grid } from "@react-three/drei";
import { useGameStore } from "@/store/useGameStore";
import Station from "./Station";

export default function GymLevel() {
  return (
    <group>
      {/* Floor */}
      <RigidBody type="fixed" colliders="trimesh">
        {/* STREET ZONE (Outside) */}
        <mesh position={[0, -0.1, 20]} receiveShadow>
            <boxGeometry args={[20, 0.2, 40]} />
            <meshStandardMaterial color="#1f2937" /> {/* Dark Asphalt */}
        </mesh>

        {/* GYM FLOOR (Inside) */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#3f3f46" roughness={0.6} metalness={0.1} />
        </mesh>
        
        {/* WALLS */}
        {/* Back Wall */}
        <mesh position={[0, 2.5, -10]} receiveShadow>
            <boxGeometry args={[20, 5, 0.5]} />
            <meshStandardMaterial color="#71717a" />
        </mesh>
        {/* Left Wall */}
        <mesh position={[-10, 2.5, 0]} receiveShadow>
            <boxGeometry args={[0.5, 5, 20]} />
            <meshStandardMaterial color="#71717a" />
        </mesh>
         {/* Right Wall */}
        <mesh position={[10, 2.5, 0]} receiveShadow>
            <boxGeometry args={[0.5, 5, 20]} />
            <meshStandardMaterial color="#71717a" />
        </mesh>
        {/* Front Wall with Doorway */}
        <mesh position={[-6, 2.5, 10]} receiveShadow>
             <boxGeometry args={[8, 5, 0.5]} />
             <meshStandardMaterial color="#52525b" />
        </mesh>
        <mesh position={[6, 2.5, 10]} receiveShadow>
             <boxGeometry args={[8, 5, 0.5]} />
             <meshStandardMaterial color="#52525b" />
        </mesh>
        <mesh position={[0, 4, 10]} receiveShadow>
             <boxGeometry args={[4, 2, 0.5]} />
             <meshStandardMaterial color="#52525b" />
        </mesh>

        {/* NEON SIGN */}
        <mesh position={[0, 4.5, 10.3]}>
            <boxGeometry args={[3, 0.5, 0.1]} />
            <meshStandardMaterial color="#eab308" emissive="#eab308" emissiveIntensity={2} />
        </mesh>

      </RigidBody>
      
      <Grid 
        position={[0, 0.01, 0]} 
        args={[100, 100]} 
        cellSize={1} 
        cellThickness={0.5} 
        cellColor="#3f3f46" 
        sectionSize={5} 
        sectionThickness={1}
        sectionColor="#52525b"
        fadeDistance={30}
        infiniteGrid
      />

      {/* Walls / Bounds */}
      <RigidBody type="fixed">
         {/* Simple boundary walls */}
         <CuboidCollider args={[50, 5, 1]} position={[0, 2.5, -25]} />
         <CuboidCollider args={[50, 5, 1]} position={[0, 2.5, 25]} />
         <CuboidCollider args={[1, 5, 50]} position={[-25, 2.5, 0]} />
         <CuboidCollider args={[1, 5, 50]} position={[25, 2.5, 0]} />
      </RigidBody>

      {/* Stations (Visuals + Triggers handled inside Station for now, but lets make them physical) */}
      <group position={[-3, 0, -2]}>
         <Station position={[0,0,0]} type="workout" />
         {/* Invisible collider for the station trigger area if we wanted physics based triggers */}
      </group>
       <group position={[3, 0, -2]}>
         <Station position={[0,0,0]} type="shake" />
      </group>

      {/* Obstacles / Gym Equipment Shapes */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-8, 1, 5]} castShadow receiveShadow>
            <boxGeometry args={[4, 2, 2]} />
            <meshStandardMaterial color="#27272a" />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
         <mesh position={[8, 0.5, 5]} castShadow receiveShadow>
            <cylinderGeometry args={[2, 2, 1, 32]} />
            <meshStandardMaterial color="#27272a" />
         </mesh>
  
    </RigidBody>

    {/* GYM ENTRY SENSOR */}
    <RigidBody type="fixed" sensor onIntersectionEnter={() => {
        // Simple check: if rigid body interacting is the player (could tag player later)
        // Access store directly via simple workaround or better structure, for now relying on just sensing ANY dynamic body (the player)
        // ideally we check other.rigidBodyObject.name === "player"
        const state = useGameStore.getState();
        if (state.activeQuest === "travel_to_gym") {
            state.setQuest("warmup");
            state.addXP(10); // Reward for arrival
        }
    }}>
        <CuboidCollider args={[4, 1, 1]} position={[0, 1, 10]} />
        <mesh position={[0, 0.1, 10]}>
             <boxGeometry args={[8, 0.1, 2]} />
             <meshStandardMaterial color="#22c55e" transparent opacity={0.3} />
        </mesh>
    </RigidBody>

    </group>
  );
}
