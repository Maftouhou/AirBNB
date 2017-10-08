var mongoose = require('mongoose');

/**
 * @type mongoose.schema
 */
var bookingModel = new mongoose.Schema({
    appartementID: {type: Number},
    clientID: {type: Number},
    checkinDate: {type: Date},
    checkoutDate: {type: Date},
    created_at: {type: Date, default: Date.now },
    updated_at: {type: Date, default: Date.now }
});

var Booking = mongoose.model('BookingModel', bookingModel);
module.exports = Booking;