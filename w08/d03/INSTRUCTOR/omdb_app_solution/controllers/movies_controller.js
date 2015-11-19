var mongoose = require('mongoose'),
    Movie = require('../models/movie.js'),
    omdbSearch = require('../helpers/omdb_helper.js');

module.exports.controller = function (app) {

  app.get('/movies/:search_term', function (req, res) {
    omdbSearch.searchMovies(req.params.search_term, function (movies) {
      res.send(movies);
    });
  });

  app.get('/movieById/:id', function (req, res) {
    omdbSearch.searchMovieById(req.params.id, function (movie) {
      res.send(movie)
    });
  });
  
};
