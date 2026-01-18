import { create } from 'zustand';
import type { MacBookStoreData } from "../../types/MacBookStoreData.ts";

const useMacbookStore = create<MacBookStoreData>((set) => ({
    color: '#adb5bd',
    setColor: (color) => set({ color }),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    reset: () => set({ color: '#adb5bd', scale: 0.08 }),
}))

export default useMacbookStore;