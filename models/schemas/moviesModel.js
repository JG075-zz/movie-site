
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: String,
  released: String,
  rated: String,
  runtime: String,
  genre: String,
  director: String,
  writers: String,
  actors: String,
  plot: String,
  language: String,
  country: String,
  poster: String,
  meta_score: { type: Number, min: 0, max: 100 },
  imdb_rating: { type: Number, min: 0, max: 10},
  imdb_id: String,
  type: String,
  updated: { type: Date, default: Date.now }
});

var Movies = mongoose.model('Movies');

module.exports = Movies;
