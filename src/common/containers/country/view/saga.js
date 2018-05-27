/*
 * Retrieve entity Country 
 *
*/

import { SubmissionError, startSubmit, reset, stopSubmit } from "redux-form";
import {
  call,
  put,
  select,
  takeLatest,
  take,
  cancel
} from "redux-saga/effects";
import { LOCATION_CHANGE } from "react-router-redux";

import {
  COUNTRY_GET,
  getCountrySuccess,
  getCountryFail
} from "common/actions/country";

import { countryGetAPI } from "common/api/CountrySvc";

/**
 * Get Country
 *
 * @param  {object} action   The action object
 *
 */
export function* doGetCountry(action) {
  try {
    const result = yield call(countryGetAPI, action.payload);
    if (result.ok) {
      yield put(getCountrySuccess(result.data));
    } else
      yield put(getCountryFail(result.data.message || "Failed to get Country"));
  } catch (err) {
    yield put(getCountryFail(err));
  }
}

export function* getCountry() {
  // Watches for COUNTRY_GET actions and calls  doGetCountry when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(COUNTRY_GET, doGetCountry);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
