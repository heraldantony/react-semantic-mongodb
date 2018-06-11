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
		RegionModel.findById(req.params.regionId)
			.exec(function (error, region) {
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
	var regionObj = {
		_id: new mongoose.Types.ObjectId(),

		regionName: regionName
	}

	RegionModel.create(regionObj, (createErr, newRegion) => {
		if (createErr) {
			console.log(chalk.red(createErr))

			return res.status(400).send({ status: 'error', message: createErr })
		} else {
			RegionModel.findById(newRegion['_id'])
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
			RegionModel.findById(savedRegion['_id'])
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
			RegionModel.findById(savedRegion['_id'])
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
router.delete('/:regionId', function (req, res) {
	if (!req.params.regionId) {
		let msg = 'Need Id of Region to delete'
		console.log(chalk.red(msg))
		return res.status(400).send(msg)
	} else {
		RegionModel.findByIdAndDelete(req.params.regionId, (error, region) => {
			if (error) {
				console.log(chalk.red(error))
				return res.status(400).send(error)
			}
			return res.send({ _id: req.params.regionId, message: 'Region deleted' })
		})
	}
})
module.exports = router
