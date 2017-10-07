var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnb');

mongoose.Promise = global.Promise;