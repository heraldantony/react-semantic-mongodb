// @flow
import { fromJS } from 'immutable'

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
	DEPARTMENT_DELETE_SUCCESS,
	DEPARTMENT_DELETE_FAIL,
	DEPARTMENT_SET_LOCATION_SUCCESS,
	DEPARTMENT_DELETE_LOCATION_SUCCESS,
	DEPARTMENT_ADD_EMPLOYEE_SUCCESS,
	DEPARTMENT_DELETE_EMPLOYEE_SUCCESS
} from 'common/actions/department'

import { APPLICATION_INIT } from 'actions/common'

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
	DEPARTMENT_DELETE_SUCCESS_TYPE,
	DEPARTMENT_DELETE_FAIL_TYPE,
	DEPARTMENT_SET_LOCATION_SUCCESS_TYPE,
	DEPARTMENT_DELETE_LOCATION_SUCCESS_TYPE,
	DEPARTMENT_ADD_EMPLOYEE_SUCCESS_TYPE,
	DEPARTMENT_DELETE_EMPLOYEE_SUCCESS_TYPE
} from 'common/actions/department'
import type { APPLICATION_INIT_TYPE } from 'actions/common'

export type Department = {
  departmentName: string
};
export type State = {
  search: string,
  department: Department,
  departments: [Department],
  start: number,
  limit: number,
  totalItemsCount: number,
  otherSearchStart: number,
  otherSearchLimit: number,
  otherSearchTotalItemsCount: number,
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
  | DEPARTMENT_DELETE_SUCCESS_TYPE
  | DEPARTMENT_DELETE_FAIL_TYPE
  | DEPARTMENT_SET_LOCATION_SUCCESS_TYPE
  | DEPARTMENT_DELETELOCATION_SUCCESS_TYPE
  | DEPARTMENT_ADD_EMPLOYEE_SUCCESS_TYPE
  | DEPARTMENT_DELETEEMPLOYEE_SUCCESS_TYPE;

export const initialState = {
	search: '',
	department: {},
	departments: [],
	start: 0,
	limit: 10,
	totalItemsCount: 0,
	otherSearchStart: 0,
	otherSearchLimit: 10,
	otherSearchTotalItemsCount: 0,
	otherSearchDepartments: [],
	error: ''
}

export function departmentReducer (state = initialState, action: Action): State {
	switch (action.type) {
	case APPLICATION_INIT:
		return { ...initialState, ...state }

	case DEPARTMENT_ADD_SUCCESS: {
		return { ...state, department: action.payload }
	}
	case DEPARTMENT_ADD_FAIL: {
		return { ...state, error: action.error }
	}

	case DEPARTMENT_SAVE_SUCCESS: {
		return { ...state, department: action.payload }
	}
	case DEPARTMENT_SAVE_FAIL: {
		return { ...state, error: action.error }
	}

	case DEPARTMENT_UPDATE_SUCCESS: {
		return { ...state, department: action.payload }
	}
	case DEPARTMENT_UPDATE_FAIL: {
		return { ...state, error: action.error }
	}

	case DEPARTMENT_SEARCH_SUCCESS: {
		return {
			...state,
			departments: action.payload,
			totalItemsCount: action.total
		}
	}
	case DEPARTMENT_SEARCH_FAIL: {
		return { ...state, error: action.error }
	}

	case DEPARTMENT_GET_SUCCESS: {
		return { ...state, department: action.payload }
	}
	case DEPARTMENT_GET_FAIL: {
		return { ...state, error: action.error }
	}

	case DEPARTMENT_DELETE_SUCCESS: {
		let departments = state.departments
		let newDepartments = departments.filter(
			item => item._id !== action.payload._id
		)
		return { ...state, department: {}, departments: newDepartments }
	}
	case DEPARTMENT_DELETE_FAIL: {
		return { ...state, error: action.error }
	}

	case DEPARTMENT_SET_LOCATION_SUCCESS: {
		return {
			...state,
			department: {
				...state.department,
				location: action.location
			}
		}
	}
	case DEPARTMENT_DELETE_LOCATION_SUCCESS: {
		return {
			...state,
			department: {
				...state.department,
				location: null
			}
		}
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
		}
	}
	case DEPARTMENT_DELETE_EMPLOYEE_SUCCESS: {
		let employees = state.department.employees
		if (!employees) return state
		let newEmployees = employees.filter(
			item => item._id !== action.employee._id
		)

		return {
			...state,
			department: {
				...state.department,
				employees: newEmployees
			}
		}
	}

	default:
		return state
	}
}
