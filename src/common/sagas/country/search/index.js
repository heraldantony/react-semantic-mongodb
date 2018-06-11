/*
 * Search entity Country
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
	COUNTRY_SEARCH,
	searchCountrySuccess,
	searchCountryFail
} from 'common/actions/country'

import { countrySearchAPI } from 'common/api/CountrySvc'

/**
 * Search Country
 *
 * @param  {object} action   The action object
 *
 */
export function * doSearchCountry (action) {
	const { resolve, reject } = action.promise
	// Start submitting, won't trigger setSubmitSucceeded()
	yield call(startSubmit, action.form)
	try {
		const result = yield call(countrySearchAPI, action.payload)
		if (result.ok) {
			yield put(searchCountrySuccess(result.data.docs))
			yield call(reset, action.form)
			yield call(stopSubmit, action.form)
			resolve(true)
		} else {
			yield put(
				searchCountryFail(result.data.message || 'Failed to search Country')
			)
			reject(
				new SubmissionError({
					_error: result.data.message || 'Failed to search Country'
				})
			)
			// yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to search Country' }))
		}
	} catch (err) {
		yield put(searchCountryFail(err))
		reject(new SubmissionError({ _error: err }))
		// yield put(stopSubmit(action.form, { _error: err }))
	} finally {
		// resolve(true)
	}
}

export function * searchCountry () {
	// Watches for COUNTRY_SEARCH actions and calls  doSearchCountry when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(COUNTRY_SEARCH, doSearchCountry)
}
