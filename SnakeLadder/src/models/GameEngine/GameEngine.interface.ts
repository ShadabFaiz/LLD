import { Player } from "../Player/player.class";

export interface GameEngine {
  intialize: (player: any, snake?: any, ladder?: any) => void;
  getNextPlayer: () => Player;
  canEndGame: () => Boolean;
  movePlayer: (player: Player, numberOfStepToMove: number) => number;
  getPlayerPosition: (player: Player) => number;
  getPlayersInGame: () => Player[];
  getWinners: () => Player[] | null;
}