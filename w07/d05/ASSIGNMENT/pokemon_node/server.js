
var express     = require('express'),
    logger      = require('morgan'),
    app         = express(),
    router      = express.Router(),
    favicon     = require('serve-favicon'),
    bodyParser  = require('body-parser'),
    session     = require('express-session'),
    pokemons    = require('./controllers/pokemons.js');

app.use(logger('dev'));
app.use(express.static('public'));   
app.use(favicon(__dirname +'/public/images/PokeNation.png'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(session({
  secret: 'thisisitotallysecret',
  saveUninitialized: false,
  resave: false
}));




app.get('/',(req,res)=>res.render('index.html'))

app.listen(3000,(req,res)=>'hello world')
app.use('/', pokemons);
