/*
 * Save entity Department 
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
  DEPARTMENT_SAVE,
  saveDepartmentSuccess,
  saveDepartmentFail
} from "common/actions/department";

import { departmentSaveAPI } from "common/api/DepartmentSvc";

/**
 * Save Department
 *
 * @param  {object} action   The action object
 *
 */
export function* doSaveDepartment(action) {
  console.log(action);
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield put(startSubmit(action.form));
  try {
    const result = yield call(departmentSaveAPI, action.payload);
    if (result.ok) {
      yield put(saveDepartmentSuccess(result.data));
      yield put(reset(action.form));
      yield put(stopSubmit(action.form));
      resolve(true);
    } else {
      yield put(
        saveDepartmentFail(result.data.message || "Failed to save Department")
      );
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to save Department"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to save Department' }))
    }
  } catch (err) {
    yield put(saveDepartmentFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* saveDepartment() {
  // Watches for DEPARTMENT_SAVE actions and calls  doSaveDepartment when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(DEPARTMENT_SAVE, doSaveDepartment);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
