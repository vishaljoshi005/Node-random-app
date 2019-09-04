var express = require('express');
var multer = require('multer');
var app = express();
var route = require('./route/emailserverroute');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
route(app);

app.listen(3000, function (err) {
  if (err) {
    console.log('Something is wrong while creating a server');
  } else {
    console.log('Server created successfully');
  }
});
