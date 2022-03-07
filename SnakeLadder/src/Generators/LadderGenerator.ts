import { Ladder } from "../models/Ladder/ladder.interface";



export class BasicLadderGenerator {
  generateLadder(head: Ladder['head'], tail: Ladder['tail']) {
    return new Ladder(head, tail);
  }
}
