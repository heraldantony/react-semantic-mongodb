/*
 * Retrieve entity Department
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
	DEPARTMENT_GET,
	getDepartmentSuccess,
	getDepartmentFail
} from 'common/actions/department'

import { departmentGetAPI } from 'common/api/DepartmentSvc'

/**
 * Get Department
 *
 * @param  {object} action   The action object
 *
 */
export function * doGetDepartment (action) {
	try {
		const result = yield call(departmentGetAPI, action.payload)
		if (result.ok) {
			yield put(getDepartmentSuccess(result.data))
		} else {
			yield put(
				getDepartmentFail(result.data.message || 'Failed to get Department')
			)
		}
	} catch (err) {
		yield put(getDepartmentFail(err))
	}
}

export function * getDepartment () {
	// Watches for DEPARTMENT_GET actions and calls  doGetDepartment when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(DEPARTMENT_GET, doGetDepartment)
}
