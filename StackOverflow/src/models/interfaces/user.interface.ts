import { IAnswer } from "./answer.interface";
import { IQuestion } from "./questions.interface";
import {IComment} from './comment.interface';
export interface IUser {
  id: string;
  questionsAsked?: IQuestion['id'][];
  answersGiven?: IAnswer['id'][];
  comments: IComment['id'][];

  questionsUpvoted: IQuestion['id'][];
  answersUpvoted: IAnswer['id'][];
}