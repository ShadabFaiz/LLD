import { IAnswer } from "./answer.interface";

export interface IQuestion {
  id: string;
  text: string;
  answers?: string[];
  comments?: string[];
  upvotedBy: string[]; // default = empty; user ids
  downvotedBy: string[]; // default = empty; user ids
  flaggedBy: string[];
  acceptedAnswer: IAnswer['id']; // answer
  isDeleted: Boolean;
  isClosed: Boolean;
}



