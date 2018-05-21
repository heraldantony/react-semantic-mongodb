/*
 * Retrieve entity Employee
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
	EMPLOYEE_GET,
	getEmployeeSuccess,
	getEmployeeFail
} from 'common/actions/employee'

import { employeeGetAPI } from 'common/api/EmployeeSvc'

/**
 * Get Employee
 *
 * @param  {object} action   The action object
 *
 */
export function * doGetEmployee (action) {
	console.log(action)
	try {
		const result = yield call(employeeGetAPI, action.payload)
		if (result.ok) {
			yield put(getEmployeeSuccess(result.data))
		} else {
			yield put(
				getEmployeeFail(result.data.message || 'Failed to get Employee')
			)
		}
	} catch (err) {
		yield put(getEmployeeFail(err))
	}
}

export function * getEmployee () {
	// Watches for EMPLOYEE_GET actions and calls  doGetEmployee when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(EMPLOYEE_GET, doGetEmployee)
	yield take(LOCATION_CHANGE)
	yield cancel(watcher)
}
