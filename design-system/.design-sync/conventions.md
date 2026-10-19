# Vokaboka – how to build with it

Vokaboka is a playful kids' French-German vocabulary UI: chunky candy-coloured buttons with a darker "press" shadow, white rounded cards on warm paper, thick-outline paper-doll figures and an illustrated house. Copy is German for the child, French for the words being learned (`lang="fr"`).

## Setup
Wrap every screen in `VokabokaRoot`. It sets the paper background (`--vk-paper`), ink text, the Andika word font and the box-sizing/button resets. Without it, text falls back to browser defaults and layout glue such as `vk-row` looks wrong.

```jsx
const { VokabokaRoot, Logo, Panel, Chip, Button } = window.Vokaboka;
<VokabokaRoot style={{ padding: 16 }}>
  <div className="vk-stack" style={{ alignItems: "center" }}>
    <Logo size={56} />
    <Panel label="Was üben wir?">
      <div className="vk-row">
        <Chip color="pink" pressed>Unité 1</Chip>
        <Chip color="teal">Unité 2</Chip>
      </div>
    </Panel>
    <Button color="pink" size="lg">Los geht's!</Button>
  </div>
</VokabokaRoot>
```

## Styling idiom
Style through component props first. Colour is always one of five accents: `color="pink" | "teal" | "grape" | "sun" | "tomato"` (Button, Chip, AnswerOption). Use `pink` for the main action, `sun` for "Weiter", `teal` for checks and filters, `grape` for figures and dress-up. Sizes: Button `size="sm" | "md" | "lg"`, plus `ghost` for a white secondary button.

For your own layout glue, use these classes. They are the only ones meant for app code:

| Class | Use |
|---|---|
| `vk-stack` | vertical flex column, 14px gap |
| `vk-row` | wrapping horizontal row, 10px gap |
| `vk-grid` | auto-fill grid of 132px cards (WordCard lists) |
| `vk-options` | 2×2 grid for four `AnswerOption`s |
| `vk-label` | small uppercase section label |
| `vk-display` | Baloo 2 headline face |
| `vk-emoji` | emoji font stack for pictures |

For anything custom, use tokens and never raw hex values: `var(--vk-paper)`, `--vk-paper-2` (soft shadows, borders), `--vk-card` (white), `--vk-ink`, `--vk-ink-soft`, the accents `--vk-pink|teal|grape|sun|tomato` with `-d` press shades (e.g. `--vk-pink-d`), `--vk-good`/`--vk-good-bg`, `--vk-bad`/`--vk-bad-bg`, fonts `--vk-font-display` (Baloo 2) and `--vk-font-word` (Andika), radii `--vk-radius-sm|md|lg|xl`.

Signature look: `border-radius: var(--vk-radius-lg)` and a solid bottom shadow, `box-shadow: 0 6px 0 var(--vk-paper-2)` on white, or `0 6px 0 var(--vk-pink-d)` on pink. Never use soft blurred drop shadows or thin borders.

## Building blocks
- Quiz screen: `ProgressDots` → `QuestionCard` (with `GiftBox`) → `vk-options` of four `AnswerOption`s → `Feedback` with a `Button color="sun"` action.
- Suitcase / portfolio: `Meter` plus a `vk-grid` of `WordCard`s (`locked` for not yet collected, `stars` 0–3, `plus` for Vocabulaire plus).
- Pictures for words: `WordIcon` takes an emoji, or `"#…"` for a text badge (numbers `#17`, languages `#DE`, days `#Mo`).
- World: `RoomScene room="salon|cuisine|jardin|chambre|bain|bureau|atelier"`. It draws a 1000×700 illustrated room. Place `Character`, `SpeechBubble` or items as absolutely positioned children (in %). `night` and `lampOn` change the mood.
- Figures: chibi `Character look={{…}}` (see `CharacterLook` in Character.d.ts; `characterPresets.lea` / `.mia` / `.noa` / `.zoe`, 15 hair styles). Use `crop="head"` for avatars.
- Mascot: `Boka mood="idle|happy|sad"`, the word suitcase. Use it for empty states and celebrations.
- Navigation: `TabBar` with the four tabs Spielen 🎮, Koffer 🧳, Figuren 👗, Welt 🏠. Notices: `Toast` (you position it).

## Avatar studio (2.0)
For the figure editor use the lilac studio look: `<VokabokaRoot theme="studio">` (lilac gradient, Nunito via `--vk-font-ui`, navy text). Tokens: `--vk-violet` / `--vk-violet-d` (active, CTA press), `--vk-lavender` (tiles, tabs, trays), `--vk-violet-soft`, `--vk-navy` (text, active pill), `--vk-mute` (secondary text), `--vk-blush`, `--vk-shadow-soft` (the one soft shadow allowed, for white surfaces). Glue classes: `vk-surface` (white rounded panel), `vk-tiles` (option-tile grid).

Layout: three columns. Left `vk-surface` with `FigureCard`s (`add` for "Neue Figur"). Centre `AvatarStage` with `<Character height={360}/>`, footer `RoundButton icon="undo|redo"`, `RoundButton icon="dice" label="Zufällig"` and `CtaButton` "In die Welt stellen". Right `vk-surface` with `EditorTabs` (default `studioCategories`), `PillTabs` for Oberteil/Unterteil/Motiv, a `vk-tiles` grid of `OptionTile`s and `Swatches`. Headline: `StickerTitle`.

```jsx
const { VokabokaRoot, OptionTile, Character, wardrobe, palettes, Swatches } = window.Vokaboka;
<VokabokaRoot theme="studio" style={{ padding: 16 }}>
  <div className="vk-surface vk-stack">
    <div className="vk-tiles">
      {wardrobe.hair.slice(0, 6).map(o => (
        <OptionTile key={o.value} label={o.label} selected={o.value === "carre"} lockedNeed={o.need}
          preview={<Character look={{ hair: o.value }} crop="hair" animated={false} />} />))}
    </div>
    <Swatches colors={palettes.hair} value="#F6D58E" />
  </div>
</VokabokaRoot>
```
Option previews are always cropped `Character`s (`crop="hair|eyes|mouth|top|bottom|shoes|acc|head"`); `wardrobe` lists every option with German label, French word and unlock count (`need`), `palettes` holds the skin, hair and cloth colours.

## Where the truth lives
Read `styles.css` and its import `_ds_bundle.css` (all `vk-*` classes and `--vk-*` tokens) before styling. Each component has `components/<group>/<Name>/<Name>.prompt.md` with props and examples.
