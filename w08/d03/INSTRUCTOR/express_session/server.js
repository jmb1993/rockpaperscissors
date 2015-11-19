var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(session({
  secret: 'this is totally secret',
  saveUninitialized: false,
  resave: false
}));
app.use(express.static('public'));
app.listen(3000, function () {
  console.log("App listening on port 3000...");
});


app.get('/session', function (req, res) {
  res.send("This is the name in the request session: " + req.session.name);
});

app.get('/memory', function (req, res) {
  if(req.session.name){
    res.send('Oh, I remember you. You are ' + req.session.name);
  } else {
    res.send('I dont know who you are.');
  }
});

app.post('/memory', function (req, res) {
  req.session.name = req.body.name;
  res.send('I will remember you');
});

app.delete('/memory', function (req, res) {
  req.session.name = null;
  res.send('I have forgotten errrrthang');
});
