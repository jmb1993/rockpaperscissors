var express = require('express'),
router= express.Router(),
Movie = require('../models/movie.js'),
omdbSearch = require('../helpers/omdb_helper.js');

router.get('/movies/:search_tern', function(req, res){
  omdbSearch.searchMovies(req.params.search_term, function(movies){
    res.send(movies);
  })
})
