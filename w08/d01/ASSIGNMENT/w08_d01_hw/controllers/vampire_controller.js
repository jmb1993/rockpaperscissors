var mongoose = require('mongoose'),
    Vampire = require('../models/vampire.js');

module.exports.controller = function (app) {
  app.get('/victims', function (req, res, next) {
    Vampire.find().exec(function (err, vampires) {
      if(err) return next(err);
      res.send(vampires);
    })
  })

  app.get('/eyes', function (req, res, next) {
    Vampire.find().exec(function (err, vampires) {
      if(err) return next(err);
      res.send(vampires);
    })
  })
}
