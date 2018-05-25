/*
 * Retrieve entity Task 
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

import { TASK_GET, getTaskSuccess, getTaskFail } from "common/actions/task";

import { taskGetAPI } from "common/api/TaskSvc";

/**
 * Get Task
 *
 * @param  {object} action   The action object
 *
 */
export function* doGetTask(action) {
  console.log(action);
  try {
    const result = yield call(taskGetAPI, action.payload);
    if (result.ok) {
      yield put(getTaskSuccess(result.data));
    } else yield put(getTaskFail(result.data.message || "Failed to get Task"));
  } catch (err) {
    yield put(getTaskFail(err));
  }
}

export function* getTask() {
  // Watches for TASK_GET actions and calls  doGetTask when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(TASK_GET, doGetTask);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
