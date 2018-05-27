/*
 * Save entity Location 
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
  LOCATION_SAVE,
  saveLocationSuccess,
  saveLocationFail
} from "common/actions/location";

import { locationSaveAPI } from "common/api/LocationSvc";

/**
 * Save Location
 *
 * @param  {object} action   The action object
 *
 */
export function* doSaveLocation(action) {
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield call(startSubmit, action.form);
  try {
    const result = yield call(locationSaveAPI, action.payload);
    if (result.ok) {
      yield put(saveLocationSuccess(result.data));
      yield call(reset, action.form);
      yield call(stopSubmit, action.form);
      resolve(true);
    } else {
      yield put(
        saveLocationFail(result.data.message || "Failed to save Location")
      );
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to save Location"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to save Location' }))
    }
  } catch (err) {
    yield put(saveLocationFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* saveLocation() {
  // Watches for LOCATION_SAVE actions and calls  doSaveLocation when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(LOCATION_SAVE, doSaveLocation);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
