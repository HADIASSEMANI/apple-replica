import type { Group } from "three";
import { create } from "zustand";
import type {
  MacBookStoreData,
  FeatureScrollStoreData,
} from "../../types/MacBookStoreData.ts";

const useMacbookStore = create<MacBookStoreData>((set) => ({
  color: "#adb5bd",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: "/videos/feature-1.mp4",
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({ color: "#adb5bd", scale: 0.08, texture: "/videos/feature-1.mp4" }),
}));

const useFeatureScrollStore = create<FeatureScrollStoreData>((set) => ({
  featureRef: null,
  setFeatureRef: (ref: React.RefObject<Group | null>) =>
    set({ featureRef: ref }),
  reset: () => set({ featureRef: null }),
}));

export { useMacbookStore, useFeatureScrollStore };
