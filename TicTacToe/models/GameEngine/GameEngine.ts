export enum PLAYER {
  'A' = 'A',
  'B' = 'B'
}

export type Grid = (PLAYER|undefined)[][];



export interface GameEngine {
  isGridFull: () => Boolean;
  resetGrid: () => void;

  generateGrid: () => Grid;

  hasPlayerWon: (player: PLAYER) => Boolean;
  isGridAvailable: (gridNo: [number, number]) => Boolean;

  makeMove: (player: PLAYER, gridToChoose: [number, number]) => void;

  getNextPlayer: () => PLAYER;
}
