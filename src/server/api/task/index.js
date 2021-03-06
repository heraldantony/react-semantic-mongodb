const express = require('express')
const chalk = require('chalk')
const db = require('../../db')
var mongoose = require('mongoose')

const TaskModel = require('../../schema/model/task')

const router = express.Router()
const PAGESIZE = 10

// Define the routes for Task
router.get('/', function (req, res) {
	var limit = req.query.limit ? +req.query.limit : PAGESIZE
	var offset = req.query.page ? +req.query.page - 1 : 0
	offset = offset * limit
	var options = {
		limit: limit,
		offset: offset
	}
	if (!req.query.search) {
		TaskModel.paginate({}, options, function (error, result) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			res.setHeader('X-Total-Count', result.total)
			return res.send(result)
		})
	} else {
		TaskModel.paginate(
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
router.get('/:taskId', function (req, res) {
	if (!req.params.taskId) {
		var limit = req.query.limit ? +req.query.limit : PAGESIZE
		var offset = req.query.page ? +req.query.page - 1 : 0
		offset = offset * limit
		var options = {
			limit: limit,
			offset: offset
		}
		TaskModel.paginate({}, options, function (error, result) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			res.setHeader('X-Total-Count', result.total)
			return res.send(result)
		})
	} else {
		TaskModel.findById(req.params.taskId)

			.populate('jobs')

			.exec(function (error, task) {
				if (error) {
					console.log(chalk.red(error))
					return res.status(400).send(error)
				}
				return res.send(task)
			})
	}
})

router.post('/', (req, res, next) => {
	if (req.body.hasOwnProperty('id')) {
		return res.status(400).send({
			status: 'error',
			message: 'Cannot use http post for updating Task'
		})
	}
	const {
		title,

		description
	} = req.body
	var taskObj = {
		_id: new mongoose.Types.ObjectId(),

		title: title,

		description: description
	}

	if (req.body.hasOwnProperty('jobs')) {
		taskObj.jobs = req.body.jobs.map(job => {
			return job['_id']
		})
	}

	TaskModel.create(taskObj, (createErr, newTask) => {
		if (createErr) {
			console.log(chalk.red(createErr))

			return res.status(400).send({ status: 'error', message: createErr })
		} else {
			TaskModel.findById(newTask['_id'])

				.populate('jobs')

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
router.put('/:taskId', (req, res, next) => {
	if (!req.params.taskId) {
		return res
			.status(400)
			.send({ status: 'error', message: 'A Task ID is required' })
	}
	TaskModel.findById(req.params.taskId, {}, function (error, task) {
		if (error) {
			console.log(chalk.red(error))
			return res.status(400).send(error)
		}

		if (req.body.hasOwnProperty('title')) {
			task.title = req.body.title
		}

		if (req.body.hasOwnProperty('description')) {
			task.description = req.body.description
		}

		if (req.body.hasOwnProperty('jobs')) {
			task.jobs = req.body.jobs.map(job => {
				return job['_id']
			})
		}

		task.save(function (saveError, savedTask) {
			if (saveError) {
				console.log(chalk.red(saveError))
				return res.status(400).send(saveError)
			}
			TaskModel.findById(savedTask['_id'])

				.populate('jobs')

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
router.patch('/:taskId', (req, res, next) => {
	if (!req.params.taskId) {
		return res
			.status(400)
			.send({ status: 'error', message: 'A Task ID is required' })
	}
	TaskModel.findById(req.params.taskId, {}, function (error, task) {
		if (error) {
			console.log(chalk.red(error))
			return res.status(400).send(error)
		}

		if (req.body.hasOwnProperty('title')) {
			task.title = req.body.title
		}

		if (req.body.hasOwnProperty('description')) {
			task.description = req.body.description
		}

		if (req.body.hasOwnProperty('jobs')) {
			task.jobs = req.body.jobs.map(job => {
				return job['_id']
			})
		}

		task.save(function (saveError, savedTask) {
			if (saveError) {
				console.log(chalk.red(saveError))
				return res.status(400).send(saveError)
			}
			TaskModel.findById(savedTask['_id'])

				.populate('jobs')

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
router.delete('/:taskId', function (req, res) {
	if (!req.params.taskId) {
		let msg = 'Need Id of Task to delete'
		console.log(chalk.red(msg))
		return res.status(400).send(msg)
	} else {
		TaskModel.findByIdAndDelete(req.params.taskId, (error, task) => {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			return res.send({ _id: req.params.taskId, message: 'Task deleted' })
		})
	}
})
module.exports = router
