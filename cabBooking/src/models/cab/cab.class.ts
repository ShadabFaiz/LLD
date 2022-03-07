import { ILocation } from "../location.interface";
import { IRide } from "../ride/ride.interface";
import { IRider } from "../rider/rider.interface";
import { ICab } from "./cab.interface";

export class Cab implements ICab {
  available = true;
  rider: IRider  | null = null;
  currentRide: IRide | null = null;
  assignRider(rider: IRider) {
    this.rider = rider;
  };

  unassignRider() {
    this.rider = null;
  }


  updateCabAvailability(avaibility: boolean) {
    this.available = avaibility;
  }

  endTrip() {
    // Send notification to Booking Service about its end;
  }
}