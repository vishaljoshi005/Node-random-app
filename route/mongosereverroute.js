var User = require('../models/mongoservermodel');
module.exports = function (app) {
  app.post('/insert', function (req, res) {

    console.log('Made it inside the insert post method');
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    user = new User({
      name: name, email: email, password: password,
    });
    user.save(function (err, done) {
      if (err) {
        res.json({ Error: true, message: 'Could not insert', });
      }

      if (done) {
        res.json({
          Error: false, message: 'Data inserted successfully',
        });
      }
    });
  });

  app.post('/delete', function (req, res) {
    console.log('Made it inside the delete post method');
    name = req.body.name;
    User.deleteOne({ name: name }, function (err, obj) {
      console.log('Made it inside the delete record method');
      if (err) {
        console.log('error is ', err);
      }

      res.send(obj);
    });
  });

  app.post('/update', function (req, res) {
    //takes the name and eemail to update eemail
    console.log('made is inside the update method');
    name = req.body.name;
    email = req.body.email;
    var query = { name: name };
    var updt = { $set: { email: email } };
    User.updateMany(query, updt, function (error, obj) {
      if (error) {
        console.log('err while updating email');
        res.send('Something may have gone wrong check it out');
      }

      if (obj) {

        res.send('updated' + obj.nModified);
      }
    });
  });

  app.post('/getdata', function (req, res) {
    // takes name to fetch details
    console.log('made is inside the get data method');
    name = req.body.name;
    User.find({ name: name }, function (err, data) {
      if (err) {
        console.log('err while fetching data');
      }

      if (data) {
        res.json({ Error: false, data: data });
      }
    });
  });
};
