// @flow
import { fromJS } from 'immutable'

import {
	EMPLOYEE_ADD_SUCCESS,
	EMPLOYEE_ADD_FAIL,
	EMPLOYEE_SAVE_SUCCESS,
	EMPLOYEE_SAVE_FAIL,
	EMPLOYEE_UPDATE_SUCCESS,
	EMPLOYEE_UPDATE_FAIL,
	EMPLOYEE_SEARCH_SUCCESS,
	EMPLOYEE_SEARCH_FAIL,
	EMPLOYEE_GET_SUCCESS,
	EMPLOYEE_GET_FAIL,
	EMPLOYEE_DELETE_SUCCESS,
	EMPLOYEE_DELETE_FAIL,
	EMPLOYEE_ADD_JOB_SUCCESS,
	EMPLOYEE_DELETE_JOB_SUCCESS
} from 'common/actions/employee'

import { APPLICATION_INIT } from 'actions/common'

import type {
	EMPLOYEE_ADD_SUCCESS_TYPE,
	EMPLOYEE_ADD_FAIL_TYPE,
	EMPLOYEE_SAVE_SUCCESS_TYPE,
	EMPLOYEE_SAVE_FAIL_TYPE,
	EMPLOYEE_UPDATE_SUCCESS_TYPE,
	EMPLOYEE_UPDATE_FAIL_TYPE,
	EMPLOYEE_SEARCH_SUCCESS_TYPE,
	EMPLOYEE_SEARCH_FAIL_TYPE,
	EMPLOYEE_GET_SUCCESS_TYPE,
	EMPLOYEE_GET_FAIL_TYPE,
	EMPLOYEE_DELETE_SUCCESS_TYPE,
	EMPLOYEE_DELETE_FAIL_TYPE,
	EMPLOYEE_ADD_JOB_SUCCESS_TYPE,
	EMPLOYEE_DELETE_JOB_SUCCESS_TYPE
} from 'common/actions/employee'
import type { APPLICATION_INIT_TYPE } from 'actions/common'

export type Employee = {
  firstName: string,

  lastName: string,

  email: string,

  phoneNumber: string,

  hireDate: Date,

  salary: integer,

  commissionPct: integer
};
export type State = {
  search: string,
  employee: Employee,
  employees: [Employee],
  start: number,
  limit: number,
  otherSearchStart: number,
  otherSearchLimit: number,
  otherSearchEmployees: [Employee],
  error: Object
};

type Action =
  | APPLICATION_INIT_TYPE
  | EMPLOYEE_ADD_SUCCESS_TYPE
  | EMPLOYEE_ADD_FAIL_TYPE
  | EMPLOYEE_SAVE_SUCCESS_TYPE
  | EMPLOYEE_SAVE_FAIL_TYPE
  | EMPLOYEE_UPDATE_SUCCESS_TYPE
  | EMPLOYEE_UPDATE_FAIL_TYPE
  | EMPLOYEE_SEARCH_SUCCESS_TYPE
  | EMPLOYEE_SEARCH_FAIL_TYPE
  | EMPLOYEE_GET_SUCCESS_TYPE
  | EMPLOYEE_GET_FAIL_TYPE
  | EMPLOYEE_DELETE_SUCCESS_TYPE
  | EMPLOYEE_DELETE_FAIL_TYPE
  | EMPLOYEE_ADD_JOB_SUCCESS_TYPE
  | EMPLOYEE_DELETEJOB_SUCCESS_TYPE;

export const initialState = {
	search: '',
	employee: {},
	employees: [],
	start: 0,
	limit: 10,
	otherSearchStart: 0,
	otherSearchLimit: 10,
	otherSearchEmployees: [],
	error: ''
}

export function employeeReducer (state = initialState, action: Action): State {
	switch (action.type) {
	case APPLICATION_INIT:
		return { ...initialState, ...state }

	case EMPLOYEE_ADD_SUCCESS: {
		return { ...state, employee: action.payload }
	}
	case EMPLOYEE_ADD_FAIL: {
		return { ...state, error: action.error }
	}

	case EMPLOYEE_SAVE_SUCCESS: {
		return { ...state, employee: action.payload }
	}
	case EMPLOYEE_SAVE_FAIL: {
		return { ...state, error: action.error }
	}

	case EMPLOYEE_UPDATE_SUCCESS: {
		return { ...state, employee: action.payload }
	}
	case EMPLOYEE_UPDATE_FAIL: {
		return { ...state, error: action.error }
	}

	case EMPLOYEE_SEARCH_SUCCESS: {
		return { ...state, employees: action.payload }
	}
	case EMPLOYEE_SEARCH_FAIL: {
		return { ...state, error: action.error }
	}

	case EMPLOYEE_GET_SUCCESS: {
		return { ...state, employee: action.payload }
	}
	case EMPLOYEE_GET_FAIL: {
		return { ...state, error: action.error }
	}

	case EMPLOYEE_DELETE_SUCCESS: {
		let employees = state.employees
		let newEmployees = employees.filter(
			item => item._id !== action.payload._id
		)
		return { ...state, employee: {}, employees: newEmployees }
	}
	case EMPLOYEE_DELETE_FAIL: {
		return { ...state, error: action.error }
	}

	case EMPLOYEE_ADD_JOB_SUCCESS: {
		return {
			...state,
			employee: {
				...state.employee,
				jobs: state.employee.jobs
					? [...state.employee.jobs, action.job]
					: [action.job]
			}
		}
	}
	case EMPLOYEE_DELETE_JOB_SUCCESS: {
		let jobs = state.employee.jobs
		if (!jobs) return state
		let newJobs = jobs.filter(item => item._id !== action.job._id)

		return {
			...state,
			employee: {
				...state.employee,
				jobs: newJobs
			}
		}
	}

	default:
		return state
	}
}
