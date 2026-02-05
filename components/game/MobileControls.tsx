import { useEffect, useRef } from "react";
import nipplejs from "nipplejs";
import { useGameStore } from "@/store/useGameStore";

export default function MobileControls() {
  const managerRef = useRef<any>(null);
  const { setJoystickData } = useGameStore((state: any) => ({
    setJoystickData: state.setJoystickData || (() => {}),
  }));

  useEffect(() => {
    const zone = document.getElementById("joystick-zone");
    if (!zone) return;

    managerRef.current = nipplejs.create({
      zone: zone,
      mode: "static",
      position: { left: "50%", top: "50%" },
      color: "white",
      size: 100,
    });

    managerRef.current.on("move", (evt: any, data: any) => {
        // Dispatch event or update store
        // For performance, we might want to use a ref or direct state in the store that doesn't re-render often
        // But for MVP, let's assume we dispatch a custom event or update a mutable store part
        window.dispatchEvent(new CustomEvent("joystick-move", { detail: data }));
    });

    managerRef.current.on("end", () => {
        window.dispatchEvent(new CustomEvent("joystick-end"));
    });

    return () => {
      if (managerRef.current) managerRef.current.destroy();
    };
  }, []);

  return (
    <div 
      id="joystick-zone" 
      className="absolute bottom-10 left-10 w-32 h-32 z-50 touch-none"
    />
  );
}
