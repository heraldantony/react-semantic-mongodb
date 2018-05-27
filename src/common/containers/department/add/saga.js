/*
 * Add entity Department 
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
  DEPARTMENT_ADD,
  addDepartmentSuccess,
  addDepartmentFail
} from "common/actions/department";

import { departmentAddAPI } from "common/api/DepartmentSvc";

/**
 * Add Department
 *
 * @param  {object} action   The action object
 *
 */
export function* doAddDepartment(action) {
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield call(startSubmit, action.form);
  try {
    const result = yield call(departmentAddAPI, action.payload);
    if (result.ok) {
      yield put(addDepartmentSuccess(result.data));
      yield call(reset, action.form);
      yield call(stopSubmit, action.form);
      resolve(true);
    } else {
      yield put(
        addDepartmentFail(result.data.message || "Failed to add Department")
      );
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to add Department"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to add Department' }))
    }
  } catch (err) {
    yield put(addDepartmentFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* addDepartment() {
  // Watches for DEPARTMENT_ADD actions and calls  doAddDepartment when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(DEPARTMENT_ADD, doAddDepartment);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
