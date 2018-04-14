const express = require('express')
const chalk = require('chalk')
const db = require('../../db')
var mongoose = require('mongoose')

const CountryModel = require('../../schema/model/country')

const router = express.Router()
const PAGESIZE = 10

// Define the routes for Country
router.get('/', function (req, res) {
	var limit = req.query.limit ? +req.query.limit : PAGESIZE
	var offset = req.query.page ? +req.query.page - 1 : 0
	offset = offset * limit
	var options = {
		limit: limit,
		offset: offset
	}
	if (!req.query.search) {
		CountryModel.paginate({}, options, function (error, result) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			res.setHeader('X-Total-Count', result.total)
			return res.send(result)
		})
	} else {
		CountryModel.paginate(
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
router.get('/:countryId', function (req, res) {
	if (!req.params.countryId) {
		var limit = req.query.limit ? +req.query.limit : PAGESIZE
		var offset = req.query.page ? +req.query.page - 1 : 0
		offset = offset * limit
		var options = {
			limit: limit,
			offset: offset
		}
		CountryModel.paginate({}, options, function (error, result) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			res.setHeader('X-Total-Count', result.total)
			return res.send(result)
		})
	} else {
		CountryModel.findById(req.params.countryId, function (error, country) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			return res.send(country)
		})
	}
})

router.post('/', (req, res, next) => {
	if (req.body.hasOwnProperty('id')) {
		return res.status(400).send({
			status: 'error',
			message: 'Cannot use http post for updating Country'
		})
	}
	const { countryName } = req.body
	CountryModel.create(
		{
			_id: new mongoose.Types.ObjectId(),

			countryName: countryName
		},
		(createErr, newCountry) => {
			if (createErr) {
				console.log(chalk.red(createErr))

				return res.status(400).send({ status: 'error', message: createErr })
			} else {
				return res.json(newCountry)
			}
		}
	)
})
router.put('/:countryId', (req, res, next) => {
	if (!req.params.countryId) {
		return res
			.status(400)
			.send({ status: 'error', message: 'A Country ID is required' })
	}
	CountryModel.findById(req.params.countryId, {}, function (error, country) {
		if (error) {
			console.log(chalk.red(error))
			return res.status(400).send(error)
		}

		if (req.body.hasOwnProperty('countryName')) {
			country.countryName = req.body.countryName
		}

		country.save(function (saveError, savedCountry) {
			if (saveError) {
				console.log(chalk.red(saveError))
				return res.status(400).send(saveError)
			}
			res.send(savedCountry)
		})
	})
})
router.patch('/:countryId', (req, res, next) => {
	if (!req.params.countryId) {
		return res
			.status(400)
			.send({ status: 'error', message: 'A Country ID is required' })
	}
	CountryModel.findById(req.params.countryId, {}, function (error, country) {
		if (error) {
			console.log(chalk.red(error))
			return res.status(400).send(error)
		}

		if (req.body.hasOwnProperty('countryName')) {
			country.countryName = req.body.countryName
		}

		country.save(function (saveError, savedCountry) {
			if (saveError) {
				console.log(chalk.red(saveError))
				return res.status(400).send(saveError)
			}
			res.send(savedCountry)
		})
	})
})
module.exports = router
