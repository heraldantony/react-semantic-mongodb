var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')
var Schema = mongoose.Schema

var departmentSchema = Schema({
	_id: Schema.Types.ObjectId,

	departmentName: String,
	location: { type: Schema.Types.ObjectId, ref: 'Location' },
	employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
})

departmentSchema.query.byDepartmentName = function (departmentName) {
	return this.find({ departmentName: new RegExp(departmentName, 'i') })
}

departmentSchema.index({
	departmentName: 'text'
})

departmentSchema.plugin(mongoosePaginate)

var Department = mongoose.model('Department', departmentSchema)

module.exports = Department
