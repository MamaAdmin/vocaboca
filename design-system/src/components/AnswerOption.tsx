import * as React from "react";
import type { VkColor } from "./types";

export interface AnswerOptionProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  /** Face colour. Quiz grids use pink, teal, grape, tomato in that order. */
  color?: VkColor;
  /** After answering: `right` turns green, `wrong` red, `dim` fades the other options. */
  state?: "idle" | "right" | "wrong" | "dim";
  children?: React.ReactNode;
}

/** A big tappable multiple-choice answer. Put four in a 2x2 `vk-options` grid. */
export function AnswerOption({ color = "pink", state = "idle", className = "", children, ...rest }: AnswerOptionProps) {
  const st = state === "idle" ? "" : ` vk-option--${state}`;
  return <button type="button" className={`vk-option vk-c-${color}${st} ${className}`.trim()} {...rest}>{children}</button>;
}
