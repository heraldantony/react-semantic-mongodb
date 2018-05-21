var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')
var Schema = mongoose.Schema

var jobSchema = Schema({
	_id: Schema.Types.ObjectId,

	jobTitle: { type: String, index: true },

	minSalary: Number,

	maxSalary: Number,

	tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
})

jobSchema.query.byJobTitle = function (jobTitle) {
	return this.find({ jobTitle: new RegExp(jobTitle, 'i') })
}

jobSchema.plugin(mongoosePaginate)

var Job = mongoose.model('Job', jobSchema)

module.exports = Job
