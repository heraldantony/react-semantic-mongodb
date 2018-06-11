/*
 * Delete entity Job
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
	JOB_DELETE,
	deleteJobSuccess,
	deleteJobFail
} from 'common/actions/job'

import { jobDeleteAPI } from 'common/api/JobSvc'

/**
 * Delete Job
 *
 * @param  {object} action   The action object
 *
 */
export function * doDeleteJob (action) {
	try {
		const result = yield call(jobDeleteAPI, action.payload)
		if (result.ok) {
			yield put(deleteJobSuccess(result.data))
		} else { yield put(deleteJobFail(result.data.message || 'Failed to delete Job')) }
	} catch (err) {
		yield put(deleteJobFail(err))
	}
}

export function * deleteJob () {
	// Watches for JOB_DELETE actions and calls  doDeleteJob when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(JOB_DELETE, doDeleteJob)
}
