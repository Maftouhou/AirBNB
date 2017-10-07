var mongoose = require('mongoose');

/**
 * @type mongoose.schema
 */
var appartementModel = new mongoose.Schema({
    appartementID: Number,
    appartementName: String,
    appartementCity: String,
    availability: Boolean,
    created_at: {type: Date, default: Date.now },
    updated_at: {type: Date, default: Date.now }
});

mongoose.model('AppartementModel', appartementModel);
