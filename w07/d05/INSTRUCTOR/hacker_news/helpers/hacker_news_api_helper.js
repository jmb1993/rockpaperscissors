var request = require('request');

module.exports = {
  getTopStories: function (cb) {
    request("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty", function (error, response, body) {
      if(error){
        console.error(error);
      }
      cb(body);
    });
  },
  getSingleStory: function (id, cb) {
    request("https://hacker-news.firebaseio.com/v0/item/"+ id +".json?print=pretty", function (error, response, body) {
      cb(body)
    });
  }
}
