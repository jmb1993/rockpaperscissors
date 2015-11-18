var express     = require('express'),
    logger      = require('morgan'),
    app         = express(),
    router      = express.Router(),
    favicon     = require('serve-favicon'),
    pokemons    = require('./controllers/pokemons.js')
;
app.use(logger('dev'));
app.use(express.static('public'));
app.use(favicon(__dirname +'/public/images/PokeNation.png'));
app.use(logger('dev'));

app.listen(3000,()=>console.log('App listening on port 3000...'))
app.use('/', pokemons);