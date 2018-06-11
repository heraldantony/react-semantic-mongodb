/*
 * Retrieve entity Location
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
	LOCATION_GET,
	getLocationSuccess,
	getLocationFail
} from 'common/actions/location'

import { locationGetAPI } from 'common/api/LocationSvc'

/**
 * Get Location
 *
 * @param  {object} action   The action object
 *
 */
export function * doGetLocation (action) {
	try {
		const result = yield call(locationGetAPI, action.payload)
		if (result.ok) {
			yield put(getLocationSuccess(result.data))
		} else {
			yield put(
				getLocationFail(result.data.message || 'Failed to get Location')
			)
		}
	} catch (err) {
		yield put(getLocationFail(err))
	}
}

export function * getLocation () {
	// Watches for LOCATION_GET actions and calls  doGetLocation when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(LOCATION_GET, doGetLocation)
}
