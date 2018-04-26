const express = require('express')
const chalk = require('chalk')
const db = require('../../db')
var mongoose = require('mongoose')

const DepartmentModel = require('../../schema/model/department')

const router = express.Router()
const PAGESIZE = 10

// Define the routes for Department
router.get('/', function (req, res) {
	var limit = req.query.limit ? +req.query.limit : PAGESIZE
	var offset = req.query.page ? +req.query.page - 1 : 0
	offset = offset * limit
	var options = {
		limit: limit,
		offset: offset
	}
	if (!req.query.search) {
		DepartmentModel.paginate({}, options, function (error, result) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			res.setHeader('X-Total-Count', result.total)
			return res.send(result)
		})
	} else {
		DepartmentModel.paginate(
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
router.get('/:departmentId', function (req, res) {
	if (!req.params.departmentId) {
		var limit = req.query.limit ? +req.query.limit : PAGESIZE
		var offset = req.query.page ? +req.query.page - 1 : 0
		offset = offset * limit
		var options = {
			limit: limit,
			offset: offset
		}
		DepartmentModel.paginate({}, options, function (error, result) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			res.setHeader('X-Total-Count', result.total)
			return res.send(result)
		})
	} else {
		DepartmentModel.findById(req.params.departmentId)
			.populate('location')

			.populate('employees')

			.exec(function (error, department) {
				if (error) {
					console.log(chalk.red(error))
					return res.status(400).send(error)
				}
				return res.send(department)
			})
	}
})

router.post('/', (req, res, next) => {
	if (req.body.hasOwnProperty('id')) {
		return res.status(400).send({
			status: 'error',
			message: 'Cannot use http post for updating Department'
		})
	}
	const { departmentName } = req.body
	var departmentObj = {
		_id: new mongoose.Types.ObjectId(),

		departmentName: departmentName
	}

	if (req.body.hasOwnProperty('location')) {
		departmentObj.location = req.body.location['_id']
	}

	if (req.body.hasOwnProperty('employees')) {
		departmentObj.employees = req.body.employees.map(employee => {
			return employee['_id']
		})
	}

	DepartmentModel.create(departmentObj, (createErr, newDepartment) => {
		if (createErr) {
			console.log(chalk.red(createErr))

			return res.status(400).send({ status: 'error', message: createErr })
		} else {
			DepartmentModel.findById(newDepartment['_id'])
				.populate('location')

				.populate('employees')

				.exec(function (err, ne) {
					if (err) {
						console.log(chalk.red(err))
						return res.status(400).send(err)
					}
					return res.json(ne)
				})
		}
	})
})
router.put('/:departmentId', (req, res, next) => {
	if (!req.params.departmentId) {
		return res
			.status(400)
			.send({ status: 'error', message: 'A Department ID is required' })
	}
	DepartmentModel.findById(req.params.departmentId, {}, function (
		error,
		department
	) {
		if (error) {
			console.log(chalk.red(error))
			return res.status(400).send(error)
		}

		if (req.body.hasOwnProperty('departmentName')) {
			department.departmentName = req.body.departmentName
		}

		if (req.body.hasOwnProperty('location')) {
			department.location = req.body.location['_id']
		}

		if (req.body.hasOwnProperty('employees')) {
			department.employees = req.body.employees.map(employee => {
				return employee['_id']
			})
		}

		department.save(function (saveError, savedDepartment) {
			if (saveError) {
				console.log(chalk.red(saveError))
				return res.status(400).send(saveError)
			}
			DepartmentModel.findById(savedDepartment['_id'])
				.populate('location')

				.populate('employees')

				.exec(function (err, se) {
					if (err) {
						console.log(chalk.red(err))
						return res.status(400).send(err)
					}
					return res.json(se)
				})
		})
	})
})
router.patch('/:departmentId', (req, res, next) => {
	if (!req.params.departmentId) {
		return res
			.status(400)
			.send({ status: 'error', message: 'A Department ID is required' })
	}
	DepartmentModel.findById(req.params.departmentId, {}, function (
		error,
		department
	) {
		if (error) {
			console.log(chalk.red(error))
			return res.status(400).send(error)
		}

		if (req.body.hasOwnProperty('departmentName')) {
			department.departmentName = req.body.departmentName
		}

		if (req.body.hasOwnProperty('location')) {
			department.location = req.body.location['_id']
		}

		if (req.body.hasOwnProperty('employees')) {
			department.employees = req.body.employees.map(employee => {
				return employee['_id']
			})
		}

		department.save(function (saveError, savedDepartment) {
			if (saveError) {
				console.log(chalk.red(saveError))
				return res.status(400).send(saveError)
			}
			DepartmentModel.findById(savedDepartment['_id'])
				.populate('location')

				.populate('employees')

				.exec(function (err, se) {
					if (err) {
						console.log(chalk.red(err))
						return res.status(400).send(err)
					}
					return res.json(se)
				})
		})
	})
})
module.exports = router
