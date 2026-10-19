import * as React from "react";

export interface BokaProps {
  /** Facial expression: `idle`, `happy` (big open smile) or `sad` (frown). */
  mood?: "idle" | "happy" | "sad";
  /** Scale factor. 1 = 132x98 px. */
  scale?: number;
  /** Gentle bobbing and blinking. Default true. */
  animated?: boolean;
}

/** Boka, the living word suitcase - Vokaboka's mascot. Collected words fly into it. */
export function Boka({ mood = "idle", scale = 1, animated = true }: BokaProps) {
  const cls = ["vk-boka", animated ? "vk-boka--animated" : "", mood !== "idle" ? `vk-boka--${mood}` : ""].filter(Boolean).join(" ");
  const style = { "--s": scale } as unknown as React.CSSProperties;
  return (
    <span className={cls} style={style} role="img" aria-label="Boka">
      <span className="vk-boka__handle" /><span className="vk-boka__body" />
      <span className="vk-boka__st vk-boka__st--1" /><span className="vk-boka__st vk-boka__st--2" /><span className="vk-boka__st vk-boka__st--3" />
      <span className="vk-boka__eye vk-boka__eye--l" /><span className="vk-boka__eye vk-boka__eye--r" /><span className="vk-boka__mouth" />
    </span>
  );
}
