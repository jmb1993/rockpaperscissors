var express = require('express'),
    router = express.Router(),
    Movie = require('../models/movie.js'),
    omdbSearch = require('../helpers/omdb_helper.js');

router.get('/movies/:search_term', function (req, res) {
  omdbSearch.searchMovies(req.params.search_term, function (movies) {
    res.send(movies);
  });
});

router.get('/movieById/:id', function (req, res) {
  omdbSearch.searchMovieById(req.params.id, function (movie) {
    res.send(movie);
  });
});

module.exports = router;
