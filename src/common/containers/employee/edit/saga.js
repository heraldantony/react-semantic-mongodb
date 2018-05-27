/*
 * Save entity Employee 
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
  EMPLOYEE_SAVE,
  saveEmployeeSuccess,
  saveEmployeeFail
} from "common/actions/employee";

import { employeeSaveAPI } from "common/api/EmployeeSvc";

/**
 * Save Employee
 *
 * @param  {object} action   The action object
 *
 */
export function* doSaveEmployee(action) {
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield call(startSubmit, action.form);
  try {
    const result = yield call(employeeSaveAPI, action.payload);
    if (result.ok) {
      yield put(saveEmployeeSuccess(result.data));
      yield call(reset, action.form);
      yield call(stopSubmit, action.form);
      resolve(true);
    } else {
      yield put(
        saveEmployeeFail(result.data.message || "Failed to save Employee")
      );
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to save Employee"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to save Employee' }))
    }
  } catch (err) {
    yield put(saveEmployeeFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* saveEmployee() {
  // Watches for EMPLOYEE_SAVE actions and calls  doSaveEmployee when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(EMPLOYEE_SAVE, doSaveEmployee);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
