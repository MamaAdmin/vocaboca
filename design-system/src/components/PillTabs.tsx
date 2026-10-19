import * as React from "react";

export interface PillTabsProps {
  items: { key: string; label: React.ReactNode }[];
  value?: string;
  onChange?: (key: string) => void;
}

/** Small sub-tabs inside an editor category (e.g. Oberteil · Unterteil · Motiv). The active pill is navy. */
export function PillTabs({ items, value, onChange }: PillTabsProps) {
  return (
    <div className="vk-pilltabs" role="tablist">
      {items.map(t => <button key={t.key} type="button" role="tab" aria-selected={t.key === value} className="vk-pt" onClick={() => onChange?.(t.key)}>{t.label}</button>)}
    </div>
  );
}
