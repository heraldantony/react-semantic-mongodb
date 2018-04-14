var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = Schema({
  _id: Schema.Types.ObjectId,

  name: String,

  email: String,
  password: String,

  active: Boolean,

  registeredDate: Date,
  lastLoginDate: Date
});

var User = mongoose.model("User", userSchema);

module.exports = User;
