$(function(){
  $("#all-button").on('click', getPokemons);
  $("#search-by-id").on('click', getPokeById);
  $("#random-button").on('click', getPokeRandomly);
  $("#search-by-name").on('click', getPokeByName);
  $("#search-by-type").on('click', getPokeByType);
}); //end document ready

//get pokemons route
var getPokemons = function() {
  $.get('/pokemons').done(renderPokemonsView);
} //end getPokemons

//get pokemons route
var getPokeRandomly = function() {
  $.get('/pokemons/random/'+Math.floor(Math.random()*151)).done(renderPokemonsInfoView);
} //end getPokemons

//get pokemons/id route
var getPokeById = function(){
  var searchTerm = $("#search-id-field").val();
  $.get('/pokemons/' + searchTerm).done(renderPokemonsInfoView);
} //end poke/id route

//get pokemons/name route
var getPokeByName = function(){
  var searchTerm = $("#search-name-field").val();
  $.get('/pokemons/searchByName/' + searchTerm).done(renderPokemonsInfoView);
} //end poke/name route

//get pokemons/name route
var getPokeByType = function(){
  var searchTerm = $("#search-type-field").val();
  $.get('/pokemons/searchByType/' + searchTerm).done(renderPokemonsView);
} //end poke/name route

//renders all pokemons
var renderPokemonsView = function(data) {
  data.forEach(function(poke){
    //renders each pokemon with name and image
    var box = $("<div>");
    box.addClass("result");
    box.html("<h3>" + poke.name + "</h3>" + "<img src=" + poke.img + ">");
    //renders the boxes inside the container div
    var container = $("<div>");
    container.addClass("results-container");
    container.append(box);
    $("body").append(container);
  })
}
