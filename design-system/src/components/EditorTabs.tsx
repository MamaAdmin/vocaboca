import * as React from "react";
import { StudioIcon, isStudioIcon } from "./studio-icons";

export interface EditorTab {
  key: string;
  /** Short German label under the icon, e.g. "Haare". */
  label: string;
  /** A built-in studio icon (`skin`, `hair`, `eyes`, `mouth`, `outfit`, `shoes`, `acc`) or any node. Defaults to the icon named like `key`. */
  icon?: React.ReactNode;
}

/** The seven categories of the avatar studio, in the game's order. */
export const studioCategories: EditorTab[] = [
  { key: "skin", label: "Haut" }, { key: "hair", label: "Haare" }, { key: "eyes", label: "Augen" }, { key: "mouth", label: "Mund" },
  { key: "outfit", label: "Outfit" }, { key: "shoes", label: "Schuhe" }, { key: "acc", label: "Accessoires" },
];

export interface EditorTabsProps {
  /** Tabs to show. Default: `studioCategories`. */
  items?: EditorTab[];
  /** Key of the active tab. */
  value?: string;
  onChange?: (key: string) => void;
}

/** Icon tab strip of the avatar studio: lavender tiles, the active one filled violet. Scrolls sideways on narrow screens. */
export function EditorTabs({ items = studioCategories, value, onChange }: EditorTabsProps) {
  return (
    <div className="vk-etabs" role="tablist" style={{ ["--n" as any]: items.length }}>
      {items.map(t => {
        const icon = t.icon ?? (isStudioIcon(t.key) ? t.key : null);
        return (
          <button key={t.key} type="button" role="tab" className="vk-et" aria-selected={t.key === value} onClick={() => onChange?.(t.key)}>
            {isStudioIcon(icon) ? <StudioIcon name={icon} size={28} /> : icon}
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
