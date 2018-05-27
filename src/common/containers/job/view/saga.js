/*
 * Retrieve entity Job 
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

import { JOB_GET, getJobSuccess, getJobFail } from "common/actions/job";

import { jobGetAPI } from "common/api/JobSvc";

/**
 * Get Job
 *
 * @param  {object} action   The action object
 *
 */
export function* doGetJob(action) {
  try {
    const result = yield call(jobGetAPI, action.payload);
    if (result.ok) {
      yield put(getJobSuccess(result.data));
    } else yield put(getJobFail(result.data.message || "Failed to get Job"));
  } catch (err) {
    yield put(getJobFail(err));
  }
}

export function* getJob() {
  // Watches for JOB_GET actions and calls  doGetJob when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(JOB_GET, doGetJob);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
