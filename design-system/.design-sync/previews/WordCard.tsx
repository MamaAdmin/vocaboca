import { WordCard } from "@vokaboka/ui";

export const Collected = () => (
  <div className="vk-grid" style={{ width: 460 }}>
    <WordCard fr="la fraise" de="die Erdbeere" icon="🍓" stars={3} />
    <WordCard fr="le cahier" de="das Heft" icon="📓" stars={1} />
    <WordCard fr="les maths, les mathématiques" de="Mathematik" icon="#1+1" stars={2} />
  </div>
);

export const LockedAndPlus = () => (
  <div className="vk-grid" style={{ width: 460 }}>
    <WordCard fr="le cartable" de="die Schultasche" icon="🎒" stars={1} plus />
    <WordCard fr="la chenille" de="die Raupe" icon="🐛" locked />
    <WordCard fr="dix-sept" de="17" icon="#17" stars={2} />
  </div>
);
