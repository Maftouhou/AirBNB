var mongoose = require('mongoose');

/**
 * @type mongoose.schema
 */
var bookingModel = new mongoose.Schema({
    appartementID: Number,
    clientID: Number,
    checkinDate: Date,
    checkoutDate: Date,
    created_at: {type: Date, default: Date.now },
    updated_at: {type: Date, default: Date.now }
});

mongoose.model('BookingModel', bookingModel);
