import { GameEngine } from '../models/GameEngine/GameEngine.interface';

export type PlayerInput<T extends GameEngine> = Parameters<T['intialize']>[0];
export type SnakeInput<T extends GameEngine> = Parameters<T['intialize']>[1];
export type LadderInput<T extends GameEngine> = Parameters<T['intialize']>[1];
