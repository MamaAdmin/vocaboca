import { Meter } from "@vokaboka/ui";

export const SuitcaseProgress = () => (
  <div className="vk-stack" style={{ width: 420, gap: 8 }}>
    <span className="vk-display" style={{ fontSize: 20 }}>37 von 347 Gegenständen gesammelt</span>
    <Meter value={37 / 347} label="37 von 347 gesammelt" />
  </div>
);

export const AlmostFull = () => (
  <div style={{ width: 420 }}>
    <Meter value={0.86} label="86 Prozent gesammelt" />
  </div>
);
