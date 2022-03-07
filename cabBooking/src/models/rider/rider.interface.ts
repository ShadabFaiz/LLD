import { ILocation } from "../location.interface";
import {  IRide } from "../ride/ride.interface";

export interface IRider {
  getPastRides: () => IRide[];
  addCompletedRider: (ride: IRide) => void;
  getCurrentLocation: () => ILocation
}