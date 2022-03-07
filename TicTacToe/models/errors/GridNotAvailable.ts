


export class GridNotAvailableError extends Error {
  constructor(msg: string) {
    super(msg);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GridNotAvailableError.prototype);
  }
}