var pokemons = require('../poke_array.js');
module.exports = {
  displayAllPokemons: function(){
    return pokemons;
  },

  displayPokemonById: function(id){
    return pokemons[id-1];
  },

  displayRandomPokemon: function(id){
    return pokemons[id-1];
  },

}
