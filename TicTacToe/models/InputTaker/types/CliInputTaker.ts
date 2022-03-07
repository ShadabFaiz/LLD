import { InputTaker } from "../inputTaker.interface";

export class CliInputTaker implements InputTaker {
  turns = [
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0]
  ]; // A's moves, B's moves, A's move, B's move...

  getInput() {
    return this.turns.shift();
  }
}