var express = require('express'),
    logger = require('morgan'),
    hackerNews = require('./helpers/hacker_news_api_helper.js');
    app = express();


//Set up app uses
app.use(logger('dev'));
//Express please serve my index html on the home route!
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('App listening on port 3000...');
});

app.get('/', function (req, res) {
  res.send("Home route");
});

app.get('/topstories', function (req, res) {
  hackerNews.getTopStories(function (data) {
    res.send(data)
  });
});

app.get('/singleStory/:id', function (req, res) {
  hackerNews.getSingleStory(req.params.id, function (data) {
    res.send(data);
  });
});
