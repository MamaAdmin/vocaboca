import * as React from "react";
import { WordIcon } from "./WordIcon";
import { Stars } from "./Stars";

export interface WordCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** French word or phrase, e.g. "la fraise". */
  fr: string;
  /** German translation, e.g. "die Erdbeere". */
  de: string;
  /** Emoji or "#" text badge (see WordIcon). */
  icon: string;
  /** Mastery stars 0-3. Omit to hide the stars. */
  stars?: number;
  /** Not collected yet: shows a dark silhouette and "? ? ?" instead of the word. */
  locked?: boolean;
  /** Marks a word from "Vocabulaire plus" with a small grape "+". */
  plus?: boolean;
}

/** A vocabulary word as a collectible card in the suitcase (portfolio). */
export function WordCard({ fr, de, icon, stars, locked = false, plus = false, className = "", ...rest }: WordCardProps) {
  return (
    <button type="button" className={`vk-wordcard${locked ? " vk-wordcard--locked" : ""} ${className}`.trim()} aria-label={locked ? "Noch nicht gesammelt" : undefined} {...rest}>
      {plus && <span className="vk-plusmark">+</span>}
      <WordIcon icon={icon} size={44} />
      <span className="vk-wordcard__fr" lang="fr">{locked ? "? ? ?" : fr}</span>
      {!locked && <span className="vk-wordcard__de">{de}</span>}
      {!locked && stars != null && <Stars value={stars} />}
    </button>
  );
}
