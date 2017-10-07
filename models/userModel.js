var mongoose = require('mongoose');

/**
 * @type mongoose.schema
 */
var userModel = new mongoose.Schema({
    userId: Number,
    firstname: {type: String, required: [true, 'Firstname is required']},
    lastName: {type: String, required: [true, 'Lastname is required']},
    login: {type: String},
    password: {type: String},
    email: {type: String},
    created_at: {type: Date, default: Date.now },
    updated_at: {type: Date, default: Date.now }
});

var User = mongoose.model('UserModel', userModel);
module.exports = User;
