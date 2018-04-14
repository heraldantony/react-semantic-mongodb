const express = require('express')
const chalk = require('chalk')
const db = require('../../db')
var mongoose = require('mongoose')

const EmployeeModel = require('../../schema/model/employee')

const router = express.Router()
const PAGESIZE = 10

// Define the routes for Employee
router.get('/', function (req, res) {
	var limit = req.query.limit ? +req.query.limit : PAGESIZE
	var offset = req.query.page ? +req.query.page - 1 : 0
	offset = offset * limit
	var options = {
		limit: limit,
		offset: offset
	}
	if (!req.query.search) {
		EmployeeModel.paginate({}, options, function (error, result) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			res.setHeader('X-Total-Count', result.total)
			return res.send(result)
		})
	} else {
		EmployeeModel.paginate(
			{ $text: { $search: req.query.search } },
			options,
			function (error, result) {
				if (error) {
					console.log(chalk.red(error))
					return res.status(400).send(error)
				}
				res.setHeader('X-Total-Count', result.total)
				return res.send(result)
			}
		)
	}
})
router.get('/:employeeId', function (req, res) {
	if (!req.params.employeeId) {
		var limit = req.query.limit ? +req.query.limit : PAGESIZE
		var offset = req.query.page ? +req.query.page - 1 : 0
		offset = offset * limit
		var options = {
			limit: limit,
			offset: offset
		}
		EmployeeModel.paginate({}, options, function (error, result) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			res.setHeader('X-Total-Count', result.total)
			return res.send(result)
		})
	} else {
		EmployeeModel.findById(req.params.employeeId, function (error, employee) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			return res.send(employee)
		})
	}
})

router.post('/', (req, res, next) => {
	if (req.body.hasOwnProperty('id')) {
		return res.status(400).send({
			status: 'error',
			message: 'Cannot use http post for updating Employee'
		})
	}
	const {
		firstName,

		lastName,

		email,

		phoneNumber,

		hireDate,

		salary,

		commissionPct
	} = req.body
	EmployeeModel.create(
		{
			_id: new mongoose.Types.ObjectId(),

			firstName: firstName,

			lastName: lastName,

			email: email,

			phoneNumber: phoneNumber,

			hireDate: hireDate,

			salary: salary,

			commissionPct: commissionPct
		},
		(createErr, newEmployee) => {
			if (createErr) {
				console.log(chalk.red(createErr))

				return res.status(400).send({ status: 'error', message: createErr })
			} else {
				return res.json(newEmployee)
			}
		}
	)
})
router.put('/:employeeId', (req, res, next) => {
	if (!req.params.employeeId) {
		return res
			.status(400)
			.send({ status: 'error', message: 'A Employee ID is required' })
	}
	EmployeeModel.findById(req.params.employeeId, {}, function (error, employee) {
		if (error) {
			console.log(chalk.red(error))
			return res.status(400).send(error)
		}

		if (req.body.hasOwnProperty('firstName')) {
			employee.firstName = req.body.firstName
		}

		if (req.body.hasOwnProperty('lastName')) {
			employee.lastName = req.body.lastName
		}

		if (req.body.hasOwnProperty('email')) {
			employee.email = req.body.email
		}

		if (req.body.hasOwnProperty('phoneNumber')) {
			employee.phoneNumber = req.body.phoneNumber
		}

		if (req.body.hasOwnProperty('hireDate')) {
			employee.hireDate = req.body.hireDate
		}

		if (req.body.hasOwnProperty('salary')) {
			employee.salary = req.body.salary
		}

		if (req.body.hasOwnProperty('commissionPct')) {
			employee.commissionPct = req.body.commissionPct
		}

		employee.save(function (saveError, savedEmployee) {
			if (saveError) {
				console.log(chalk.red(saveError))
				return res.status(400).send(saveError)
			}
			res.send(savedEmployee)
		})
	})
})
router.patch('/:employeeId', (req, res, next) => {
	if (!req.params.employeeId) {
		return res
			.status(400)
			.send({ status: 'error', message: 'A Employee ID is required' })
	}
	EmployeeModel.findById(req.params.employeeId, {}, function (error, employee) {
		if (error) {
			console.log(chalk.red(error))
			return res.status(400).send(error)
		}

		if (req.body.hasOwnProperty('firstName')) {
			employee.firstName = req.body.firstName
		}

		if (req.body.hasOwnProperty('lastName')) {
			employee.lastName = req.body.lastName
		}

		if (req.body.hasOwnProperty('email')) {
			employee.email = req.body.email
		}

		if (req.body.hasOwnProperty('phoneNumber')) {
			employee.phoneNumber = req.body.phoneNumber
		}

		if (req.body.hasOwnProperty('hireDate')) {
			employee.hireDate = req.body.hireDate
		}

		if (req.body.hasOwnProperty('salary')) {
			employee.salary = req.body.salary
		}

		if (req.body.hasOwnProperty('commissionPct')) {
			employee.commissionPct = req.body.commissionPct
		}

		employee.save(function (saveError, savedEmployee) {
			if (saveError) {
				console.log(chalk.red(saveError))
				return res.status(400).send(saveError)
			}
			res.send(savedEmployee)
		})
	})
})
module.exports = router
