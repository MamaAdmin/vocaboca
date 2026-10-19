import { AnswerOption } from "@vokaboka/ui";

export const FourChoices = () => (
  <div className="vk-options" style={{ width: 420 }}>
    <AnswerOption color="pink">die Erdbeere</AnswerOption>
    <AnswerOption color="teal">die Birne</AnswerOption>
    <AnswerOption color="grape">die Karotte</AnswerOption>
    <AnswerOption color="tomato">die Ananas</AnswerOption>
  </div>
);

export const Answered = () => (
  <div className="vk-options" style={{ width: 420 }}>
    <AnswerOption color="pink" state="right">die Erdbeere</AnswerOption>
    <AnswerOption color="teal" state="wrong">die Birne</AnswerOption>
    <AnswerOption color="grape" state="dim">die Karotte</AnswerOption>
    <AnswerOption color="tomato" state="dim">die Ananas</AnswerOption>
  </div>
);
