"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceBookingStrategy = void 0;
class DistanceBookingStrategy {
    getCabAvailableForRider(rider) {
        return null;
    }
    ;
    bookCab(rider) {
        let cabList;
        for (let cab of cabList) {
            if (!this.isCabWithinRange(cab, rider))
                continue;
            if (this.isCabAvailableForBooking(cab))
                continue;
            return cab;
        }
        return null;
    }
    isCabWithinRange(cab, rider) {
        return true;
    }
    isCabAvailableForBooking(cab) {
        return cab.available && !cab.currentRide;
    }
}
exports.DistanceBookingStrategy = DistanceBookingStrategy;
