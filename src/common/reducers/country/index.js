// @flow
import { fromJS } from 'immutable'

import {
	COUNTRY_ADD_SUCCESS,
	COUNTRY_ADD_FAIL,
	COUNTRY_SAVE_SUCCESS,
	COUNTRY_SAVE_FAIL,
	COUNTRY_UPDATE_SUCCESS,
	COUNTRY_UPDATE_FAIL,
	COUNTRY_SEARCH_SUCCESS,
	COUNTRY_SEARCH_FAIL,
	COUNTRY_GET_SUCCESS,
	COUNTRY_GET_FAIL,
	COUNTRY_DELETE_SUCCESS,
	COUNTRY_DELETE_FAIL,
	COUNTRY_SET_REGION_SUCCESS,
	COUNTRY_DELETE_REGION_SUCCESS
} from 'common/actions/country'

import { APPLICATION_INIT } from 'actions/common'

import type {
	COUNTRY_ADD_SUCCESS_TYPE,
	COUNTRY_ADD_FAIL_TYPE,
	COUNTRY_SAVE_SUCCESS_TYPE,
	COUNTRY_SAVE_FAIL_TYPE,
	COUNTRY_UPDATE_SUCCESS_TYPE,
	COUNTRY_UPDATE_FAIL_TYPE,
	COUNTRY_SEARCH_SUCCESS_TYPE,
	COUNTRY_SEARCH_FAIL_TYPE,
	COUNTRY_GET_SUCCESS_TYPE,
	COUNTRY_GET_FAIL_TYPE,
	COUNTRY_DELETE_SUCCESS_TYPE,
	COUNTRY_DELETE_FAIL_TYPE,
	COUNTRY_SET_REGION_SUCCESS_TYPE,
	COUNTRY_DELETE_REGION_SUCCESS_TYPE
} from 'common/actions/country'
import type { APPLICATION_INIT_TYPE } from 'actions/common'

export type Country = {
  countryName: string
};
export type State = {
  search: string,
  country: Country,
  countries: [Country],
  start: number,
  limit: number,
  otherSearchStart: number,
  otherSearchLimit: number,
  otherSearchCountries: [Country],
  error: Object
};

type Action =
  | APPLICATION_INIT_TYPE
  | COUNTRY_ADD_SUCCESS_TYPE
  | COUNTRY_ADD_FAIL_TYPE
  | COUNTRY_SAVE_SUCCESS_TYPE
  | COUNTRY_SAVE_FAIL_TYPE
  | COUNTRY_UPDATE_SUCCESS_TYPE
  | COUNTRY_UPDATE_FAIL_TYPE
  | COUNTRY_SEARCH_SUCCESS_TYPE
  | COUNTRY_SEARCH_FAIL_TYPE
  | COUNTRY_GET_SUCCESS_TYPE
  | COUNTRY_GET_FAIL_TYPE
  | COUNTRY_DELETE_SUCCESS_TYPE
  | COUNTRY_DELETE_FAIL_TYPE
  | COUNTRY_SET_REGION_SUCCESS_TYPE
  | COUNTRY_DELETEREGION_SUCCESS_TYPE;

export const initialState = {
	search: '',
	country: {},
	countries: [],
	start: 0,
	limit: 10,
	otherSearchStart: 0,
	otherSearchLimit: 10,
	otherSearchCountries: [],
	error: ''
}

export function countryReducer (state = initialState, action: Action): State {
	switch (action.type) {
	case APPLICATION_INIT:
		return { ...initialState, ...state }

	case COUNTRY_ADD_SUCCESS: {
		return { ...state, country: action.payload }
	}
	case COUNTRY_ADD_FAIL: {
		return { ...state, error: action.error }
	}

	case COUNTRY_SAVE_SUCCESS: {
		return { ...state, country: action.payload }
	}
	case COUNTRY_SAVE_FAIL: {
		return { ...state, error: action.error }
	}

	case COUNTRY_UPDATE_SUCCESS: {
		return { ...state, country: action.payload }
	}
	case COUNTRY_UPDATE_FAIL: {
		return { ...state, error: action.error }
	}

	case COUNTRY_SEARCH_SUCCESS: {
		return { ...state, countries: action.payload }
	}
	case COUNTRY_SEARCH_FAIL: {
		return { ...state, error: action.error }
	}

	case COUNTRY_GET_SUCCESS: {
		return { ...state, country: action.payload }
	}
	case COUNTRY_GET_FAIL: {
		return { ...state, error: action.error }
	}

	case COUNTRY_DELETE_SUCCESS: {
		let countries = state.countries
		let newCountries = countries.filter(
			item => item._id !== action.payload._id
		)
		return { ...state, country: {}, countries: newCountries }
	}
	case COUNTRY_DELETE_FAIL: {
		return { ...state, error: action.error }
	}

	case COUNTRY_SET_REGION_SUCCESS: {
		return {
			...state,
			country: {
				...state.country,
				region: action.region
			}
		}
	}
	case COUNTRY_DELETE_REGION_SUCCESS: {
		return {
			...state,
			country: {
				...state.country,
				region: null
			}
		}
	}

	default:
		return state
	}
}
