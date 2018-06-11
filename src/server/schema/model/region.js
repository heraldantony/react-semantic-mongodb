var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')
var Schema = mongoose.Schema

var regionSchema = Schema({
	_id: Schema.Types.ObjectId,

	regionName: { type: String }
})

regionSchema.query.byRegionName = function (regionName) {
	return this.find({ regionName: new RegExp(regionName, 'i') })
}

regionSchema.plugin(mongoosePaginate)

var Region = mongoose.model('Region', regionSchema)

if (process.env.DBINDEX) {
	regionSchema.index({
		regionName: 'text'
	})
	Region.ensureIndexes()
}

module.exports = Region
