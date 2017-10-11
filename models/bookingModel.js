var mongoose = require('mongoose');

/**
 * @type mongoose.schema
 */
var bookingModel = new mongoose.Schema({
    bookingRef: {type: String, required: [true, "bookingRef is required"], default:"" },
    appartementID: {type: String},
    clientID: {type: String},
    checkinDate: {type: Date},
    checkoutDate: {type: Date},
    created_at: {type: Date, default: Date.now },
    updated_at: {type: Date, default: Date.now }
//    timestamps: { 
//        createdAt: 'created_at',
//        updatedAt: 'updated_at'
//    }
});

var Booking = mongoose.model('BookingModel', bookingModel);
module.exports = Booking;