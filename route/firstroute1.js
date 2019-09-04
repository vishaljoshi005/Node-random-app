module.exports = function (app, path)
{  app.get('/new', function (req, res) {
    console.log('Inside from the routing file');
    res.send('{ name: vishal }');
  });
};
