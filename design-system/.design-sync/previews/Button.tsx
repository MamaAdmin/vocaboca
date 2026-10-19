import { Button } from "@vokaboka/ui";

export const Colours = () => (
  <div className="vk-row">
    <Button color="pink">Los geht's!</Button>
    <Button color="teal">Prüfen</Button>
    <Button color="grape">Figuren anziehen</Button>
    <Button color="sun">Weiter</Button>
    <Button color="tomato">Nochmal</Button>
  </div>
);

export const Sizes = () => (
  <div className="vk-row">
    <Button size="sm" color="sun">🎲</Button>
    <Button size="md" color="teal">Zum Koffer</Button>
    <Button size="lg" color="pink">Los geht's!</Button>
  </div>
);

export const GhostAndDisabled = () => (
  <div className="vk-row">
    <Button ghost>Abbrechen</Button>
    <Button color="teal" disabled>Prüfen</Button>
  </div>
);
