/*
 * Save entity Job 
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

import { JOB_SAVE, saveJobSuccess, saveJobFail } from "common/actions/job";

import { jobSaveAPI } from "common/api/JobSvc";

/**
 * Save Job
 *
 * @param  {object} action   The action object
 *
 */
export function* doSaveJob(action) {
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield call(startSubmit, action.form);
  try {
    const result = yield call(jobSaveAPI, action.payload);
    if (result.ok) {
      yield put(saveJobSuccess(result.data));
      yield call(reset, action.form);
      yield call(stopSubmit, action.form);
      resolve(true);
    } else {
      yield put(saveJobFail(result.data.message || "Failed to save Job"));
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to save Job"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to save Job' }))
    }
  } catch (err) {
    yield put(saveJobFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* saveJob() {
  // Watches for JOB_SAVE actions and calls  doSaveJob when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(JOB_SAVE, doSaveJob);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
