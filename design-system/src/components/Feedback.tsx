import * as React from "react";

export interface FeedbackProps {
  /** `ok` green for a right answer, `no` red for a wrong one. */
  tone: "ok" | "no";
  /** Big headline, e.g. "Bravo!" or "Fast!". */
  title: React.ReactNode;
  /** Explanation line, e.g. the correct spelling. */
  children?: React.ReactNode;
  /** Usually a Button ("Weiter"). */
  action?: React.ReactNode;
}

/** Result strip shown under the question after answering. */
export function Feedback({ tone, title, children, action }: FeedbackProps) {
  return <div className={`vk-feedback vk-feedback--${tone}`}><span className="vk-feedback__body"><b className="vk-feedback__title">{title}</b>{children}</span>{action}</div>;
}
