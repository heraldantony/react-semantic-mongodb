/*
 * Login and logout of the system
 *
*/

import { loginAPI } from "common/api/AuthSvc";
import {
  setLocalToken,
  resetLocalToken
} from "common/api/LocalStorageCookiesSvc";
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
  LOGIN_AUTH,
  LOGOUT_AUTH,
  loginSuccess,
  loginFail,
  logoutSuccess,
  logoutFail
} from "common/actions/auth";

/**
 * Login to system
 *
 * @param  {object} action   The action object
 *
 */
export function* doLogin(action) {
  console.log(action);
  const { resolve, reject } = action.promise;
  // Start submitting, won't trigger setSubmitSucceeded()
  yield put(startSubmit(action.form));
  try {
    const result = yield call(loginAPI, action.payload);
    if (result.ok && result.data.status !== "failure") {
      yield put(loginSuccess(result.data));
      yield put(reset(action.form));
      yield put(stopSubmit(action.form));
      resolve(true);
    } else {
      yield put(loginFail(result.data.message || "Failed to login"));
      reject(
        new SubmissionError({
          _error: result.data.message || "Failed to login"
        })
      );
      // yield put(stopSubmit(action.form, { _error: result.data.message || 'Failed to login' }))
    }
  } catch (err) {
    yield put(loginFail(err));
    reject(new SubmissionError({ _error: err }));
    // yield put(stopSubmit(action.form, { _error: err }))
  } finally {
    // resolve(true)
  }
}

export function* login() {
  // Watches for LOGIN_AUTH actions and calls  doLogin when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(LOGIN_AUTH, doLogin);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

/**
 * Logout of system
 *
 * @param  {object} action   The action object
 *
 */
export function* doLogout(action) {
  console.log(action);
  try {
    /*    const result = yield call(logoutAPI, action.payload);
    if (result.ok && result.data.status == "success") {
      yield put(logoutSuccess(result.data));
    } else
      yield put(
        logoutFail(result.data.message || "Failed to logout")
      );
  */
    yield put(logoutSuccess({}));
    resetLocalToken();
  } catch (err) {
    yield put(logoutFail(err));
  }
}

export function* logout() {
  // Watches for LOGOUT_AUTH actions and calls  doLogout when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  const watcher = yield takeLatest(LOGOUT_AUTH, doLogout);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
