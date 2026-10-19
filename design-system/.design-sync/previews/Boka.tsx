import { Boka } from "@vokaboka/ui";

export const Moods = () => (
  <div className="vk-row" style={{ gap: 32, alignItems: "flex-end" }}>
    <Boka mood="idle" animated={false} />
    <Boka mood="happy" animated={false} />
    <Boka mood="sad" animated={false} />
  </div>
);

export const Small = () => <Boka scale={0.6} animated={false} />;
