/*
 * Update entity Task 
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
  TASK_UPDATE,
  updateTaskSuccess,
  updateTaskFail
} from "common/actions/task";

import { taskUpdateAPI } from "common/api/TaskSvc";

/**
 * Update Task
 *
 * @param  {object} action   The action object
 *
 */
export function* doUpdateTask(action) {
  console.log(action);
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield put(startSubmit(action.form));
  try {
    const result = yield call(taskUpdateAPI, action.payload);
    if (result.ok) {
      yield put(updateTaskSuccess(result.data));
      yield put(reset(action.form));
      yield put(stopSubmit(action.form));
      resolve(true);
    } else {
      yield put(updateTaskFail(result.data.message || "Failed to update Task"));
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to update Task"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to update Task' }))
    }
  } catch (err) {
    yield put(updateTaskFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* updateTask() {
  // Watches for TASK_UPDATE actions and calls  doUpdateTask when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(TASK_UPDATE, doUpdateTask);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
