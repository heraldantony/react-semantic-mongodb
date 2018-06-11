/*
 * Delete entity Task
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
	TASK_DELETE,
	deleteTaskSuccess,
	deleteTaskFail
} from 'common/actions/task'

import { taskDeleteAPI } from 'common/api/TaskSvc'

/**
 * Delete Task
 *
 * @param  {object} action   The action object
 *
 */
export function * doDeleteTask (action) {
	try {
		const result = yield call(taskDeleteAPI, action.payload)
		if (result.ok) {
			yield put(deleteTaskSuccess(result.data))
		} else { yield put(deleteTaskFail(result.data.message || 'Failed to delete Task')) }
	} catch (err) {
		yield put(deleteTaskFail(err))
	}
}

export function * deleteTask () {
	// Watches for TASK_DELETE actions and calls  doDeleteTask when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(TASK_DELETE, doDeleteTask)
}
