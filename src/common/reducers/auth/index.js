// @flow
import { isLoggedIn as hasLocalToken } from 'api/LocalStorageCookiesSvc'
import {
	LOGIN_AUTH_FAIL,
	LOGIN_AUTH_SUCCESS,
	LOGOUT_AUTH_SUCCESS,
	LOGOUT_AUTH_FAIL
} from 'common/actions/auth'
import { APPLICATION_INIT } from 'common/actions/common'

import type {
	LOGIN_AUTH_FAIL_TYPE,
	LOGIN_AUTH_SUCCESS_TYPE,
	LOGOUT_AUTH_SUCCESS_TYPE,
	LOGOUT_AUTH_FAIL_TYPE
} from 'common/actions/auth'
import type { APPLICATION_INIT_TYPE } from 'common/actions/common'

export type State = {
  isLoggedIn: boolean,
  error: string
};

type Action =
  | APPLICATION_INIT_TYPE
  | LOGIN_AUTH_FAIL_TYPE
  | LOGIN_AUTH_SUCCESS_TYPE
  | LOGOUT_AUTH_SUCCESS_TYPE
  | LOGOUT_AUTH_FAIL_TYPE;

export const initialState: State = {
	isLoggedIn: hasLocalToken(),
	error: ''
}

export default function auth (
	state: State = initialState,
	action: Action
): State {
	switch (action.type) {
	case APPLICATION_INIT:
		return { ...initialState, ...state }
	case LOGOUT_AUTH_SUCCESS: {
		return {
			...state,
			isLoggedIn: false,
			error: null
		}
	}
	case LOGOUT_AUTH_FAIL: {
		return {
			...state,
			isLoggedIn: false,
			error: action.error
		}
	}
	case LOGIN_AUTH_FAIL: {
		return {
			...state,
			error: action.error,
			isLoggedIn: false
		}
	}
	case LOGIN_AUTH_SUCCESS: {
		return {
			...state,
			isLoggedIn: true,
			error: null
		}
	}
	default:
		return state
	}
}
