var express = require('express'),
    logger = require('morgan'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    fs = require('fs'),
    app = express();

//Set up app to use middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(session({
  secret: process.env.OMDB_SECRET,
  saveUninitialized: false,
  resave: false
}));


//Connect to mongodb
mongoose.connect('mongodb://localhost/omdbApp', function (err) {
  if(err){
    console.log(err);
  }else {
    console.log('connection successful');
  }
});

//Set up the port to listen
app.listen(3000, function () {
  console.log('App listening on port 3000...');
});

//Controllers
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});
