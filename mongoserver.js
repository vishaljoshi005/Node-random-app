var express = require('express');
var bodyParser = require('body-parser');
var route = require('./route/mongosereverroute');

var app = express();

// below code formats the data to be send via urlencoded by post method
app.use(bodyParser.urlencoded({ extended: true }));
route(app);

app.listen(3000, function (err) {
  if (err) {
    console.log('Server not created');
  }

  console.log('Server created successfully');
});
