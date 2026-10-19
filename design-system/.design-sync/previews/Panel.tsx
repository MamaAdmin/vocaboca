import { Panel, Chip } from "@vokaboka/ui";

export const Settings = () => (
  <div style={{ width: 460 }}>
    <Panel label="Was üben wir?">
      <div className="vk-row">
        <Chip color="pink" pressed>Unité 1</Chip>
        <Chip color="teal">Unité 2</Chip>
        <Chip color="grape">Unité 3</Chip>
        <Chip color="tomato">Unité 4</Chip>
      </div>
      <span className="vk-label">Richtung</span>
      <div className="vk-row">
        <Chip color="teal" pressed>Französisch → Deutsch</Chip>
        <Chip color="teal">Gemischt</Chip>
      </div>
    </Panel>
  </div>
);
