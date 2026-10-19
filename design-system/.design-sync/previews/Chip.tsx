import { Chip } from "@vokaboka/ui";

export const UnitPicker = () => (
  <div className="vk-row">
    <Chip color="pink" pressed>Unité 1</Chip>
    <Chip color="teal">Unité 2</Chip>
    <Chip color="grape" pressed>Unité 3</Chip>
    <Chip color="tomato">Unité 4</Chip>
  </div>
);

export const WithCounts = () => (
  <div className="vk-row">
    <Chip color="teal" pressed sub="12/33">la cuisine</Chip>
    <Chip color="teal" sub="4/30">le jardin</Chip>
    <Chip color="sun" pressed>+ Vocabulaire plus</Chip>
  </div>
);
