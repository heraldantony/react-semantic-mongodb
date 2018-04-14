// @flow
import { awral } from 'actions/utils'

import {
	departmentSearchAPI,
	departmentGetAPI,
	departmentAddAPI,
	departmentSaveAPI,
	departmentUpdateAPI
} from 'api/DepartmentSvc'
import { SubmissionError, reset } from 'redux-form'

export const DEPARTMENT_SEARCH_SUCCESS = 'DEPARTMENT_SEARCH_SUCCESS'
export const DEPARTMENT_SEARCH_FAIL = 'DEPARTMENT_SEARCH_FAIL'

export const DEPARTMENT_GET_SUCCESS = 'DEPARTMENT_GET_SUCCESS'
export const DEPARTMENT_GET_FAIL = 'DEPARTMENT_GET_FAIL'

export const DEPARTMENT_ADD_SUCCESS = 'DEPARTMENT_ADD_SUCCESS'
export const DEPARTMENT_ADD_FAIL = 'DEPARTMENT_ADD_FAIL'

export const DEPARTMENT_SAVE_SUCCESS = 'DEPARTMENT_SAVE_SUCCESS'
export const DEPARTMENT_SAVE_FAIL = 'DEPARTMENT_SAVE_FAIL'

export const DEPARTMENT_UPDATE_SUCCESS = 'DEPARTMENT_UPDATE_SUCCESS'
export const DEPARTMENT_UPDATE_FAIL = 'DEPARTMENT_UPDATE_FAIL'

export type DEPARTMENT_SEARCH_SUCCESS_TYPE = {
  type: DEPARTMENT_SEARCH_SUCCESS,
  payload: [Object]
};
export type DEPARTMENT_SEARCH_FAIL_TYPE = {
  type: DEPARTMENT_SEARCH_FAIL,
  payload: { errors: Object }
};

export type DEPARTMENT_GET_SUCCESS_TYPE = {
  type: DEPARTMENT_GET_SUCCESS,
  payload: Object
};
export type DEPARTMENT_GET_FAIL_TYPE = {
  type: DEPARTMENT_GET_FAIL,
  payload: { errors: Object }
};

export type DEPARTMENT_ADD_SUCCESS_TYPE = {
  type: DEPARTMENT_ADD_SUCCESS,
  payload: Object
};
export type DEPARTMENT_ADD_FAIL_TYPE = {
  type: DEPARTMENT_ADD_FAIL,
  payload: { errors: Object }
};

export type DEPARTMENT_SAVE_SUCCESS_TYPE = {
  type: DEPARTMENT_SAVE_SUCCESS,
  payload: Object
};
export type DEPARTMENT_SAVE_FAIL_TYPE = {
  type: DEPARTMENT_SAVE_FAIL,
  payload: { errors: Object }
};

export type DEPARTMENT_UPDATE_SUCCESS_TYPE = {
  type: DEPARTMENT_UPDATE_SUCCESS,
  payload: Object
};
export type DEPARTMENT_UPDATE_FAIL_TYPE = {
  type: DEPARTMENT_UPDATE_FAIL,
  payload: { errors: Object }
};

/**
  Awral is not recommended for production usage now
  But it can make your work with actions even simpler.
  NOTE: I strongly recommend you check Awral's sources!
  Awral is 910 bytes gzipped!
  {@link https://github.com/Metnew/awral}
*/

const awralDepartmentSearch = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: DEPARTMENT_SEARCH_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: DEPARTMENT_SEARCH_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: DEPARTMENT_SEARCH_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const DEPARTMENT_SEARCH = awralDepartmentSearch(departmentSearchAPI)(
	'DEPARTMENT_SEARCH'
)

const awralDepartmentGet = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: DEPARTMENT_GET_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: DEPARTMENT_GET_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: DEPARTMENT_GET_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const DEPARTMENT_GET = awralDepartmentGet(departmentGetAPI)(
	'DEPARTMENT_GET'
)

const awralDepartmentAdd = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: DEPARTMENT_ADD_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: DEPARTMENT_ADD_SUCCESS, payload })

			dispatch(reset('ADD_FORM'))
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: DEPARTMENT_ADD_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const DEPARTMENT_ADD = awralDepartmentAdd(departmentAddAPI)(
	'DEPARTMENT_ADD'
)

const awralDepartmentSave = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: DEPARTMENT_SAVE_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: DEPARTMENT_SAVE_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: DEPARTMENT_SAVE_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const DEPARTMENT_SAVE = awralDepartmentSave(departmentSaveAPI)(
	'DEPARTMENT_SAVE'
)

const awralDepartmentUpdate = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: DEPARTMENT_UPDATE_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: DEPARTMENT_UPDATE_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: DEPARTMENT_UPDATE_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const DEPARTMENT_UPDATE = awralDepartmentUpdate(departmentUpdateAPI)(
	'DEPARTMENT_UPDATE'
)
