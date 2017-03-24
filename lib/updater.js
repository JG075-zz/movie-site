var mongoose = require('mongoose');
var config = require('../config');
var Movies = require('../models/moviesModel.js');

function Updater() {
}

Updater.prototype.updateAll = function (fn) {
  mongoose.connect(config.mongodb.connectString());
  Movies.find({}, function(err, results) {
    fn(results);
  });
};

module.exports = Updater;
