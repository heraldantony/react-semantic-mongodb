import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
// Import all redux actions
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_PENDING,
  signup,
  signupSuccess,
  signupFail
} from "common/actions/signup";
// Add middlewares that our mock store will use
// It can be redux-thunk or routingMiddleware from `react-router-redux`
// Or any other middleware that you use in your app
const middlewares = [thunk];
// Create mockStore for testing
const mockStore = configureMockStore(middlewares);

describe("Signup actions", () => {
  describe("SIGNUP", () => {
    test("creates SIGNUP_SUCCESS when SIGNUP was successful", done => {
      const successPayload = {
        token: "nothing"
      };

      nock(process.env.BASE_API)
        .post("/signup")
        .reply(200, successPayload);
      // Create expected output of your action
      const expectedActions = [
        {
          type: SIGNUP_SUCCESS,
          payload: successPayload
        }
      ];
      // Create store for testing
      const store = mockStore({});
      // Dispatch action
      store.dispatch(signup()).then(() => {
        // Compare expected and real outputs
        expect(store.getActions()).toEqual(expectedActions);
        // Call `done()` callback, because action is async
        done();
      });
    });

    test("creates SIGNUP_FAIL when SIGNUP was unsuccessful", done => {
      // Create expected output of your action
      const errorPayload = {
        errors: {}
      };

      const expectedActions = [
        {
          type: SIGNUP_FAIL,
          error: true,
          meta: null,
          payload: errorPayload
        }
      ];

      nock(process.env.BASE_API)
        .post("/auth")
        .reply(400, errorPayload);
      // Create store for testing
      const store = mockStore({});
      // Dispatch action
      store.dispatch(signup()).then(res => {
        // Compare expected and real outputs
        expect(store.getActions()).toEqual(expectedActions);
        // Call `done()`, because test is async
        done();
      });
    });
  });
});
