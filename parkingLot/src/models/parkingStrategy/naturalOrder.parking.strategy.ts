import { ParkingStrategy } from "./parking.strategy.interface";

export class NaturalOrderParkingStrategy implements ParkingStrategy {
  getNewSlotNumber() {
    return 1;
  }

  addSlot(slotNumber: number) {}

  markSlotFree() {}
}