import * as React from "react";
import { charSVG } from "../art/character";

export type HairStyle = "lang" | "carre" | "courts" | "chignon" | "couettes" | "queue" | "boucles" | "frange" | "ondule" | "tresses" | "macarons" | "pique" | "afro" | "iroquois" | "chauve";

/** Everything that makes up a chibi paper-doll figure. Colours are hex strings. */
export interface CharacterLook {
  /** Skin tone index 0 (lightest) to 5 (darkest). */
  skin: number;
  hair: HairStyle;
  hairC: string;
  eyes: "punkt" | "froh" | "wimpern" | "zwinker";
  mouth: "smile" | "grin" | "o" | "zunge";
  blush: boolean;
  top: "tshirt" | "pull" | "debardeur" | "robe" | "sweat" | "veste";
  topC: string;
  /** Emoji printed on the top, or "" for none. */
  motif: string;
  /** Ignored while `top` is `robe` (a dress). */
  bottom: "pantalon" | "jupe" | "short";
  bottomC: string;
  shoes: "baskets" | "bottes" | "chaussons";
  shoesC: string;
  acc: "none" | "noeud" | "lunettes" | "casquette" | "fleur" | "couronne" | "chat" | "casque" | "sac";
  accC: string;
}

/** Ready-made figures from the game. */
export const characterPresets: Record<"lea" | "mia" | "noa" | "zoe", CharacterLook> = {
  lea: { skin: 1, hair: "carre", hairC: "#F6D58E", eyes: "punkt", mouth: "grin", blush: true, top: "pull", topC: "#7FA7E8", motif: "🙂", bottom: "pantalon", bottomC: "#A7A7B3", shoes: "baskets", shoesC: "#FFFFFF", acc: "none", accC: "#FF8FB8" },
  mia: { skin: 3, hair: "lang", hairC: "#8A5A3B", eyes: "froh", mouth: "smile", blush: true, top: "robe", topC: "#FF8FB8", motif: "🍓", bottom: "jupe", bottomC: "#FFFFFF", shoes: "chaussons", shoesC: "#FFFFFF", acc: "noeud", accC: "#FF8FB8" },
  noa: { skin: 4, hair: "afro", hairC: "#1F1A24", eyes: "zwinker", mouth: "grin", blush: false, top: "sweat", topC: "#9B6CF2", motif: "⭐", bottom: "short", bottomC: "#2E2A36", shoes: "baskets", shoesC: "#FFD23F", acc: "casque", accC: "#2EC4C4" },
  zoe: { skin: 0, hair: "macarons", hairC: "#FF8FB8", eyes: "wimpern", mouth: "smile", blush: true, top: "veste", topC: "#2EC4C4", motif: "🌈", bottom: "jupe", bottomC: "#9B6CF2", shoes: "bottes", shoesC: "#FFFFFF", acc: "chat", accC: "#FF8FB8" },
};

/** Which part of the figure to frame. `full` is the whole body; the others are the close-ups used by the avatar studio's option tiles. */
export type CharacterCrop = "full" | "head" | "hair" | "eyes" | "mouth" | "top" | "bottom" | "shoes" | "acc";

const VB: Record<CharacterCrop, string> = {
  full: "-10 -22 220 372", head: "20 -4 160 170", hair: "10 -6 180 180", eyes: "50 66 100 50", mouth: "70 96 60 40",
  top: "36 128 128 160", bottom: "40 214 120 76", shoes: "56 256 88 56", acc: "0 -10 200 260",
};

export interface CharacterProps {
  /** The figure's look. Missing fields fall back to the "lea" preset. */
  look?: Partial<CharacterLook>;
  /** Rendered height in px. Default 240. */
  height?: number;
  /** Framing. `full` body (default), `head` for avatars, or a close-up such as `hair`, `top`, `shoes`. */
  crop?: CharacterCrop;
  /** Breathing and blinking idle animation. Default true. */
  animated?: boolean;
}

/** A dress-up chibi figure (big head, small body) with thick outlines and flat colours, drawn as SVG. */
export function Character({ look, height = 240, crop = "full", animated = true }: CharacterProps) {
  const c = { ...characterPresets.lea, ...(look || {}) };
  const vb = VB[crop] || VB.full;
  return <span className={crop === "full" ? "vk-character" : `vk-character vk-character--crop vk-character--${crop}`} style={{ height }} role="img" aria-label="Figur" dangerouslySetInnerHTML={{ __html: charSVG(c, vb, animated && crop === "full" ? "breathe" : "") }} />;
}
