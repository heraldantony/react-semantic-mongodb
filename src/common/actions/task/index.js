// @flow
/*
 * Constants and actions for entity Task
 * Action constants and corresponding types
 *
*/

export const TASK_ADD = 'task/add'
export const TASK_ADD_SUCCESS = 'task/add/SUCCESS'
export const TASK_ADD_FAIL = 'task/add/FAIL'

export const TASK_SAVE = 'task/save'
export const TASK_SAVE_SUCCESS = 'task/save/SUCCESS'
export const TASK_SAVE_FAIL = 'task/save/FAIL'

export const TASK_UPDATE = 'task/update'
export const TASK_UPDATE_SUCCESS = 'task/update/SUCCESS'
export const TASK_UPDATE_FAIL = 'task/update/FAIL'

export const TASK_GET = 'task/get'
export const TASK_GET_SUCCESS = 'task/get/SUCCESS'
export const TASK_GET_FAIL = 'task/get/FAIL'

export const TASK_DELETE = 'task/delete'
export const TASK_DELETE_SUCCESS = 'task/delete/SUCCESS'
export const TASK_DELETE_FAIL = 'task/delete/FAIL'

export const TASK_SEARCH = 'task/search'
export const TASK_SEARCH_SUCCESS = 'task/search/SUCCESS'
export const TASK_SEARCH_FAIL = 'task/search/FAIL'

export type TASK_ADD_TYPE = {
  type: TASK_ADD,
  payload: Object
};
export type TASK_ADD_SUCCESS_TYPE = {
  type: TASK_ADD_SUCCESS,
  payload: Object
};
export type TASK_ADD_FAIL_TYPE = {
  type: TASK_ADD_FAIL,
  error: { errors: Object }
};

export type TASK_SAVE_TYPE = {
  type: TASK_SAVE,
  payload: Object
};
export type TASK_SAVE_SUCCESS_TYPE = {
  type: TASK_SAVE_SUCCESS,
  payload: Object
};
export type TASK_SAVE_FAIL_TYPE = {
  type: TASK_SAVE_FAIL,
  error: { errors: Object }
};

export type TASK_UPDATE_TYPE = {
  type: TASK_UPDATE,
  payload: Object
};
export type TASK_UPDATE_SUCCESS_TYPE = {
  type: TASK_UPDATE_SUCCESS,
  payload: Object
};
export type TASK_UPDATE_FAIL_TYPE = {
  type: TASK_UPDATE_FAIL,
  error: { errors: Object }
};

export type TASK_GET_TYPE = {
  type: TASK_GET,
  payload: Object
};
export type TASK_GET_SUCCESS_TYPE = {
  type: TASK_GET_SUCCESS,
  payload: Object
};
export type TASK_GET_FAIL_TYPE = {
  type: TASK_GET_FAIL,
  error: { errors: Object }
};

export type TASK_DELETE_TYPE = {
  type: TASK_DELETE,
  payload: Object
};
export type TASK_DELETE_SUCCESS_TYPE = {
  type: TASK_DELETE_SUCCESS,
  payload: Object
};
export type TASK_DELETE_FAIL_TYPE = {
  type: TASK_DELETE_FAIL,
  error: { errors: Object }
};

export type TASK_SEARCH_TYPE = {
  type: TASK_SEARCH,
  payload: Object
};
export type TASK_SEARCH_SUCCESS_TYPE = {
  type: TASK_SEARCH_SUCCESS,
  payload: [Object],

  total: number
};
export type TASK_SEARCH_FAIL_TYPE = {
  type: TASK_SEARCH_FAIL,
  error: { errors: Object }
};

export const TASK_ADD_JOB_SUCCESS = 'task/Add_Job/SUCCESS'
export const TASK_DELETE_JOB_SUCCESS = 'task/Delete_Job/SUCCESS'

export const TASK_ADD_JOB_SUCCESS_TYPE = {
	type: TASK_ADD_JOB_SUCCESS,
	job: Object
}
export const TASK_DELETE_JOB_SUCCESS_TYPE = {
	type: TASK_DELETE_JOB_SUCCESS,
	job: Object
}

/**
 * Add Task
 *
 * @param  {object} task  The Task object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type TASK_ADD
 */
export function addTask (task, form, promise) {
	return {
		type: TASK_ADD,
		payload: task,
		form,
		promise
	}
}

/**
 * Dispatched when Add Task succeeds
 *
 * @param  {object} task  The Task object
 *
 * @return {object} An action object with type TASK_ADD_SUCCESS
 */
export function addTaskSuccess (task): TASK_ADD_SUCCESS_TYPE {
	return {
		type: TASK_ADD_SUCCESS,
		payload: task
	}
}

/**
 * Dispatched when Add Task fails
 *
 * @param  {object} task  The Task object
 *
 * @return {object} An action object with type TASK_ADD_FAIL
 */
export function addTaskFail (error): TASK_ADD_FAIL_TYPE {
	return {
		type: TASK_ADD_FAIL,
		error: error
	}
}

/**
 * Save Task
 *
 * @param  {object} task  The Task object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type TASK_SAVE
 */
export function saveTask (task, form, promise) {
	return {
		type: TASK_SAVE,
		payload: task,
		form,
		promise
	}
}

/**
 * Dispatched when Save Task succeeds
 *
 * @param  {object} task  The Task object
 *
 * @return {object} An action object with type TASK_SAVE_SUCCESS
 */
export function saveTaskSuccess (task): TASK_SAVE_SUCCESS_TYPE {
	return {
		type: TASK_SAVE_SUCCESS,
		payload: task
	}
}

/**
 * Dispatched when Save Task fails
 *
 * @param  {object} task  The Task object
 *
 * @return {object} An action object with type TASK_SAVE_FAIL
 */
export function saveTaskFail (error): TASK_SAVE_FAIL_TYPE {
	return {
		type: TASK_SAVE_FAIL,
		error: error
	}
}

/**
 * Update Task
 *
 * @param  {object} task  The Task object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type TASK_UPDATE
 */
export function updateTask (task, form, promise) {
	return {
		type: TASK_UPDATE,
		payload: task,
		form,
		promise
	}
}

/**
 * Dispatched when Update Task succeeds
 *
 * @param  {object} task  The Task object
 *
 * @return {object} An action object with type TASK_UPDATE_SUCCESS
 */
export function updateTaskSuccess (task): TASK_UPDATE_SUCCESS_TYPE {
	return {
		type: TASK_UPDATE_SUCCESS,
		payload: task
	}
}

/**
 * Dispatched when Update Task fails
 *
 * @param  {object} task  The Task object
 *
 * @return {object} An action object with type TASK_UPDATE_FAIL
 */
export function updateTaskFail (error): TASK_UPDATE_FAIL_TYPE {
	return {
		type: TASK_UPDATE_FAIL,
		error: error
	}
}

/**
 * Get Task
 *
 * @param  {string} taskId  Id of  Task object
 *
 * @return {object} An action object with type TASK_GET
 */
export function getTask (taskId): TASK_GET_TYPE {
	return {
		type: TASK_GET,
		payload: taskId
	}
}

/**
 * Dispatched when Get Task succeeds
 *
 * @param  {object} task  The Task object
 *
 * @return {object} An action object with type TASK_GET_SUCCESS
 */
export function getTaskSuccess (task): TASK_GET_SUCCESS_TYPE {
	return {
		type: TASK_GET_SUCCESS,
		payload: task
	}
}

/**
 * Dispatched when Get Task fails
 *
 * @param  {object} task  The Task object
 *
 * @return {object} An action object with type TASK_GET_FAIL
 */
export function getTaskFail (error): TASK_GET_FAIL_TYPE {
	return {
		type: TASK_GET_FAIL,
		error: error
	}
}

/**
 * Delete Task
 *
 * @param  {string} taskId  Id of  Task object
 *
 * @return {object} An action object with type TASK_DELETE
 */
export function deleteTask (taskId): TASK_DELETE_TYPE {
	return {
		type: TASK_DELETE,
		payload: taskId
	}
}

/**
 * Dispatched when Delete Task succeeds
 *
 * @param  {object} task  The Task object
 *
 * @return {object} An action object with type TASK_DELETE_SUCCESS
 */
export function deleteTaskSuccess (task): TASK_DELETE_SUCCESS_TYPE {
	return {
		type: TASK_DELETE_SUCCESS,
		payload: task
	}
}

/**
 * Dispatched when Delete Task fails
 *
 * @param  {object} task  The Task object
 *
 * @return {object} An action object with type TASK_DELETE_FAIL
 */
export function deleteTaskFail (error): TASK_DELETE_FAIL_TYPE {
	return {
		type: TASK_DELETE_FAIL,
		error: error
	}
}

/**
 * Search Task
 *
 * @param  {string} searchString   The search string
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type TASK_SEARCH
 */
export function searchTask (searchString, form, promise) {
	return {
		type: TASK_SEARCH,
		payload: searchString,
		form,
		promise
	}
}

/**
 * Dispatched when Search Task succeeds
 *
 * @param  {object} tasks  List of tasks
 * @param  {number} total Total number of tasks
 *
 * @return {object} An action object with type TASK_SEARCH_SUCCESS
 */
export function searchTaskSuccess (tasks, total): TASK_SEARCH_SUCCESS_TYPE {
	return {
		type: TASK_SEARCH_SUCCESS,
		payload: tasks,
		total: total
	}
}

/**
 * Dispatched when Search Task fails
 *
 * @param  {object} task  The Task object
 *
 * @return {object} An action object with type TASK_SEARCH_FAIL
 */
export function searchTaskFail (error): TASK_SEARCH_FAIL_TYPE {
	return {
		type: TASK_SEARCH_FAIL,
		error: error
	}
}

/**
 * addJob Add Job
 *
 * @param  {object} job   The job
 *
 * @return {object} An action object with type TASK_ADD_JOB_SUCCESS
 */
export function addJob (job): TASK_ADD_JOB_SUCCESS_TYPE {
	return {
		type: TASK_ADD_JOB_SUCCESS,
		job
	}
}
/**
 * deleteJob Add Job
 *
 * @param  {object} job   The job
 *
 * @return {object} An action object with type TASK_DELETE_JOB_SUCCESS
 */
export function deleteJob (job): TASK_DELETE_JOB_SUCCESS_TYPE {
	return {
		type: TASK_DELETE_JOB_SUCCESS,
		job
	}
}
