import * as React from "react";

export interface Swatch {
  hex: string;
  /** Accessible name, ideally the French colour word ("rouge"). */
  label?: string;
}

export interface SwatchesProps {
  /** Colours as hex strings or `{hex, label}` objects. */
  colors: (string | Swatch)[];
  /** Selected hex. */
  value?: string;
  onChange?: (hex: string) => void;
}

/** Row of round colour dots on a lavender tray; the chosen one gets a violet ring. Used under the option grid for hair and clothes colours. */
export function Swatches({ colors, value, onChange }: SwatchesProps) {
  return (
    <div className="vk-swatches" role="radiogroup">
      {colors.map(c => {
        const s = typeof c === "string" ? { hex: c } : c;
        const on = !!value && s.hex.toLowerCase() === value.toLowerCase();
        return <button key={s.hex} type="button" role="radio" aria-checked={on} aria-label={s.label || s.hex} className="vk-sw" style={{ background: s.hex }} onClick={() => onChange?.(s.hex)} />;
      })}
    </div>
  );
}
