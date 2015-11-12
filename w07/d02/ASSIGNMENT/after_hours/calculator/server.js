var express= require('express');
var logger= require('morgan');
var app= express();
var calculator=require('helpers/math.js')


app.use(logger('dev'));

app.listen(3000, function(){
 console.log("server is running")
});
