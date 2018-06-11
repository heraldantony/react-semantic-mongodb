/*
 * Delete entity Department
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
	DEPARTMENT_DELETE,
	deleteDepartmentSuccess,
	deleteDepartmentFail
} from 'common/actions/department'

import { departmentDeleteAPI } from 'common/api/DepartmentSvc'

/**
 * Delete Department
 *
 * @param  {object} action   The action object
 *
 */
export function * doDeleteDepartment (action) {
	try {
		const result = yield call(departmentDeleteAPI, action.payload)
		if (result.ok) {
			yield put(deleteDepartmentSuccess(result.data))
		} else {
			yield put(
				deleteDepartmentFail(
					result.data.message || 'Failed to delete Department'
				)
			)
		}
	} catch (err) {
		yield put(deleteDepartmentFail(err))
	}
}

export function * deleteDepartment () {
	// Watches for DEPARTMENT_DELETE actions and calls  doDeleteDepartment when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(DEPARTMENT_DELETE, doDeleteDepartment)
}
