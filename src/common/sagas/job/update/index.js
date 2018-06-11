/*
 * Update entity Job
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
	JOB_UPDATE,
	updateJobSuccess,
	updateJobFail
} from 'common/actions/job'

import { jobUpdateAPI } from 'common/api/JobSvc'

/**
 * Update Job
 *
 * @param  {object} action   The action object
 *
 */
export function * doUpdateJob (action) {
	const { resolve, reject } = action.promise
	// Start submitting, won't trigger setSubmitSucceeded()
	yield call(startSubmit, action.form)
	try {
		const result = yield call(jobUpdateAPI, action.payload)
		if (result.ok) {
			yield put(updateJobSuccess(result.data))
			yield call(reset, action.form)
			yield call(stopSubmit, action.form)
			resolve(true)
		} else {
			yield put(updateJobFail(result.data.message || 'Failed to update Job'))
			reject(
				new SubmissionError({
					_error: result.data.message || 'Failed to update Job'
				})
			)
			// yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to update Job' }))
		}
	} catch (err) {
		yield put(updateJobFail(err))
		reject(new SubmissionError({ _error: err }))
		// yield put(stopSubmit(action.form, { _error: err }))
	} finally {
		// resolve(true)
	}
}

export function * updateJob () {
	// Watches for JOB_UPDATE actions and calls  doUpdateJob when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(JOB_UPDATE, doUpdateJob)
}
