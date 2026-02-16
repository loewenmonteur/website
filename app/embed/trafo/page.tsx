"use client";

import TrafoBox from "@/components/trafo/TrafoBox";
import { useEffect } from "react";

export default function TrafoEmbedPage() {
  
  // Auto-resize handling for iframe (optional, requires postMessage to parent)
  useEffect(() => {
    // We force the box open in embed mode? 
    // Or we let the user open it. 
    // User requested: "die seite sich einfach erwtiert also inpage soll alle passieren"
    // So default behavior is fine.
  }, []);

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
       {/* Transparent container for embed */}
       <TrafoBox />
    </div>
  );
}
