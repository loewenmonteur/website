import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RigidBody, CapsuleCollider, RapierRigidBody } from "@react-three/rapier";
import { Vector3, Quaternion } from "three";
import { useGLTF, useAnimations } from "@react-three/drei"; 
import { useGameStore } from "@/store/useGameStore";

export default function LionController() {
  const rigidBody = useRef<RapierRigidBody>(null);
  const playerRef = useRef<any>(null);
  const { camera } = useThree();
  const [movement, setMovement] = useState({ x: 0, z: 0 });
  const [jumping, setJumping] = useState(false);
  const [isTraining, setTraining] = useState(false);
  
  // Connect to store for saving game state (e.g. position persistence)
  const { setPlayerPosition } = useGameStore();

  // Joystick listener
  useEffect(() => {
    const handleJoystick = (e: any) => {
        const { vector } = e.detail;
        if (vector) {
            setMovement({ x: vector.x, z: -vector.y });
        }
    };
    const handleJoystickEnd = () => {
        setMovement({ x: 0, z: 0 });
    };

    window.addEventListener("joystick-move", handleJoystick);
    window.addEventListener("joystick-end", handleJoystickEnd);
    return () => {
        window.removeEventListener("joystick-move", handleJoystick);
        window.removeEventListener("joystick-end", handleJoystickEnd);
    }
  }, []);

  // Keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "w") setMovement(prev => ({ ...prev, z: -1 }));
        if (e.key === "s") setMovement(prev => ({ ...prev, z: 1 }));
        if (e.key === "a") setMovement(prev => ({ ...prev, x: -1 }));
        if (e.key === "d") setMovement(prev => ({ ...prev, x: 1 }));
        if (e.code === "Space") setJumping(true);
        
        if (e.code === "KeyE") {
             setTraining(true);
             setTimeout(() => setTraining(false), 1000); // 1s training burst
        }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === "w" || e.key === "s") setMovement(prev => ({ ...prev, z: 0 }));
        if (e.key === "a" || e.key === "d") setMovement(prev => ({ ...prev, x: 0 }));
        if (e.code === "Space") setJumping(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
    }
  }, []);

  useFrame((state) => {
    if (!rigidBody.current) return;

    // Movement Logic
    const speed = 5;
    const currentTranslation = rigidBody.current.translation();
    
    // Sync position to store occasionally
    if (state.clock.elapsedTime % 1 < 0.1) {
        setPlayerPosition([currentTranslation.x, currentTranslation.y, currentTranslation.z]);
    }
    
    // True Third Person Logic:
    const camForward = new Vector3();
    camera.getWorldDirection(camForward);
    camForward.y = 0;
    camForward.normalize();
    
    const camRight = new Vector3();
    camRight.crossVectors(camForward, new Vector3(0, 1, 0)); // Cross Y-Up to get Right

    const moveDir = new Vector3();
    moveDir.addScaledVector(camForward, -movement.z); // -z from input means forward
    moveDir.addScaledVector(camRight, movement.x);
    
    // Normalize if moving roughly diagonal
    if (moveDir.length() > 0.1) moveDir.normalize();

    // Apply Velocity
    const vel = rigidBody.current.linvel();
    rigidBody.current.setLinvel({ 
        x: moveDir.x * speed, 
        y: vel.y, 
        z: moveDir.z * speed 
    }, true);

    // Jump
    if (jumping && Math.abs(vel.y) < 0.1) { // Simple ground check
        rigidBody.current.applyImpulse({ x: 0, y: 5, z: 0 }, true);
        setJumping(false); // Reset jump flag immediately after impulse
    }

    // Training Animation
    if (isTraining && playerRef.current) {
         // Pump animation
         const s = 1 + Math.sin(state.clock.elapsedTime * 10) * 0.1;
         playerRef.current.scale.set(s, s, s);
    } else if (playerRef.current) {
         playerRef.current.scale.set(1, 1, 1);
    }

    // Rotation: Face movement direction
    if (moveDir.length() > 0.1 && !isTraining) {
        const targetRotation = Math.atan2(moveDir.x, moveDir.z);
        // Lerp rotation
        const q = new Quaternion();
        q.setFromAxisAngle(new Vector3(0, 1, 0), targetRotation);
        rigidBody.current.setRotation(q, true);
    }

    // Camera Follow
    const offset = new Vector3(0, 4, 6); 
    const t = new Vector3(currentTranslation.x, currentTranslation.y, currentTranslation.z);
    const camPos = t.clone().add(offset);
    state.camera.position.lerp(camPos, 0.1);
    state.camera.lookAt(t);

  });

  return (
    <RigidBody 
        ref={rigidBody} 
        position={[0, 2, 30]}  // Start outside
        colliders={false} 
        enabledRotations={[false, true, false]} // Lock X/Z rotation
        friction={1}
    >
        <CapsuleCollider args={[0.5, 0.5]} position={[0, 0.75, 0]} />
        
        {/* Character Model */}
        <group ref={playerRef}>
             <LionModel isWalk={movement.x !== 0 || movement.z !== 0} isTraining={isTraining} />
        </group>
    </RigidBody>
  );
}

// Separate component for model to handle GLTF loading cleanly
function LionModel({ isWalk, isTraining }: { isWalk: boolean, isTraining: boolean }) {
  // GAME DEV OPS: Asset Pipeline - Loading 'Lion' (Fox placeholder)
  // Ensure the model exists at /models/lion.glb
  const group = useRef<any>(null);
  const { scene, animations } = useGLTF("/models/lion.glb"); 
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
     // Animation Mapping (Fox specific for now)
     // Survey = Idle, Walk = Walk, Run = Run
     const idleAction = actions["Survey"]; 
     const walkAction = actions["Walk"];
     const runAction = actions["Run"]; // detailed run

     const current = isTraining ? runAction : isWalk ? walkAction : idleAction;
     
     // Fade transition
     Object.values(actions).forEach(action => {
         if (action !== current && action?.isRunning()) action.fadeOut(0.3);
     });

     if (current) {
         current.reset().fadeIn(0.3).play();
         if (isTraining) current.timeScale = 2.0; // Fast motion for training
         else current.timeScale = 1.0;
     }

     return () => {
         current?.fadeOut(0.3);
     };
  }, [isWalk, isTraining, actions]);

  // Dynamic color for "Juice" (visual feedback) - tinting the model
  // Note: Primitives (skinned meshes) might need traverse to set color, 
  // but for now we rely on the model's texture. We can add a 'glow' mesh if needed.
  
  return (
    <group ref={group} dispose={null}>
        {/* Scale correction for Fox model to match our capsule size */}
        <primitive object={scene} scale={[0.02, 0.02, 0.02]} position={[0, -0.6, 0]} rotation={[0, Math.PI, 0]} />
        
        {/* Helper glow for Training state */}
        {isTraining && (
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.5, 16, 16]} />
                <meshBasicMaterial color="#fbbf24" transparent opacity={0.3} />
            </mesh>
        )}
    </group>
  );
}
