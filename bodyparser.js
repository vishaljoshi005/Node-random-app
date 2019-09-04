var express = require('express');
var bodyparser = require('body-parser');
var route = require('./route/bodyparser1');

var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
route(app);
app.listen(3000, function (err) {
  if (err) {
    console.log('Something is not right but can be resolved');
  }

  console.log('Server created successfully');
});
