var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    app = express(),
    mongoose = require('mongoose');

//Set server to listen
app.listen(3000, function () {
  console.log("App listening on port 3000...");
});

//Set up other app uses
app.use(logger('dev'));
app.use(bodyParser());

//Connect mongoose to a mongodb
mongoose.connect('mongodb://localhost/wdiApp', function (err) {
  if(err){
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});

//Controllers
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js'){
    route = require('./controllers/' + file);
    route.controller(app);
  }
});
