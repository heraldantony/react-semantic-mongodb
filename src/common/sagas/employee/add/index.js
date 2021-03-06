/*
 * Add entity Employee
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
	EMPLOYEE_ADD,
	addEmployeeSuccess,
	addEmployeeFail
} from 'common/actions/employee'

import { employeeAddAPI } from 'common/api/EmployeeSvc'

/**
 * Add Employee
 *
 * @param  {object} action   The action object
 *
 */
export function * doAddEmployee (action) {
	const { resolve, reject } = action.promise
	// Start submitting, won't trigger setSubmitSucceeded()
	yield call(startSubmit, action.form)
	try {
		const result = yield call(employeeAddAPI, action.payload)
		if (result.ok) {
			yield put(addEmployeeSuccess(result.data))
			yield call(reset, action.form)
			yield call(stopSubmit, action.form)
			resolve(true)
		} else {
			yield put(
				addEmployeeFail(result.data.message || 'Failed to add Employee')
			)
			reject(
				new SubmissionError({
					_error: result.data.message || 'Failed to add Employee'
				})
			)
			// yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to add Employee' }))
		}
	} catch (err) {
		yield put(addEmployeeFail(err))
		reject(new SubmissionError({ _error: err }))
		// yield put(stopSubmit(action.form, { _error: err }))
	} finally {
		// resolve(true)
	}
}

export function * addEmployee () {
	// Watches for EMPLOYEE_ADD actions and calls  doAddEmployee when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(EMPLOYEE_ADD, doAddEmployee)
}
