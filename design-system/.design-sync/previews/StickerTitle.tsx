import { StickerTitle } from "@vokaboka/ui";

export const MeineFiguren = () => (
  <div style={{ padding: "12px 8px", background: "linear-gradient(180deg,#F8F3FF,#FFF6FB)", borderRadius: 24 }}>
    <StickerTitle>Meine<br />Figuren</StickerTitle>
  </div>
);

export const OneLine = () => (
  <div style={{ padding: "12px 8px", background: "linear-gradient(180deg,#F8F3FF,#FFF6FB)", borderRadius: 24 }}>
    <StickerTitle heart={false}>Mein Koffer</StickerTitle>
  </div>
);
