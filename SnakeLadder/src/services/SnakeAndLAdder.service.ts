import { Dice } from '../models/Dice/dice.interface';
import { GameEngine } from '../models/GameEngine/GameEngine.interface';
import { PlayerInput, SnakeInput, LadderInput } from './types';

export class SnakeAndLadder<T extends GameEngine, U extends Dice> {
  private dice: U;
  private gameEngine: T;

  constructor(gameEngine: T, dice: U) {
    this.dice = dice;
    this.gameEngine = gameEngine;
  }

  play(
    players: PlayerInput<T>,
    snakes: SnakeInput<T>,
    ladders: LadderInput<T>
  ) {
    this.gameEngine.intialize(players, snakes, ladders);
    while (!this.gameEngine.canEndGame()) {
      const currentPlayer = this.gameEngine.getNextPlayer();
      const diceRolled = this.dice.roll();
      const oldPosition = this.gameEngine.getPlayerPosition(currentPlayer);
      const newPosition = this.gameEngine.movePlayer(currentPlayer, diceRolled);
      console.log(
        `Player ${currentPlayer.Name} rolled ${diceRolled}, and move from ${oldPosition} to ${newPosition}`
      );
    }
  }
}
