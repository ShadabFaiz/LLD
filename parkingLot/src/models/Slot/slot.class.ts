import { Car } from "../Car/car.interface";
import { ISlot } from "./slot.interface";

export class Slot implements ISlot {
  carParked?: Car;
  slotNumber: number;

  constructor(slotNumber: number) {
    this.slotNumber= slotNumber;
  }


  isSlotFree() {
    return !this.carParked
  }
  
  assignCar(car: Car) {
    this.carParked = car;
  }


  unassign() {
    this.carParked = null;
  }
}