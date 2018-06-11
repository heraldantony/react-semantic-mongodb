/*
 * Update entity Region
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
	REGION_UPDATE,
	updateRegionSuccess,
	updateRegionFail
} from 'common/actions/region'

import { regionUpdateAPI } from 'common/api/RegionSvc'

/**
 * Update Region
 *
 * @param  {object} action   The action object
 *
 */
export function * doUpdateRegion (action) {
	const { resolve, reject } = action.promise
	// Start submitting, won't trigger setSubmitSucceeded()
	yield call(startSubmit, action.form)
	try {
		const result = yield call(regionUpdateAPI, action.payload)
		if (result.ok) {
			yield put(updateRegionSuccess(result.data))
			yield call(reset, action.form)
			yield call(stopSubmit, action.form)
			resolve(true)
		} else {
			yield put(
				updateRegionFail(result.data.message || 'Failed to update Region')
			)
			reject(
				new SubmissionError({
					_error: result.data.message || 'Failed to update Region'
				})
			)
			// yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to update Region' }))
		}
	} catch (err) {
		yield put(updateRegionFail(err))
		reject(new SubmissionError({ _error: err }))
		// yield put(stopSubmit(action.form, { _error: err }))
	} finally {
		// resolve(true)
	}
}

export function * updateRegion () {
	// Watches for REGION_UPDATE actions and calls  doUpdateRegion when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(REGION_UPDATE, doUpdateRegion)
}
