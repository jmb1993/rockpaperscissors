var express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
User = require('../models/user.js');

router.get('/users', function(req, res){
  User.find().populate('movies').exec(function(req, res){
    var user = new User(req.body);
user.save(function (err){
  if(err){
    console.log(err);
  } else {
    res.send(user);
  }
})
    })
})

router.put('/users', function(req, res){
  User.findByID(req.session.currentUser).populate('movies').exec(function(err, user){
    user.addMovie(req, res);
  });
});

module.exports = router
