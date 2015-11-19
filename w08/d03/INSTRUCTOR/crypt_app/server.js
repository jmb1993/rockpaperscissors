var bcrypt = require('bcrypt');

bcrypt.hash('potatoes', 10, function (err, hashedPassword) {
  console.log(hashedPassword);
});

bcrypt.compare('potatoes', '$2a$04$hbWmeMkufcXMOgxRp70z3.QGV8ju4sb6KPnO.iJx2APXoSDe2zSce', function (err, res) {
  console.log("SHould be true: " + res);
});

bcrypt.compare('potatoes', '$2a$10$9iV4bW60v0portLaTmUe.u0IDfJAS0JIQivCamjv91mlfmFbUy', function (err, res) {
  console.log("Should be false: " + res);
})
