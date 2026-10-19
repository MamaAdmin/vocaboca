import { SKIN, HAIRC, CLOTH } from "../art/character";

export interface WardrobeOption { value: string; label: string; fr?: string; /** Words to collect before it unlocks (0 = free). */ need: number }

/** The game's dress-up catalogue: every option per `CharacterLook` field, with German label, French word and unlock count. */
export const wardrobe: Record<"hair" | "eyes" | "mouth" | "top" | "bottom" | "shoes" | "acc", WardrobeOption[]> = {
  hair: [
    { value: "lang", label: "lange Haare", fr: "les cheveux longs", need: 0 }, { value: "carre", label: "Bob", fr: "le carré", need: 0 }, { value: "courts", label: "kurze Haare", fr: "les cheveux courts", need: 0 },
    { value: "frange", label: "Pony", need: 0 }, { value: "ondule", label: "Wellen", need: 2 }, { value: "chignon", label: "Dutt", fr: "le chignon", need: 3 },
    { value: "couettes", label: "Zöpfe", fr: "les couettes", need: 6 }, { value: "tresses", label: "Flechtzöpfe", need: 8 }, { value: "queue", label: "Pferdeschwanz", fr: "la queue de cheval", need: 10 },
    { value: "macarons", label: "Doppel-Dutt", need: 12 }, { value: "boucles", label: "Locken", fr: "les cheveux bouclés", need: 15 }, { value: "pique", label: "Stachelhaare", need: 18 },
    { value: "afro", label: "Afro", need: 22 }, { value: "iroquois", label: "Irokese", need: 28 }, { value: "chauve", label: "Glatze", need: 35 },
  ],
  eyes: [{ value: "punkt", label: "Kulleraugen", need: 0 }, { value: "froh", label: "fröhlich", need: 0 }, { value: "wimpern", label: "Wimpern", need: 5 }, { value: "zwinker", label: "zwinkern", need: 12 }],
  mouth: [{ value: "smile", label: "Lächeln", need: 0 }, { value: "grin", label: "Lachen", need: 0 }, { value: "o", label: "Staunen", need: 4 }, { value: "zunge", label: "Zunge", need: 8 }],
  top: [
    { value: "tshirt", label: "T-Shirt", fr: "le t-shirt", need: 0 }, { value: "pull", label: "Pullover", fr: "le pull", need: 0 }, { value: "debardeur", label: "Top", fr: "le débardeur", need: 2 },
    { value: "robe", label: "Kleid", fr: "la robe", need: 4 }, { value: "sweat", label: "Kapuzenpulli", fr: "le sweat à capuche", need: 8 }, { value: "veste", label: "Jacke", fr: "la veste", need: 14 },
  ],
  bottom: [{ value: "pantalon", label: "Hose", fr: "le pantalon", need: 0 }, { value: "jupe", label: "Rock", fr: "la jupe", need: 0 }, { value: "short", label: "Shorts", fr: "le short", need: 5 }],
  shoes: [{ value: "baskets", label: "Turnschuhe", fr: "les baskets", need: 0 }, { value: "bottes", label: "Stiefel", fr: "les bottes", need: 6 }, { value: "chaussons", label: "Hausschuhe", fr: "les chaussons", need: 12 }],
  acc: [
    { value: "none", label: "nichts", need: 0 }, { value: "noeud", label: "Schleife", fr: "le nœud", need: 3 }, { value: "lunettes", label: "Brille", fr: "les lunettes", need: 7 },
    { value: "casquette", label: "Mütze", fr: "la casquette", need: 10 }, { value: "fleur", label: "Blume", fr: "la fleur", need: 18 }, { value: "couronne", label: "Krone", fr: "la couronne", need: 25 },
    { value: "chat", label: "Katzenohren", fr: "les oreilles de chat", need: 32 }, { value: "casque", label: "Kopfhörer", fr: "le casque", need: 40 }, { value: "sac", label: "Rucksack", fr: "le sac à dos", need: 50 },
  ],
};

/** Colour palettes of the dress-up: `skin` (index = `CharacterLook.skin`), `hair`, and `cloth` with French/German colour names. */
export const palettes: { skin: string[]; hair: string[]; cloth: { hex: string; label: string; de: string }[] } = {
  skin: SKIN, hair: HAIRC, cloth: CLOTH.map(([hex, fr, de]: string[]) => ({ hex, label: fr, de })),
};
