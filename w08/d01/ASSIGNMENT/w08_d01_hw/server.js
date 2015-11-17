var express = require('express'),
logger = require('morgan'),
bodyParser = require('body-parser'),
app = express(),
mongoose = require('mongoose');

app.listen(3000, function () {
	console.log('server running!')
});

app.use(logger('dev'));
app.use(bodyParser());

mongoose.connect('mongodb://localhost/Vampires', function (err){
  if(err){
    console.log('connection error', err);
  }
  else {
    console.log("connection successful");
  }
});

fs.readdirSync('./controllers').forEach(function(file){
  if(file.substr(-3) == '.js'){
    route = require('./controllers/' + file);
    route.controller(app);
  }
});
app.get("/vampires", function (req, res) {
  res.send(helpers.displayAllVampires());
});
