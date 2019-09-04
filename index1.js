var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    if (req.url === '/favicon.ico') {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' });
      res.end();
      console.log('favicon requested');
      return;
    }

    res.writeHead(200, { 'content-type': 'text/html' });
    console.log('Server created');
    fs.appendFile('route/index1.html', '<p>this is new </p>', function (err1) {
        if (err1) throw err1;
        console.log('file updated');
      });

    fs.readFile('route/index1.html', function (err2, data) {
        if (err2) throw err2;
        res.write(data);
        res.end();
      });

  }).listen(9009);
