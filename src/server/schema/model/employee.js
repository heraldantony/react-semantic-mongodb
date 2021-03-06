var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')
var Schema = mongoose.Schema

var employeeSchema = Schema({
	_id: Schema.Types.ObjectId,

	firstName: { type: String },

	lastName: { type: String },

	email: { type: String },

	phoneNumber: { type: String },

	hireDate: Date,

	salary: Number,

	commissionPct: Number,

	jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }]
})

employeeSchema.query.byFirstName = function (firstName) {
	return this.find({ firstName: new RegExp(firstName, 'i') })
}

employeeSchema.query.byLastName = function (lastName) {
	return this.find({ lastName: new RegExp(lastName, 'i') })
}

employeeSchema.query.byEmail = function (email) {
	return this.find({ email: new RegExp(email, 'i') })
}

employeeSchema.query.byPhoneNumber = function (phoneNumber) {
	return this.find({ phoneNumber: new RegExp(phoneNumber, 'i') })
}

employeeSchema.plugin(mongoosePaginate)

var Employee = mongoose.model('Employee', employeeSchema)

if (process.env.DBINDEX) {
	employeeSchema.index({
		firstName: 'text',

		lastName: 'text',

		email: 'text',

		phoneNumber: 'text'
	})
	Employee.ensureIndexes()
}

module.exports = Employee
