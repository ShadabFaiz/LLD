import { IAnswer } from "../interfaces/answer.interface";
import { IQuestion } from "../interfaces/questions.interface";
import { IBaseUser } from "./user.model";

export class Moderator implements IBaseUser {

  constructor() {
  }
  askQuestion(question: IQuestion): void {
    throw new Error("Method not implemented.");
  }
  updateQuestion(question: IQuestion): void {
    throw new Error("Method not implemented.");
  }
  downVoteQuestion(question: IQuestion): void {
    throw new Error("Method not implemented.");
  }
  upVoteAnswer(answer: IAnswer): void {
    throw new Error("Method not implemented.");
  }
  downVoteAnswer(answer: IAnswer): void {
    throw new Error("Method not implemented.");
  }

}