import * as React from "react";

export interface TabBarItem { key: string; icon: string; label: string; badge?: number }
export interface TabBarProps {
  /** The tabs, left to right. Vokaboka uses Spielen, Koffer, Figuren, Welt. */
  tabs: TabBarItem[];
  /** Key of the current tab. */
  active: string;
  onChange?: (key: string) => void;
}

/** Bottom navigation with big emoji tabs; the current tab tilts and sits on a paper pill. */
export function TabBar({ tabs, active, onChange }: TabBarProps) {
  return (
    <nav className="vk-tabs">
      {tabs.map(t => (
        <button key={t.key} type="button" className="vk-tab" aria-current={t.key === active ? "page" : undefined} onClick={() => onChange && onChange(t.key)}>
          <span className="vk-emoji">{t.icon}</span>{t.label}{t.badge ? <span className="vk-badge">{t.badge}</span> : null}
        </button>
      ))}
    </nav>
  );
}
