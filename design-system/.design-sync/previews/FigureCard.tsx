import { FigureCard, characterPresets } from "@vokaboka/ui";

export const Roster = () => (
  <div className="vk-row" style={{ gap: 10 }}>
    <FigureCard look={characterPresets.zoe} name="Zoé" selected />
    <FigureCard look={characterPresets.noa} name="Noa" />
    <FigureCard look={characterPresets.mia} name="Mia" />
    <FigureCard add />
  </div>
);

export const Small = () => (
  <div className="vk-row" style={{ gap: 8 }}>
    <FigureCard look={characterPresets.lea} name="Léa" size={88} />
    <FigureCard look={characterPresets.noa} name="Noa" size={88} selected />
    <FigureCard add size={88} />
  </div>
);
