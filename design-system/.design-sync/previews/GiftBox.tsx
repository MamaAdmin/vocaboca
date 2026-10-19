import { GiftBox } from "@vokaboka/ui";

export const WrappedAndOpen = () => (
  <div className="vk-row" style={{ gap: 20 }}>
    <GiftBox />
    <GiftBox icon="🍍" open />
    <GiftBox icon="#42" open />
  </div>
);
