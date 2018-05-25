// @flow
import { isLoggedIn as hasLocalToken } from "api/LocalStorageCookiesSvc";
import { SIGNUP_FAIL, SIGNUP_SUCCESS } from "common/actions/signup";
import { APPLICATION_INIT } from "common/actions/common";

import type {
  SIGNUP_FAIL_TYPE,
  SIGNUP_SUCCESS_TYPE
} from "common/actions/auth";
import type { APPLICATION_INIT_TYPE } from "common/actions/common";

export type State = {
  isLoggedIn: boolean,
  error: string
};

type Action = APPLICATION_INIT_TYPE | SIGNUP_FAIL_TYPE | SIGNUP_SUCCESS_TYPE;

export const initialState: State = {
  isLoggedIn: hasLocalToken(),
  error: ""
};

export function signup(state: State = initialState, action: Action): State {
  switch (action.type) {
    case APPLICATION_INIT:
      return { ...initialState, ...state };
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoggedIn: false,
        error: null
      };
    }
    case SIGNUP_FAIL: {
      return {
        ...state,
        error: action.error,
        isLoggedIn: false
      };
    }
    default:
      return state;
  }
}
