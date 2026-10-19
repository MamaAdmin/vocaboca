import { Feedback, Button } from "@vokaboka/ui";

export const Right = () => (
  <div style={{ width: 460 }}>
    <Feedback tone="ok" title="Neu im Koffer!" action={<Button color="sun">Weiter</Button>}>la fraise = die Erdbeere</Feedback>
  </div>
);

export const Wrong = () => (
  <div style={{ width: 460 }}>
    <Feedback tone="no" title="Fast!" action={<Button color="sun">Weiter</Button>}>Richtig ist: <strong>la grand-mère</strong>. Das Wort kommt gleich nochmal.</Feedback>
  </div>
);
