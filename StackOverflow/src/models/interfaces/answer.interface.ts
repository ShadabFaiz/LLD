import { IComment } from "./comment.interface";
import { IUser } from "./user.interface";


export interface IAnswer {
  id: string;
  text: string;
  comments?: IComment[];
  upvotedBy: IUser['id'][]; // default = empty; user ids
  downvotedBy: IUser['id'][]; // default = empty; user ids
  flaggedBy: IUser['id'][];
}