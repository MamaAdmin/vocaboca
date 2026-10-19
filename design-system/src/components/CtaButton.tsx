import * as React from "react";
import { StudioIcon } from "./studio-icons";

export interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** Sparkle before and arrow after the text. Default true. */
  decorated?: boolean;
}

/** Full-width violet gradient call-to-action of the avatar studio ("In die Welt stellen"). One per screen. */
export function CtaButton({ children, decorated = true, className = "", ...rest }: CtaButtonProps) {
  return (
    <button type="button" className={`vk-cta ${className}`.trim()} {...rest}>
      {decorated && <StudioIcon name="sparkle" size={22} />}
      <span>{children}</span>
      {decorated && <StudioIcon name="arrow" size={22} strokeWidth={2.6} />}
    </button>
  );
}
