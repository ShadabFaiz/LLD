import { User } from "../../models/user/user.interface";

export class UserService {

  generateUser(userId: string): User {
    return new User(userId);
  }
}