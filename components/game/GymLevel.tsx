import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { Grid } from "@react-three/drei";
import Station from "./Station";

export default function GymLevel() {
  return (
    <group>
      {/* Floor */}
      <RigidBody type="fixed" colliders={false}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#3f3f46" roughness={0.6} metalness={0.1} />
        </mesh>
        <CuboidCollider args={[50, 0.1, 50]} position={[0, -0.1, 0]} />
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
    </group>
  );
}
