import {  GridNotAvailableError } from '../../errors/GridNotAvailable';
import { Grid, PLAYER } from '../GameEngine';
import { BasicGameEngine } from './BasicGameEngine';

describe('BasicGameEngine: ', () => {
  test('should generate emtpy grid if predefined grid is not provided.', () => {
    const gameEngine = new BasicGameEngine();
    const gridGenerated = gameEngine.generateGrid();
    const allGridEmpty = gridGenerated.every((col) => col.every((box) => !box));
    expect(allGridEmpty).toBe(true);
  });

  test('should always generate predefined grid if it is provided.', () => {
    const predefinedGrid: Grid = new Array(3).fill(new Array(3).fill('A'));
    const gameEngine = new BasicGameEngine(predefinedGrid);
    const gridGenerated = gameEngine.generateGrid();
    const shouldReturnPredefinedGrid = gridGenerated.every((col, row) =>
      col.every((box, col) => box === predefinedGrid[row][col])
    );
    expect(shouldReturnPredefinedGrid).toBe(true);
  });

  test('should return true when grid is full.', () => {
    const predefinedGrid: Grid = new Array(3).fill(new Array(3).fill('A'));
    const gameEngine = new BasicGameEngine(predefinedGrid);
    expect(gameEngine.isGridFull()).toBe(true);
  });

  test('should return false when asking for already occupied box', () => {
    const predefinedGrid: Grid = new Array(3).fill(new Array(3).fill('A'));
    const gameEngine = new BasicGameEngine(predefinedGrid);
    expect(gameEngine.isGridAvailable([1, 1])).toBe(false);
  });

  test('should return true when asking for empty  box', () => {
    const gameEngine = new BasicGameEngine();
    expect(gameEngine.isGridAvailable([1, 1])).toBe(true);
  });

  describe('should return correct player at each turn:', () => {
    const gameEngine = new BasicGameEngine();
    const turns = Array.from({ length: 10 }, (_, i) => [
      i + 1,
      i % 2 === 0 ? 'A' : 'B'
    ]);
    test.each(turns)(
      'At %p turn, player should be: %p',
      (turn, expectedPlayer) => {
        const player = gameEngine.getNextPlayer();
        expect(player).toBe(expectedPlayer);
      }
    );
  });

  describe('When grid is full', () => {
    const predefinedGrid: Grid = new Array(3).fill(new Array(3).fill('A'));
    const gameEngine = new BasicGameEngine(predefinedGrid);
    test('should throw error when moving to already occupied box', () => {
      expect(() => {
        gameEngine.makeMove(PLAYER.A, [1, 1]);
      }).toThrow(GridNotAvailableError);
    });
  });
});
