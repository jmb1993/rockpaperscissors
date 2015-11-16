var express = require('express');
var logger = require('morgan');
var request = require('request');
var pokemons = require('./poke_array.js');
var helpers = require('./helper/helper.js');
var app = express();

app.use(logger('dev'));

app.use(express.static('public'));

app.listen(3000,function(){
  console.log("server running on port 3000");
});

app.get("/", function (req, res) {
});

app.get("/pokemons", function (req, res) {
  res.send(helpers.displayAllPokemons());
});

app.get("/pokemons/:id", function (req, res) {
  res.send(helpers.displayOnePokemonWithInfoById(req.params.id));
});

app.get("/pokemons/searchByName/:name", function (req, res) {
  res.send(helpers.displayOnePokemonWithInfoByNameSearch(req.params.name));
});

app.get("/pokemons/searchByType/:type", function (req, res) {
  res.send(helpers.displayOnePokemonWithInfoByTypeSearch(req.params.type));
});

app.get("/pokemons/random/:id", function (req, res) {
  res.send(helpers.displayOnePokemonRandomly(req.params.id));
});
