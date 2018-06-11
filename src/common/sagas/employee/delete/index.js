/*
 * Delete entity Employee
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
	EMPLOYEE_DELETE,
	deleteEmployeeSuccess,
	deleteEmployeeFail
} from 'common/actions/employee'

import { employeeDeleteAPI } from 'common/api/EmployeeSvc'

/**
 * Delete Employee
 *
 * @param  {object} action   The action object
 *
 */
export function * doDeleteEmployee (action) {
	try {
		const result = yield call(employeeDeleteAPI, action.payload)
		if (result.ok) {
			yield put(deleteEmployeeSuccess(result.data))
		} else {
			yield put(
				deleteEmployeeFail(result.data.message || 'Failed to delete Employee')
			)
		}
	} catch (err) {
		yield put(deleteEmployeeFail(err))
	}
}

export function * deleteEmployee () {
	// Watches for EMPLOYEE_DELETE actions and calls  doDeleteEmployee when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(EMPLOYEE_DELETE, doDeleteEmployee)
}
