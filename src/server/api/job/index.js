const express = require('express')
const chalk = require('chalk')
const db = require('../../db')
var mongoose = require('mongoose')

const JobModel = require('../../schema/model/job')

const router = express.Router()
const PAGESIZE = 10

// Define the routes for Job
router.get('/', function (req, res) {
	var limit = req.query.limit ? +req.query.limit : PAGESIZE
	var offset = req.query.page ? +req.query.page - 1 : 0
	offset = offset * limit
	var options = {
		limit: limit,
		offset: offset
	}
	if (!req.query.search) {
		JobModel.paginate({}, options, function (error, result) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			res.setHeader('X-Total-Count', result.total)
			return res.send(result)
		})
	} else {
		JobModel.paginate(
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
router.get('/:jobId', function (req, res) {
	if (!req.params.jobId) {
		var limit = req.query.limit ? +req.query.limit : PAGESIZE
		var offset = req.query.page ? +req.query.page - 1 : 0
		offset = offset * limit
		var options = {
			limit: limit,
			offset: offset
		}
		JobModel.paginate({}, options, function (error, result) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			res.setHeader('X-Total-Count', result.total)
			return res.send(result)
		})
	} else {
		JobModel.findById(req.params.jobId, function (error, job) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			return res.send(job)
		})
	}
})

router.post('/', (req, res, next) => {
	if (req.body.hasOwnProperty('id')) {
		return res.status(400).send({
			status: 'error',
			message: 'Cannot use http post for updating Job'
		})
	}
	const {
		jobTitle,

		minSalary,

		maxSalary
	} = req.body
	JobModel.create(
		{
			_id: new mongoose.Types.ObjectId(),

			jobTitle: jobTitle,

			minSalary: minSalary,

			maxSalary: maxSalary
		},
		(createErr, newJob) => {
			if (createErr) {
				console.log(chalk.red(createErr))

				return res.status(400).send({ status: 'error', message: createErr })
			} else {
				return res.json(newJob)
			}
		}
	)
})
router.put('/:jobId', (req, res, next) => {
	if (!req.params.jobId) {
		return res
			.status(400)
			.send({ status: 'error', message: 'A Job ID is required' })
	}
	JobModel.findById(req.params.jobId, {}, function (error, job) {
		if (error) {
			console.log(chalk.red(error))
			return res.status(400).send(error)
		}

		if (req.body.hasOwnProperty('jobTitle')) {
			job.jobTitle = req.body.jobTitle
		}

		if (req.body.hasOwnProperty('minSalary')) {
			job.minSalary = req.body.minSalary
		}

		if (req.body.hasOwnProperty('maxSalary')) {
			job.maxSalary = req.body.maxSalary
		}

		job.save(function (saveError, savedJob) {
			if (saveError) {
				console.log(chalk.red(saveError))
				return res.status(400).send(saveError)
			}
			res.send(savedJob)
		})
	})
})
router.patch('/:jobId', (req, res, next) => {
	if (!req.params.jobId) {
		return res
			.status(400)
			.send({ status: 'error', message: 'A Job ID is required' })
	}
	JobModel.findById(req.params.jobId, {}, function (error, job) {
		if (error) {
			console.log(chalk.red(error))
			return res.status(400).send(error)
		}

		if (req.body.hasOwnProperty('jobTitle')) {
			job.jobTitle = req.body.jobTitle
		}

		if (req.body.hasOwnProperty('minSalary')) {
			job.minSalary = req.body.minSalary
		}

		if (req.body.hasOwnProperty('maxSalary')) {
			job.maxSalary = req.body.maxSalary
		}

		job.save(function (saveError, savedJob) {
			if (saveError) {
				console.log(chalk.red(saveError))
				return res.status(400).send(saveError)
			}
			res.send(savedJob)
		})
	})
})
module.exports = router
