/*
 *  New user signup
 *
*/

import { signupAPI } from 'common/api/SignupSvc'
import {
	setLocalToken,
	resetLocalToken
} from 'common/api/LocalStorageCookiesSvc'
import { SubmissionError, startSubmit, reset, stopSubmit } from 'redux-form'
import {
	call,
	put,
	select,
	takeLatest,
	take,
	cancel
} from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { SIGNUP, signupSuccess, signupFail } from 'common/actions/signup'

/**
 * New user signup
 *
 * @param  {object} action   The action object
 *
 */
export function * doSignup (action) {
	console.log(action)

	const { resolve, reject } = action.promise
	// Start submitting, won't trigger setSubmitSucceeded()
	yield put(startSubmit(action.form))
	try {
		const result = yield call(signupAPI, action.payload)
		if (result.ok && result.data.status !== 'failure') {
			yield put(signupSuccess(result.data))
			yield put(reset(action.form))
			yield put(stopSubmit(action.form))
			resolve(true)
		} else {
			yield put(signupFail(result.data.message || 'Signup failed'))
			reject(
				new SubmissionError({ _error: result.data.message || 'Signup failed' })
			)
			// yield put(stopSubmit(action.form, { _error: result.data.message || 'Signup failed' }))
		}
	} catch (err) {
		yield put(signupFail(err))
		reject(new SubmissionError({ _error: err }))
		// yield put(stopSubmit(action.form, { _error: err }))
	} finally {
		// resolve(true)
	}
}

export default function * signup () {
	// Watches for SIGNUP actions and calls  doSignup when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(SIGNUP, doSignup)
	yield take(LOCATION_CHANGE)
	yield cancel(watcher)
}
