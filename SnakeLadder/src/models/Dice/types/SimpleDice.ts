import { generatorRandomNumber } from "../../../utils/randomNumberGenerator";
import { Dice } from "../dice.interface";

export class SimpleDice implements Dice {
  roll() {
    return generatorRandomNumber(1, 6);
  };

}