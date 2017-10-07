var mongoose = require('mongoose');

/**
 * @type mongoose.schema
 */
var userModel = new mongoose.Schema({
    userId: Number,
    firstname: String,
    lastName: String,
    login: String,
    password: String,
    email: String,
    created_at: {type: Date, default: Date.now },
    updated_at: {type: Date, default: Date.now }
});

mongoose.model('UserModel', userModel);
