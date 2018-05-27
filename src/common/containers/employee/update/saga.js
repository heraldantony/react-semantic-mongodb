/*
 * Update entity Employee 
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
  EMPLOYEE_UPDATE,
  updateEmployeeSuccess,
  updateEmployeeFail
} from "common/actions/employee";

import { employeeUpdateAPI } from "common/api/EmployeeSvc";

/**
 * Update Employee
 *
 * @param  {object} action   The action object
 *
 */
export function* doUpdateEmployee(action) {
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield call(startSubmit, action.form);
  try {
    const result = yield call(employeeUpdateAPI, action.payload);
    if (result.ok) {
      yield put(updateEmployeeSuccess(result.data));
      yield call(reset, action.form);
      yield call(stopSubmit, action.form);
      resolve(true);
    } else {
      yield put(
        updateEmployeeFail(result.data.message || "Failed to update Employee")
      );
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to update Employee"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to update Employee' }))
    }
  } catch (err) {
    yield put(updateEmployeeFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* updateEmployee() {
  // Watches for EMPLOYEE_UPDATE actions and calls  doUpdateEmployee when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(EMPLOYEE_UPDATE, doUpdateEmployee);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
