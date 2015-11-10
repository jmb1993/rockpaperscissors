var express = require('express');
var logger = require('morgan');
var app = express();

//Use in app
app.use(logger('dev'));

//Set up server port
app.listen(3000, function () {
  console.log("Server running on port 3000...");
});


//routes
app.get('/', function (req, res) {
  res.send("Welcome to my Zoo App");
});


app.get('/cats/lion', function (req, res) {
  res.send('You are looking at a Lion')
});

app.get('/cats/panther', function (req, res) {
  res.send('You are looking at a Panther');
});

app.get('/cats/tiger', function (req, res) {
  res.send('You are looking at a Tiger');
});

app.get('/cats/:cat_type', function (req, res) {
  res.send("You hit the dynamic route and are looking at this cat " + req.params.cat_type);
});
//BIRDS

app.get('/birds/emu', function (req, res){
 res.send("You are looking at an Emu");
});

app.get('/birds/eagle', function (req, res){
 res.send("You are looking at some mothafuckin Eagles");
});

app.get('/birds/parrot', function(req, res){
 res.send("Look at this jerk parrot.");
});

app.get('/birds/:bird', function (req, res) {
  res.send("Lewl bird bro " + req.params.bird)
})

//REPTILES

app.get('/reptiles/caiman', function(req, res) {
  res.send("You're looking at a caiman.")
});

app.get('/reptiles/water_moccasin', function(req, res) {
  res.send("You're looking at a water moccasin.")
});

app.get('/reptiles/frilled_lizard', function(req, res) {
 res.send("You're looking at a frilled lizard.")
});

app.get('/reptiles/:reptile', function (req, res) {
  res.send("Kewl reptile bro " + req.params.reptile)
})
