var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  _id: String,
  title: String,
  rating: String,
  runtime: String,
  genre: String,
  plot: String,
  poster: String,
  tomatoRating: String
})

var Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
