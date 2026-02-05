import { create } from "zustand";

interface GameState {
  xp: number;
  level: number;
  activeQuest: string;
  playerPosition: [number, number, number];
  interactionTarget: string | null;
  addXP: (amount: number) => void;
  setQuest: (quest: string) => void;
  setPlayerPosition: (pos: [number, number, number]) => void;
  setInteractionTarget: (target: string | null) => void;
}

export const useGameStore = create<GameState>((set) => ({
  xp: 0,
  level: 1,
  activeQuest: "travel_to_gym",
  playerPosition: [0, 0, 25], // Start outside on the street (Z=25)
  interactionTarget: null,

  addXP: (amount: number) =>
    set((state) => {
      const newXP = state.xp + amount;
      const newLevel = Math.floor(newXP / 100) + 1;
      return { xp: newXP, level: newLevel };
    }),

  setQuest: (quest: string) => set({ activeQuest: quest }),
  setPlayerPosition: (pos) => set({ playerPosition: pos }),
  setInteractionTarget: (target) => set({ interactionTarget: target }),
}));
