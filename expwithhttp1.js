var express = require('express');
var app = express();
var http = require('http').Server(app);

var first = require('./route/firstroute1');
first(app);
http.listen(3000, function (err) {
  if (err) {
    console.log('something not good');
  }

  console.log('Server is created');
});
