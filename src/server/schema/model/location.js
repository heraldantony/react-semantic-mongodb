var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')
var Schema = mongoose.Schema

var locationSchema = Schema({
	_id: Schema.Types.ObjectId,

	streetAddress: String,

	postalCode: String,

	city: String,

	stateProvince: String,
	country: { type: Schema.Types.ObjectId, ref: 'Country' }
})

locationSchema.query.byStreetAddress = function (streetAddress) {
	return this.find({ streetAddress: new RegExp(streetAddress, 'i') })
}

locationSchema.query.byPostalCode = function (postalCode) {
	return this.find({ postalCode: new RegExp(postalCode, 'i') })
}

locationSchema.query.byCity = function (city) {
	return this.find({ city: new RegExp(city, 'i') })
}

locationSchema.query.byStateProvince = function (stateProvince) {
	return this.find({ stateProvince: new RegExp(stateProvince, 'i') })
}

locationSchema.index({
	streetAddress: 'text',
	postalCode: 'text',
	city: 'text',
	stateProvince: 'text'
})

locationSchema.plugin(mongoosePaginate)

var Location = mongoose.model('Location', locationSchema)

module.exports = Location
