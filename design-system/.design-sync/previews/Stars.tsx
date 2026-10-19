import { Stars } from "@vokaboka/ui";

export const Levels = () => (
  <div className="vk-stack" style={{ gap: 8 }}>
    <span>Neu <Stars value={0} /></span>
    <span>Einmal richtig <Stars value={1} /></span>
    <span>Zweimal richtig <Stars value={2} /></span>
    <span>Gelernt <Stars value={3} /></span>
  </div>
);
