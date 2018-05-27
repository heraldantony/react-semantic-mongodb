// @flow
import { signupAPI } from "api/SignupSvc";
import { SubmissionError } from "redux-form";

export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export type SIGNUP_SUCCESS_TYPE = {
  type: SIGNUP_SUCCESS,
  payload: { message: string, status: string }
};
export type SIGNUP_FAIL_TYPE = {
  type: SIGNUP_FAIL,
  payload: { errors: Object }
};

/**
 * New user signup
 *
 * @param  {object} signupFormData Signup form data (username and password)
 *
 * @return {object} An action object with type SIGNUP
 */
export function signup(signupFormData, form, promise) {
  return {
    type: SIGNUP,
    payload: signupFormData,
    form,
    promise
  };
}

/**
 * Dispatched when signup succeeds
 *
 * @param  {object} user  The User object
 *
 * @return {object} An action object with type SIGNUP_SUCCESS
 */
export function signupSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    payload: user
  };
}

/**
 * Dispatched when signup fails
 *
 * @param  {object} error  The error object
 *
 * @return {object} An action object with type SIGNUP_FAIL
 */
export function signupFail(error) {
  return {
    type: SIGNUP_FAIL,
    error: error
  };
}
