var express = require('express'),
    logger = require('morgan'),
    app = express(),
    pokemons = require('./poke_array')

var trySendData=(item,res)=> item ? res.send(item) : res.sendStatus(404).end()

app.use(logger('dev'));
app.use(express.static('public'));   

app.listen(3000,(req,res)=>'hello world')


app.get('/',(req,res)=>res.render('index.html'))
app.get('/pokemons/searchByName', (req,res)=>{
  var curr; 
  if (req.query.name) curr = pokemons.find( el=> el.name.toLowerCase() === req.query.name.toLowerCase() );
  trySendData(curr,res);
})

app.get('/pokemons/searchByType', (req,res)=>{
  var curr;
  if (req.query.type) curr = pokemons.filter( el=>el.type.some( ty=> ty.toLowerCase()===req.query.type.toLowerCase())) 
  curr.forEach(el=>console.log(el.type))
  trySendData(curr,res);
})

app.get('/pokemons/random', (req,res)=>{
  var rando = Math.floor(Math.random() * (pokemons.length + 1));
  trySendData(pokemons[rando],res);
})

app.get('/pokemons/:id',(req,res)=>{
  var curr = pokemons.find( el=> +el.id === +req.params.id )
  trySendData(curr,res);
});

app.get('/pokemons', (req,res)=>{
  res.send(pokemons)
});