var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  name: { first: String, last: String},
  age: Number
});

var Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
