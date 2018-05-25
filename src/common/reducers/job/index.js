// @flow
import { fromJS } from "immutable";

import {
  JOB_ADD_SUCCESS,
  JOB_ADD_FAIL,
  JOB_SAVE_SUCCESS,
  JOB_SAVE_FAIL,
  JOB_UPDATE_SUCCESS,
  JOB_UPDATE_FAIL,
  JOB_SEARCH_SUCCESS,
  JOB_SEARCH_FAIL,
  JOB_GET_SUCCESS,
  JOB_GET_FAIL,
  JOB_ADD_TASK_SUCCESS
} from "common/actions/job";

import { APPLICATION_INIT } from "actions/common";

import type {
  JOB_ADD_SUCCESS_TYPE,
  JOB_ADD_FAIL_TYPE,
  JOB_SAVE_SUCCESS_TYPE,
  JOB_SAVE_FAIL_TYPE,
  JOB_UPDATE_SUCCESS_TYPE,
  JOB_UPDATE_FAIL_TYPE,
  JOB_SEARCH_SUCCESS_TYPE,
  JOB_SEARCH_FAIL_TYPE,
  JOB_GET_SUCCESS_TYPE,
  JOB_GET_FAIL_TYPE,
  JOB_ADD_TASK_SUCCESS_TYPE
} from "common/actions/job";
import type { APPLICATION_INIT_TYPE } from "actions/common";

export type Job = {
  jobTitle: string,

  minSalary: integer,

  maxSalary: integer
};
export type State = {
  search: string,
  job: Job,
  jobs: [Job],
  start: number,
  limit: number,
  otherSearchStart: number,
  otherSearchLimit: number,
  otherSearchJobs: [Job],
  error: Object
};

type Action =
  | APPLICATION_INIT_TYPE
  | JOB_ADD_SUCCESS_TYPE
  | JOB_ADD_FAIL_TYPE
  | JOB_SAVE_SUCCESS_TYPE
  | JOB_SAVE_FAIL_TYPE
  | JOB_UPDATE_SUCCESS_TYPE
  | JOB_UPDATE_FAIL_TYPE
  | JOB_SEARCH_SUCCESS_TYPE
  | JOB_SEARCH_FAIL_TYPE
  | JOB_GET_SUCCESS_TYPE
  | JOB_GET_FAIL_TYPE
  | JOB_ADD_TASK_SUCCESS_TYPE;

export const initialState = {
  search: "",
  job: {},
  jobs: [],
  start: 0,
  limit: 10,
  otherSearchStart: 0,
  otherSearchLimit: 10,
  otherSearchJobs: [],
  error: ""
};

export function jobReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case APPLICATION_INIT:
      return { ...initialState, ...state };

    case JOB_ADD_SUCCESS: {
      return { ...state, job: action.payload };
    }
    case JOB_ADD_FAIL: {
      return { ...state, error: action.error };
    }

    case JOB_SAVE_SUCCESS: {
      return { ...state, job: action.payload };
    }
    case JOB_SAVE_FAIL: {
      return { ...state, error: action.error };
    }

    case JOB_UPDATE_SUCCESS: {
      return { ...state, job: action.payload };
    }
    case JOB_UPDATE_FAIL: {
      return { ...state, error: action.error };
    }

    case JOB_SEARCH_SUCCESS: {
      return { ...state, jobs: action.payload };
    }
    case JOB_SEARCH_FAIL: {
      return { ...state, error: action.error };
    }

    case JOB_GET_SUCCESS: {
      return { ...state, job: action.payload };
    }
    case JOB_GET_FAIL: {
      return { ...state, error: action.error };
    }

    case JOB_ADD_TASK_SUCCESS: {
      return {
        ...state,
        job: {
          ...state.job,
          tasks: state.job.tasks
            ? [...state.job.tasks, action.task]
            : [action.task]
        }
      };
    }

    default:
      return state;
  }
}
