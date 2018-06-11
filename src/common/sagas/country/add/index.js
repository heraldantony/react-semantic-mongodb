/*
 * Add entity Country
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
	COUNTRY_ADD,
	addCountrySuccess,
	addCountryFail
} from 'common/actions/country'

import { countryAddAPI } from 'common/api/CountrySvc'

/**
 * Add Country
 *
 * @param  {object} action   The action object
 *
 */
export function * doAddCountry (action) {
	const { resolve, reject } = action.promise
	// Start submitting, won't trigger setSubmitSucceeded()
	yield call(startSubmit, action.form)
	try {
		const result = yield call(countryAddAPI, action.payload)
		if (result.ok) {
			yield put(addCountrySuccess(result.data))
			yield call(reset, action.form)
			yield call(stopSubmit, action.form)
			resolve(true)
		} else {
			yield put(addCountryFail(result.data.message || 'Failed to add Country'))
			reject(
				new SubmissionError({
					_error: result.data.message || 'Failed to add Country'
				})
			)
			// yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to add Country' }))
		}
	} catch (err) {
		yield put(addCountryFail(err))
		reject(new SubmissionError({ _error: err }))
		// yield put(stopSubmit(action.form, { _error: err }))
	} finally {
		// resolve(true)
	}
}

export function * addCountry () {
	// Watches for COUNTRY_ADD actions and calls  doAddCountry when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(COUNTRY_ADD, doAddCountry)
}
