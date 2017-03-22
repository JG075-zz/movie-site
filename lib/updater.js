// Use mongooes to connect to the server
// Retrieve all the records
// Check if each record has movie data
// If not update the data
var mongoose = require('mongoose');
var config = require('../config');
var Movies = require('./schemas/moviesModel.js');

mongoose.connect(config.getDbConnectString());

Movies.find({}, function(err, data) { console.log(err, data, data.length); });
