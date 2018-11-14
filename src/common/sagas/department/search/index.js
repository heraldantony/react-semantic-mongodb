/*
 * Search entity Department
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
	DEPARTMENT_SEARCH,
	searchDepartmentSuccess,
	searchDepartmentFail
} from 'common/actions/department'

import { departmentSearchAPI } from 'common/api/DepartmentSvc'

/**
 * Search Department
 *
 * @param  {object} action   The action object
 *
 */
export function * doSearchDepartment (action) {
	const { resolve, reject } = action.promise
	// Start submitting, won't trigger setSubmitSucceeded()
	yield call(startSubmit, action.form)
	try {
		const result = yield call(departmentSearchAPI, action.payload)
		if (result.ok) {
			yield put(searchDepartmentSuccess(result.data.docs, result.data.total))
			yield call(reset, action.form)
			yield call(stopSubmit, action.form)
			resolve(true)
		} else {
			yield put(
				searchDepartmentFail(
					result.data.message || 'Failed to search Department'
				)
			)
			reject(
				new SubmissionError({
					_error: result.data.message || 'Failed to search Department'
				})
			)
			// yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to search Department' }))
		}
	} catch (err) {
		yield put(searchDepartmentFail(err))
		reject(new SubmissionError({ _error: err }))
		// yield put(stopSubmit(action.form, { _error: err }))
	} finally {
		// resolve(true)
	}
}

export function * searchDepartment () {
	// Watches for DEPARTMENT_SEARCH actions and calls  doSearchDepartment when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(DEPARTMENT_SEARCH, doSearchDepartment)
}
