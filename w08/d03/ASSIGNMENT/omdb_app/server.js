var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')
var morgan = require('morgan');
var app = express();
var mongoose = require('mongoose');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'kewl',
  saveUninitialized: false,
  resave: false
}))

mongoose.connect('mongodb://localhost/userAuthApp', function (err) {
  if(err){
    console.log(err);
  }else {
    console.log("connection successful");
  }
});
