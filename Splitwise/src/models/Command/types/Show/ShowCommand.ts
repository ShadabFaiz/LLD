import { CommandNotApplicable } from "../../../Errors/CommandNotApplicable.error";
import { Command } from "../../command.interface";
import { Database} from '../../../database/database.interface'
import { DataStore } from "../../../database/database.class";
export class ShowCommand implements Command {
  private _id = 'SHOW';
  private _database: Database;

  constructor(database: Database) {
    this._database = database;
  }

  isApplicable(command: string) {
    const commandId = command.split(' ')[0];
    return commandId === this._id;
  }

  run(command: string) {
    if (!this.isApplicable(command)) throw new CommandNotApplicable();
    const [_, userid] = command.split(' ');
    if(!userid) return this.logAllData();
    this.logUserData(userid);
  }

  logUserData(userId: string) {
      const data = this._database.getData(userId);
      if (!data) return console.log('no balances');
      for (const debitor in data['loanTo']) {
        console.log(
          `${debitor} owns to ${userId}: ${data['loanTo'][debitor]} `
        );
      }
  }


  logAllData() {
      const data = this._database.getData();
      if (!data) return console.log('no balances');
      for (const userId in data) {
        for (const debitor in data[userId]['loanTo']) {
          console.log(
            `${debitor} owns to ${userId}: ${data[userId]['loanTo'][debitor]} `
          );
        }
      }
  }
}