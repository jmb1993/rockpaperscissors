var express = require('express'),
    logger = require('morgan'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express(),
    movies = require('./controllers/movies_controller.js'),
    sessions = require('./controllers/sessions_controller.js'),
    users = require('./controllers/users_controller.js');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(session({
  secret: process.env.OMDB_SECRET,
  saveUninitialized: false,
  resave: false
}));

//Connect to mongoose
mongoose.connect('mongodb://localhost/omdbApp', function (err) {
  if(err){
    console.log(err);
  } else {
    console.log("connection successful");
  }
});

//Set up listen port
app.listen(3000, function () {
  console.log("App listening on port 3000...");
});

//Controllers
app.use('/', movies);
app.use('/', sessions);
app.use('/', users);
