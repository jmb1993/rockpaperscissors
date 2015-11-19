var express = require('express'),
    logger = require('morgan'),
    bcrypt = require('bcrypt'), /* something is messed up on my bcrypt */
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    users = require('./controllers/users_controller.js'),
    sessions = require('./controllers/sessions_controller.js'),
    posts = require('./controllers/posts_controller.js'),
    app = express();

app.use(logger('dev'));
app.use(express.static('public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
  secret: "It's a secret to everyone",
  saveUninitialized: false,
  resave: false
}));

mongoose.connect('mongodb://localhost/diary_app', function(err) {
  if (err) {
    console.log(err);
  } else console.log('connection successful');
})

app.listen(3000, function() {
  console.log('listening on port 3000');
});

app.use('/', posts);
app.use('/', sessions);
app.use('/', users);
