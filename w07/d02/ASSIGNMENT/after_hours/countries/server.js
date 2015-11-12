var express = require('express');
var logger = require('morgan');
var allCountries = require('iso-countries');
var app = express();


var allCountries = require('iso-countries');
var findRegion = require("./helpers/regino.js")
app.listen(3000, function(){
  console.log("running on server 3000")
})

app.get("/:country/region", function(req,res){
  var reqCountry = region.upcase(req.params.country);
	var countries = allCountries.countries;
	res.send(region.find_country_region(countries, req_country));

});
