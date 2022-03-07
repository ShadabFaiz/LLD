import { ICab } from "../../models/cab/cab.interface";
import { ILocation } from "../../models/location.interface";
import { IRide } from "../../models/ride/ride.interface";
import { Ride } from "../../models/ride/rider.class";
import { RideStatus } from "../../models/ride/rideStatus.enum";
import { IRider } from "../../models/rider/rider.interface";
import { IBookingStrategy } from "../bookingStrategy/booking.strategy.interface";
import { IBookingService } from "./booking..service.interface";

export class CabBookingService implements IBookingService {
  private _bookingStrategy: IBookingStrategy;

  constructor(bookingStrategy: IBookingStrategy) {
    this._bookingStrategy = bookingStrategy;
  }

  bookCab(rider: IRider, destination: ILocation) {
    const cabFound = this._bookingStrategy.getCabAvailableForRider(rider);
    if (!cabFound) throw `No Cab available`;
    cabFound.assignRider(rider);
    const rideInProcess = new Ride(
      rider.getCurrentLocation(),
      destination,
      cabFound,
      rider
    );
  }

  markRideCompleted(ride: IRide) {
    ride.status = RideStatus.COMPLETED;
    ride.Cab.unassignRider();
    ride.rider.addCompletedRider(ride);
  }

  registerCab(cab: ICab) {
    console.log(`Register`);
  }

  registerRider(rider: IRider) {
    console.log(`Register`);
  }
}