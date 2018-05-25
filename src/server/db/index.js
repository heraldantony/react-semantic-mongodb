var mongoose = require("mongoose");
mongoose.connect("mongodb://" + process.env.DBHOST + "/" + process.env.DBNAME);

module.exports = {
  test: "test"
};
