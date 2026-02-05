import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RigidBody, CapsuleCollider, useRapier, RapierRigidBody } from "@react-three/rapier";
import { Vector3, Quaternion, Euler } from "three";
import { useKeyboardControls } from "@react-three/drei";
import { useGameStore } from "@/store/useGameStore";

// Helper for keyboard controls if not using Drei's KeyboardControls wrapper
// But we will use a simple event listener approach for MVP mixed with joystick
export default function LionController() {
  const rigidBody = useRef<RapierRigidBody>(null);
  const playerRef = useRef<any>(null);
  const { camera } = useThree();
  const [movement, setMovement] = useState({ x: 0, z: 0 });
  const [jumping, setJumping] = useState(false);
  const [isTraining, setTraining] = useState(false);
  const { setPlayerPosition } = useGameStore();

  // Joystick listener
  useEffect(() => {
    const handleJoystick = (e: any) => {
        const { vector } = e.detail;
        if (vector) {
            // Invert Y because screen Y is opposite to 3D Z usually in top-down, 
            // but for third person forward is forward.
            // Joystick up (y positive) -> Move Forward (z negative)
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
             // Check store for target? Or just toggle animation for visual feedback for now?
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

  useFrame((state, delta) => {
    if (!rigidBody.current) return;

    // Movement Logic
    const speed = 5;
    const currentTranslation = rigidBody.current.translation();
    
    // Calculate direction relative to camera (simplified for MVP: movement is absolute world space for now, 
    // to make "W" always go "North". True third person requires camera forward projection).
    
    // True Third Person Logic:
    // 1. Get Camera Forward vector (projected to XZ plane)
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
        // Lerp rotation for smoothness (simplified here, just setting rotation)
        const q = new Quaternion();
        q.setFromAxisAngle(new Vector3(0, 1, 0), targetRotation);
        rigidBody.current.setRotation(q, true);
    }

    // Camera Follow
    // Camera should stay behind the player, usually smoothly lerped
    const offset = new Vector3(0, 4, 6); // Offset behind (Z+) and up (Y+)
    // Rotate offset by player rotation if we want "Chase Cam", 
    // OR just keep fixed offset and look at player if we want "Zelda/Diablo style".
    // Let's do a simple Smooth Follow Cam that keeps distance.
    
    const t = new Vector3(currentTranslation.x, currentTranslation.y, currentTranslation.z);
    
    // Target camera position
    const camPos = t.clone().add(offset);
    
    // Smoothly lerp camera
    state.camera.position.lerp(camPos, 0.1);
    state.camera.lookAt(t);

  });

  return (
    <RigidBody 
        ref={rigidBody} 
        position={[0, 2, 0]} 
        colliders={false} 
        enabledRotations={[false, true, false]} // Lock X/Z rotation (don't tip over)
        friction={1}
    >
        <CapsuleCollider args={[0.5, 0.5]} position={[0, 0.75, 0]} />
        
        {/* Visuals - Placeholder Lion */}
        <group ref={playerRef}>
            {/* Body */}
            <mesh position={[0, 0.5, 0]} castShadow>
                <boxGeometry args={[0.8, 0.8, 1.2]} />
                <meshStandardMaterial color="#fbbf24" />
            </mesh>
            {/* Head */}
            <mesh position={[0, 1.2, 0.6]} castShadow>
                <boxGeometry args={[0.6, 0.6, 0.6]} />
                <meshStandardMaterial color="#fbbf24" />
            </mesh>
            {/* Mane */}
            <mesh position={[0, 1.2, 0.5]}>
                 <boxGeometry args={[0.7, 0.7, 0.5]} />
                 <meshStandardMaterial color="#b45309" />
            </mesh>
        </group>
    </RigidBody>
  );
}
