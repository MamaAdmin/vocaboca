import { Character, characterPresets } from "@vokaboka/ui";

export const Presets = () => (
  <div className="vk-row" style={{ gap: 18, alignItems: "flex-end" }}>
    <Character look={characterPresets.lea} height={250} animated={false} />
    <Character look={characterPresets.mia} height={250} animated={false} />
    <Character look={characterPresets.noa} height={250} animated={false} />
    <Character look={characterPresets.zoe} height={250} animated={false} />
  </div>
);

export const DressUp = () => (
  <div className="vk-row" style={{ gap: 18, alignItems: "flex-end" }}>
    <Character look={{ skin: 4, hair: "boucles", hairC: "#1F1A24", top: "sweat", topC: "#3FBF6E", motif: "⚽", bottom: "short", bottomC: "#4C8DF6", shoes: "bottes", shoesC: "#E8453C", acc: "casquette", accC: "#FFD23F", eyes: "zwinker", mouth: "zunge" }} height={250} animated={false} />
    <Character look={{ skin: 0, hair: "tresses", hairC: "#E85C4A", top: "veste", topC: "#9B6CF2", motif: "🍓", bottom: "jupe", bottomC: "#FF8FB8", acc: "lunettes", accC: "#2E2A36", eyes: "wimpern" }} height={250} animated={false} />
    <Character look={{ skin: 2, hair: "pique", hairC: "#4C8DF6", top: "debardeur", topC: "#FFD23F", bottom: "pantalon", bottomC: "#2E2A36", acc: "couronne", mouth: "o" }} height={250} animated={false} />
  </div>
);

export const Hairstyles = () => (
  <div className="vk-row" style={{ gap: 8, maxWidth: 560 }}>
    {(["lang", "carre", "courts", "frange", "ondule", "chignon", "couettes", "tresses", "queue", "macarons", "boucles", "pique", "afro", "iroquois", "chauve"] as const).map(h => (
      <Character key={h} look={{ ...characterPresets.lea, hair: h, hairC: "#8A5A3B" }} crop="head" height={64} animated={false} />
    ))}
  </div>
);

export const CloseUps = () => (
  <div className="vk-row" style={{ gap: 8 }}>
    {(["head", "hair", "top"] as const).map(cr => (
      <span key={cr} style={{ background: "#F5F1FF", borderRadius: 18, padding: 4 }}><Character look={characterPresets.zoe} crop={cr} height={96} animated={false} /></span>
    ))}
  </div>
);
