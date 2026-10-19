import { VokabokaRoot, Logo, Button, StickerTitle, CtaButton } from "@vokaboka/ui";

export const ScreenShell = () => (
  <VokabokaRoot style={{ padding: 24, borderRadius: 24, width: 420, textAlign: "center" }}>
    <div className="vk-stack" style={{ alignItems: "center" }}>
      <Logo size={56} />
      <p style={{ margin: 0, color: "var(--vk-ink-soft)" }}>Jedes Wort, das du richtig weisst, wandert in deinen Wortkoffer.</p>
      <Button color="pink" size="lg">Los geht's!</Button>
    </div>
  </VokabokaRoot>
);

export const StudioTheme = () => (
  <VokabokaRoot theme="studio" style={{ padding: 24, borderRadius: 24, width: 420 }}>
    <div className="vk-stack">
      <StickerTitle>Meine Figuren</StickerTitle>
      <p style={{ margin: 0, color: "var(--vk-mute)", fontWeight: 700 }}>Baue deine Figur und schick sie ins Haus.</p>
      <CtaButton>In die Welt stellen</CtaButton>
    </div>
  </VokabokaRoot>
);
