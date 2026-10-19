import * as React from "react";

export interface StarsProps {
  /** How many of the three stars are earned (0-3). */
  value: number;
}

/** Three-star mastery meter shown under a collected word. */
export function Stars({ value }: StarsProps) {
  const k = Math.max(0, Math.min(3, Math.round(value)));
  return <span className="vk-stars" aria-label={`${k} von 3 Sternen`}>{"★".repeat(k)}<span className="vk-stars__off">{"★".repeat(3 - k)}</span></span>;
}
