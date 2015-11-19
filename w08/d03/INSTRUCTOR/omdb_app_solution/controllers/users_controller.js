var mongoose = require('mongoose'),
  User = require('../models/user.js');

module.exports.controller = function(app) {

  app.get('/users', function(req, res) {
    User.find().populate('movies').exec(function(err, users) {
      res.send(users);
    });
  });

  app.post('/users', function(req, res) {
    var user = new User(req.body);
    user.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("User saved");
        res.send(user);
      }
    });
  });

  app.put('/users', function (req, res) {
    console.log("put route session id : " + req.session.currentUser);
    User.findById(req.session.currentUser).populate('movies').exec(function (err, user) {
      console.log(user)
      user.addMovie(req, res)
    });
  });

};
