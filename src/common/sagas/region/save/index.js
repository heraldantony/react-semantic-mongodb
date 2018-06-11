/*
 * Save entity Region
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
	REGION_SAVE,
	saveRegionSuccess,
	saveRegionFail
} from 'common/actions/region'

import { regionSaveAPI } from 'common/api/RegionSvc'

/**
 * Save Region
 *
 * @param  {object} action   The action object
 *
 */
export function * doSaveRegion (action) {
	const { resolve, reject } = action.promise
	// Start submitting, won't trigger setSubmitSucceeded()
	yield call(startSubmit, action.form)
	try {
		const result = yield call(regionSaveAPI, action.payload)
		if (result.ok) {
			yield put(saveRegionSuccess(result.data))
			yield call(reset, action.form)
			yield call(stopSubmit, action.form)
			resolve(true)
		} else {
			yield put(saveRegionFail(result.data.message || 'Failed to save Region'))
			reject(
				new SubmissionError({
					_error: result.data.message || 'Failed to save Region'
				})
			)
			// yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to save Region' }))
		}
	} catch (err) {
		yield put(saveRegionFail(err))
		reject(new SubmissionError({ _error: err }))
		// yield put(stopSubmit(action.form, { _error: err }))
	} finally {
		// resolve(true)
	}
}

export function * saveRegion () {
	// Watches for REGION_SAVE actions and calls  doSaveRegion when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(REGION_SAVE, doSaveRegion)
}
