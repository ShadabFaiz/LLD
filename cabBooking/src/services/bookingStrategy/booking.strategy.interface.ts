import { ICab } from "../../models/cab/cab.interface";
import { IRider } from "../../models/rider/rider.interface";

export interface IBookingStrategy {
  getCabAvailableForRider: (rider: IRider) => ICab | null;
}