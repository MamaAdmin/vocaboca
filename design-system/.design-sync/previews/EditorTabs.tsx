import { EditorTabs, PillTabs } from "@vokaboka/ui";

export const Categories = () => (
  <div className="vk-surface" style={{ maxWidth: 640 }}>
    <EditorTabs value="hair" />
  </div>
);

export const OutfitWithSubTabs = () => (
  <div className="vk-surface vk-stack" style={{ maxWidth: 640 }}>
    <EditorTabs value="outfit" />
    <PillTabs value="top" items={[{ key: "top", label: "Oberteil" }, { key: "bottom", label: "Unterteil" }, { key: "motif", label: "Motiv" }]} />
  </div>
);
