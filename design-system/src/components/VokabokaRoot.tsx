import * as React from "react";

export interface VokabokaRootProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `paper` (default): warm paper background, Andika. `studio`: lilac gradient background, Nunito UI font, navy text, as in the avatar studio. */
  theme?: "paper" | "studio";
  children?: React.ReactNode;
}

/** Page wrapper: background, text colour, fonts and the box-sizing/button resets every Vokaboka screen expects. */
export function VokabokaRoot({ theme = "paper", className = "", children, ...rest }: VokabokaRootProps) {
  return <div className={["vk-root", theme === "studio" ? "vk-root--studio" : "", className].filter(Boolean).join(" ")} {...rest}>{children}</div>;
}
