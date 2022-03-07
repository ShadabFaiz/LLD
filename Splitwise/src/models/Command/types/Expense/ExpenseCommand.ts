import { CommandNotApplicable } from "../../../Errors/CommandNotApplicable.error";
import { InvalidExpenseType } from "../../../Errors/InvalidExpenseType.error";
import { Command } from "../../command.interface";
import { EXPENSE_TYPES } from "./types.enums";
import { Expense } from './types/expense.types';
export class ExpenseCommand implements Command {
  private _id = 'EXPENSE';
  private _expenses?: Expense[];

  constructor(expenses?: Expense[]) {
    this._expenses = expenses;
  }

  isApplicable(command: string) {
    const commandId = command.split(' ')[0];
    return commandId === this._id;
  }

  run(command: string) {
    if (!this.isApplicable(command)) throw new CommandNotApplicable();
    if(!this._expenses) throw new InvalidExpenseType(`ExpensCommand is defined with no Expense type`);
    for (let index = 0; index < this._expenses.length; index++) {
      const expense = this._expenses[index];
      if(expense.isApplicable(command)) return expense.process(command);
    }
    throw  new InvalidExpenseType(`Expense Type not found`);
  }

  add(expenseToAdded: Expense) {
    if(!this._expenses) this._expenses = [];
    this._expenses.push(expenseToAdded);
    return this;
  }

  private getExpenseTypeFromCommand(command: string): EXPENSE_TYPES {
    if (command.includes(EXPENSE_TYPES.EQUAL)) return EXPENSE_TYPES.EQUAL;
    if (command.includes(EXPENSE_TYPES.PERCENTAGE))
      return EXPENSE_TYPES.PERCENTAGE;
    if (command.includes(EXPENSE_TYPES.EXACT)) return EXPENSE_TYPES.EXACT;
    throw new InvalidExpenseType(
      `Command: "${command}" contains invalid expense type or does not contain expense type`
    );
  }
}