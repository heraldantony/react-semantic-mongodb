// @flow
import { fromJS } from 'immutable'

import {
	TASK_ADD_SUCCESS,
	TASK_ADD_FAIL,
	TASK_SAVE_SUCCESS,
	TASK_SAVE_FAIL,
	TASK_UPDATE_SUCCESS,
	TASK_UPDATE_FAIL,
	TASK_SEARCH_SUCCESS,
	TASK_SEARCH_FAIL,
	TASK_GET_SUCCESS,
	TASK_GET_FAIL,
	TASK_ADD_JOB_SUCCESS
} from 'common/actions/task'

import { APPLICATION_INIT } from 'actions/common'

import type {
	TASK_ADD_SUCCESS_TYPE,
	TASK_ADD_FAIL_TYPE,
	TASK_SAVE_SUCCESS_TYPE,
	TASK_SAVE_FAIL_TYPE,
	TASK_UPDATE_SUCCESS_TYPE,
	TASK_UPDATE_FAIL_TYPE,
	TASK_SEARCH_SUCCESS_TYPE,
	TASK_SEARCH_FAIL_TYPE,
	TASK_GET_SUCCESS_TYPE,
	TASK_GET_FAIL_TYPE,
	TASK_ADD_JOB_SUCCESS_TYPE
} from 'common/actions/task'
import type { APPLICATION_INIT_TYPE } from 'actions/common'

export type Task = {
  title: string,

  description: string
};
export type State = {
  search: string,
  task: Task,
  tasks: [Task],
  start: number,
  limit: number,
  otherSearchStart: number,
  otherSearchLimit: number,
  otherSearchTasks: [Task],
  error: Object
};

type Action =
  | APPLICATION_INIT_TYPE
  | TASK_ADD_SUCCESS_TYPE
  | TASK_ADD_FAIL_TYPE
  | TASK_SAVE_SUCCESS_TYPE
  | TASK_SAVE_FAIL_TYPE
  | TASK_UPDATE_SUCCESS_TYPE
  | TASK_UPDATE_FAIL_TYPE
  | TASK_SEARCH_SUCCESS_TYPE
  | TASK_SEARCH_FAIL_TYPE
  | TASK_GET_SUCCESS_TYPE
  | TASK_GET_FAIL_TYPE
  | TASK_ADD_JOB_SUCCESS_TYPE;

export const initialState = {
	search: '',
	task: {},
	tasks: [],
	start: 0,
	limit: 10,
	otherSearchStart: 0,
	otherSearchLimit: 10,
	otherSearchTasks: [],
	error: ''
}

export function task (state = initialState, action: Action): State {
	switch (action.type) {
	case APPLICATION_INIT:
		return { ...initialState, ...state }

	case TASK_ADD_SUCCESS: {
		return { ...state, task: action.payload }
	}
	case TASK_ADD_FAIL: {
		return { ...state, error: action.error }
	}

	case TASK_SAVE_SUCCESS: {
		return { ...state, task: action.payload }
	}
	case TASK_SAVE_FAIL: {
		return { ...state, error: action.error }
	}

	case TASK_UPDATE_SUCCESS: {
		return { ...state, task: action.payload }
	}
	case TASK_UPDATE_FAIL: {
		return { ...state, error: action.error }
	}

	case TASK_SEARCH_SUCCESS: {
		return { ...state, tasks: action.payload.docs }
	}
	case TASK_SEARCH_FAIL: {
		return { ...state, error: action.error }
	}

	case TASK_GET_SUCCESS: {
		return { ...state, task: action.payload }
	}
	case TASK_GET_FAIL: {
		return { ...state, error: action.error }
	}

	case TASK_ADD_JOB_SUCCESS: {
		return {
			...state,
			task: {
				...state.task,
				jobs: [...state.task.jobs, action.job]
			}
		}
	}

	default:
		return state
	}
}
