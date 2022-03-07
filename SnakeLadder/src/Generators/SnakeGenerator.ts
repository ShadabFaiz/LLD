import { Snake } from "../models/Snake/snake.interface";

export class SnakeGenerator {
  generateSnake(head: Snake['head'], tail: Snake['tail']): Snake {
    return new Snake(head, tail);
  }
}

// type tt = SnakeGenerator['generateSnake']['prototype'];
// let test: tt;

