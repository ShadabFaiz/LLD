import { IAnswer } from "./answer.interface";
import { IQuestion } from "./questions.interface";

export interface IComment {
  id: string;
  text: string;
  questionId: IQuestion['id'];
  answerId: IAnswer['id'];
}