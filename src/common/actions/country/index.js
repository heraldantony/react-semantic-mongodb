// @flow
import { awral } from 'actions/utils'

import {
	countrySearchAPI,
	countryGetAPI,
	countryAddAPI,
	countrySaveAPI,
	countryUpdateAPI
} from 'api/CountrySvc'
import { SubmissionError, reset } from 'redux-form'

export const COUNTRY_SEARCH_SUCCESS = 'COUNTRY_SEARCH_SUCCESS'
export const COUNTRY_SEARCH_FAIL = 'COUNTRY_SEARCH_FAIL'

export const COUNTRY_GET_SUCCESS = 'COUNTRY_GET_SUCCESS'
export const COUNTRY_GET_FAIL = 'COUNTRY_GET_FAIL'

export const COUNTRY_ADD_SUCCESS = 'COUNTRY_ADD_SUCCESS'
export const COUNTRY_ADD_FAIL = 'COUNTRY_ADD_FAIL'

export const COUNTRY_SAVE_SUCCESS = 'COUNTRY_SAVE_SUCCESS'
export const COUNTRY_SAVE_FAIL = 'COUNTRY_SAVE_FAIL'

export const COUNTRY_UPDATE_SUCCESS = 'COUNTRY_UPDATE_SUCCESS'
export const COUNTRY_UPDATE_FAIL = 'COUNTRY_UPDATE_FAIL'

export type COUNTRY_SEARCH_SUCCESS_TYPE = {
  type: COUNTRY_SEARCH_SUCCESS,
  payload: [Object]
};
export type COUNTRY_SEARCH_FAIL_TYPE = {
  type: COUNTRY_SEARCH_FAIL,
  payload: { errors: Object }
};

export type COUNTRY_GET_SUCCESS_TYPE = {
  type: COUNTRY_GET_SUCCESS,
  payload: Object
};
export type COUNTRY_GET_FAIL_TYPE = {
  type: COUNTRY_GET_FAIL,
  payload: { errors: Object }
};

export type COUNTRY_ADD_SUCCESS_TYPE = {
  type: COUNTRY_ADD_SUCCESS,
  payload: Object
};
export type COUNTRY_ADD_FAIL_TYPE = {
  type: COUNTRY_ADD_FAIL,
  payload: { errors: Object }
};

export type COUNTRY_SAVE_SUCCESS_TYPE = {
  type: COUNTRY_SAVE_SUCCESS,
  payload: Object
};
export type COUNTRY_SAVE_FAIL_TYPE = {
  type: COUNTRY_SAVE_FAIL,
  payload: { errors: Object }
};

export type COUNTRY_UPDATE_SUCCESS_TYPE = {
  type: COUNTRY_UPDATE_SUCCESS,
  payload: Object
};
export type COUNTRY_UPDATE_FAIL_TYPE = {
  type: COUNTRY_UPDATE_FAIL,
  payload: { errors: Object }
};

/**
  Awral is not recommended for production usage now
  But it can make your work with actions even simpler.
  NOTE: I strongly recommend you check Awral's sources!
  Awral is 910 bytes gzipped!
  {@link https://github.com/Metnew/awral}
*/

const awralCountrySearch = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: COUNTRY_SEARCH_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: COUNTRY_SEARCH_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: COUNTRY_SEARCH_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const COUNTRY_SEARCH = awralCountrySearch(countrySearchAPI)(
	'COUNTRY_SEARCH'
)

const awralCountryGet = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: COUNTRY_GET_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: COUNTRY_GET_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: COUNTRY_GET_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const COUNTRY_GET = awralCountryGet(countryGetAPI)('COUNTRY_GET')

const awralCountryAdd = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: COUNTRY_ADD_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: COUNTRY_ADD_SUCCESS, payload })

			dispatch(reset('ADD_FORM'))
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: COUNTRY_ADD_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const COUNTRY_ADD = awralCountryAdd(countryAddAPI)('COUNTRY_ADD')

const awralCountrySave = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: COUNTRY_SAVE_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: COUNTRY_SAVE_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: COUNTRY_SAVE_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const COUNTRY_SAVE = awralCountrySave(countrySaveAPI)('COUNTRY_SAVE')

const awralCountryUpdate = awral.of({
	pending: null,
	success ({ payload, dispatch }) {
		if (payload.status === 'failure' || payload.status === 'error') {
			dispatch({ type: COUNTRY_UPDATE_FAIL, errors: payload.message })
			throw new SubmissionError({ _error: payload.message })
		} else {
			dispatch({ type: COUNTRY_UPDATE_SUCCESS, payload })
		}
	},
	fail ({ payload, dispatch }) {
		dispatch({
			type: COUNTRY_UPDATE_FAIL,
			errors: (payload && payload.message) || 'Server Error'
		})
		throw new SubmissionError({
			_error: (payload && payload.message) || 'Server Error'
		})
	}
})

export const COUNTRY_UPDATE = awralCountryUpdate(countryUpdateAPI)(
	'COUNTRY_UPDATE'
)
