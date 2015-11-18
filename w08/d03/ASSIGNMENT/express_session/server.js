var express = require('express'),
logger = require('morgan'),
bodyParser = require('body-parser'),
session = require('express-session'),
app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(session({
  secret: 'totally secret',
  saveUnitialized: false,
  resave: false
}));
app.use(express.static('public'));
app.listen(3000, function(){
  console.log('running on port 3000')
})

app.get('/session', function(req, res){
  res.send("this is the name in the request sesion: " + req.session.name)
});
app.get('/memory', function(req, res){
  if(req.session.name){
    res.send("oh i remember you" + req.session.name)
  } else {
    res.send("i dont know who you are")
  }
});

app.post('/memory', function(req, res){
req.session.name = req.body.name;
res.send("I will never forget")
});
app.delete('/memory', function(req, res){
  req.session.name = null
  res.send("I have forgotten everything")
});
