/*
 * Update entity Country
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
	COUNTRY_UPDATE,
	updateCountrySuccess,
	updateCountryFail
} from 'common/actions/country'

import { countryUpdateAPI } from 'common/api/CountrySvc'

/**
 * Update Country
 *
 * @param  {object} action   The action object
 *
 */
export function * doUpdateCountry (action) {
	console.log(action)
	const { resolve, reject } = action.promise
	// Start submitting, won't trigger setSubmitSucceeded()
	yield put(startSubmit(action.form))
	try {
		const result = yield call(countryUpdateAPI, action.payload)
		if (result.ok) {
			yield put(updateCountrySuccess(result.data))
			yield put(reset(action.form))
			yield put(stopSubmit(action.form))
			resolve(true)
		} else {
			yield put(
				updateCountryFail(result.data.message || 'Failed to update Country')
			)
			reject(
				new SubmissionError({
					_error: result.data.message || 'Failed to update Country'
				})
			)
			// yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to update Country' }))
		}
	} catch (err) {
		yield put(updateCountryFail(err))
		reject(new SubmissionError({ _error: err }))
		// yield put(stopSubmit(action.form, { _error: err }))
	} finally {
		// resolve(true)
	}
}

export function * updateCountry () {
	// Watches for COUNTRY_UPDATE actions and calls  doUpdateCountry when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(COUNTRY_UPDATE, doUpdateCountry)
	yield take(LOCATION_CHANGE)
	yield cancel(watcher)
}
