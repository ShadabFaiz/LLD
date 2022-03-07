export class InvalidExpenseType extends Error {
  constructor(message: string = 'Expense type not found') {
    super(message);
    Object.setPrototypeOf(this, InvalidExpenseType.prototype);
  }
}
