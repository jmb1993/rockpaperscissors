var bcrypt = require('bcrypt')
bcrypt.hash( 'potatoes', 10, function(err ,hashedPassword){
  console.log(hashedPassword)
});

bcrypt.compare("potatoes")
