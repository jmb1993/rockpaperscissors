var mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  Movie = require('./movie.js');

var UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  movies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }]
});

UserSchema.methods.addMovie = function(req, res) {
  var user = this;
  var movie = new Movie(req.body);
  movie.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      user.movies.push(movie._id);
      user.save(function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log(user.name + " saved");
          res.send(user);
        }
      });
    }
  });
}

UserSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = User;
