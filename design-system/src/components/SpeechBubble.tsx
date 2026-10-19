import * as React from "react";

export interface SpeechBubbleProps {
  /** French word, shown bold. */
  fr: string;
  /** German translation, shown soft underneath. */
  de?: string;
}

/** Word bubble that pops up when something in the house is tapped. */
export function SpeechBubble({ fr, de }: SpeechBubbleProps) {
  return <span className="vk-bubble"><b lang="fr">{fr}</b>{de && <span>{de}</span>}</span>;
}
