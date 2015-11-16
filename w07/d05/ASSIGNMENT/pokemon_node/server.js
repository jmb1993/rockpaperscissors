var express = require('express'),
    logger = require('morgan'),
    app = express(),
    pokemons = require('./poke_array')

app.use(logger('dev'));
app.use(express.static('public'));   

app.listen(3000,(req,res)=>'hello world')
app.get('/',(req,res)=>res.render('index.html'))

app.get('/pokemons', (req,res)=>res.send(pokemons));