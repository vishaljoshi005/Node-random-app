module.exports = function (app) {
  app.post('/post', function (req, res) {
      console.log('Inside the routing ');

      res.json({ message: 'T ', name1: req.body.name, email: req.body.email });

      //res.send('The entered name is fetched by bodyparser is', req.body.email);

    });
};
