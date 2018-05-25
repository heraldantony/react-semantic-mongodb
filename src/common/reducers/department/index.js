// @flow
import { fromJS } from "immutable";

import {
  DEPARTMENT_ADD_SUCCESS,
  DEPARTMENT_ADD_FAIL,
  DEPARTMENT_SAVE_SUCCESS,
  DEPARTMENT_SAVE_FAIL,
  DEPARTMENT_UPDATE_SUCCESS,
  DEPARTMENT_UPDATE_FAIL,
  DEPARTMENT_SEARCH_SUCCESS,
  DEPARTMENT_SEARCH_FAIL,
  DEPARTMENT_GET_SUCCESS,
  DEPARTMENT_GET_FAIL,
  DEPARTMENT_SET_LOCATION_SUCCESS,
  DEPARTMENT_ADD_EMPLOYEE_SUCCESS
} from "common/actions/department";

import { APPLICATION_INIT } from "actions/common";

import type {
  DEPARTMENT_ADD_SUCCESS_TYPE,
  DEPARTMENT_ADD_FAIL_TYPE,
  DEPARTMENT_SAVE_SUCCESS_TYPE,
  DEPARTMENT_SAVE_FAIL_TYPE,
  DEPARTMENT_UPDATE_SUCCESS_TYPE,
  DEPARTMENT_UPDATE_FAIL_TYPE,
  DEPARTMENT_SEARCH_SUCCESS_TYPE,
  DEPARTMENT_SEARCH_FAIL_TYPE,
  DEPARTMENT_GET_SUCCESS_TYPE,
  DEPARTMENT_GET_FAIL_TYPE,
  DEPARTMENT_SET_LOCATION_SUCCESS_TYPE,
  DEPARTMENT_ADD_EMPLOYEE_SUCCESS_TYPE
} from "common/actions/department";
import type { APPLICATION_INIT_TYPE } from "actions/common";

export type Department = {
  departmentName: string
};
export type State = {
  search: string,
  department: Department,
  departments: [Department],
  start: number,
  limit: number,
  otherSearchStart: number,
  otherSearchLimit: number,
  otherSearchDepartments: [Department],
  error: Object
};

type Action =
  | APPLICATION_INIT_TYPE
  | DEPARTMENT_ADD_SUCCESS_TYPE
  | DEPARTMENT_ADD_FAIL_TYPE
  | DEPARTMENT_SAVE_SUCCESS_TYPE
  | DEPARTMENT_SAVE_FAIL_TYPE
  | DEPARTMENT_UPDATE_SUCCESS_TYPE
  | DEPARTMENT_UPDATE_FAIL_TYPE
  | DEPARTMENT_SEARCH_SUCCESS_TYPE
  | DEPARTMENT_SEARCH_FAIL_TYPE
  | DEPARTMENT_GET_SUCCESS_TYPE
  | DEPARTMENT_GET_FAIL_TYPE
  | DEPARTMENT_SET_LOCATION_SUCCESS_TYPE
  | DEPARTMENT_ADD_EMPLOYEE_SUCCESS_TYPE;

export const initialState = {
  search: "",
  department: {},
  departments: [],
  start: 0,
  limit: 10,
  otherSearchStart: 0,
  otherSearchLimit: 10,
  otherSearchDepartments: [],
  error: ""
};

export function departmentReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case APPLICATION_INIT:
      return { ...initialState, ...state };

    case DEPARTMENT_ADD_SUCCESS: {
      return { ...state, department: action.payload };
    }
    case DEPARTMENT_ADD_FAIL: {
      return { ...state, error: action.error };
    }

    case DEPARTMENT_SAVE_SUCCESS: {
      return { ...state, department: action.payload };
    }
    case DEPARTMENT_SAVE_FAIL: {
      return { ...state, error: action.error };
    }

    case DEPARTMENT_UPDATE_SUCCESS: {
      return { ...state, department: action.payload };
    }
    case DEPARTMENT_UPDATE_FAIL: {
      return { ...state, error: action.error };
    }

    case DEPARTMENT_SEARCH_SUCCESS: {
      return { ...state, departments: action.payload };
    }
    case DEPARTMENT_SEARCH_FAIL: {
      return { ...state, error: action.error };
    }

    case DEPARTMENT_GET_SUCCESS: {
      return { ...state, department: action.payload };
    }
    case DEPARTMENT_GET_FAIL: {
      return { ...state, error: action.error };
    }

    case DEPARTMENT_SET_LOCATION_SUCCESS: {
      return {
        ...state,
        department: {
          ...state.department,
          location: action.location
        }
      };
    }

    case DEPARTMENT_ADD_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        department: {
          ...state.department,
          employees: state.department.employees
            ? [...state.department.employees, action.employee]
            : [action.employee]
        }
      };
    }

    default:
      return state;
  }
}
