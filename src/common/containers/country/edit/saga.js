/*
 * Save entity Country
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
	COUNTRY_SAVE,
	saveCountrySuccess,
	saveCountryFail
} from 'common/actions/country'

import { countrySaveAPI } from 'common/api/CountrySvc'

/**
 * Save Country
 *
 * @param  {object} action   The action object
 *
 */
export function * doSaveCountry (action) {
	console.log(action)
	const { resolve, reject } = action.promise
	// Start submitting, won't trigger setSubmitSucceeded()
	yield put(startSubmit(action.form))
	try {
		const result = yield call(countrySaveAPI, action.payload)
		if (result.ok) {
			yield put(saveCountrySuccess(result.data))
			yield put(reset(action.form))
			yield put(stopSubmit(action.form))
			resolve(true)
		} else {
			yield put(
				saveCountryFail(result.data.message || 'Failed to save Country')
			)
			reject(
				new SubmissionError({
					_error: result.data.message || 'Failed to save Country'
				})
			)
			// yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to save Country' }))
		}
	} catch (err) {
		yield put(saveCountryFail(err))
		reject(new SubmissionError({ _error: err }))
		// yield put(stopSubmit(action.form, { _error: err }))
	} finally {
		// resolve(true)
	}
}

export function * saveCountry () {
	// Watches for COUNTRY_SAVE actions and calls  doSaveCountry when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	const watcher = yield takeLatest(COUNTRY_SAVE, doSaveCountry)
	yield take(LOCATION_CHANGE)
	yield cancel(watcher)
}
