var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')
var Schema = mongoose.Schema

var taskSchema = Schema({
	_id: Schema.Types.ObjectId,

	title: { type: String },

	description: { type: String },

	jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }]
})

taskSchema.query.byTitle = function (title) {
	return this.find({ title: new RegExp(title, 'i') })
}

taskSchema.query.byDescription = function (description) {
	return this.find({ description: new RegExp(description, 'i') })
}

taskSchema.plugin(mongoosePaginate)

var Task = mongoose.model('Task', taskSchema)

if (process.env.DBINDEX) {
	taskSchema.index({
		title: 'text',

		description: 'text'
	})
	Task.ensureIndexes()
}

module.exports = Task
