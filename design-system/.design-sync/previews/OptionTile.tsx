import { OptionTile, Character, characterPresets } from "@vokaboka/ui";

const base = { ...characterPresets.zoe, acc: "none" as const };

export const HairGrid = () => (
  <div className="vk-tiles" style={{ width: 400 }}>
    <OptionTile label="Doppel-Dutt" selected preview={<Character look={base} crop="hair" animated={false} />} />
    <OptionTile label="Bob" preview={<Character look={{ ...base, hair: "carre" }} crop="hair" animated={false} />} />
    <OptionTile label="Afro" preview={<Character look={{ ...base, hair: "afro" }} crop="hair" animated={false} />} />
  </div>
);

export const Locked = () => (
  <div className="vk-tiles" style={{ width: 400 }}>
    <OptionTile label="Kleid" preview={<Character look={{ ...base, top: "robe" }} crop="top" animated={false} />} />
    <OptionTile label="Kapuzenpulli" lockedNeed={3} preview={<Character look={{ ...base, top: "sweat" }} crop="top" animated={false} />} />
    <OptionTile label="Jacke" selected preview={<Character look={base} crop="top" animated={false} />} />
  </div>
);

export const EmojiMotifs = () => (
  <div className="vk-tiles" style={{ width: 400 }}>
    <OptionTile label="ohne" preview="∅" />
    <OptionTile label="Regenbogen" selected preview="🌈" />
    <OptionTile label="Katze" preview="🐱" />
  </div>
);
