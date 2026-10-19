import * as React from "react";
import type { VkColor } from "./types";

export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  /** Selected state. Selected chips fill with their colour. */
  pressed?: boolean;
  /** Fill colour when pressed. Default `grape`. */
  color?: VkColor;
  /** Small secondary text after the label, e.g. a count like "12/33". */
  sub?: React.ReactNode;
  children?: React.ReactNode;
}

/** Rounded toggle pill used for settings, filters and unit pickers. */
export function Chip({ pressed = false, color = "grape", sub, className = "", children, ...rest }: ChipProps) {
  return (
    <button type="button" aria-pressed={pressed} className={`vk-chip vk-c-${color} ${className}`.trim()} {...rest}>
      {children}{sub != null && <small>{sub}</small>}
    </button>
  );
}
