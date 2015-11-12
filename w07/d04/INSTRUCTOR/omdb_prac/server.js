var express = require('express'),
    logger = require('morgan'),
    request = require('request'),
    app = express();

app.use(logger('dev'));
app.use(express.static('public'));

app.listen(3000, function () {
  console.log("App is listening on port 3000..");
});


app.get('/', function (req, res) {
});


app.get('/movies/:search_term', function (req, res) {
  request("http://www.omdbapi.com/?s="+ encodeURI(req.params.search_term) + "&y=&plot=short&r=json", function (error, response, body) {
    res.send(body)
  })
});
