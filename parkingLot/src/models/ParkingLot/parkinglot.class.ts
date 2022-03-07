import { Car } from "../Car/car.interface";
import { Slot } from "../Slot/slot.class";
import { IParkingLot } from "./parkingLot.interface";

export class ParkingLot implements IParkingLot {
   private _capactiy: number;
   private _slots: Map<number,Slot>;

  constructor(capacity: number) {
    this._capactiy = capacity;
    this._slots = new Map();
  }

  getFreeSlot() {

  } 

  park(car: Car, slotNumber: number) {

  }

  markSlotFree(slotNumber: number) {

  }


  hasFreeSlot() {
    return this._slots.size < this._capactiy;
  }


  getOccupiedSlots() {
    return this._slots;
  }



}


let tt = new ParkingLot(10);