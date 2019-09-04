var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var route = require('./route/uploadimageserverroute');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.multer().array());
route(app);

app.listen(3000, function (err) {
  if (err) {
    console.log('Something went haywire while creating server');
  }

  console.log('Server Created successfully ');
});
