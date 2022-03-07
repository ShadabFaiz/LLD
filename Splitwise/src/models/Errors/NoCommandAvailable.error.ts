export class NoCommandAvailable extends Error {
  constructor(message: string = 'No Comamnd provided') {
    super(message);
    Object.setPrototypeOf(this, NoCommandAvailable.prototype);
  }
}