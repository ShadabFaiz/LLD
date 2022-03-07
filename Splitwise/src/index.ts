import { ShowCommand } from './models/Command/types/Show/ShowCommand';
import { ExpenseCommand } from './models/Command/types/Expense/ExpenseCommand';

import { UserDatabase } from './models/database/database.class';
import { CommandExecutor } from './services/command-executer.class';
import { EqualExpense } from './models/Command/types/Expense/types/EqualExpense.class';
import { UserService } from './services/User/user.service';


const database = new UserDatabase();
const showCommand = new ShowCommand(database);

const userService = new UserService();
const exepnseCommand = new ExpenseCommand().add(
  new EqualExpense(userService, database)
);

const commands = [showCommand, exepnseCommand];
const commandExecuter = new CommandExecutor(commands);

const SHOW = 'SHOW';
// commandExecuter.execute(SHOW);
commandExecuter.execute('EXPENSE u1 1000 4 u1 u2 u3 u4 EQUAL');
commandExecuter.execute('SHOW');
commandExecuter.execute('SHOW u1');


// Run the commands.
