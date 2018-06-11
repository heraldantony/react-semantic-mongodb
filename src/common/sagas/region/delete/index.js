/*
 * Delete entity Region
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
	REGION_DELETE,
	deleteRegionSuccess,
	deleteRegionFail
} from 'common/actions/region'

import { regionDeleteAPI } from 'common/api/RegionSvc'

/**
 * Delete Region
 *
 * @param  {object} action   The action object
 *
 */
export function * doDeleteRegion (action) {
	try {
		const result = yield call(regionDeleteAPI, action.payload)
		if (result.ok) {
			yield put(deleteRegionSuccess(result.data))
		} else {
			yield put(
				deleteRegionFail(result.data.message || 'Failed to delete Region')
			)
		}
	} catch (err) {
		yield put(deleteRegionFail(err))
	}
}

export function * deleteRegion () {
	// Watches for REGION_DELETE actions and calls  doDeleteRegion when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(REGION_DELETE, doDeleteRegion)
}
