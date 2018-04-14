// @flow
import { awral } from 'actions/utils'

import {
	jobSearchAPI,
	jobGetAPI,
	jobAddAPI,
	jobSaveAPI,
	jobUpdateAPI
} from 'api/JobSvc'
import { SubmissionError, reset } from 'redux-form'

export const JOB_SEARCH_SUCCESS = 'JOB_SEARCH_SUCCESS'
export const JOB_SEARCH_FAIL = 'JOB_SEARCH_FAIL'

export const JOB_GET_SUCCESS = 'JOB_GET_SUCCESS'
export const JOB_GET_FAIL = 'JOB_GET_FAIL'

export const JOB_ADD_SUCCESS = 'JOB_ADD_SUCCESS'
export const JOB_ADD_FAIL = 'JOB_ADD_FAIL'

export const JOB_SAVE_SUCCESS = 'JOB_SAVE_SUCCESS'
export const JOB_SAVE_FAIL = 'JOB_SAVE_FAIL'

export const JOB_UPDATE_SUCCESS = 'JOB_UPDATE_SUCCESS'
export const JOB_UPDATE_FAIL = 'JOB_UPDATE_FAIL'

export type JOB_SEARCH_SUCCESS_TYPE = {
  type: JOB_SEARCH_SUCCESS,
  payload: [Object]
};
export type JOB_SEARCH_FAIL_TYPE = {
  type: JOB_SEARCH_FAIL,
  payload: { errors: Object }
};

export type JOB_GET_SUCCESS_TYPE = {
  type: JOB_GET_SUCCESS,
  payload: Object
};
export type JOB_GET_FAIL_TYPE = {
  type: JOB_GET_FAIL,
  payload: { errors: Object }
};

export type JOB_ADD_SUCCESS_TYPE = {
  type: JOB_ADD_SUCCESS,
  payload: Object
};
export type JOB_ADD_FAIL_TYPE = {
  type: JOB_ADD_FAIL,
  payload: { errors: Object }
};

export type JOB_SAVE_SUCCESS_TYPE = {
  type: JOB_SAVE_SUCCESS,
  payload: Object
};
export type JOB_SAVE_FAIL_TYPE = {
  type: JOB_SAVE_FAIL,
  payload: { errors: Object }
};

export type JOB_UPDATE_SUCCESS_TYPE = {
  type: JOB_UPDATE_SUCCESS,
  payload: Object
};
export type JOB_UPDATE_FAIL_TYPE = {
  type: JOB_UPDATE_FAIL,
  payload: { errors: Object }
};

/**
  Awral is not recommended for production usage now
  But it can make your work with actions even simpler.
  NOTE: I strongly recommend you check Awral's sources!
  Awral is 910 bytes gzipped!
  {@link https://github.com/Metnew/awral}
*/

const awralJobSearch = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: JOB_SEARCH_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: JOB_SEARCH_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: JOB_SEARCH_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const JOB_SEARCH = awralJobSearch(jobSearchAPI)('JOB_SEARCH')

const awralJobGet = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: JOB_GET_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: JOB_GET_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: JOB_GET_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const JOB_GET = awralJobGet(jobGetAPI)('JOB_GET')

const awralJobAdd = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: JOB_ADD_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: JOB_ADD_SUCCESS, payload })

			dispatch(reset('ADD_FORM'))
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: JOB_ADD_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const JOB_ADD = awralJobAdd(jobAddAPI)('JOB_ADD')

const awralJobSave = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: JOB_SAVE_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: JOB_SAVE_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: JOB_SAVE_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const JOB_SAVE = awralJobSave(jobSaveAPI)('JOB_SAVE')

const awralJobUpdate = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: JOB_UPDATE_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: JOB_UPDATE_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: JOB_UPDATE_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const JOB_UPDATE = awralJobUpdate(jobUpdateAPI)('JOB_UPDATE')
