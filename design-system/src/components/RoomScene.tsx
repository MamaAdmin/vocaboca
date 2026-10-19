import * as React from "react";
import { roomSVG, ROOM_META } from "../art/rooms";

export type RoomKey = "bureau" | "atelier" | "chambre" | "bain" | "salon" | "cuisine" | "jardin" | "hall0" | "hall1" | "hall2";

export interface RoomSceneProps {
  /** Which room of the Vokaboka house to draw. */
  room: RoomKey;
  /** Night: dark sky, moon and stars, dimmed room. */
  night?: boolean;
  /** Bedroom only: the floor lamp glows. */
  lampOn?: boolean;
  /** Figures, items or bubbles placed on top of the scene (position them absolutely in %). */
  children?: React.ReactNode;
}

/** Room metadata: key, French and German name, the Unite its words come from. */
export const rooms: Array<{ key: string; fr: string; de: string; unit: string; width: number }> = ROOM_META;

/** An illustrated room of the Vokaboka house (cross-section, 1000x700). Every object inside carries its French word in data-fr / data-de. */
export function RoomScene({ room, night = false, lampOn = false, children }: RoomSceneProps) {
  const hall = room.startsWith("hall");
  const cls = ["vk-room", hall ? "vk-room--hall" : "", night ? "vk-room--night" : "", lampOn ? "vk-room--lamp" : ""].filter(Boolean).join(" ");
  return <div className={cls}><div style={{ position: "absolute", inset: 0 }} dangerouslySetInnerHTML={{ __html: roomSVG(room) }} />{children && <div className="vk-room__layer">{children}</div>}</div>;
}
