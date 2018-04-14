// @flow
import { awral } from 'actions/utils'

import {
	regionSearchAPI,
	regionGetAPI,
	regionAddAPI,
	regionSaveAPI,
	regionUpdateAPI
} from 'api/RegionSvc'
import { SubmissionError, reset } from 'redux-form'

export const REGION_SEARCH_SUCCESS = 'REGION_SEARCH_SUCCESS'
export const REGION_SEARCH_FAIL = 'REGION_SEARCH_FAIL'

export const REGION_GET_SUCCESS = 'REGION_GET_SUCCESS'
export const REGION_GET_FAIL = 'REGION_GET_FAIL'

export const REGION_ADD_SUCCESS = 'REGION_ADD_SUCCESS'
export const REGION_ADD_FAIL = 'REGION_ADD_FAIL'

export const REGION_SAVE_SUCCESS = 'REGION_SAVE_SUCCESS'
export const REGION_SAVE_FAIL = 'REGION_SAVE_FAIL'

export const REGION_UPDATE_SUCCESS = 'REGION_UPDATE_SUCCESS'
export const REGION_UPDATE_FAIL = 'REGION_UPDATE_FAIL'

export type REGION_SEARCH_SUCCESS_TYPE = {
  type: REGION_SEARCH_SUCCESS,
  payload: [Object]
};
export type REGION_SEARCH_FAIL_TYPE = {
  type: REGION_SEARCH_FAIL,
  payload: { errors: Object }
};

export type REGION_GET_SUCCESS_TYPE = {
  type: REGION_GET_SUCCESS,
  payload: Object
};
export type REGION_GET_FAIL_TYPE = {
  type: REGION_GET_FAIL,
  payload: { errors: Object }
};

export type REGION_ADD_SUCCESS_TYPE = {
  type: REGION_ADD_SUCCESS,
  payload: Object
};
export type REGION_ADD_FAIL_TYPE = {
  type: REGION_ADD_FAIL,
  payload: { errors: Object }
};

export type REGION_SAVE_SUCCESS_TYPE = {
  type: REGION_SAVE_SUCCESS,
  payload: Object
};
export type REGION_SAVE_FAIL_TYPE = {
  type: REGION_SAVE_FAIL,
  payload: { errors: Object }
};

export type REGION_UPDATE_SUCCESS_TYPE = {
  type: REGION_UPDATE_SUCCESS,
  payload: Object
};
export type REGION_UPDATE_FAIL_TYPE = {
  type: REGION_UPDATE_FAIL,
  payload: { errors: Object }
};

/**
  Awral is not recommended for production usage now
  But it can make your work with actions even simpler.
  NOTE: I strongly recommend you check Awral's sources!
  Awral is 910 bytes gzipped!
  {@link https://github.com/Metnew/awral}
*/

const awralRegionSearch = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: REGION_SEARCH_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: REGION_SEARCH_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: REGION_SEARCH_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const REGION_SEARCH = awralRegionSearch(regionSearchAPI)(
	'REGION_SEARCH'
)

const awralRegionGet = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: REGION_GET_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: REGION_GET_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: REGION_GET_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const REGION_GET = awralRegionGet(regionGetAPI)('REGION_GET')

const awralRegionAdd = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: REGION_ADD_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: REGION_ADD_SUCCESS, payload })

			dispatch(reset('ADD_FORM'))
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: REGION_ADD_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const REGION_ADD = awralRegionAdd(regionAddAPI)('REGION_ADD')

const awralRegionSave = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: REGION_SAVE_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: REGION_SAVE_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: REGION_SAVE_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const REGION_SAVE = awralRegionSave(regionSaveAPI)('REGION_SAVE')

const awralRegionUpdate = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: REGION_UPDATE_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: REGION_UPDATE_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: REGION_UPDATE_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const REGION_UPDATE = awralRegionUpdate(regionUpdateAPI)(
	'REGION_UPDATE'
)
