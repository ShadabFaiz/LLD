import { ICommand } from '../models/Commands/command.interface';
import {
  BalanceCheckCommand,
  PolicyCheckCommand,
  TransactionCommand
} from '../models/Commands/types';
export class CommandExecuter {
  private availableCommand: ICommand[];

  constructor(list?: ICommand[]) {
    this.availableCommand = list || [
      new BalanceCheckCommand(),
      new TransactionCommand(),
      new PolicyCheckCommand()
    ];
  }

  execute(commandName: string) {
    for (let command of this.availableCommand) {
      if (command.getName() === commandName) return command.execute();
    }
    throw new Error('Invalid Command');
  }
}
