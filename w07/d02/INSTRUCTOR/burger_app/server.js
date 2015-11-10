var express = require('express'),
    logger = require('morgan'),
    app = express(),
    orderArray = [];


app.use(logger('dev'));
app.listen(3000, function () {
  console.log("App listening on port 3000...");
});

app.get('/burgers/cheese/:cheese_type', function (req, res) {
  orderArray.push({cheese: req.params.cheese_type});
  res.send('You ordered a burger with ' + req.params.cheese_type + ' cheese!!');
});


app.get('/burgers/pickle/:pickle_type', function (req, res) {
  orderArray.push({pickle: req.params.pickle_type});
  res.send('You ordered a burger with ' + req.params.pickle_type + ' pickle!!');
});

app.get('/orders', function (req, res) {
  res.send(orderArray)
})
