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
	TASK_DELETE_SUCCESS,
	TASK_DELETE_FAIL,
	TASK_ADD_JOB_SUCCESS,
	TASK_DELETE_JOB_SUCCESS
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
	TASK_DELETE_SUCCESS_TYPE,
	TASK_DELETE_FAIL_TYPE,
	TASK_ADD_JOB_SUCCESS_TYPE,
	TASK_DELETE_JOB_SUCCESS_TYPE
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
  totalItemsCount: number,
  otherSearchStart: number,
  otherSearchLimit: number,
  otherSearchTotalItemsCount: number,
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
  | TASK_DELETE_SUCCESS_TYPE
  | TASK_DELETE_FAIL_TYPE
  | TASK_ADD_JOB_SUCCESS_TYPE
  | TASK_DELETEJOB_SUCCESS_TYPE;

export const initialState = {
	search: '',
	task: {},
	tasks: [],
	start: 0,
	limit: 10,
	totalItemsCount: 0,
	otherSearchStart: 0,
	otherSearchLimit: 10,
	otherSearchTotalItemsCount: 0,
	otherSearchTasks: [],
	error: ''
}

export function taskReducer (state = initialState, action: Action): State {
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
		return { ...state, tasks: action.payload, totalItemsCount: action.total }
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

	case TASK_DELETE_SUCCESS: {
		let tasks = state.tasks
		let newTasks = tasks.filter(item => item._id !== action.payload._id)
		return { ...state, task: {}, tasks: newTasks }
	}
	case TASK_DELETE_FAIL: {
		return { ...state, error: action.error }
	}

	case TASK_ADD_JOB_SUCCESS: {
		return {
			...state,
			task: {
				...state.task,
				jobs: state.task.jobs
					? [...state.task.jobs, action.job]
					: [action.job]
			}
		}
	}
	case TASK_DELETE_JOB_SUCCESS: {
		let jobs = state.task.jobs
		if (!jobs) return state
		let newJobs = jobs.filter(item => item._id !== action.job._id)

		return {
			...state,
			task: {
				...state.task,
				jobs: newJobs
			}
		}
	}

	default:
		return state
	}
}
