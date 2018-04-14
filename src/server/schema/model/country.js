var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')
var Schema = mongoose.Schema

var countrySchema = Schema({
	_id: Schema.Types.ObjectId,

	countryName: String,
	region: { type: Schema.Types.ObjectId, ref: 'Region' }
})

countrySchema.query.byCountryName = function (countryName) {
	return this.find({ countryName: new RegExp(countryName, 'i') })
}

countrySchema.index({
	countryName: 'text'
})

countrySchema.plugin(mongoosePaginate)

var Country = mongoose.model('Country', countrySchema)

module.exports = Country
