var nodemailer = require('nodemailer');
var MailOptions = require('../models/emailservermodel');
var multer = require('multer');
var fs = require('fs');

var storage = multer.diskStorage({
  destination: (req, res, next)=> {
      next(null, 'C:/Users/Vishal Joshi/Desktop/MEAN/Node Aom/public/uploads');
    },

  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

var upload = multer({
  storage: storage,
});

module.exports = function (app) {
  // key name should also be photo to upload Photo
  // input must be from to subject photo text
  app.post('/sendmail', upload.single('photo'), function (req, res) {
    console.log('made it inside the sendmail');
    from = req.body.from;
    to = req.body.to;
    subject = req.body.subject;
    attachments = [{ filename: req.file.filename, content: fs.createReadStream(req.file.path) }];

    // fs.createReadStream(req.file.path)
    console.log(attachments);
    text = req.body.text;
    console.log('made it inside the route sendmail post method');
    var transporter = nodemailer.createTransport({
      service: 'gmail',

      auth: {
        user: 'node.js2009@gmail.com',
        pass: 'nodejs@gmail',
      },
    });
    details = new MailOptions(from, to, subject, attachments, text);

    transporter.sendMail(details, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.send(info.response);
      }
    });
  });
};
