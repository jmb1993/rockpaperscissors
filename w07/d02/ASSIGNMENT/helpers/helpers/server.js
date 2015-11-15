var express = require('express'),
logger = require('morgan'),
app = express();
toUpcase = require('./helpers/to_uppercase.js')

app.use(logger('dev'));

app.listen(3000, function(){
  console.log("App listening on port 3000..")
});

app.get('/upcaseme/:word_to_upcase', function(req, res){
  var newString = toUpcase.upcase(req.params.word_to_upcase)
})
