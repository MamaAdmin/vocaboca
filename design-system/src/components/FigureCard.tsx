import * as React from "react";
import { Character } from "./Character";
import type { CharacterLook } from "./Character";

export interface FigureCardProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** The figure to show as a head avatar. Omit together with `add` for the "Neue Figur" tile. */
  look?: Partial<CharacterLook>;
  /** Name under the avatar. */
  name?: string;
  /** Currently edited figure: violet border on white. */
  selected?: boolean;
  /** Dashed "+ Neue Figur" tile instead of an avatar. */
  add?: boolean;
  /** Card width in px. Default 120. */
  size?: number;
}

/** One entry of the "Meine Figuren" list: head avatar plus name on a lavender card, or the dashed add tile. */
export function FigureCard({ look, name, selected = false, add = false, size = 120, className = "", ...rest }: FigureCardProps) {
  if (add) return (
    <button type="button" className={`vk-figcard vk-figcard--add ${className}`.trim()} style={{ width: size }} {...rest}>
      <b>+</b><span className="vk-figcard-name">{name || "Neue Figur"}</span>
    </button>
  );
  return (
    <button type="button" aria-pressed={selected} className={`vk-figcard ${className}`.trim()} style={{ width: size }} {...rest}>
      <Character look={look} crop="head" height={Math.round(size * 0.68)} animated={false} />
      <span className="vk-figcard-name">{name}</span>
    </button>
  );
}
