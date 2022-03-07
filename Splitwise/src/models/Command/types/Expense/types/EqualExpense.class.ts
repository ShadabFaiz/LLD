import { EXPENSE_TYPES } from '../types.enums';
import { Expense } from './expense.types';
import { UserService } from '../../../../../services/User/user.service';
import { User } from '../../../../user/user.interface';
import { Database } from '../../../../database/database.interface';



export class EqualExpense implements Expense {
  private _id = EXPENSE_TYPES.EQUAL;
  private _userService: UserService;
  private _database: Database;

  constructor(userService: UserService, database: Database) {
    this._userService = userService;
    this._database = database
  }

  isApplicable(command: string) {
    return command.includes(this._id);
  }

  process(command: string) {
    const myCommandArray = command.split(' ');
    const creditor = this._userService.generateUser(myCommandArray[1]);
    const loanTo = this.getDebitors(command);
    if(creditor['userId'] in  loanTo) delete loanTo[creditor['userId']];
    this._database.updateData(creditor['userId'], {loanTo});
  }

  private getDebitors(command: string) {
    const myCommandArray = command.split(' ');
    const amount = +myCommandArray[2];
    const debitors = myCommandArray
      .slice(4, -1)
      .map((userId) => this._userService.generateUser(userId));
    const amountPerPerson = amount / debitors.length;
    const loanTo: { [key: User['userId']]: number } = {};
    debitors.forEach((deb) => (loanTo[deb['userId']] = amountPerPerson));
    return loanTo;
  }
}
