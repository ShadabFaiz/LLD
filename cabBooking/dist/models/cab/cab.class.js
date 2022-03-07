"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cab = void 0;
class Cab {
    available = true;
    rider = null;
    currentRide = null;
    assignRider(rider) {
        this.rider = rider;
    }
    ;
    unassignRider() {
        this.rider = null;
    }
    updateCabAvailability(avaibility) {
        this.available = avaibility;
    }
    endTrip() {
        // Send notification to Booking Service about its end;
    }
}
exports.Cab = Cab;
