var express = require('express');
var  logger = require('morgan');
 var  app = express();
var orderArray = [];
//Use in app
app.use(logger('dev'));

//Set up server port
app.listen(3000, function(){
  console.log("Server running on port 3000")
})
// routes
app.get("/",function(request, response){
  console.log(request);
  response.send("Welcome to my Burger Order App")
});
//burger toppings
app.get("/burger/cheese", function(request, response){
  response.send("You ordered burger with cheese")
});
app.get("/burger/pickle", function(request,response){
  response.send("You ordered a burger with pickles")
});
app.get("/burger/cheese/brie", function(request,response){
  response.send("You ordered a burger with brie cheese")
});
app.get("/burger/pickle/dill"),function(request, response){
  response.send("Your ordered a burger with dill pickles")
}
app.get("/burger/cheese/:cheese_type",function(request,response){
  response.send("you ordered a burger with " + request.params.cheese_type);
  orderArray.push({cheese: request.params.cheese_type});
});
app.get("/burger/pickle/:pickle_type",function(request,response){
  response.send("you ordered a burger with " + request.params:pickle_type)
  orderArray.push({cheese request.params.pickle_type})
});
