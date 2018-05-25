/*
 * Add entity Task 
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

import { TASK_ADD, addTaskSuccess, addTaskFail } from "common/actions/task";

import { taskAddAPI } from "common/api/TaskSvc";

/**
 * Add Task
 *
 * @param  {object} action   The action object
 *
 */
export function* doAddTask(action) {
  console.log(action);
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield put(startSubmit(action.form));
  try {
    const result = yield call(taskAddAPI, action.payload);
    if (result.ok) {
      yield put(addTaskSuccess(result.data));
      yield put(reset(action.form));
      yield put(stopSubmit(action.form));
      resolve(true);
    } else {
      yield put(addTaskFail(result.data.message || "Failed to add Task"));
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to add Task"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to add Task' }))
    }
  } catch (err) {
    yield put(addTaskFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* addTask() {
  // Watches for TASK_ADD actions and calls  doAddTask when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(TASK_ADD, doAddTask);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
