import { ICab } from "../../models/cab/cab.interface";
import { IRider } from "../../models/rider/rider.interface";
import { IBookingStrategy } from "./booking.strategy.interface";

export class DistanceBookingStrategy implements IBookingStrategy {
  getCabAvailableForRider (rider: IRider)  {
    return null
  };
  
  bookCab(rider: IRider) {
    let cabList: ICab[] = [];
    for(let cab of cabList) {
      if (this.isCabAvailableForBooking(cab)) continue;
      if (!this.isCabWithinRange(cab, rider)) continue;
      return cab;
    }

    return null;
  }

  private isCabWithinRange(cab: ICab, rider: IRider): Boolean {
    return true;
  }

  private isCabAvailableForBooking(cab: ICab) {
    return cab.available && !cab.currentRide
  }

}