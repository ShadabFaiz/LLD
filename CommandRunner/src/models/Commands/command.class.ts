import { ICommand} from './command.interface';
export class BaseCommand implements ICommand {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  execute() {
    console.log(`Executing Command: ${this.name}`);
  }


}