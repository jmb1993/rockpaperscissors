var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posts'
  }]
});

UserSchema.pre('save', function(next){
  var user = this;

  if(!user.isModified('password')) return next();

  bcrypt.genSalt(10, function(err, salt){
    if(err) return next();

    bcrypt.has(user.password, salt, function(err, hashedPassword){
      if(err) return next();

user.password = hashedPassword;
next();

    })
  })
})

UserSchema.methods.comparePassword = function(usePassword, cb){
  bcrypt.compare(userPassword, this.password, function(err, isMatch){
    if(err) return cb(err);
    cb(null, isMatch);
  })
}


var User = mongoose.model('User', UserSchema);


module.exports = User;
