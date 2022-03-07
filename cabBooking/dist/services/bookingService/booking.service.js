"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CabBookingService = void 0;
const rider_class_1 = require("../../models/ride/rider.class");
const rideStatus_enum_1 = require("../../models/ride/rideStatus.enum");
class CabBookingService {
    _bookingStrategy;
    constructor(bookingStrategy) {
        this._bookingStrategy = bookingStrategy;
    }
    bookCab(rider, destination) {
        const cabFound = this._bookingStrategy.getCabAvailableForRider(rider);
        if (!cabFound)
            throw `No Cab available`;
        cabFound.assignRider(rider);
        const rideInProcess = new rider_class_1.Ride(rider.location, destination, cabFound, rider);
    }
    markRideCompleted(ride) {
        ride.status = rideStatus_enum_1.RideStatus.COMPLETED;
        ride.Cab.unassignRider();
        ride.rider.addCompletedRider(ride);
    }
    registerCab(cab) {
        console.log(`Register`);
    }
    registerRider(rider) {
        console.log(`Register`);
    }
}
exports.CabBookingService = CabBookingService;
