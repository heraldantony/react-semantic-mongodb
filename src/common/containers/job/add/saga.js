/*
 * Add entity Job 
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

import { JOB_ADD, addJobSuccess, addJobFail } from "common/actions/job";

import { jobAddAPI } from "common/api/JobSvc";

/**
 * Add Job
 *
 * @param  {object} action   The action object
 *
 */
export function* doAddJob(action) {
  console.log(action);
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield put(startSubmit(action.form));
  try {
    const result = yield call(jobAddAPI, action.payload);
    if (result.ok) {
      yield put(addJobSuccess(result.data));
      yield put(reset(action.form));
      yield put(stopSubmit(action.form));
      resolve(true);
    } else {
      yield put(addJobFail(result.data.message || "Failed to add Job"));
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to add Job"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to add Job' }))
    }
  } catch (err) {
    yield put(addJobFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* addJob() {
  // Watches for JOB_ADD actions and calls  doAddJob when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(JOB_ADD, doAddJob);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
