// @flow
import { awral } from 'actions/utils'

import {
	taskSearchAPI,
	taskGetAPI,
	taskAddAPI,
	taskSaveAPI,
	taskUpdateAPI
} from 'api/TaskSvc'
import { SubmissionError, reset } from 'redux-form'

export const TASK_SEARCH_SUCCESS = 'TASK_SEARCH_SUCCESS'
export const TASK_SEARCH_FAIL = 'TASK_SEARCH_FAIL'

export const TASK_GET_SUCCESS = 'TASK_GET_SUCCESS'
export const TASK_GET_FAIL = 'TASK_GET_FAIL'

export const TASK_ADD_SUCCESS = 'TASK_ADD_SUCCESS'
export const TASK_ADD_FAIL = 'TASK_ADD_FAIL'

export const TASK_SAVE_SUCCESS = 'TASK_SAVE_SUCCESS'
export const TASK_SAVE_FAIL = 'TASK_SAVE_FAIL'

export const TASK_UPDATE_SUCCESS = 'TASK_UPDATE_SUCCESS'
export const TASK_UPDATE_FAIL = 'TASK_UPDATE_FAIL'

export const TASK_ADD_JOB_SUCCESS = 'TASK_ADD_JOB_SUCCESS'

export type TASK_SEARCH_SUCCESS_TYPE = {
  type: TASK_SEARCH_SUCCESS,
  payload: [Object]
};
export type TASK_SEARCH_FAIL_TYPE = {
  type: TASK_SEARCH_FAIL,
  payload: { errors: Object }
};

export type TASK_GET_SUCCESS_TYPE = {
  type: TASK_GET_SUCCESS,
  payload: Object
};
export type TASK_GET_FAIL_TYPE = {
  type: TASK_GET_FAIL,
  payload: { errors: Object }
};

export type TASK_ADD_SUCCESS_TYPE = {
  type: TASK_ADD_SUCCESS,
  payload: Object
};
export type TASK_ADD_FAIL_TYPE = {
  type: TASK_ADD_FAIL,
  payload: { errors: Object }
};

export type TASK_SAVE_SUCCESS_TYPE = {
  type: TASK_SAVE_SUCCESS,
  payload: Object
};
export type TASK_SAVE_FAIL_TYPE = {
  type: TASK_SAVE_FAIL,
  payload: { errors: Object }
};

export type TASK_UPDATE_SUCCESS_TYPE = {
  type: TASK_UPDATE_SUCCESS,
  payload: Object
};
export type TASK_UPDATE_FAIL_TYPE = {
  type: TASK_UPDATE_FAIL,
  payload: { errors: Object }
};

export const TASK_ADD_JOB_SUCCESS_TYPE = {
	type: TASK_ADD_JOB_SUCCESS,
	payload: Object
}

/**
  Awral is not recommended for production usage now
  But it can make your work with actions even simpler.
  NOTE: I strongly recommend you check Awral's sources!
  Awral is 910 bytes gzipped!
  {@link https://github.com/Metnew/awral}
*/

const awralTaskSearch = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: TASK_SEARCH_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: TASK_SEARCH_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: TASK_SEARCH_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const TASK_SEARCH = awralTaskSearch(taskSearchAPI)('TASK_SEARCH')

const awralTaskGet = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: TASK_GET_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: TASK_GET_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: TASK_GET_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const TASK_GET = awralTaskGet(taskGetAPI)('TASK_GET')

const awralTaskAdd = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: TASK_ADD_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: TASK_ADD_SUCCESS, payload })

			dispatch(reset('ADD_FORM'))
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: TASK_ADD_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const TASK_ADD = awralTaskAdd(taskAddAPI)('TASK_ADD')

const awralTaskSave = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: TASK_SAVE_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: TASK_SAVE_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: TASK_SAVE_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const TASK_SAVE = awralTaskSave(taskSaveAPI)('TASK_SAVE')

const awralTaskUpdate = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: TASK_UPDATE_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: TASK_UPDATE_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: TASK_UPDATE_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const TASK_UPDATE = awralTaskUpdate(taskUpdateAPI)('TASK_UPDATE')

export const TASK_ADD_JOB = (job, dispatch) => {
	dispatch({ type: TASK_ADD_JOB_SUCCESS, job })
}
