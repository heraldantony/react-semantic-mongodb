// @flow
/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import { LOCATION_CHANGE } from "react-router-redux";
import { reducer as reduxFormReducer } from "redux-form";

import { auth } from "./auth";
import { signup } from "./signup";
import { layout } from "./layout";
import { regionReducer } from "./region";
import { countryReducer } from "./country";
import { locationReducer } from "./location";
import { departmentReducer } from "./department";
import { employeeReducer } from "./employee";
import { jobReducer } from "./job";
import { taskReducer } from "./task";

import type { State as AuthState } from "./auth";
import type { State as LayoutState } from "./layout";

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// Initial routing state
const routeInitialState = {
  location: null
};

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return {
        ...state,
        location: action.payload
      };
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    auth: auth,
    signup: signup,
    layout: layout,
    region: regionReducer,
    country: countryReducer,
    location: locationReducer,
    department: departmentReducer,
    employee: employeeReducer,
    job: jobReducer,
    task: taskReducer,
    ...injectedReducers,
    form: reduxFormReducer
  });
}

export type GlobalState = { layout: LayoutState } & { auth: AuthState } & {
  entities: {}
};
