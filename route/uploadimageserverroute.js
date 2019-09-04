const mongodb = require('mongodb');

//var MongoClient = require('mongodb').MongoClient;
//var url = 'mongodb://localhost:27017/'

const multer = require('multer');
const storage = multer.diskStorage({ destination: function (req, file, next) {
    next(null, 'C:/Users/Vishal Joshi/Desktop/MEAN/Node Aom/public/uploads');
  },

  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },

});

var upload = multer({ storage: storage });
module.exports = function (app) {
  app.post('/upload', upload.single('photo'), function (req, res) {
    //MongoClient.connect('url', (err, db)=> {
    //var dbo = db.db('photos');
    //var picobj = {  };
    //});
    var pic = req.file.originalname;
    console.log('Photo saved successfully');
    res.send('Photo uploaded successfully' + pic + ' this is gap ' + req.file);
  });
};
