/*
 * Add entity Location
 *
*/

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

import {
	LOCATION_ADD,
	addLocationSuccess,
	addLocationFail
} from 'common/actions/location'

import { locationAddAPI } from 'common/api/LocationSvc'

/**
 * Add Location
 *
 * @param  {object} action   The action object
 *
 */
export function * doAddLocation (action) {
	const { resolve, reject } = action.promise
	// Start submitting, won't trigger setSubmitSucceeded()
	yield call(startSubmit, action.form)
	try {
		const result = yield call(locationAddAPI, action.payload)
		if (result.ok) {
			yield put(addLocationSuccess(result.data))
			yield call(reset, action.form)
			yield call(stopSubmit, action.form)
			resolve(true)
		} else {
			yield put(
				addLocationFail(result.data.message || 'Failed to add Location')
			)
			reject(
				new SubmissionError({
					_error: result.data.message || 'Failed to add Location'
				})
			)
			// yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to add Location' }))
		}
	} catch (err) {
		yield put(addLocationFail(err))
		reject(new SubmissionError({ _error: err }))
		// yield put(stopSubmit(action.form, { _error: err }))
	} finally {
		// resolve(true)
	}
}

export function * addLocation () {
	// Watches for LOCATION_ADD actions and calls  doAddLocation when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(LOCATION_ADD, doAddLocation)
}
