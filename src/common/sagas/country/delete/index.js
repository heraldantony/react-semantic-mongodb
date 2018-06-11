/*
 * Delete entity Country
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
	COUNTRY_DELETE,
	deleteCountrySuccess,
	deleteCountryFail
} from 'common/actions/country'

import { countryDeleteAPI } from 'common/api/CountrySvc'

/**
 * Delete Country
 *
 * @param  {object} action   The action object
 *
 */
export function * doDeleteCountry (action) {
	try {
		const result = yield call(countryDeleteAPI, action.payload)
		if (result.ok) {
			yield put(deleteCountrySuccess(result.data))
		} else {
			yield put(
				deleteCountryFail(result.data.message || 'Failed to delete Country')
			)
		}
	} catch (err) {
		yield put(deleteCountryFail(err))
	}
}

export function * deleteCountry () {
	// Watches for COUNTRY_DELETE actions and calls  doDeleteCountry when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(COUNTRY_DELETE, doDeleteCountry)
}
