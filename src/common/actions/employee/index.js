// @flow
import { awral } from 'actions/utils'

import {
	employeeSearchAPI,
	employeeGetAPI,
	employeeAddAPI,
	employeeSaveAPI,
	employeeUpdateAPI
} from 'api/EmployeeSvc'
import { SubmissionError, reset } from 'redux-form'

export const EMPLOYEE_SEARCH_SUCCESS = 'EMPLOYEE_SEARCH_SUCCESS'
export const EMPLOYEE_SEARCH_FAIL = 'EMPLOYEE_SEARCH_FAIL'

export const EMPLOYEE_GET_SUCCESS = 'EMPLOYEE_GET_SUCCESS'
export const EMPLOYEE_GET_FAIL = 'EMPLOYEE_GET_FAIL'

export const EMPLOYEE_ADD_SUCCESS = 'EMPLOYEE_ADD_SUCCESS'
export const EMPLOYEE_ADD_FAIL = 'EMPLOYEE_ADD_FAIL'

export const EMPLOYEE_SAVE_SUCCESS = 'EMPLOYEE_SAVE_SUCCESS'
export const EMPLOYEE_SAVE_FAIL = 'EMPLOYEE_SAVE_FAIL'

export const EMPLOYEE_UPDATE_SUCCESS = 'EMPLOYEE_UPDATE_SUCCESS'
export const EMPLOYEE_UPDATE_FAIL = 'EMPLOYEE_UPDATE_FAIL'

export type EMPLOYEE_SEARCH_SUCCESS_TYPE = {
  type: EMPLOYEE_SEARCH_SUCCESS,
  payload: [Object]
};
export type EMPLOYEE_SEARCH_FAIL_TYPE = {
  type: EMPLOYEE_SEARCH_FAIL,
  payload: { errors: Object }
};

export type EMPLOYEE_GET_SUCCESS_TYPE = {
  type: EMPLOYEE_GET_SUCCESS,
  payload: Object
};
export type EMPLOYEE_GET_FAIL_TYPE = {
  type: EMPLOYEE_GET_FAIL,
  payload: { errors: Object }
};

export type EMPLOYEE_ADD_SUCCESS_TYPE = {
  type: EMPLOYEE_ADD_SUCCESS,
  payload: Object
};
export type EMPLOYEE_ADD_FAIL_TYPE = {
  type: EMPLOYEE_ADD_FAIL,
  payload: { errors: Object }
};

export type EMPLOYEE_SAVE_SUCCESS_TYPE = {
  type: EMPLOYEE_SAVE_SUCCESS,
  payload: Object
};
export type EMPLOYEE_SAVE_FAIL_TYPE = {
  type: EMPLOYEE_SAVE_FAIL,
  payload: { errors: Object }
};

export type EMPLOYEE_UPDATE_SUCCESS_TYPE = {
  type: EMPLOYEE_UPDATE_SUCCESS,
  payload: Object
};
export type EMPLOYEE_UPDATE_FAIL_TYPE = {
  type: EMPLOYEE_UPDATE_FAIL,
  payload: { errors: Object }
};

/**
  Awral is not recommended for production usage now
  But it can make your work with actions even simpler.
  NOTE: I strongly recommend you check Awral's sources!
  Awral is 910 bytes gzipped!
  {@link https://github.com/Metnew/awral}
*/

const awralEmployeeSearch = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: EMPLOYEE_SEARCH_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: EMPLOYEE_SEARCH_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: EMPLOYEE_SEARCH_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const EMPLOYEE_SEARCH = awralEmployeeSearch(employeeSearchAPI)(
	'EMPLOYEE_SEARCH'
)

const awralEmployeeGet = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: EMPLOYEE_GET_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: EMPLOYEE_GET_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: EMPLOYEE_GET_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const EMPLOYEE_GET = awralEmployeeGet(employeeGetAPI)('EMPLOYEE_GET')

const awralEmployeeAdd = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: EMPLOYEE_ADD_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: EMPLOYEE_ADD_SUCCESS, payload })

			dispatch(reset('ADD_FORM'))
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: EMPLOYEE_ADD_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const EMPLOYEE_ADD = awralEmployeeAdd(employeeAddAPI)('EMPLOYEE_ADD')

const awralEmployeeSave = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: EMPLOYEE_SAVE_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: EMPLOYEE_SAVE_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: EMPLOYEE_SAVE_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const EMPLOYEE_SAVE = awralEmployeeSave(employeeSaveAPI)(
	'EMPLOYEE_SAVE'
)

const awralEmployeeUpdate = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: EMPLOYEE_UPDATE_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: EMPLOYEE_UPDATE_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: EMPLOYEE_UPDATE_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const EMPLOYEE_UPDATE = awralEmployeeUpdate(employeeUpdateAPI)(
	'EMPLOYEE_UPDATE'
)
