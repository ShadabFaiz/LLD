"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rider = void 0;
class Rider {
    location;
    _pastRides = [];
    getPastRides() {
        return this._pastRides;
    }
    ;
    addCompletedRider(ride) {
        this._pastRides.push(ride);
    }
    ;
}
exports.Rider = Rider;
