var request = require('request');

module.exports = {
  searchMovies: function (searchTerm, cb) {
    request('http://www.omdbapi.com/?s=' + encodeURI(searchTerm) + '&y=&plot=short&r=json', function (error, response, body) {
      if(error){
        console.log(error);
      } else {
        cb(body);
      }
    });
  },
  searchMovieById: function (id, cb) {
    request('http://www.omdbapi.com/?i=' + encodeURI(id) + '&plot=short&tomatoes=true&r=json', function (error, response, body) {
      if(error){
        console.log(error);
      }else{
        cb(body);
      }
    });
  }
};
