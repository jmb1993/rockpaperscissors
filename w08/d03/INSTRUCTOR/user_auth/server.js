var express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    User = require('./models/user.js'),
    Post = require('./models/post.js'),
    app = express();

app.use(morgan('dev'));
app.use(session({
  secret: 'kewl',
  saveUnitialized: false,
  resave: false
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to the Mongo database
mongoose.connect('mongodb://localhost/userAuthApp', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('connection successful');
  }
});

var restrictAccess = function (req, res, next) {
  var sessionId = req.session.currentUser;
  var reqId = req.params.id;
  sessionId = reqId ? next() : res.status(400).send({err: 400, msg: "You shall not pass"});
};

var authenticate = function (req, res, next) {
  req.session.currentUser ? next() : res.status(403).send({err: 403, msg: "log in troll"});
};

app.get('/users', function(req, res) {
  User.find().populate('posts').exec(function (err, users) {
    res.send(users);
  });
});

app.get('/users/:id', authenticate, restrictAccess, function (req, res) {
  User.findById(req.params.id).exec(function (err, user) {
    res.send(user);
  });
});

app.get('/posts', function(req, res) {
  Post.find().exec(function (err, posts) {
    res.send(posts);
  });
});

app.post('/users', function (req, res) {
  var user = new User(req.body);
  user.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('User saved');
      res.send(user);
    }
  });
});

app.post('/compareUser', function (req, res) {
  User.find({name: req.body.name}).exec(function (err, user) {
    var currentUser = user[0];
    currentUser.comparePassword(req.body.password, function (err, isMatch) {
      if(isMatch) {
        res.send(currentUser);
      } else {
        res.send(err);
      }
    });
  });
});

app.post('/session', function (req, res) {
  User.find({name: req.body.name}).exec(function (err, user) {
    user[0].comparePassword(req.body.password, function (err, isMatch) {
      if(isMatch) {
        req.session.currentUser = user[0]._id;
        res.send('This user successfully logged in: ' + user[0].name);
      } else {
        res.status(400);
        res.send({
          err: 400,
          msg: 'incorrect password'
        });
      }
    });
  });
});

app.use(express.static('./public'));

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});
