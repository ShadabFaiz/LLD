import { User } from "../user/user.interface";




export interface Database {
  saveData: (...args: any) => boolean;
  getData: (params?: User['userId']) => any;

  updateData: (userId: User['userId'], data: any) => Boolean;
}