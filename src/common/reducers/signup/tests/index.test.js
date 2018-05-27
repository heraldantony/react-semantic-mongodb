// Import `signup` reducer and initialState for this
import { signup as reducer } from "common/reducers/signup";
import { initialState } from "common/reducers/signup";
// Import all actions
import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "common/actions/signup";

describe("SIGNUP REDUCER", () => {
  // Does reducer return `initialState` on empty action type?
  it("should return the initial state", () => {
    expect(reducer(undefined, { x: "string" })).toEqual(initialState);
  });

  it("should handle SIGNUP success", () => {
    expect(reducer(initialState, {})).toEqual({
      ...initialState,
      isLoggedIn: false,
      error: ""
    });
  });

  it("should handle signup failure", () => {
    const action = {
      type: SIGNUP_FAIL,
      error: "Random error in signing up"
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoggedIn: false,
      error: action.error
    });
  });
});
