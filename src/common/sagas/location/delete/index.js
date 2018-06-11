/*
 * Delete entity Location
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
	LOCATION_DELETE,
	deleteLocationSuccess,
	deleteLocationFail
} from 'common/actions/location'

import { locationDeleteAPI } from 'common/api/LocationSvc'

/**
 * Delete Location
 *
 * @param  {object} action   The action object
 *
 */
export function * doDeleteLocation (action) {
	try {
		const result = yield call(locationDeleteAPI, action.payload)
		if (result.ok) {
			yield put(deleteLocationSuccess(result.data))
		} else {
			yield put(
				deleteLocationFail(result.data.message || 'Failed to delete Location')
			)
		}
	} catch (err) {
		yield put(deleteLocationFail(err))
	}
}

export function * deleteLocation () {
	// Watches for LOCATION_DELETE actions and calls  doDeleteLocation when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(LOCATION_DELETE, doDeleteLocation)
}
