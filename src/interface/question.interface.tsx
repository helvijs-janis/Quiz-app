/* eslint-disable @typescript-eslint/no-unsafe-function-type */
export default interface QuestionProps {
  questions: string;
  totalQuestions?: number;
  questionNumber?: number;
  callback: Function;
}
