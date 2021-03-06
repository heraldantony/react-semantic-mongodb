// @flow
import { fromJS } from 'immutable'

import {
	REGION_ADD_SUCCESS,
	REGION_ADD_FAIL,
	REGION_SAVE_SUCCESS,
	REGION_SAVE_FAIL,
	REGION_UPDATE_SUCCESS,
	REGION_UPDATE_FAIL,
	REGION_SEARCH_SUCCESS,
	REGION_SEARCH_FAIL,
	REGION_GET_SUCCESS,
	REGION_GET_FAIL,
	REGION_DELETE_SUCCESS,
	REGION_DELETE_FAIL
} from 'common/actions/region'

import { APPLICATION_INIT } from 'actions/common'

import type {
	REGION_ADD_SUCCESS_TYPE,
	REGION_ADD_FAIL_TYPE,
	REGION_SAVE_SUCCESS_TYPE,
	REGION_SAVE_FAIL_TYPE,
	REGION_UPDATE_SUCCESS_TYPE,
	REGION_UPDATE_FAIL_TYPE,
	REGION_SEARCH_SUCCESS_TYPE,
	REGION_SEARCH_FAIL_TYPE,
	REGION_GET_SUCCESS_TYPE,
	REGION_GET_FAIL_TYPE,
	REGION_DELETE_SUCCESS_TYPE,
	REGION_DELETE_FAIL_TYPE
} from 'common/actions/region'
import type { APPLICATION_INIT_TYPE } from 'actions/common'

export type Region = {
  regionName: string
};
export type State = {
  search: string,
  region: Region,
  regions: [Region],
  start: number,
  limit: number,
  totalItemsCount: number,
  otherSearchStart: number,
  otherSearchLimit: number,
  otherSearchTotalItemsCount: number,
  otherSearchRegions: [Region],
  error: Object
};

type Action =
  | APPLICATION_INIT_TYPE
  | REGION_ADD_SUCCESS_TYPE
  | REGION_ADD_FAIL_TYPE
  | REGION_SAVE_SUCCESS_TYPE
  | REGION_SAVE_FAIL_TYPE
  | REGION_UPDATE_SUCCESS_TYPE
  | REGION_UPDATE_FAIL_TYPE
  | REGION_SEARCH_SUCCESS_TYPE
  | REGION_SEARCH_FAIL_TYPE
  | REGION_GET_SUCCESS_TYPE
  | REGION_GET_FAIL_TYPE
  | REGION_DELETE_SUCCESS_TYPE
  | REGION_DELETE_FAIL_TYPE;

export const initialState = {
	search: '',
	region: {},
	regions: [],
	start: 0,
	limit: 10,
	totalItemsCount: 0,
	otherSearchStart: 0,
	otherSearchLimit: 10,
	otherSearchTotalItemsCount: 0,
	otherSearchRegions: [],
	error: ''
}

export function regionReducer (state = initialState, action: Action): State {
	switch (action.type) {
	case APPLICATION_INIT:
		return { ...initialState, ...state }

	case REGION_ADD_SUCCESS: {
		return { ...state, region: action.payload }
	}
	case REGION_ADD_FAIL: {
		return { ...state, error: action.error }
	}

	case REGION_SAVE_SUCCESS: {
		return { ...state, region: action.payload }
	}
	case REGION_SAVE_FAIL: {
		return { ...state, error: action.error }
	}

	case REGION_UPDATE_SUCCESS: {
		return { ...state, region: action.payload }
	}
	case REGION_UPDATE_FAIL: {
		return { ...state, error: action.error }
	}

	case REGION_SEARCH_SUCCESS: {
		return {
			...state,
			regions: action.payload,
			totalItemsCount: action.total
		}
	}
	case REGION_SEARCH_FAIL: {
		return { ...state, error: action.error }
	}

	case REGION_GET_SUCCESS: {
		return { ...state, region: action.payload }
	}
	case REGION_GET_FAIL: {
		return { ...state, error: action.error }
	}

	case REGION_DELETE_SUCCESS: {
		let regions = state.regions
		let newRegions = regions.filter(item => item._id !== action.payload._id)
		return { ...state, region: {}, regions: newRegions }
	}
	case REGION_DELETE_FAIL: {
		return { ...state, error: action.error }
	}

	default:
		return state
	}
}
