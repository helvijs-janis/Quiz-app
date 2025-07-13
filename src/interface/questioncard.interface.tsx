import type { SingleQuestion } from ".";

/* eslint-disable @typescript-eslint/no-unsafe-function-type */
export default interface QuestionCardProps {
  question: SingleQuestion;
  totalQuestions?: number;
  questionNumber?: number;
  callback: Function;
}
