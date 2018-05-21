const express = require('express')
const chalk = require('chalk')
const db = require('../../db')
var mongoose = require('mongoose')

const LocationModel = require('../../schema/model/location')

const router = express.Router()
const PAGESIZE = 10

// Define the routes for Location
router.get('/', function (req, res) {
	var limit = req.query.limit ? +req.query.limit : PAGESIZE
	var offset = req.query.page ? +req.query.page - 1 : 0
	offset = offset * limit
	var options = {
		limit: limit,
		offset: offset
	}
	if (!req.query.search) {
		LocationModel.paginate({}, options, function (error, result) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			res.setHeader('X-Total-Count', result.total)
			return res.send(result)
		})
	} else {
		LocationModel.paginate(
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
router.get('/:locationId', function (req, res) {
	if (!req.params.locationId) {
		var limit = req.query.limit ? +req.query.limit : PAGESIZE
		var offset = req.query.page ? +req.query.page - 1 : 0
		offset = offset * limit
		var options = {
			limit: limit,
			offset: offset
		}
		LocationModel.paginate({}, options, function (error, result) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			res.setHeader('X-Total-Count', result.total)
			return res.send(result)
		})
	} else {
		LocationModel.findById(req.params.locationId)
			.populate('country')

			.exec(function (error, location) {
				if (error) {
					console.log(chalk.red(error))
					return res.status(400).send(error)
				}
				return res.send(location)
			})
	}
})

router.post('/', (req, res, next) => {
	if (req.body.hasOwnProperty('id')) {
		return res.status(400).send({
			status: 'error',
			message: 'Cannot use http post for updating Location'
		})
	}
	const {
		streetAddress,

		postalCode,

		city,

		stateProvince
	} = req.body
	var locationObj = {
		_id: new mongoose.Types.ObjectId(),

		streetAddress: streetAddress,

		postalCode: postalCode,

		city: city,

		stateProvince: stateProvince
	}

	if (req.body.hasOwnProperty('country')) {
		locationObj.country = req.body.country['_id']
	}

	LocationModel.create(locationObj, (createErr, newLocation) => {
		if (createErr) {
			console.log(chalk.red(createErr))

			return res.status(400).send({ status: 'error', message: createErr })
		} else {
			LocationModel.findById(newLocation['_id'])
				.populate('country')

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
router.put('/:locationId', (req, res, next) => {
	if (!req.params.locationId) {
		return res
			.status(400)
			.send({ status: 'error', message: 'A Location ID is required' })
	}
	LocationModel.findById(req.params.locationId, {}, function (error, location) {
		if (error) {
			console.log(chalk.red(error))
			return res.status(400).send(error)
		}

		if (req.body.hasOwnProperty('streetAddress')) {
			location.streetAddress = req.body.streetAddress
		}

		if (req.body.hasOwnProperty('postalCode')) {
			location.postalCode = req.body.postalCode
		}

		if (req.body.hasOwnProperty('city')) {
			location.city = req.body.city
		}

		if (req.body.hasOwnProperty('stateProvince')) {
			location.stateProvince = req.body.stateProvince
		}

		if (req.body.hasOwnProperty('country')) {
			location.country = req.body.country['_id']
		}

		location.save(function (saveError, savedLocation) {
			if (saveError) {
				console.log(chalk.red(saveError))
				return res.status(400).send(saveError)
			}
			LocationModel.findById(savedLocation['_id'])
				.populate('country')

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
router.patch('/:locationId', (req, res, next) => {
	if (!req.params.locationId) {
		return res
			.status(400)
			.send({ status: 'error', message: 'A Location ID is required' })
	}
	LocationModel.findById(req.params.locationId, {}, function (error, location) {
		if (error) {
			console.log(chalk.red(error))
			return res.status(400).send(error)
		}

		if (req.body.hasOwnProperty('streetAddress')) {
			location.streetAddress = req.body.streetAddress
		}

		if (req.body.hasOwnProperty('postalCode')) {
			location.postalCode = req.body.postalCode
		}

		if (req.body.hasOwnProperty('city')) {
			location.city = req.body.city
		}

		if (req.body.hasOwnProperty('stateProvince')) {
			location.stateProvince = req.body.stateProvince
		}

		if (req.body.hasOwnProperty('country')) {
			location.country = req.body.country['_id']
		}

		location.save(function (saveError, savedLocation) {
			if (saveError) {
				console.log(chalk.red(saveError))
				return res.status(400).send(saveError)
			}
			LocationModel.findById(savedLocation['_id'])
				.populate('country')

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
