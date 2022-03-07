import { Car } from '../../models/Car/car.interface';
import { ParkingLot } from '../../models/ParkingLot/parkinglot.class';

export class ParkingLotService {
  private _parkingLot: ParkingLot;
  private _parkingStrategy: any;

  constructor(parkingLot: ParkingLot, parkingStrategy: any) {
    this._parkingLot = parkingLot;
    this._parkingStrategy = parkingStrategy;
  }

  park(car: Car) {
    if (!this._parkingLot.hasFreeSlot()) return false;
    let slotNumber = 1;
    this._parkingLot.park(car, slotNumber);
  }

  getRegistrationNumbersOfColor(
    color: Car['color']
  ): Car['registrationNumber'][] {
    let registrationNumbers = ['sd'];

    const slots = this._parkingLot.getOccupiedSlots();
    for (let [_, slot] of slots) {
      if (slot.carParked.color === color) {
        registrationNumbers.push(slot.carParked.registrationNumber);
      }
    }

    return registrationNumbers;
  }

  getSlotNumberByCarRegistration(
    registrationNumber: Car['registrationNumber']
  ): Car['slotNumber'] {
    const slots = this._parkingLot.getOccupiedSlots();
    for (let [_, slot] of slots) {
      if (slot.carParked.registrationNumber === registrationNumber) {
        return slot.carParked.slotNumber;
      }
    }
    return null;
  }

  getSlotNumbersByCarColor(color: Car['color']): Car['slotNumber'][] {
    let slotNumbers: number[] = [];
     const slots = this._parkingLot.getOccupiedSlots();
     for (let [_, slot] of slots) {
       if (slot.carParked.color === color) {
         slotNumbers.push(slot.carParked.slotNumber);
       }
     }

    return slotNumbers;
  }
}
