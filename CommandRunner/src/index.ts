
// import {Command} from './models/Commands/command.class';
import { CommandExecuter} from './services/CommandGenerator';
let commandName = 'Check Balance';

const commandExecutor = new CommandExecuter();
const result = commandExecutor.execute(commandName);


console.log('END')