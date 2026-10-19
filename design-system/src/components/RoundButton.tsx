import * as React from "react";
import { StudioIcon, isStudioIcon } from "./studio-icons";
import type { StudioIconName } from "./studio-icons";

export interface RoundButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** `undo`, `redo`, `dice`, `trash`, … or any node. */
  icon: StudioIconName | React.ReactNode;
  /** Visible caption under the icon (makes a taller pill, e.g. "Zufällig"). Without it the button is a 52px circle; then pass `aria-label`. */
  label?: React.ReactNode;
}

/** White floating tool button of the avatar studio (undo, redo, random). Soft violet shadow, squashes on press. */
export function RoundButton({ icon, label, className = "", ...rest }: RoundButtonProps) {
  return (
    <button type="button" className={["vk-rb", label ? "vk-rb--label" : "", className].filter(Boolean).join(" ")} {...rest}>
      {isStudioIcon(icon) ? <StudioIcon name={icon} size={label ? 24 : 22} strokeWidth={2.2} /> : icon}
      {label && <span>{label}</span>}
    </button>
  );
}
