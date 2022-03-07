import { Car } from "../Car/car.interface";

export interface ISlot {
  carParked?: Car;
  slotNumber: number;
  isSlotFree: () => Boolean,
  assignCar: (car: Car) => void;
  unassign: () => void

}