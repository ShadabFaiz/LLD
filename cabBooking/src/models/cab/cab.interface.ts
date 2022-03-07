import { ILocation } from "../location.interface";
import { IRide } from "../ride/ride.interface";
import { IRider } from "../rider/rider.interface";

export interface ICab {
    available: Boolean;

    rider: IRider | undefined | null;
    currentRide: IRide | undefined | null;


    assignRider: (rider: IRider) => void;
    unassignRider: () => void;
    endTrip: () => void;

}