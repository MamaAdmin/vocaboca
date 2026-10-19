import * as React from "react";

export interface ToastProps {
  /** Emoji at the left. */
  icon: string;
  /** Bold first line. */
  title: React.ReactNode;
  /** Optional second line. */
  sub?: React.ReactNode;
}

/** Floating notice, e.g. "Neu freigeschaltet: Schleife". Position it yourself (fixed, top centre). */
export function Toast({ icon, title, sub }: ToastProps) {
  return <div className="vk-toast" role="status"><span className="vk-emoji">{icon}</span><div><b>{title}</b>{sub && <span>{sub}</span>}</div></div>;
}
