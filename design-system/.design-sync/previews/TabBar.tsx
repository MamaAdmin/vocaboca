import { TabBar } from "@vokaboka/ui";

const tabs = [
  { key: "home", icon: "🎮", label: "Spielen" },
  { key: "bag", icon: "🧳", label: "Koffer", badge: 37 },
  { key: "fig", icon: "👗", label: "Figuren" },
  { key: "world", icon: "🏠", label: "Welt" },
];

export const PlayActive = () => <div style={{ width: 460 }}><TabBar tabs={tabs} active="home" /></div>;

export const WorldActive = () => <div style={{ width: 460 }}><TabBar tabs={tabs} active="world" /></div>;
