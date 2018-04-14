// @flow
import {
  awral
} from 'actions/utils'
import {
  signupAPI
} from 'api/SignupSvc'
import {
  SubmissionError
} from 'redux-form'

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAIL = 'SIGNUP_FAIL'

export type SIGNUP_SUCCESS_TYPE = {
  type: SIGNUP_SUCCESS,
  payload: {
    message: string,
    status: string
  }
}
export type SIGNUP_FAIL_TYPE = {
  type: SIGNUP_FAIL,
  payload: {
    errors: Object
  }
}

/**
  Awral is not recommended for production usage now
  But it can make your work with actions even simpler.
  NOTE: I strongly recommend you check Awral's sources!
  Awral is 910 bytes gzipped!
  {@link https://github.com/Metnew/awral}
*/
const awralSignup = awral.of({
  pending: null,
  success({
    payload,
    dispatch
  }) {
    if (payload.status === 'failure' || payload.status === 'error') {
      dispatch({
        type: SIGNUP_FAIL,
        errors: payload.message
      })
      throw new SubmissionError({
        _error: payload.message
      })
    } else {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload
      })
    }
  },
  fail({
    payload,
    dispatch
  }) {
    dispatch({
      type: SIGNUP_FAIL,
      errors: (payload && payload.message) || "Server Error"
    })
    throw new SubmissionError({
      _error: (payload && payload.message) || "Server Error"
    })
  }
})

export const SIGNUP = awralSignup(signupAPI)('SIGNUP')