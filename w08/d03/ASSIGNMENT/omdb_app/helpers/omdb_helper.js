var request = require('request');

module.exports = {
  searchMovies: function(searchTerm, cb){
    request('htttp://www.omdbapi.com/?s=' + encodeURI(searchTerm) + '&y=&plot=short&r=json', function(error, response, body){
      if(error){
        console.log(error);
      } else {
        cb(body)
      }
    })
searchMoviesById: 



}
