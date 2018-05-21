// @flow

export const LOGIN_AUTH = 'LOGIN_AUTH'
export const LOGOUT_AUTH = 'LOGOUT_AUTH'
export const LOGIN_AUTH_SUCCESS = 'LOGIN_AUTH_SUCCESS'
export const LOGIN_AUTH_FAIL = 'LOGIN_AUTH_FAIL'
export const LOGOUT_AUTH_SUCCESS = 'LOGOUT_AUTH_SUCCESS'
export const LOGOUT_AUTH_FAIL = 'LOGOUT_AUTH_FAIL'

export type LOGIN_AUTH_SUCCESS_TYPE = {
  type: "LOGIN_AUTH_SUCCESS",
  payload: { token: string }
};
export type LOGIN_AUTH_FAIL_TYPE = {
  type: "LOGIN_AUTH_FAIL",
  payload: { errors: Object }
};

export type LOGOUT_AUTH_SUCCESS_TYPE = {
  type: "LOGOUT_AUTH_SUCCESS",
  payload: Object
};
export type LOGOUT_AUTH_FAIL_TYPE = {
  type: "LOGOUT_AUTH_FAIL",
  payload: { errors: Object }
};

/**
 * Login to system
 *
 * @param  {object} loginFormData Login form data (username and password)
 *
 * @return {object} An action object with type LOGIN_AUTH
 */
export function login (loginFormData) {
	return {
		type: LOGIN_AUTH,
		payload: loginFormData
	}
}
/**
 * Logout of the system
 *
 *
 * @return {object} An action object with type LOGIN_AUTH
 */
export function logout () {
	return {
		type: LOGOUT_AUTH
	}
}
