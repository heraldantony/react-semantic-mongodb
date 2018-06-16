// @flow
import {
	isLoggedIn as hasLocalToken,
	setLocalToken
} from 'api/LocalStorageCookiesSvc'
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

export function auth (state: State = initialState, action: Action): State {
	switch (action.type) {
	case APPLICATION_INIT:
		return { ...initialState, ...state }
	case LOGOUT_AUTH_SUCCESS: {
		return {
			...state,
			isLoggedIn: false,
			error: ''
		}
	}
	case LOGOUT_AUTH_FAIL: {
		return {
			...state,
			isLoggedIn: false,
			error: action.error || ''
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
		// temp fix for localhost, since set-cookie header from server response after login
		// doesn't seem to set the cookie
		const hostname = window && window.location && window.location.hostname
		if (hostname === 'localhost' || hostname === '127.0.0.1') {
			setLocalToken(action.payload.token, 1800)
		}
		return {
			...state,
			isLoggedIn: true,
			error: ''
		}
	}
	default:
		return state
	}
}
