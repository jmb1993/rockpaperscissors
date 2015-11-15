var express= require('express');
var logger= require('morgan');
var app= express();
var request = require('request')

app.use(logger('dev'))
app.listen(3000, ()=>{
  console.log("running on server 3000")
});



app.get('/', (req, res)=> {
  res.send("welcome to my giphy app")
})
app.get('/random', (req, res)=>{
  request('http://www.google.com', function(error, response, body)
dc6zaTOxFJmzC)
})
