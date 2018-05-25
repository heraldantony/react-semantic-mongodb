/*
 * Update entity Department 
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
  DEPARTMENT_UPDATE,
  updateDepartmentSuccess,
  updateDepartmentFail
} from "common/actions/department";

import { departmentUpdateAPI } from "common/api/DepartmentSvc";

/**
 * Update Department
 *
 * @param  {object} action   The action object
 *
 */
export function* doUpdateDepartment(action) {
  console.log(action);
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield put(startSubmit(action.form));
  try {
    const result = yield call(departmentUpdateAPI, action.payload);
    if (result.ok) {
      yield put(updateDepartmentSuccess(result.data));
      yield put(reset(action.form));
      yield put(stopSubmit(action.form));
      resolve(true);
    } else {
      yield put(
        updateDepartmentFail(
          result.data.message || "Failed to update Department"
        )
      );
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to update Department"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to update Department' }))
    }
  } catch (err) {
    yield put(updateDepartmentFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* updateDepartment() {
  // Watches for DEPARTMENT_UPDATE actions and calls  doUpdateDepartment when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(DEPARTMENT_UPDATE, doUpdateDepartment);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
