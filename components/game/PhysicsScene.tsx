import { Physics, Debug } from "@react-three/rapier";
import { Environment, ContactShadows } from "@react-three/drei";
import GymLevel from "./GymLevel";
import LionController from "./LionController";
import BabyLion from "./BabyLion";

export default function PhysicsScene() {
  return (
    <Physics gravity={[0, -9.81, 0]}>
       {/* Remove OrbitControls from parent if we control camera here, 
           but parent has it. We should disable OrbitControls in page.tsx if using third person camera */}
       
       <GymLevel />
       <LionController />
       
       {/* NPCs (Static or Kinematic for now) */}
       <group position={[2, 0.5, 2]}>
          <BabyLion position={[0,0,0]} />
       </group>
       
       <Environment preset="city" />
       <ambientLight intensity={0.8} />
       
       {/* Debug view (toggleable via Leva ideally, but on for alpha) */}
       {/* <Debug /> */} 
    </Physics>
  );
}
