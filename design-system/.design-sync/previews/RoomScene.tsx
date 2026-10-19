import { RoomScene, Character, SpeechBubble, characterPresets } from "@vokaboka/ui";

export const Salon = () => (
  <div style={{ width: 640 }}>
    <RoomScene room="salon">
      <div style={{ position: "absolute", left: "36%", bottom: "6%" }}><Character look={characterPresets.lea} height={190} animated={false} /></div>
    </RoomScene>
  </div>
);

export const BathroomMirror = () => (
  <div style={{ width: 640 }}>
    <RoomScene room="bain">
      <div style={{ position: "absolute", left: "42%", bottom: "4%" }}><Character look={characterPresets.mia} height={170} animated={false} /></div>
      <div style={{ position: "absolute", left: "8%", top: "6%" }}><SpeechBubble fr="le nez" de="die Nase" /></div>
    </RoomScene>
  </div>
);

export const BedroomAtNight = () => (
  <div style={{ width: 640 }}>
    <RoomScene room="chambre" night lampOn />
  </div>
);

export const Garden = () => (
  <div style={{ width: 640 }}>
    <RoomScene room="jardin" />
  </div>
);
