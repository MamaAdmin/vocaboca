import * as React from "react";

export interface LogoProps {
  /** Text of the wordmark. Default "Vokaboka". */
  text?: string;
  /** Font size in px. Default 72. */
  size?: number;
}

/** Candy-coloured wordmark: each letter alternates pink, teal, grape and sun. */
export function Logo({ text = "Vokaboka", size = 72 }: LogoProps) {
  return <h1 className="vk-logo" style={{ fontSize: size }} aria-label={text}>{Array.from(text).map((c, i) => <span key={i}>{c}</span>)}</h1>;
}
