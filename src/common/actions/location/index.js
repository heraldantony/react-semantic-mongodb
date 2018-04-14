// @flow
import { awral } from 'actions/utils'

import {
	locationSearchAPI,
	locationGetAPI,
	locationAddAPI,
	locationSaveAPI,
	locationUpdateAPI
} from 'api/LocationSvc'
import { SubmissionError, reset } from 'redux-form'

export const LOCATION_SEARCH_SUCCESS = 'LOCATION_SEARCH_SUCCESS'
export const LOCATION_SEARCH_FAIL = 'LOCATION_SEARCH_FAIL'

export const LOCATION_GET_SUCCESS = 'LOCATION_GET_SUCCESS'
export const LOCATION_GET_FAIL = 'LOCATION_GET_FAIL'

export const LOCATION_ADD_SUCCESS = 'LOCATION_ADD_SUCCESS'
export const LOCATION_ADD_FAIL = 'LOCATION_ADD_FAIL'

export const LOCATION_SAVE_SUCCESS = 'LOCATION_SAVE_SUCCESS'
export const LOCATION_SAVE_FAIL = 'LOCATION_SAVE_FAIL'

export const LOCATION_UPDATE_SUCCESS = 'LOCATION_UPDATE_SUCCESS'
export const LOCATION_UPDATE_FAIL = 'LOCATION_UPDATE_FAIL'

export type LOCATION_SEARCH_SUCCESS_TYPE = {
  type: LOCATION_SEARCH_SUCCESS,
  payload: [Object]
};
export type LOCATION_SEARCH_FAIL_TYPE = {
  type: LOCATION_SEARCH_FAIL,
  payload: { errors: Object }
};

export type LOCATION_GET_SUCCESS_TYPE = {
  type: LOCATION_GET_SUCCESS,
  payload: Object
};
export type LOCATION_GET_FAIL_TYPE = {
  type: LOCATION_GET_FAIL,
  payload: { errors: Object }
};

export type LOCATION_ADD_SUCCESS_TYPE = {
  type: LOCATION_ADD_SUCCESS,
  payload: Object
};
export type LOCATION_ADD_FAIL_TYPE = {
  type: LOCATION_ADD_FAIL,
  payload: { errors: Object }
};

export type LOCATION_SAVE_SUCCESS_TYPE = {
  type: LOCATION_SAVE_SUCCESS,
  payload: Object
};
export type LOCATION_SAVE_FAIL_TYPE = {
  type: LOCATION_SAVE_FAIL,
  payload: { errors: Object }
};

export type LOCATION_UPDATE_SUCCESS_TYPE = {
  type: LOCATION_UPDATE_SUCCESS,
  payload: Object
};
export type LOCATION_UPDATE_FAIL_TYPE = {
  type: LOCATION_UPDATE_FAIL,
  payload: { errors: Object }
};

/**
  Awral is not recommended for production usage now
  But it can make your work with actions even simpler.
  NOTE: I strongly recommend you check Awral's sources!
  Awral is 910 bytes gzipped!
  {@link https://github.com/Metnew/awral}
*/

const awralLocationSearch = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: LOCATION_SEARCH_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: LOCATION_SEARCH_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: LOCATION_SEARCH_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const LOCATION_SEARCH = awralLocationSearch(locationSearchAPI)(
	'LOCATION_SEARCH'
)

const awralLocationGet = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: LOCATION_GET_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: LOCATION_GET_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: LOCATION_GET_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const LOCATION_GET = awralLocationGet(locationGetAPI)('LOCATION_GET')

const awralLocationAdd = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: LOCATION_ADD_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: LOCATION_ADD_SUCCESS, payload })

			dispatch(reset('ADD_FORM'))
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: LOCATION_ADD_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const LOCATION_ADD = awralLocationAdd(locationAddAPI)('LOCATION_ADD')

const awralLocationSave = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: LOCATION_SAVE_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: LOCATION_SAVE_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: LOCATION_SAVE_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const LOCATION_SAVE = awralLocationSave(locationSaveAPI)(
	'LOCATION_SAVE'
)

const awralLocationUpdate = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: LOCATION_UPDATE_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: LOCATION_UPDATE_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: LOCATION_UPDATE_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const LOCATION_UPDATE = awralLocationUpdate(locationUpdateAPI)(
	'LOCATION_UPDATE'
)
