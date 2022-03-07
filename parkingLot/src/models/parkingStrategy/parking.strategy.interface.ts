import { Slot } from "../Slot/slot.class";

export interface ParkingStrategy {
  getNewSlotNumber: () => number;

  addSlot: (slotNumber: number) => void;

  markSlotFree: (slotNumber: number) => void
}
