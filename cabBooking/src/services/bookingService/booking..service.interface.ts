import { ICab } from "../../models/cab/cab.interface";
import { ILocation } from "../../models/location.interface";
import { IRide } from "../../models/ride/ride.interface";
import { IRider } from "../../models/rider/rider.interface";
import { IBookingStrategy } from "../bookingStrategy/booking.strategy.interface";

export interface IBookingService {

  bookCab: (rider: IRider, distination: ILocation) => void;
  registerCab: (cab: ICab) => void;
  registerRider: (rider: IRider) => void;
  markRideCompleted: (ride: IRide) => void
}