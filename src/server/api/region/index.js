const express = require('express')
const chalk = require('chalk')
const db = require('../../db')
var mongoose = require('mongoose')

const RegionModel = require('../../schema/model/region')

const router = express.Router()
const PAGESIZE = 10

// Define the routes for Region
router.get('/', function (req, res) {
	var limit = req.query.limit ? +req.query.limit : PAGESIZE
	var offset = req.query.page ? +req.query.page - 1 : 0
	offset = offset * limit
	var options = {
		limit: limit,
		offset: offset
	}
	if (!req.query.search) {
		RegionModel.paginate({}, options, function (error, result) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			res.setHeader('X-Total-Count', result.total)
			return res.send(result)
		})
	} else {
		RegionModel.paginate(
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
router.get('/:regionId', function (req, res) {
	if (!req.params.regionId) {
		var limit = req.query.limit ? +req.query.limit : PAGESIZE
		var offset = req.query.page ? +req.query.page - 1 : 0
		offset = offset * limit
		var options = {
			limit: limit,
			offset: offset
		}
		RegionModel.paginate({}, options, function (error, result) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			res.setHeader('X-Total-Count', result.total)
			return res.send(result)
		})
	} else {
		RegionModel.findById(req.params.regionId, function (error, region) {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			return res.send(region)
		})
	}
})

router.post('/', (req, res, next) => {
	if (req.body.hasOwnProperty('id')) {
		return res.status(400).send({
			status: 'error',
			message: 'Cannot use http post for updating Region'
		})
	}
	const { regionName } = req.body
	RegionModel.create(
		{
			_id: new mongoose.Types.ObjectId(),

			regionName: regionName
		},
		(createErr, newRegion) => {
			if (createErr) {
				console.log(chalk.red(createErr))

				return res.status(400).send({ status: 'error', message: createErr })
			} else {
				return res.json(newRegion)
			}
		}
	)
})
router.put('/:regionId', (req, res, next) => {
	if (!req.params.regionId) {
		return res
			.status(400)
			.send({ status: 'error', message: 'A Region ID is required' })
	}
	RegionModel.findById(req.params.regionId, {}, function (error, region) {
		if (error) {
			console.log(chalk.red(error))
			return res.status(400).send(error)
		}

		if (req.body.hasOwnProperty('regionName')) {
			region.regionName = req.body.regionName
		}

		region.save(function (saveError, savedRegion) {
			if (saveError) {
				console.log(chalk.red(saveError))
				return res.status(400).send(saveError)
			}
			res.send(savedRegion)
		})
	})
})
router.patch('/:regionId', (req, res, next) => {
	if (!req.params.regionId) {
		return res
			.status(400)
			.send({ status: 'error', message: 'A Region ID is required' })
	}
	RegionModel.findById(req.params.regionId, {}, function (error, region) {
		if (error) {
			console.log(chalk.red(error))
			return res.status(400).send(error)
		}

		if (req.body.hasOwnProperty('regionName')) {
			region.regionName = req.body.regionName
		}

		region.save(function (saveError, savedRegion) {
			if (saveError) {
				console.log(chalk.red(saveError))
				return res.status(400).send(saveError)
			}
			res.send(savedRegion)
		})
	})
})
module.exports = router
