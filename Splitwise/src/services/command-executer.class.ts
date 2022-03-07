import {
  CommandNotFound,
} from '../models/Errors/CommnadNotFound';
import { Command } from "../models/Command/command.interface";
import { NoCommandAvailable } from '../models/Errors/NoCommandAvailable.error';
export class CommandExecutor {
  private _commnands?: Command[];


  constructor(commands?: Command[]) {
    this._commnands = commands;
  }

  execute(commandToExecute: string) {
    if(!this._commnands)
      throw new NoCommandAvailable(
        `No Command was provided during instantiating ${this.constructor.name}`);

    for (let index = 0; index < this._commnands.length; index++) {
        const command = this._commnands[index];
        if(command.isApplicable(commandToExecute)) {
          return command.run(commandToExecute);
        }
    }
    throw new CommandNotFound();

  }


}