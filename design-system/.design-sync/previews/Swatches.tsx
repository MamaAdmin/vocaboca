import { Swatches, palettes } from "@vokaboka/ui";

export const ClothColours = () => (
  <div style={{ maxWidth: 440 }}>
    <Swatches colors={palettes.cloth} value="#9B6CF2" />
  </div>
);

export const HairColours = () => (
  <div style={{ maxWidth: 440 }}>
    <Swatches colors={palettes.hair} value="#FF8FB8" />
  </div>
);
