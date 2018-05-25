/*
 * Search entity Region 
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
  REGION_SEARCH,
  searchRegionSuccess,
  searchRegionFail
} from "common/actions/region";

import { regionSearchAPI } from "common/api/RegionSvc";

/**
 * Search Region
 *
 * @param  {object} action   The action object
 *
 */
export function* doSearchRegion(action) {
  console.log(action);
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield put(startSubmit(action.form));
  try {
    const result = yield call(regionSearchAPI, action.payload);
    if (result.ok) {
      yield put(searchRegionSuccess(result.data.docs));
      yield put(reset(action.form));
      yield put(stopSubmit(action.form));
      resolve(true);
    } else {
      yield put(
        searchRegionFail(result.data.message || "Failed to search Region")
      );
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to search Region"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to search Region' }))
    }
  } catch (err) {
    yield put(searchRegionFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* searchRegion() {
  // Watches for REGION_SEARCH actions and calls  doSearchRegion when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(REGION_SEARCH, doSearchRegion);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
