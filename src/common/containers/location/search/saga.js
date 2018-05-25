/*
 * Search entity Location 
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
  LOCATION_SEARCH,
  searchLocationSuccess,
  searchLocationFail
} from "common/actions/location";

import { locationSearchAPI } from "common/api/LocationSvc";

/**
 * Search Location
 *
 * @param  {object} action   The action object
 *
 */
export function* doSearchLocation(action) {
  console.log(action);
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield put(startSubmit(action.form));
  try {
    const result = yield call(locationSearchAPI, action.payload);
    if (result.ok) {
      yield put(searchLocationSuccess(result.data.docs));
      yield put(reset(action.form));
      yield put(stopSubmit(action.form));
      resolve(true);
    } else {
      yield put(
        searchLocationFail(result.data.message || "Failed to search Location")
      );
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to search Location"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to search Location' }))
    }
  } catch (err) {
    yield put(searchLocationFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* searchLocation() {
  // Watches for LOCATION_SEARCH actions and calls  doSearchLocation when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(LOCATION_SEARCH, doSearchLocation);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
