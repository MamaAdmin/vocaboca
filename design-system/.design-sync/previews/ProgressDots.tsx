import { ProgressDots } from "@vokaboka/ui";

export const MidRound = () => (
  <div style={{ width: 420 }}>
    <ProgressDots results={["ok", "ok", "no", "now", "todo", "todo", "todo", "todo"]} />
  </div>
);

export const Finished = () => (
  <div style={{ width: 420 }}>
    <ProgressDots results={["ok", "ok", "no", "ok", "ok", "ok", "no", "ok"]} />
  </div>
);
