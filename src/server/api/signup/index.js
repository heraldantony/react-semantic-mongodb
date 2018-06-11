// @flow
import { Router } from 'express'
import jwt from 'jsonwebtoken'
import chalk from 'chalk'
import db from 'server/db'
const MongoClient = require('mongodb').MongoClient

const router: express$Router = Router()

// Connection URL
const dbUrl = 'mongodb://' + process.env.DBHOST + ':' + process.env.DBPORT

// Database Name
const dbName = process.env.DBNAME

// Define the home page route
router.post('/', (req, res, next) => {
	const { username, email, password } = req.body
	const data = {
		username: username,
		email: email,
		password: password
	}

	// Use connect method to connect to the Server
	MongoClient.connect(dbUrl, function (err, client) {
		if (err) {
			// return next(err)
			console.log(err)
			res.json({
				status: 'failure',
				message: 'Could not query the database, system error.'
			})
		}
		console.log('Connected correctly to server')

		const db = client.db(dbName)
		const collection = db.collection('users')
		console.log('collection users for ' + username)
		console.log(collection)
		collection
			.find({ username: username })
			.project({ username: 1, email: 1 })
			.toArray(function (err, docs) {
				console.log('collection find done')
				if (err) {
					// return next(err)
					console.log(err)
					client.close()
					return res.json({
						status: 'failure',
						message: 'Could not query the database, system error.'
					})
				} else if (docs.length >= 1) {
					client.close()
					return res.json({
						status: 'failure',
						message: 'User with this username is already registered.'
					})
				} else {
					// FIXME - password needs  to be encrypted
					var user = {
						username: username,
						email: email,
						password: password,
						registeredDate: new Date(),
						active: false,
						status: 'registered'
					}
					// Insert user
					db.collection('users').insertOne(user, function (err, result) {
						if (err) {
							// return next(err)
							console.log(err)
							res.json({
								status: 'failure',
								message: 'Could not query the database, system error.'
							})
						} else if (result.insertedCount !== 1) {
							console.log('Failed to insert user')
							res.json({
								status: 'failure',
								message:
                  'Could not register user, system error. Please try again.'
							})
						}
						client.close()
					})
				}
			})
	})
})

module.exports = router
