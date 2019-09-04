var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/new');

var UserSchema = new Schema({
  name: { type: String, required: true, deafult: '' },
  email: { type: String, default: '' },
  password: { type: String },
});

var User = mongoose.model('users', UserSchema);

module.exports = User;
