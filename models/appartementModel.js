var mongoose = require('mongoose');

/**
 * @type mongoose.schema
 */
var appartementModel = new mongoose.Schema({
    appartementID: {type: Number},
    appartementName: {type: String, required: [true, 'AppartementName is required']},
    appartementCity: {type: String, required: [true, 'AppartementCity is required']},
    availability: {type: Boolean, required: [true, 'Availability is required']}, 
    created_at: {type: Date, default: Date.now },
    updated_at: {type: Date, default: Date.now }
});

var Appartement = mongoose.model('AppartementModel', appartementModel);
module.exports  = Appartement;
