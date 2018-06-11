// @flow
/*
 * Constants and actions for entity Employee
 * Action constants and corresponding types
 *
*/

export const EMPLOYEE_ADD = 'employee/add'
export const EMPLOYEE_ADD_SUCCESS = 'employee/add/SUCCESS'
export const EMPLOYEE_ADD_FAIL = 'employee/add/FAIL'

export const EMPLOYEE_SAVE = 'employee/save'
export const EMPLOYEE_SAVE_SUCCESS = 'employee/save/SUCCESS'
export const EMPLOYEE_SAVE_FAIL = 'employee/save/FAIL'

export const EMPLOYEE_UPDATE = 'employee/update'
export const EMPLOYEE_UPDATE_SUCCESS = 'employee/update/SUCCESS'
export const EMPLOYEE_UPDATE_FAIL = 'employee/update/FAIL'

export const EMPLOYEE_GET = 'employee/get'
export const EMPLOYEE_GET_SUCCESS = 'employee/get/SUCCESS'
export const EMPLOYEE_GET_FAIL = 'employee/get/FAIL'

export const EMPLOYEE_DELETE = 'employee/delete'
export const EMPLOYEE_DELETE_SUCCESS = 'employee/delete/SUCCESS'
export const EMPLOYEE_DELETE_FAIL = 'employee/delete/FAIL'

export const EMPLOYEE_SEARCH = 'employee/search'
export const EMPLOYEE_SEARCH_SUCCESS = 'employee/search/SUCCESS'
export const EMPLOYEE_SEARCH_FAIL = 'employee/search/FAIL'

export type EMPLOYEE_ADD_TYPE = {
  type: EMPLOYEE_ADD,
  payload: Object
};
export type EMPLOYEE_ADD_SUCCESS_TYPE = {
  type: EMPLOYEE_ADD_SUCCESS,
  payload: Object
};
export type EMPLOYEE_ADD_FAIL_TYPE = {
  type: EMPLOYEE_ADD_FAIL,
  payload: { errors: Object }
};

export type EMPLOYEE_SAVE_TYPE = {
  type: EMPLOYEE_SAVE,
  payload: Object
};
export type EMPLOYEE_SAVE_SUCCESS_TYPE = {
  type: EMPLOYEE_SAVE_SUCCESS,
  payload: Object
};
export type EMPLOYEE_SAVE_FAIL_TYPE = {
  type: EMPLOYEE_SAVE_FAIL,
  payload: { errors: Object }
};

export type EMPLOYEE_UPDATE_TYPE = {
  type: EMPLOYEE_UPDATE,
  payload: Object
};
export type EMPLOYEE_UPDATE_SUCCESS_TYPE = {
  type: EMPLOYEE_UPDATE_SUCCESS,
  payload: Object
};
export type EMPLOYEE_UPDATE_FAIL_TYPE = {
  type: EMPLOYEE_UPDATE_FAIL,
  payload: { errors: Object }
};

export type EMPLOYEE_GET_TYPE = {
  type: EMPLOYEE_GET,
  payload: Object
};
export type EMPLOYEE_GET_SUCCESS_TYPE = {
  type: EMPLOYEE_GET_SUCCESS,
  payload: Object
};
export type EMPLOYEE_GET_FAIL_TYPE = {
  type: EMPLOYEE_GET_FAIL,
  payload: { errors: Object }
};

export type EMPLOYEE_DELETE_TYPE = {
  type: EMPLOYEE_DELETE,
  payload: Object
};
export type EMPLOYEE_DELETE_SUCCESS_TYPE = {
  type: EMPLOYEE_DELETE_SUCCESS,
  payload: Object
};
export type EMPLOYEE_DELETE_FAIL_TYPE = {
  type: EMPLOYEE_DELETE_FAIL,
  payload: { errors: Object }
};

export type EMPLOYEE_SEARCH_TYPE = {
  type: EMPLOYEE_SEARCH,
  payload: Object
};
export type EMPLOYEE_SEARCH_SUCCESS_TYPE = {
  type: EMPLOYEE_SEARCH_SUCCESS,
  payload: [Object]
};
export type EMPLOYEE_SEARCH_FAIL_TYPE = {
  type: EMPLOYEE_SEARCH_FAIL,
  payload: { errors: Object }
};

export const EMPLOYEE_ADD_JOB_SUCCESS = 'employee/Add_Job/SUCCESS'
export const EMPLOYEE_DELETE_JOB_SUCCESS = 'employee/Delete_Job/SUCCESS'

export const EMPLOYEE_ADD_JOB_SUCCESS_TYPE = {
	type: EMPLOYEE_ADD_JOB_SUCCESS,
	payload: Object
}
export const EMPLOYEE_DELETE_JOB_SUCCESS_TYPE = {
	type: EMPLOYEE_DELETE_JOB_SUCCESS,
	payload: Object
}

/**
 * Add Employee
 *
 * @param  {object} employee  The Employee object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type EMPLOYEE_ADD
 */
export function addEmployee (employee, form, promise) {
	return {
		type: EMPLOYEE_ADD,
		payload: employee,
		form,
		promise
	}
}

/**
 * Dispatched when Add Employee succeeds
 *
 * @param  {object} employee  The Employee object
 *
 * @return {object} An action object with type EMPLOYEE_ADD_SUCCESS
 */
export function addEmployeeSuccess (employee) {
	return {
		type: EMPLOYEE_ADD_SUCCESS,
		payload: employee
	}
}

/**
 * Dispatched when Add Employee fails
 *
 * @param  {object} employee  The Employee object
 *
 * @return {object} An action object with type EMPLOYEE_ADD_FAIL
 */
export function addEmployeeFail (error) {
	return {
		type: EMPLOYEE_ADD_FAIL,
		error: error
	}
}

/**
 * Save Employee
 *
 * @param  {object} employee  The Employee object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type EMPLOYEE_SAVE
 */
export function saveEmployee (employee, form, promise) {
	return {
		type: EMPLOYEE_SAVE,
		payload: employee,
		form,
		promise
	}
}

/**
 * Dispatched when Save Employee succeeds
 *
 * @param  {object} employee  The Employee object
 *
 * @return {object} An action object with type EMPLOYEE_SAVE_SUCCESS
 */
export function saveEmployeeSuccess (employee) {
	return {
		type: EMPLOYEE_SAVE_SUCCESS,
		payload: employee
	}
}

/**
 * Dispatched when Save Employee fails
 *
 * @param  {object} employee  The Employee object
 *
 * @return {object} An action object with type EMPLOYEE_SAVE_FAIL
 */
export function saveEmployeeFail (error) {
	return {
		type: EMPLOYEE_SAVE_FAIL,
		error: error
	}
}

/**
 * Update Employee
 *
 * @param  {object} employee  The Employee object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type EMPLOYEE_UPDATE
 */
export function updateEmployee (employee, form, promise) {
	return {
		type: EMPLOYEE_UPDATE,
		payload: employee,
		form,
		promise
	}
}

/**
 * Dispatched when Update Employee succeeds
 *
 * @param  {object} employee  The Employee object
 *
 * @return {object} An action object with type EMPLOYEE_UPDATE_SUCCESS
 */
export function updateEmployeeSuccess (employee) {
	return {
		type: EMPLOYEE_UPDATE_SUCCESS,
		payload: employee
	}
}

/**
 * Dispatched when Update Employee fails
 *
 * @param  {object} employee  The Employee object
 *
 * @return {object} An action object with type EMPLOYEE_UPDATE_FAIL
 */
export function updateEmployeeFail (error) {
	return {
		type: EMPLOYEE_UPDATE_FAIL,
		error: error
	}
}

/**
 * Get Employee
 *
 * @param  {string} employeeId  Id of  Employee object
 *
 * @return {object} An action object with type EMPLOYEE_GET
 */
export function getEmployee (employeeId) {
	return {
		type: EMPLOYEE_GET,
		payload: employeeId
	}
}

/**
 * Dispatched when Get Employee succeeds
 *
 * @param  {object} employee  The Employee object
 *
 * @return {object} An action object with type EMPLOYEE_GET_SUCCESS
 */
export function getEmployeeSuccess (employee) {
	return {
		type: EMPLOYEE_GET_SUCCESS,
		payload: employee
	}
}

/**
 * Dispatched when Get Employee fails
 *
 * @param  {object} employee  The Employee object
 *
 * @return {object} An action object with type EMPLOYEE_GET_FAIL
 */
export function getEmployeeFail (error) {
	return {
		type: EMPLOYEE_GET_FAIL,
		error: error
	}
}

/**
 * Delete Employee
 *
 * @param  {string} employeeId  Id of  Employee object
 *
 * @return {object} An action object with type EMPLOYEE_DELETE
 */
export function deleteEmployee (employeeId) {
	return {
		type: EMPLOYEE_DELETE,
		payload: employeeId
	}
}

/**
 * Dispatched when Delete Employee succeeds
 *
 * @param  {object} employee  The Employee object
 *
 * @return {object} An action object with type EMPLOYEE_DELETE_SUCCESS
 */
export function deleteEmployeeSuccess (employee) {
	return {
		type: EMPLOYEE_DELETE_SUCCESS,
		payload: employee
	}
}

/**
 * Dispatched when Delete Employee fails
 *
 * @param  {object} employee  The Employee object
 *
 * @return {object} An action object with type EMPLOYEE_DELETE_FAIL
 */
export function deleteEmployeeFail (error) {
	return {
		type: EMPLOYEE_DELETE_FAIL,
		error: error
	}
}

/**
 * Search Employee
 *
 * @param  {string} searchString   The search string
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type EMPLOYEE_SEARCH
 */
export function searchEmployee (searchString, form, promise) {
	return {
		type: EMPLOYEE_SEARCH,
		payload: searchString,
		form,
		promise
	}
}

/**
 * Dispatched when Search Employee succeeds
 *
 * @param  {object} employee  The Employee object
 *
 * @return {object} An action object with type EMPLOYEE_SEARCH_SUCCESS
 */
export function searchEmployeeSuccess (employees) {
	return {
		type: EMPLOYEE_SEARCH_SUCCESS,
		payload: employees
	}
}

/**
 * Dispatched when Search Employee fails
 *
 * @param  {object} employee  The Employee object
 *
 * @return {object} An action object with type EMPLOYEE_SEARCH_FAIL
 */
export function searchEmployeeFail (error) {
	return {
		type: EMPLOYEE_SEARCH_FAIL,
		error: error
	}
}

/**
 * addJob Add Job
 *
 * @param  {object} job   The job
 *
 * @return {object} An action object with type EMPLOYEE_ADD_JOB_SUCCESS
 */
export function addJob (job) {
	return {
		type: EMPLOYEE_ADD_JOB_SUCCESS,
		job
	}
}
/**
 * deleteJob Add Job
 *
 * @param  {object} job   The job
 *
 * @return {object} An action object with type EMPLOYEE_DELETE_JOB_SUCCESS
 */
export function deleteJob (job) {
	return {
		type: EMPLOYEE_DELETE_JOB_SUCCESS,
		job
	}
}
