import { GridNotAvailableError } from '../models/errors/GridNotAvailable';
import { GameEngine, PLAYER } from '../models/GameEngine/GameEngine';
import { InputTaker } from '../models/InputTaker/inputTaker.interface';

export class TicTacToe {
  private gameEngine: GameEngine;
  private inputTaker: InputTaker;

  constructor(gameEngine: GameEngine, inputTaker: InputTaker) {
    this.gameEngine = gameEngine;
    this.inputTaker = inputTaker;
  }

  play() {
    let playerWon: PLAYER | undefined = undefined;
    let currentPlayer = this.gameEngine.getNextPlayer();
    while (!playerWon) {
      const move: [number, number] = this.getMoveFromUser(); // Ask from player;
      console.log(`PLAYER ${currentPlayer}: `, move);

      this.gameEngine.makeMove(currentPlayer, move);

      if (this.gameEngine.hasPlayerWon(currentPlayer)) {
        playerWon = currentPlayer;
        break;
      }
      currentPlayer = this.gameEngine.getNextPlayer();
      if (this.gameEngine.isGridFull()) {
        this.gameEngine.resetGrid();
      }
    }
    this.gameEngine.resetGrid();
    console.log(`Player: ${playerWon} won !!!!!`);
    return playerWon;
  }

  private getMoveFromUser(): [number, number] {
    const move: [number, number] = this.inputTaker.getInput(); // Ask from player;
    console.log('got move ', move);
    if (!this.gameEngine.isGridAvailable(move)) {
      console.log(`Move ${move} is not available`);
      return this.getMoveFromUser();
    }
    return move;
  }
}
