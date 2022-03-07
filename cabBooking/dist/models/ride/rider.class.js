"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ride = void 0;
const rideStatus_enum_1 = require("./rideStatus.enum");
class Ride {
    from;
    to;
    Cab;
    rider;
    status;
    constructor(from, to, cab, rider) {
        this.from = from;
        this.to = to;
        this.Cab = cab;
        this.rider = rider;
        this.status = rideStatus_enum_1.RideStatus.IN_PROGRESS;
    }
}
exports.Ride = Ride;
