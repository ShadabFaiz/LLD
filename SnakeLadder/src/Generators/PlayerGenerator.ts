import { Player } from "../models/Player/player.class";

export type PlayerInput = string;
export class BasicPlayerGenerator {
  generatePlayer(playerName: PlayerInput) {
    return new Player(playerName);
  }
}
