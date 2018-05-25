/*
 * Search entity Job 
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
  JOB_SEARCH,
  searchJobSuccess,
  searchJobFail
} from "common/actions/job";

import { jobSearchAPI } from "common/api/JobSvc";

/**
 * Search Job
 *
 * @param  {object} action   The action object
 *
 */
export function* doSearchJob(action) {
  console.log(action);
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield put(startSubmit(action.form));
  try {
    const result = yield call(jobSearchAPI, action.payload);
    if (result.ok) {
      yield put(searchJobSuccess(result.data.docs));
      yield put(reset(action.form));
      yield put(stopSubmit(action.form));
      resolve(true);
    } else {
      yield put(searchJobFail(result.data.message || "Failed to search Job"));
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to search Job"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to search Job' }))
    }
  } catch (err) {
    yield put(searchJobFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* searchJob() {
  // Watches for JOB_SEARCH actions and calls  doSearchJob when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(JOB_SEARCH, doSearchJob);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
