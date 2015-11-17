var mongoose = require('mongoose'),
    Cohort = require('../models/cohort.js');

module.exports.controller = function (app) {

  app.get('/cohorts', function (req, res, next) {
    Cohort.find().populate('students instructors').exec(function (err, cohorts) {
      if(err) return next(err);
      res.send(cohorts);
    });
  });

}
