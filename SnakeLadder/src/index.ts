import { BasicPlayerGenerator } from './Generators/PlayerGenerator';
import { SnakeAndLadder } from './services/SnakeAndLAdder.service';
import { SimpleDice } from './models/Dice/types/SimpleDice';
import { SnakeGenerator } from './Generators/SnakeGenerator';
import { BasicLadderGenerator } from './Generators/LadderGenerator';
import {
  BasicGameEngine,
  BasicLadderInput,
  BasicSnakeInput
} from './models/GameEngine/types/BasicGameEngine.class';
const players = ['A', 'B', 'C'];
const snakes: BasicSnakeInput = [
  [50, 40],
  [20, 15],
  [23, 20],
  [65, 60],
  [99, 1]
];
const ladders: BasicLadderInput = [
  [5, 34],
  [35, 56]
];

const GameEngine = new BasicGameEngine(
  new BasicPlayerGenerator(),
  new SnakeGenerator(),
  new BasicLadderGenerator()
);
const dice = new SimpleDice();
const Game = new SnakeAndLadder<BasicGameEngine, SimpleDice>(GameEngine, dice);
Game.play(players, snakes, ladders);
