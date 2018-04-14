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

router.post('/', (req: express$Request, res: express$Response) => {
	// NOTE: if user is already logged in, but wants to change language
	// we have to update his JWT token
	const { username, password, rememberme } = req.body
	const data = {
		username: username,
		password: password
	}
	const expires = {
		expiresIn: '30m'
	}
	console.log('username,pass=', username, password)
	if (rememberme) {
		expires.expiresIn = '7d'
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
		collection
			.find({ username: username, password: password })
			.project({ username: 1, email: 1, lastLoginDate: 1 })
			.toArray(function (err, docs) {
				if (err) {
					// return next(err)
					res.json({
						status: 'failure',
						message: 'Could not query the database, system error.'
					})
				} else if (docs.length < 1) {
					res.json({
						status: 'failure',
						message: 'Invalid credentials.'
					})
				} else {
					jwt.sign(
						{
							username: username
						},
						process.env.JWT_SECRET,
						expires,
						(jwterr, token) => {
							if (jwterr) {
								// return next(jwterr)
								res.json({
									status: 'failure',
									message: 'Could not create the token, system error.'
								})
							} else {
								console.log(
									chalk.yellow(`Generated token for user: ${username}`)
								)
								res.json({
									username: username,
									token: token
								})
							}
						}
					)
					client.close()
				}
			})
	})
})

export default router
