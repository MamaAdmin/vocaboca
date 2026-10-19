import * as React from "react";
import { GiftBox } from "./GiftBox";

export interface QuestionCardProps {
  /** The word to translate. */
  prompt: string;
  /** Language of the prompt: `fr` asks for German, `de` asks for French. */
  from?: "fr" | "de";
  /** Picture of the word (revealed when `open`). */
  icon?: string;
  /** Show the picture instead of the wrapped present. */
  open?: boolean;
  /** Small tool buttons under the prompt (e.g. listen, hint). */
  tools?: React.ReactNode;
}

/** The big white quiz card: mystery present, direction label and the word to translate. */
export function QuestionCard({ prompt, from = "fr", icon, open = false, tools }: QuestionCardProps) {
  return (
    <div className="vk-question">
      <GiftBox icon={icon} open={open} />
      <div className="vk-question__dir">{from === "fr" ? "Was heisst das auf Deutsch?" : "Wie sagt man das auf Französisch?"}</div>
      <div className="vk-question__prompt" lang={from}>{prompt}</div>
      {tools && <div className="vk-row" style={{ justifyContent: "center" }}>{tools}</div>}
    </div>
  );
}
