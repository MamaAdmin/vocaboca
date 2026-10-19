import { AvatarStage, Character, RoundButton, CtaButton, characterPresets } from "@vokaboka/ui";

export const Studio = () => (
  <div style={{ maxWidth: 420 }}>
    <AvatarStage
      name="Zoé"
      footer={<>
        <div className="vk-row" style={{ flexWrap: "nowrap" }}>
          <RoundButton icon="undo" aria-label="Rückgängig" />
          <RoundButton icon="redo" aria-label="Wiederholen" disabled />
          <span style={{ flex: 1 }} />
          <RoundButton icon="dice" label="Zufällig" />
        </div>
        <CtaButton>In die Welt stellen</CtaButton>
      </>}
    >
      <Character look={characterPresets.zoe} height={360} animated={false} />
    </AvatarStage>
  </div>
);

export const NameOnly = () => (
  <div style={{ maxWidth: 320 }}>
    <AvatarStage name="Noa" minHeight={380}>
      <Character look={characterPresets.noa} height={280} animated={false} />
    </AvatarStage>
  </div>
);
