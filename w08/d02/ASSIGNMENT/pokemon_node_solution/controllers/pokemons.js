var express       = require('express'),
    router        = express.Router(),
    pokemons_data = require('./../poke_array');

var trySendData= function(item,res){
  item ? res.send(item) : res.sendStatus(404).end()
}

router.get('/pokemons/searchByName', (req,res)=>{
  var curr;

  if(req.query.name) {
    curr = pokemons_data.find( function(el){
      return el.name.toLowerCase() === req.query.name.toLowerCase()
    });
  }

  trySendData(curr,res);
})

router.get('/pokemons/searchByType', (req,res)=>{
  var curr;
  if(req.query.type){
    curr = pokemons_data.filter( function(el){
      return el.type.some( function(ty){
        return ty.toLowerCase() === req.query.type.toLowerCase()
      })
    })
  }
  trySendData(curr,res);
})

router.get('/pokemons/random', (req,res)=>{
  var rando = Math.floor(Math.random() * (pokemons_data.length + 1));
  trySendData(pokemons_data[rando],res);
})

router.get('/pokemons/:id',(req,res)=>{
  var curr = pokemons_data.find( el=> +el.id === +req.params.id )
  trySendData(curr,res);
});

router.get('/pokemons', (req,res)=>{
  res.send(pokemons_data)
});

module.exports = router;
