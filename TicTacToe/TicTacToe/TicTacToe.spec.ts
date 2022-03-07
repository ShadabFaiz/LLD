import { PLAYER } from "../models/GameEngine/GameEngine";
import { BasicGameEngine } from "../models/GameEngine/types/BasicGameEngine";
import { CliInputTaker } from "../models/InputTaker/types/CliInputTaker";
import { TicTacToe } from "./TicTacToe.class";

// jest.mock('CliInputTaker', () => {}, {''});

describe('TicTacToe: ', () => {
  test('Player A should win the game ', () => {
    const mockedPlay = jest
      .spyOn(TicTacToe.prototype, 'play')
      .mockImplementation(() => PLAYER.A);
    const gameEngine = new BasicGameEngine();
    const inputTaker = new CliInputTaker()
    const game = new TicTacToe(gameEngine, inputTaker);
    const winner = game.play();
    expect(mockedPlay).toHaveBeenCalledTimes(1);
    expect(winner).toBe(PLAYER.A);
  })
});
