var mongoose = require('mongoose'),
    Student = require('../models/student.js');

module.exports.controller = function (app) {
  app.get('/students', function (req, res) {
    res.send("Your controller works for students")
  });
};
