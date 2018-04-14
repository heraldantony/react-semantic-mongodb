var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')
var Schema = mongoose.Schema

var taskSchema = Schema({
	_id: Schema.Types.ObjectId,

	title: String,

	description: String,

	jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }]
})

taskSchema.query.byTitle = function (title) {
	return this.find({ title: new RegExp(title, 'i') })
}

taskSchema.query.byDescription = function (description) {
	return this.find({ description: new RegExp(description, 'i') })
}

taskSchema.index({
	title: 'text',
	description: 'text'
})

taskSchema.plugin(mongoosePaginate)

var Task = mongoose.model('Task', taskSchema)

module.exports = Task
