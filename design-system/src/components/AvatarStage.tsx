import * as React from "react";

export interface AvatarStageProps {
  /** The figure, usually `<Character height={…} />`. */
  children?: React.ReactNode;
  /** Name shown in the pill under the figure. */
  name?: string;
  /** Makes the name pill editable. */
  onNameChange?: (name: string) => void;
  /** Tools and actions below the name (RoundButtons, CtaButton). */
  footer?: React.ReactNode;
  /** Minimum height in px. Default 520. */
  minHeight?: number;
}

/** The avatar studio's centre stage: pastel arch backdrop with floating hearts, the figure on a soft floor shadow, a name pill and a footer slot. */
export function AvatarStage({ children, name, onNameChange, footer, minHeight = 520 }: AvatarStageProps) {
  return (
    <div className="vk-stage" style={{ minHeight }}>
      <i className="vk-stage-deco d1">♥</i><i className="vk-stage-deco d2">✦</i><i className="vk-stage-deco d3">♥</i>
      <div className="vk-stage-fig">{children}</div>
      {name != null && (onNameChange
        ? <input className="vk-namepill" value={name} maxLength={14} aria-label="Name der Figur" onChange={e => onNameChange(e.target.value)} />
        : <div className="vk-namepill">{name}</div>)}
      {footer && <div className="vk-stage-foot">{footer}</div>}
    </div>
  );
}
