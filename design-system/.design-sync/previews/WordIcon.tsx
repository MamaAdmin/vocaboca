import { WordIcon } from "@vokaboka/ui";

export const EmojiAndBadges = () => (
  <div className="vk-row" style={{ gap: 24 }}>
    <WordIcon icon="🍓" />
    <WordIcon icon="🎒" />
    <WordIcon icon="#17" />
    <WordIcon icon="#DE" />
    <WordIcon icon="#Mo" />
  </div>
);

export const Sizes = () => (
  <div className="vk-row" style={{ gap: 24 }}>
    <WordIcon icon="🐶" size={28} />
    <WordIcon icon="🐶" size={44} />
    <WordIcon icon="🐶" size={72} />
  </div>
);
