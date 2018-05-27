/*
 * Update entity Location 
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
  LOCATION_UPDATE,
  updateLocationSuccess,
  updateLocationFail
} from "common/actions/location";

import { locationUpdateAPI } from "common/api/LocationSvc";

/**
 * Update Location
 *
 * @param  {object} action   The action object
 *
 */
export function* doUpdateLocation(action) {
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield call(startSubmit, action.form);
  try {
    const result = yield call(locationUpdateAPI, action.payload);
    if (result.ok) {
      yield put(updateLocationSuccess(result.data));
      yield call(reset, action.form);
      yield call(stopSubmit, action.form);
      resolve(true);
    } else {
      yield put(
        updateLocationFail(result.data.message || "Failed to update Location")
      );
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to update Location"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to update Location' }))
    }
  } catch (err) {
    yield put(updateLocationFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* updateLocation() {
  // Watches for LOCATION_UPDATE actions and calls  doUpdateLocation when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(LOCATION_UPDATE, doUpdateLocation);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
