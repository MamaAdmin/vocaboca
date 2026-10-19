import { CtaButton } from "@vokaboka/ui";

export const InDieWelt = () => (
  <div style={{ width: 360, paddingBottom: 10 }}>
    <CtaButton>In die Welt stellen</CtaButton>
  </div>
);

export const Plain = () => (
  <div style={{ width: 360, paddingBottom: 10 }}>
    <CtaButton decorated={false}>Fertig!</CtaButton>
  </div>
);
