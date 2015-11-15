var express = require('express')
var logger = require('morgan')
var app = express();
var request = require('request')

app.use(logger('dev'))
app.listen(3000, ()=>{
  console.log("running on server 3000")
});

app.get('/', (req, res)=> {
  res.send("welcome to your weather app")
})
app.get('/weather', (req, res)=>{
  request('http://www.google.com', function(error, response, body)
var apiRoot = 'http://api.openweathermap.org/data/2.5/weather'
)
})
