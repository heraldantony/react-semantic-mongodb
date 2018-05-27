/*
 * Search entity Task 
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
  TASK_SEARCH,
  searchTaskSuccess,
  searchTaskFail
} from "common/actions/task";

import { taskSearchAPI } from "common/api/TaskSvc";

/**
 * Search Task
 *
 * @param  {object} action   The action object
 *
 */
export function* doSearchTask(action) {
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield call(startSubmit, action.form);
  try {
    const result = yield call(taskSearchAPI, action.payload);
    if (result.ok) {
      yield put(searchTaskSuccess(result.data.docs));
      yield call(reset, action.form);
      yield call(stopSubmit, action.form);
      resolve(true);
    } else {
      yield put(searchTaskFail(result.data.message || "Failed to search Task"));
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to search Task"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to search Task' }))
    }
  } catch (err) {
    yield put(searchTaskFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* searchTask() {
  // Watches for TASK_SEARCH actions and calls  doSearchTask when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(TASK_SEARCH, doSearchTask);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
