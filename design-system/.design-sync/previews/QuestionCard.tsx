import { QuestionCard, Button } from "@vokaboka/ui";

export const Wrapped = () => (
  <div style={{ width: 380 }}>
    <QuestionCard prompt="la grand-mère" from="fr" tools={<><Button size="sm" ghost>🔊 Anhören</Button><Button size="sm" ghost>🎁 Bild-Tipp</Button></>} />
  </div>
);

export const Revealed = () => (
  <div style={{ width: 380 }}>
    <QuestionCard prompt="die Erdbeere" from="de" icon="🍓" open />
  </div>
);
