export class CommandNotApplicable extends Error {
    constructor(message: string = 'Given command is not applicable to given input') {
    super(message);
    Object.setPrototypeOf(this, CommandNotApplicable.prototype);
  }
}