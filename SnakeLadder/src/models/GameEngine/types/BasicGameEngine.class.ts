import { Player } from '../../Player/player.class';
import { GameEngine } from '../GameEngine.interface';
import { Snake } from '../../Snake/snake.interface';
import { Ladder } from '../../Ladder/ladder.interface';
import { BasicLadderGenerator } from '../../../Generators/LadderGenerator';
import { SnakeGenerator } from '../../../Generators/SnakeGenerator';
import {
  BasicPlayerGenerator,
  PlayerInput
} from '../../../Generators/PlayerGenerator';

export type BasicLadderInput = [number, number][];
export type BasicSnakeInput = [number, number][];

export class BasicGameEngine
  implements GameEngine
{
  private _gameStartedWithPlayers: Player[] = [];
  private _playersInGame: Player[] = [];
  private _playersWon: Player[] | null = null;
  private _snakes: Snake[] | null = null;
  private _ladders: Ladder[] | null = null;

  private _ladderGenerator: BasicLadderGenerator;
  private _snakeGenerator: SnakeGenerator;
  private _playerGenerator: BasicPlayerGenerator;

  constructor(
    playerGenerator: BasicPlayerGenerator,
    snakeGenerator: SnakeGenerator,
    ladderGenerator: BasicLadderGenerator
  ) {
    this._playerGenerator = playerGenerator;
    this._ladderGenerator = ladderGenerator;
    this._snakeGenerator = snakeGenerator;
  }

  intialize(
    players: PlayerInput[],
    snakes?: BasicSnakeInput,
    ladders?: BasicLadderInput
  ) {
    this.initializePlayers(players);
    this.initializeSnakes(snakes);
    this.initializeLadders(ladders);
  }

  private initializePlayers(players: PlayerInput[]) {
    this._gameStartedWithPlayers = players.map((name) =>
      this._playerGenerator.generatePlayer(name)
    );
    this._playersInGame = [...this._gameStartedWithPlayers];
  }

  private initializeSnakes(snakes?: BasicSnakeInput) {
    if (!snakes || !snakes.length) {
      return (this._snakes = null);
    }

    this._snakes = snakes.map((snake) =>
      this._snakeGenerator.generateSnake(snake[0], snake[1])
    );
  }
  private initializeLadders(ladders?: BasicLadderInput) {
    if (!ladders || ladders.length) {
      return (this._ladders = null);
    }

    this._ladders = ladders.map((ladder) =>
      this._ladderGenerator.generateLadder(ladder[0], ladder[1])
    );
  }

  getNextPlayer() {
    if (!this._playersInGame || !this._playersInGame.length) {
      throw Error('No Player Available');
    }
    const newPlayer = this._playersInGame.shift() as Player;
    return newPlayer;
  }

  canEndGame() {
    return !!this._playersWon?.length;
  }
  movePlayer(player: Player, numberOfStepToMove: number) {
    return 2;
  }
  getPlayerPosition(player: Player) {
    return 2;
  }
  getPlayersInGame() {
    return this._playersInGame;
  }
  getWinners() {
    return this._playersWon;
  }
}
