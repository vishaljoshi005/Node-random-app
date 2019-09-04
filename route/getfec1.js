var fs = require('fs');
module.exports = function (app, path) {
  app.get('/:id/:name', function (req, res) {

    console.log('Made it inside the route file ');

    var message = 'In the file id is' + req.param.id + ' and name is ' + req.param.name;

    fs.appendFile('path/new.txt', message, function (err) {
        if (err) throw err;

        console.log('File has been updated successully');
      });

    fs.readFile('path/new.txt', function (err, data) {
  // This below should be inside the AppendFile method cz it is called via callstack unless that will 
	// return after that below function must be called to ensure output of the file.
        if (err)throw err;
        if (data) {
          console.log('File has been opened successully');
          res.send(data);
          res.end();
        }

        //res.sendFile('new.txt', { root: __dirname });
        //res.sendFile('new.txt', path);
      });
  });
};
