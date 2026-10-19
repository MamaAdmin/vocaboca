import { RoundButton } from "@vokaboka/ui";

export const Tools = () => (
  <div className="vk-row" style={{ gap: 12, padding: 8 }}>
    <RoundButton icon="undo" aria-label="Rückgängig" />
    <RoundButton icon="redo" aria-label="Wiederholen" />
    <RoundButton icon="trash" aria-label="Figur löschen" />
    <RoundButton icon="dice" label="Zufällig" />
  </div>
);

export const Disabled = () => (
  <div className="vk-row" style={{ gap: 12, padding: 8 }}>
    <RoundButton icon="undo" aria-label="Rückgängig" disabled />
    <RoundButton icon="redo" aria-label="Wiederholen" disabled />
  </div>
);
