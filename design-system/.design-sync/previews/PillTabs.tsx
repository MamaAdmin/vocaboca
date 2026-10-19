import { PillTabs } from "@vokaboka/ui";

export const Outfit = () => (
  <PillTabs value="top" items={[{ key: "top", label: "Oberteil" }, { key: "bottom", label: "Unterteil" }, { key: "motif", label: "Motiv" }]} />
);

export const SecondActive = () => (
  <PillTabs value="bottom" items={[{ key: "top", label: "Oberteil" }, { key: "bottom", label: "Unterteil" }, { key: "motif", label: "Motiv" }]} />
);
