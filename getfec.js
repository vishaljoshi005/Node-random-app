var express = require('express');
var app = express();
var route = require('./route/getfec1');

var path = __dirname;
route(app, path);

app.listen(3000, function (err) {
  if (err) {
    console.log('Something is not right but can be resolved easily');
  }

  console.log('server created successfully');
});
