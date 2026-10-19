import * as React from "react";

export interface StickerTitleProps {
  children?: React.ReactNode;
  /** Small pink heart at the top-left. Default true. */
  heart?: boolean;
  /** `h1`/`h2` element. Default `h2`. */
  as?: "h1" | "h2";
}

/** Big tilted headline with a white sticker outline, as in "Meine Figuren". Use once per screen; `<br/>` for a two-line title. */
export function StickerTitle({ children, heart = true, as = "h2" }: StickerTitleProps) {
  const T = as;
  return <T className="vk-sticker">{heart && <i aria-hidden="true">♥</i>}{children}</T>;
}
