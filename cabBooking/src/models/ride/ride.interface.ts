import { ICab } from "../cab/cab.interface";
import { ILocation } from "../location.interface";
import { IRider } from "../rider/rider.interface";
import { RideStatus } from "./rideStatus.enum";

export interface IRide {
  from: ILocation;
  to: ILocation;
  Cab: ICab;
  rider: IRider;
  status: RideStatus;
}



