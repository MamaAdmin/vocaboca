import * as React from "react";
import { StudioIcon } from "./studio-icons";

export interface OptionTileProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Name of the option, e.g. "Pferdeschwanz". */
  label: React.ReactNode;
  /** Square preview: usually a cropped `<Character crop="hair" …/>`, or an emoji string. */
  preview?: React.ReactNode;
  /** Chosen option: white tile, violet ring and a heart badge. */
  selected?: boolean;
  /** Locked until N more words are collected. Shows a 🔒 N badge and greys the preview. */
  lockedNeed?: number;
}

/** A choice tile in the avatar studio's option grid: square preview, label, heart badge when chosen, lock badge when not unlocked yet. */
export function OptionTile({ label, preview, selected = false, lockedNeed, className = "", ...rest }: OptionTileProps) {
  const locked = lockedNeed != null && lockedNeed > 0;
  return (
    <button type="button" aria-pressed={selected} className={["vk-tile", locked ? "is-locked" : "", className].filter(Boolean).join(" ")} {...rest}>
      <span className="vk-tile-prev">{typeof preview === "string" ? <span className="vk-emoji">{preview}</span> : preview}</span>
      <span className="vk-tile-label">{label}</span>
      {selected && <i className="vk-heart"><StudioIcon name="heart" size={14} /></i>}
      {locked && <span className="vk-tile-lock"><i>🔒 {lockedNeed}</i></span>}
    </button>
  );
}
