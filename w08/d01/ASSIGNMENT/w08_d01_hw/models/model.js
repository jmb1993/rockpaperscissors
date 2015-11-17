var mongoose = require('mongoose');

var VampireSchema = new mongoose.Schema({
  name: String,
hair_color: String,
eye_color: String,
dob: Data,
loves: Array,
location: String
gender: String
victims: Number
});
var vampire = mongoose.model('vampire', VampireSchema);

module.exports = vampire;
