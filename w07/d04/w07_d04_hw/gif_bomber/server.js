//moduels 
var express 	= require('express');
var app 		= express();
var logger 		= require('morgan');
var	request 	= require('request');

app.use(logger('dev'));
app.use(express.static('public'));
app.listen(3000, function () {
	console.log('servers running captain!')
});

//routes
app.get("/", function(req, res) {
  res.render('index.html');
});

app.get('/search/:search_term', function(req, res) {
  request('http://api.giphy.com/v1/gifs/search?q=' + encodeURI(req.params.search_term) + '&api_key=dc6zaTOxFJmzC&limit=1', function(error, response, body) {
    res.send(body);
  });
});

app.get('/random', function(req, res) {
  request('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC', 
  	function(error, response, body) { 
  	res.send(body) 
  });
});

app.get('/kittens', function(req, res) {
  request('http://api.giphy.com/v1/gifs/search?q=kittens&api_key=dc6zaTOxFJmzC&limit=20', 
  	function(error, response, body) { 
  	res.send(body) 
  });
});

app.get('/id/:id_search', function(req, res) {
  request('http://api.giphy.com/v1/gifs/' + encodeURI(req.params.id_search + '?api_key=dc6zaTOxFJmzC'), function(error, response, body) {
    res.send(body);
  });
});