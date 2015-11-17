var mongoose = require('mongoose');

var InstructorSchema = new mongoose.Schema({
  name: { first: String, last: String},
  age: Number
});

var Instructor = mongoose.model('Instructor', InstructorSchema);

module.exports = Instructor;
