
import { BasicGameEngine } from "./models/GameEngine/types/BasicGameEngine";
import { CliInputTaker } from "./models/InputTaker/types/CliInputTaker";
import { TicTacToe } from "./TicTacToe/TicTacToe.class";



let game = new TicTacToe(new BasicGameEngine(), new CliInputTaker());
game.play();