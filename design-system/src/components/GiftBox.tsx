import * as React from "react";
import { WordIcon } from "./WordIcon";

export interface GiftBoxProps {
  /** Emoji or "#" badge revealed when open. */
  icon?: string;
  /** `false` shows the striped wrapped present with a "?". */
  open?: boolean;
}

/** The mystery present on a quiz question. It opens to reveal the word's picture once answered. */
export function GiftBox({ icon = "🎁", open = false }: GiftBoxProps) {
  return open ? <div className="vk-gift"><WordIcon icon={icon} size={66} /></div> : <div className="vk-gift vk-gift--wrapped">?</div>;
}
