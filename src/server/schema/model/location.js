var mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
var Schema = mongoose.Schema;

var locationSchema = Schema({
  _id: Schema.Types.ObjectId,

  streetAddress: { type: String, index: true },

  postalCode: { type: String, index: true },

  city: { type: String, index: true },

  stateProvince: { type: String, index: true },

  country: { type: Schema.Types.ObjectId, ref: "Country" }
});

locationSchema.query.byStreetAddress = function(streetAddress) {
  return this.find({ streetAddress: new RegExp(streetAddress, "i") });
};

locationSchema.query.byPostalCode = function(postalCode) {
  return this.find({ postalCode: new RegExp(postalCode, "i") });
};

locationSchema.query.byCity = function(city) {
  return this.find({ city: new RegExp(city, "i") });
};

locationSchema.query.byStateProvince = function(stateProvince) {
  return this.find({ stateProvince: new RegExp(stateProvince, "i") });
};

locationSchema.plugin(mongoosePaginate);

var Location = mongoose.model("Location", locationSchema);

module.exports = Location;
