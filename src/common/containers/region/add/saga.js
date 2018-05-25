/*
 * Add entity Region 
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
  REGION_ADD,
  addRegionSuccess,
  addRegionFail
} from "common/actions/region";

import { regionAddAPI } from "common/api/RegionSvc";

/**
 * Add Region
 *
 * @param  {object} action   The action object
 *
 */
export function* doAddRegion(action) {
  console.log(action);
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield put(startSubmit(action.form));
  try {
    const result = yield call(regionAddAPI, action.payload);
    if (result.ok) {
      yield put(addRegionSuccess(result.data));
      yield put(reset(action.form));
      yield put(stopSubmit(action.form));
      resolve(true);
    } else {
      yield put(addRegionFail(result.data.message || "Failed to add Region"));
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to add Region"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to add Region' }))
    }
  } catch (err) {
    yield put(addRegionFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* addRegion() {
  // Watches for REGION_ADD actions and calls  doAddRegion when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(REGION_ADD, doAddRegion);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
