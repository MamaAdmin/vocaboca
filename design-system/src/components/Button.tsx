import * as React from "react";
import type { VkColor } from "./types";

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  /** Accent colour of the button face. Default `pink`. */
  color?: VkColor;
  /** `sm` for inline tools, `md` default, `lg` for the one hero action on a screen. */
  size?: "sm" | "md" | "lg";
  /** White card button instead of a coloured one. */
  ghost?: boolean;
  children?: React.ReactNode;
}

/** Chunky pressable button with a coloured face and a darker bottom shadow that squashes on press. */
export function Button({ color = "pink", size = "md", ghost = false, className = "", children, ...rest }: ButtonProps) {
  const cls = ["vk-btn", ghost ? "vk-btn--ghost" : `vk-c-${color}`, size !== "md" ? `vk-btn--${size}` : "", className].filter(Boolean).join(" ");
  return <button type="button" className={cls} {...rest}>{children}</button>;
}
