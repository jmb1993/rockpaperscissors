console.log("loaded bro");
$(function() {
  $('#logo').on('click', getPokemons)
  $('#results-container').on('click', '.result', getOnePokemon)
  $("#solo-pokemon").on('click', function () {
    $("#solo-pokemon").hide();
  })
  $("#search-by-name").on('click', searchPokemonByName)
  $("#search-by-type").on('click', searchPokemonByType)
  $("#random-button").on('click', getRandomPokemon)
})


var getPokemons = function() {
  $.ajax({
    url: '/pokemons',
    method: "GET",
    dataType: 'json'
  }).done(renderAll)
};

var renderAll = function(data) {
  var resultsDiv = $("#results-container")
  resultsDiv.empty();
  var pokeTemplate = Handlebars.compile($("#pokemons-template").html());
  for (var i = 0; i < data.length; i++) {
    var pokemon = {
      id: data[i].id,
      name: data[i].name,
      img: data[i].img
    }
    resultsDiv.append(pokeTemplate(pokemon))
  }
  resultsDiv.show();
};

var getOnePokemon = function () {
  var id = $(this).closest(".result").attr("data-id");
  $.ajax({
    url: "/pokemons/" + id,
    method: "GET",
    dataType: "json"
  }).done(renderOne)
};

var searchPokemonByName = function () {
  var searchVal = $("#search-name-field").val();
  $("#search-name-field").val('')
  $.ajax({
    url: "/pokemons/searchByName/" + searchVal,
    method: "GET",
    dataType: "json"
  }).done(renderOne)
};

var searchPokemonByType = function () {
  var searchVal = $("#search-type-field").val()
  $("#search-type-field").val('')
  $.ajax({
    url: "/pokemons/searchByType/" + searchVal,
    method: "GET",
    dataType: "json"
  }).done(renderAll)
};

var getRandomPokemon = function () {
  var id = Math.floor(Math.random() * 151) + 1
  $.ajax({
    url: "/pokemons/random",
    data: {id: id},
    method: "GET",
    dataType: "json"
  }).done(renderOne)
}

var renderOne = function (data) {
  var showDiv = $("#solo-pokemon");
  showDiv.empty();
  var pokeTemplate = Handlebars.compile($("#pokeShow-template").html())
  var pokemonData = {
    name: data.name,
    img: data.img,
    species: data.type.join(" | "),
    classification: data.misc.classification,
    hp: data.stats.hp,
    attack: data.stats.attack,
    defense: data.stats.defense,
    moves: data.moves.level.map(function(element){ return element.name; }).join(" | "),
    happiness: data.misc.happiness,
    height: data.misc.height
  }
  showDiv.append(pokeTemplate(pokemonData));
  showDiv.show();
}
