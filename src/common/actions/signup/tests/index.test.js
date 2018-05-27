// @flow
/*
 * Test user signup actions
 *
*/
import {
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  signup,
  signupSuccess,
  signupFail
} from "common/actions/signup";

import type {
  SIGNUP_SUCCESS_TYPE,
  SIGNUP_FAIL_TYPE
} from "common/actions/signup ";

describe("Signup actions", () => {
  describe("signup", () => {
    it("should return the correct action with user signup data, form name, and promise", () => {
      const user = {
        username: "test",
        password: "test123",
        email: "test@test.test"
      };
      const form = "SIGNUP_FORM";
      const promise = {};
      const expectedResult = {
        type: SIGNUP,
        payload: user,
        form: form,
        promise: promise
      };

      expect(signup(user, form, promise)).toEqual(expectedResult);
    });
  });

  describe("signupSuccess", () => {
    it("should return the correct action with results", () => {
      const user = {
        username: "test"
      };
      const expectedResult = {
        type: SIGNUP_SUCCESS,
        payload: user
      };

      expect(signupSuccess(user)).toEqual(expectedResult);
    });
  });

  describe("signupFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: SIGNUP_FAIL,
        error: error
      };

      expect(signupFail(error)).toEqual(expectedResult);
    });
  });
});
