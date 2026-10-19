import * as React from "react";

export interface ProgressDotsProps {
  /** One entry per question: `ok` answered right, `no` wrong, `now` current, `todo` still to come. */
  results: Array<"ok" | "no" | "now" | "todo">;
}

/** Row of pill-shaped dots showing progress through a quiz round. */
export function ProgressDots({ results }: ProgressDotsProps) {
  const done = results.filter(r => r === "ok" || r === "no").length;
  return <div className="vk-dots" role="progressbar" aria-valuemax={results.length} aria-valuenow={done}>{results.map((r, i) => <span key={i} className={`vk-dot${r === "todo" ? "" : " vk-dot--" + r}`} />)}</div>;
}
