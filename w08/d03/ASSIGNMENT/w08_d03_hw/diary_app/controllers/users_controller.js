var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js'),
    mongoose = require('mongoose');

var restrictAccess = function (req, res, next) {
  var sessionId = req.session.currentUser;
  var reqId = req.params.id;
  sessionId = reqId ? next() : res.status(400).send({err: 400, msg: "You shall not pass"});
};

router.get('/users', function(req, res) {
  User.find().exec(function(err, users) {
    res.send(users);
  });
});

router.get('/users/:id', function (req, res) {
  User.findById(req.params.id).exec(function (err, user) {
    res.send(user);
    req.session.email = req.body.email;
    req.session.password = req.body.password;
  });
});

router.post('/compareUser', function (req, res) {
  User.find({userName: req.body.userName}).exec(function (err, user) {
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

router.post('/users', function(req, res) {
  var user = new User(req.body);
  user.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send(user);
      req.session.userName = req.body.userName;
      req.session.password = req.body.password;
    }
  });
});

module.exports = router;
