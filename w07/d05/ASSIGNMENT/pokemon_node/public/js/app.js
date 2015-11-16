$(function(){
  $("#all-button").on('click', getPokemons);
  $("#search-by-id").on('click', getPokeById);
  $("#random-button").on('click', getPokeRandomly);
  $("#search-by-name").on('click', getPokeByName);
  $("#search-by-type").on('click', getPokeByType);
});

var getAllPokemon = function() {
  $.get('/pokemons').done(renderPokemonsView);
}

var getRandom = function() {
  $.get('/pokemons/random/'+Math.floor(Math.random()*151)).done(renderPokemonsInfoView);
}
var getPokemonById = function(){
  var searchTerm = $("#search-id-field").val();
  $.get('/pokemons/' + searchTerm).done(renderPokemonsInfoView);
}

var getPokemonByName = function(){
  var searchTerm = $("#search-name-field").val();
  $.get('/pokemons/searchByName/' + searchTerm).done(renderPokemonsInfoView);
}

var getPokemonByType = function(){
  var searchTerm = $("#search-type-field").val();
  $.get('/pokemons/searchByType/' + searchTerm).done(renderPokemonsView);
}
var renderPokemon = function(data) {
  data.forEach(function(poke){
    var box = $("<div>");
    box.addClass("result");
    box.html("<h3>" + poke.name + "</h3>" + "<img src=" + poke.img + ">");
    var container = $("<div>");
    container.addClass("results-container");
    container.append(box);
    $("body").append(container);
  })
}
