var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')
var Schema = mongoose.Schema

var regionSchema = Schema({
	_id: Schema.Types.ObjectId,

	regionName: String
})

regionSchema.query.byRegionName = function (regionName) {
	return this.find({ regionName: new RegExp(regionName, 'i') })
}

regionSchema.index({
	regionName: 'text'
})

regionSchema.plugin(mongoosePaginate)

var Region = mongoose.model('Region', regionSchema)

module.exports = Region
