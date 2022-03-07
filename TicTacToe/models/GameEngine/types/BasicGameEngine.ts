import {  GridNotAvailableError } from "../../errors/GridNotAvailable";
import { GameEngine, Grid, PLAYER } from "../GameEngine";

export class BasicGameEngine implements GameEngine {
  private grid: Readonly<Grid>;
  private previousPlayer?: PLAYER = undefined;

  constructor(preGeneratedGrid?: Grid) {
    this.grid = Object.freeze(
      preGeneratedGrid || Array(3)
        .fill('1')
        .map((entry) => Array(3))
    );
  }

  isGridFull() {
    return !this.grid.some(col => col.some(box => !box));
  }

  resetGrid() {
    return this.generateGrid();
  }

  generateGrid() {
    return [...this.grid];
  }

  hasPlayerWon(player: PLAYER) {
    return false;
  }

  isGridAvailable(gridNo: [ number,number ]) {
    return !this.grid[gridNo[0]][gridNo[1]];
  }

  getNextPlayer() {
    const newPlayer = this.previousPlayer === PLAYER.A ? PLAYER.B : PLAYER.A;
    this.previousPlayer = newPlayer;
    return newPlayer;
  }

  /**
   * @throws GridNotAvailable
   */
  makeMove(player: PLAYER,grid: [ number,number ]) {
    if (!this.isGridAvailable(grid))
      throw new GridNotAvailableError('Grid not available');
    this.grid[ grid[ 0 ] ][ grid[ 1 ] ] = player;
    console.log('grid after moving ', this.grid)
  }
}
