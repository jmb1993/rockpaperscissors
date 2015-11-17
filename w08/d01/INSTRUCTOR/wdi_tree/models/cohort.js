var mongoose = require('mongoose');

var CohortSchema = new mongoose.Schema({
  name: String,
  location: String,
  start_date: Date,
  instructors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Instructor'
  }],
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }]
});

var Cohort = mongoose.model('Cohort', CohortSchema);

module.exports = Cohort;
