import { ICab } from "../cab/cab.interface";
import { ILocation } from "../location.interface";
import { IRider } from "../rider/rider.interface";
import { IRide } from "./ride.interface";
import { RideStatus } from "./rideStatus.enum";

export class Ride implements IRide {
  from: ILocation;
  to: ILocation;
  Cab: ICab;
  rider: IRider;
  readonly status: RideStatus;

  constructor(from: ILocation, to: ILocation, cab: ICab, rider: IRider) {
    this.from = from;
    this.to = to;
    this.Cab = cab;
    this.rider = rider;
    this.status = RideStatus.IN_PROGRESS
  }

  

  

}