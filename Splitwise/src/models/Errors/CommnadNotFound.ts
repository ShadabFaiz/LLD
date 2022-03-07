export class CommandNotFound extends Error {
  constructor(message: string = 'Given command not found') {
    super(message);
    Object.setPrototypeOf(this, CommandNotFound.prototype);
  }
}