/*
 * Retrieve entity Region
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
	REGION_GET,
	getRegionSuccess,
	getRegionFail
} from 'common/actions/region'

import { regionGetAPI } from 'common/api/RegionSvc'

/**
 * Get Region
 *
 * @param  {object} action   The action object
 *
 */
export function * doGetRegion (action) {
	try {
		const result = yield call(regionGetAPI, action.payload)
		if (result.ok) {
			yield put(getRegionSuccess(result.data))
		} else { yield put(getRegionFail(result.data.message || 'Failed to get Region')) }
	} catch (err) {
		yield put(getRegionFail(err))
	}
}

export function * getRegion () {
	// Watches for REGION_GET actions and calls  doGetRegion when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(REGION_GET, doGetRegion)
}
