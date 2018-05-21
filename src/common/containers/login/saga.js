/*
 * Login and logout of the system
 *
*/

import { loginAPI } from 'api/AuthSvc'
import { setLocalToken, resetLocalToken } from 'api/LocalStorageCookiesSvc'
import { SubmissionError } from 'redux-form'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import {
	LOGIN_AUTH,
	LOGOUT_AUTH,
	loginSuccess,
	loginFail,
	logoutSuccess,
	logoutFail
} from './actions'

/**
 * Login to system
 *
 * @param  {object} action   The action object
 *
 */
export function * doLogin (action) {
	console.log(action)
	try {
		const result = yield call(loginAPI, action.payload)
		if (result.ok && result.data.status === 'success') {
			yield put(loginSuccess(result.data))
		} else yield put(loginFail(result.data.message || 'Failed to login'))
	} catch (err) {
		yield put(loginFail(err))
	}
}

export function * login () {
	// Watches for LOGIN_AUTH actions and calls  doLogin when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	yield takeLatest(LOGIN_AUTH, doLogin)
}

/**
 * Logout of system
 *
 * @param  {object} action   The action object
 *
 */
export function * doLogout (action) {
	console.log(action)
	try {
		/*    const result = yield call(logoutAPI, action.payload);
    if (result.ok && result.data.status == "success") {
      yield put(logoutSuccess(result.data));
    } else
      yield put(
        logoutFail(result.data.message || "Failed to logout")
      );
  */
		resetLocalToken()
	} catch (err) {
		yield put(logoutFail(err))
	}
}

export function * logout () {
	// Watches for LOGOUT_AUTH actions and calls  doLogout when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It will be cancelled automatically on component unmount
	yield takeLatest(LOGOUT_AUTH, doLogout)
}
