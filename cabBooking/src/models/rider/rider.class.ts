import { ILocation } from "../location.interface";
import { IRide } from "../ride/ride.interface";
import { IRider } from "./rider.interface";

export class Rider implements IRider {
  private _location: ILocation;
  private _pastRides: IRide[] = [];

  constructor(location: ILocation) {
    this._location = location;
  }

  getCurrentLocation() {
    return this._location
  }

  getPastRides() {
    return this._pastRides;
  }

  updateLocation(location: ILocation) {
    this._location = location;
  }

  addCompletedRider(ride: IRide) {
    this._pastRides.push(ride);
  }
}