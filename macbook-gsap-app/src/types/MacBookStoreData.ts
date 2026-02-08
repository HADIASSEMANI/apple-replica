import type { Group } from "three";
import type { RefObject } from "react";

export interface MacBookStoreData {
  color: string;
  scale: number;
  texture: string;
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  setTexture: (texture: string) => void;
  reset: () => void;
}

export interface ModelSwitcherProps {
  scale: number;
  isMobile: boolean;
}

export interface FeatureScrollStoreData {
  featureRef: RefObject<Group | null> | null;
  setFeatureRef: (ref: RefObject<Group | null>) => void;
  reset: () => void;
}
