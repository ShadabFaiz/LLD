import { IAnswer } from "../interfaces/answer.interface";
import { IQuestion } from "../interfaces/questions.interface";

export interface IBaseUser {
  askQuestion(question: IQuestion): void;
  updateQuestion(question: IQuestion): void;
  downVoteQuestion(question: IQuestion): void;
  upVoteAnswer(answer: IAnswer): void;
  downVoteAnswer(answer: IAnswer): void;
}