import * as React from "react";

export interface WordIconProps {
  /** An emoji (e.g. "🍓") or a text badge prefixed with "#" (e.g. "#17", "#DE"). */
  icon: string;
  /** Font size in px. Default 44. */
  size?: number;
}

/** The picture of a vocabulary word: an emoji, or a bold grape text badge for numbers, days and languages. */
export function WordIcon({ icon, size = 44 }: WordIconProps) {
  if (icon.startsWith("#")) return <span className="vk-num" style={{ fontSize: size * 0.8 }}>{icon.slice(1)}</span>;
  return <span className="vk-emoji" style={{ fontSize: size }}>{icon}</span>;
}
