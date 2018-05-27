// @flow
/*
 * Test  login/logout actions
 *
*/

// Import all redux actions
import {
  LOGIN_AUTH,
  LOGIN_AUTH_SUCCESS,
  LOGIN_AUTH_FAIL,
  LOGOUT_AUTH,
  LOGOUT_AUTH_SUCCESS,
  LOGOUT_AUTH_FAIL,
  login,
  loginSuccess,
  loginFail,
  logout,
  logoutSuccess,
  logoutFail
} from "common/actions/auth";
import type {
  LOGIN_AUTH_SUCCESS_TYPE,
  LOGIN_AUTH_FAIL_TYPE,
  LOGOUT_AUTH_SUCCESS_TYPE,
  LOGOUT_AUTH_FAIL_TYPE
} from "common/actions/auth";

describe("Auth actions", () => {
  describe("login", () => {
    it("should return the correct action with user login data, form name, and promise", () => {
      const user = {
        username: "test",
        password: "test123"
      };
      const form = "LOGIN_FORM";
      const promise = {};
      const expectedResult = {
        type: LOGIN_AUTH,
        payload: user,
        form: form,
        promise: promise
      };

      expect(login(user, form, promise)).toEqual(expectedResult);
    });
  });

  describe("loginSuccess", () => {
    it("should return the correct action with results", () => {
      const user = {
        username: "test",
        token: "123456"
      };
      const expectedResult = {
        type: LOGIN_AUTH_SUCCESS,
        payload: user
      };

      expect(loginSuccess(user)).toEqual(expectedResult);
    });
  });

  describe("loginFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: LOGIN_AUTH_FAIL,
        error: error
      };

      expect(loginFail(error)).toEqual(expectedResult);
    });
  });

  describe("logout", () => {
    it("should return the correct action with user data", () => {
      const user = {
        username: "test",
        token: "12345"
      };
      const expectedResult = {
        type: LOGOUT_AUTH,
        payload: user
      };

      expect(logout(user)).toEqual(expectedResult);
    });
  });

  describe("logoutSuccess", () => {
    it("should return the correct action with results", () => {
      const user = {
        username: "test",
        token: "123456"
      };
      const expectedResult = {
        type: LOGOUT_AUTH_SUCCESS,
        payload: user
      };

      expect(logoutSuccess(user)).toEqual(expectedResult);
    });
  });

  describe("loginFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: LOGOUT_AUTH_FAIL,
        error: error
      };

      expect(logoutFail(error)).toEqual(expectedResult);
    });
  });
});
