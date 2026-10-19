import * as React from "react";

/** Line icons of the avatar studio, drawn on a 24×24 grid with `currentColor`. */
const PATHS: Record<string, string> = {
  skin: '<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="11" r=".9" fill="currentColor"/><circle cx="15" cy="11" r=".9" fill="currentColor"/><path d="M9 15c1.6 1.6 4.4 1.6 6 0"/>',
  hair: '<path d="M5 14c0-5 3-9 7-9s7 4 7 9"/><path d="M5 14c0 3 1 5 2 6M19 14c0 3-1 5-2 6"/><path d="M9 8c2 2 5 2 7 4"/>',
  eyes: '<path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.6"/>',
  mouth: '<path d="M4 10c2.5 5.5 13.5 5.5 16 0"/>',
  outfit: '<path d="M8 4 3 7l2 4 3-1v10h8V10l3 1 2-4-5-3c-.6 1.6-2 2.4-4 2.4S8.6 5.6 8 4z"/>',
  shoes: '<path d="M3 15c3 0 4-3 5-6l3 2c1 1 3 2 5 2.5 2.5.6 5 1 5 3.5v1H3z"/><path d="M3 19h18"/>',
  acc: '<path d="M6 8h12l1.5 12h-15z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
  undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>',
  redo: '<path d="m15 14 5-5-5-5"/><path d="M20 9H10a6 6 0 0 0 0 12h3"/>',
  dice: '<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>',
  trash: '<path d="M4 7h16M10 7V4.5h4V7M6.5 7l1 13h9l1-13"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  sparkle: '<path d="m12 2 1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8zM19 14l.9 2.6 2.6.9-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9z" fill="currentColor" stroke="none"/>',
  heart: '<path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3 5 6.4 5c2 0 3.6 1.1 5.6 3.2C14 6.1 15.6 5 17.6 5 21 5 22.8 8.6 21.5 11.8 19.5 16.4 12 21 12 21z" fill="currentColor" stroke="none"/>',
};

export type StudioIconName = "skin" | "hair" | "eyes" | "mouth" | "outfit" | "shoes" | "acc" | "undo" | "redo" | "dice" | "trash" | "arrow" | "sparkle" | "heart";

export function StudioIcon({ name, size = 24, strokeWidth = 1.9 }: { name: StudioIconName; size?: number; strokeWidth?: number }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: PATHS[name] || "" }} />;
}

export function isStudioIcon(n: unknown): n is StudioIconName {
  return typeof n === "string" && n in PATHS;
}
