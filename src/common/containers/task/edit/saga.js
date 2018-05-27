/*
 * Save entity Task 
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

import { TASK_SAVE, saveTaskSuccess, saveTaskFail } from "common/actions/task";

import { taskSaveAPI } from "common/api/TaskSvc";

/**
 * Save Task
 *
 * @param  {object} action   The action object
 *
 */
export function* doSaveTask(action) {
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield call(startSubmit, action.form);
  try {
    const result = yield call(taskSaveAPI, action.payload);
    if (result.ok) {
      yield put(saveTaskSuccess(result.data));
      yield call(reset, action.form);
      yield call(stopSubmit, action.form);
      resolve(true);
    } else {
      yield put(saveTaskFail(result.data.message || "Failed to save Task"));
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to save Task"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to save Task' }))
    }
  } catch (err) {
    yield put(saveTaskFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* saveTask() {
  // Watches for TASK_SAVE actions and calls  doSaveTask when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(TASK_SAVE, doSaveTask);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
