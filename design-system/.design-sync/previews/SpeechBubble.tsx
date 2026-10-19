import { SpeechBubble } from "@vokaboka/ui";

export const WordBubbles = () => (
  <div className="vk-row" style={{ gap: 24, alignItems: "flex-start" }}>
    <SpeechBubble fr="le lit" de="das Bett" />
    <SpeechBubble fr="Pour le nez, je prends une carotte." de="Für die Nase nehme ich eine Karotte." />
    <SpeechBubble fr="Coucou !" />
  </div>
);
