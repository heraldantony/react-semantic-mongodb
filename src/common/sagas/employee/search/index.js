/*
 * Search entity Employee
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
	EMPLOYEE_SEARCH,
	searchEmployeeSuccess,
	searchEmployeeFail
} from 'common/actions/employee'

import { employeeSearchAPI } from 'common/api/EmployeeSvc'

/**
 * Search Employee
 *
 * @param  {object} action   The action object
 *
 */
export function * doSearchEmployee (action) {
	const { resolve, reject } = action.promise
	// Start submitting, won't trigger setSubmitSucceeded()
	yield call(startSubmit, action.form)
	try {
		const result = yield call(employeeSearchAPI, action.payload)
		if (result.ok) {
			yield put(searchEmployeeSuccess(result.data.docs, result.data.total))
			yield call(reset, action.form)
			yield call(stopSubmit, action.form)
			resolve(true)
		} else {
			yield put(
				searchEmployeeFail(result.data.message || 'Failed to search Employee')
			)
			reject(
				new SubmissionError({
					_error: result.data.message || 'Failed to search Employee'
				})
			)
			// yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to search Employee' }))
		}
	} catch (err) {
		yield put(searchEmployeeFail(err))
		reject(new SubmissionError({ _error: err }))
		// yield put(stopSubmit(action.form, { _error: err }))
	} finally {
		// resolve(true)
	}
}

export function * searchEmployee () {
	// Watches for EMPLOYEE_SEARCH actions and calls  doSearchEmployee when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(EMPLOYEE_SEARCH, doSearchEmployee)
}
