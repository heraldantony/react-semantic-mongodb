// @flow
/*
 * Constants and actions for entity Department
 * Action constants and corresponding types
 *
*/

export const DEPARTMENT_ADD = 'department/add'
export const DEPARTMENT_ADD_SUCCESS = 'department/add/SUCCESS'
export const DEPARTMENT_ADD_FAIL = 'department/add/FAIL'

export const DEPARTMENT_SAVE = 'department/save'
export const DEPARTMENT_SAVE_SUCCESS = 'department/save/SUCCESS'
export const DEPARTMENT_SAVE_FAIL = 'department/save/FAIL'

export const DEPARTMENT_UPDATE = 'department/update'
export const DEPARTMENT_UPDATE_SUCCESS = 'department/update/SUCCESS'
export const DEPARTMENT_UPDATE_FAIL = 'department/update/FAIL'

export const DEPARTMENT_GET = 'department/get'
export const DEPARTMENT_GET_SUCCESS = 'department/get/SUCCESS'
export const DEPARTMENT_GET_FAIL = 'department/get/FAIL'

export const DEPARTMENT_DELETE = 'department/delete'
export const DEPARTMENT_DELETE_SUCCESS = 'department/delete/SUCCESS'
export const DEPARTMENT_DELETE_FAIL = 'department/delete/FAIL'

export const DEPARTMENT_SEARCH = 'department/search'
export const DEPARTMENT_SEARCH_SUCCESS = 'department/search/SUCCESS'
export const DEPARTMENT_SEARCH_FAIL = 'department/search/FAIL'

export type DEPARTMENT_ADD_TYPE = {
  type: DEPARTMENT_ADD,
  payload: Object
};
export type DEPARTMENT_ADD_SUCCESS_TYPE = {
  type: DEPARTMENT_ADD_SUCCESS,
  payload: Object
};
export type DEPARTMENT_ADD_FAIL_TYPE = {
  type: DEPARTMENT_ADD_FAIL,
  payload: { errors: Object }
};

export type DEPARTMENT_SAVE_TYPE = {
  type: DEPARTMENT_SAVE,
  payload: Object
};
export type DEPARTMENT_SAVE_SUCCESS_TYPE = {
  type: DEPARTMENT_SAVE_SUCCESS,
  payload: Object
};
export type DEPARTMENT_SAVE_FAIL_TYPE = {
  type: DEPARTMENT_SAVE_FAIL,
  payload: { errors: Object }
};

export type DEPARTMENT_UPDATE_TYPE = {
  type: DEPARTMENT_UPDATE,
  payload: Object
};
export type DEPARTMENT_UPDATE_SUCCESS_TYPE = {
  type: DEPARTMENT_UPDATE_SUCCESS,
  payload: Object
};
export type DEPARTMENT_UPDATE_FAIL_TYPE = {
  type: DEPARTMENT_UPDATE_FAIL,
  payload: { errors: Object }
};

export type DEPARTMENT_GET_TYPE = {
  type: DEPARTMENT_GET,
  payload: Object
};
export type DEPARTMENT_GET_SUCCESS_TYPE = {
  type: DEPARTMENT_GET_SUCCESS,
  payload: Object
};
export type DEPARTMENT_GET_FAIL_TYPE = {
  type: DEPARTMENT_GET_FAIL,
  payload: { errors: Object }
};

export type DEPARTMENT_DELETE_TYPE = {
  type: DEPARTMENT_DELETE,
  payload: Object
};
export type DEPARTMENT_DELETE_SUCCESS_TYPE = {
  type: DEPARTMENT_DELETE_SUCCESS,
  payload: Object
};
export type DEPARTMENT_DELETE_FAIL_TYPE = {
  type: DEPARTMENT_DELETE_FAIL,
  payload: { errors: Object }
};

export type DEPARTMENT_SEARCH_TYPE = {
  type: DEPARTMENT_SEARCH,
  payload: Object
};
export type DEPARTMENT_SEARCH_SUCCESS_TYPE = {
  type: DEPARTMENT_SEARCH_SUCCESS,
  payload: [Object]
};
export type DEPARTMENT_SEARCH_FAIL_TYPE = {
  type: DEPARTMENT_SEARCH_FAIL,
  payload: { errors: Object }
};

export const DEPARTMENT_SET_LOCATION_SUCCESS =
  'department/Set_Location/SUCCESS'
export const DEPARTMENT_DELETE_LOCATION_SUCCESS =
  'department/Delete_Location/SUCCESS'

export const DEPARTMENT_ADD_EMPLOYEE_SUCCESS =
  'department/Add_Employee/SUCCESS'
export const DEPARTMENT_DELETE_EMPLOYEE_SUCCESS =
  'department/Delete_Employee/SUCCESS'

export const DEPARTMENT_SET_LOCATION_SUCCESS_TYPE = {
	type: DEPARTMENT_SET_LOCATION_SUCCESS,
	payload: Object
}
export const DEPARTMENT_DELETE_LOCATION_SUCCESS_TYPE = {
	type: DEPARTMENT_DELETE_LOCATION_SUCCESS,
	payload: Object
}

export const DEPARTMENT_ADD_EMPLOYEE_SUCCESS_TYPE = {
	type: DEPARTMENT_ADD_EMPLOYEE_SUCCESS,
	payload: Object
}
export const DEPARTMENT_DELETE_EMPLOYEE_SUCCESS_TYPE = {
	type: DEPARTMENT_DELETE_EMPLOYEE_SUCCESS,
	payload: Object
}

/**
 * Add Department
 *
 * @param  {object} department  The Department object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type DEPARTMENT_ADD
 */
export function addDepartment (department, form, promise) {
	return {
		type: DEPARTMENT_ADD,
		payload: department,
		form,
		promise
	}
}

/**
 * Dispatched when Add Department succeeds
 *
 * @param  {object} department  The Department object
 *
 * @return {object} An action object with type DEPARTMENT_ADD_SUCCESS
 */
export function addDepartmentSuccess (department) {
	return {
		type: DEPARTMENT_ADD_SUCCESS,
		payload: department
	}
}

/**
 * Dispatched when Add Department fails
 *
 * @param  {object} department  The Department object
 *
 * @return {object} An action object with type DEPARTMENT_ADD_FAIL
 */
export function addDepartmentFail (error) {
	return {
		type: DEPARTMENT_ADD_FAIL,
		error: error
	}
}

/**
 * Save Department
 *
 * @param  {object} department  The Department object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type DEPARTMENT_SAVE
 */
export function saveDepartment (department, form, promise) {
	return {
		type: DEPARTMENT_SAVE,
		payload: department,
		form,
		promise
	}
}

/**
 * Dispatched when Save Department succeeds
 *
 * @param  {object} department  The Department object
 *
 * @return {object} An action object with type DEPARTMENT_SAVE_SUCCESS
 */
export function saveDepartmentSuccess (department) {
	return {
		type: DEPARTMENT_SAVE_SUCCESS,
		payload: department
	}
}

/**
 * Dispatched when Save Department fails
 *
 * @param  {object} department  The Department object
 *
 * @return {object} An action object with type DEPARTMENT_SAVE_FAIL
 */
export function saveDepartmentFail (error) {
	return {
		type: DEPARTMENT_SAVE_FAIL,
		error: error
	}
}

/**
 * Update Department
 *
 * @param  {object} department  The Department object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type DEPARTMENT_UPDATE
 */
export function updateDepartment (department, form, promise) {
	return {
		type: DEPARTMENT_UPDATE,
		payload: department,
		form,
		promise
	}
}

/**
 * Dispatched when Update Department succeeds
 *
 * @param  {object} department  The Department object
 *
 * @return {object} An action object with type DEPARTMENT_UPDATE_SUCCESS
 */
export function updateDepartmentSuccess (department) {
	return {
		type: DEPARTMENT_UPDATE_SUCCESS,
		payload: department
	}
}

/**
 * Dispatched when Update Department fails
 *
 * @param  {object} department  The Department object
 *
 * @return {object} An action object with type DEPARTMENT_UPDATE_FAIL
 */
export function updateDepartmentFail (error) {
	return {
		type: DEPARTMENT_UPDATE_FAIL,
		error: error
	}
}

/**
 * Get Department
 *
 * @param  {string} departmentId  Id of  Department object
 *
 * @return {object} An action object with type DEPARTMENT_GET
 */
export function getDepartment (departmentId) {
	return {
		type: DEPARTMENT_GET,
		payload: departmentId
	}
}

/**
 * Dispatched when Get Department succeeds
 *
 * @param  {object} department  The Department object
 *
 * @return {object} An action object with type DEPARTMENT_GET_SUCCESS
 */
export function getDepartmentSuccess (department) {
	return {
		type: DEPARTMENT_GET_SUCCESS,
		payload: department
	}
}

/**
 * Dispatched when Get Department fails
 *
 * @param  {object} department  The Department object
 *
 * @return {object} An action object with type DEPARTMENT_GET_FAIL
 */
export function getDepartmentFail (error) {
	return {
		type: DEPARTMENT_GET_FAIL,
		error: error
	}
}

/**
 * Delete Department
 *
 * @param  {string} departmentId  Id of  Department object
 *
 * @return {object} An action object with type DEPARTMENT_DELETE
 */
export function deleteDepartment (departmentId) {
	return {
		type: DEPARTMENT_DELETE,
		payload: departmentId
	}
}

/**
 * Dispatched when Delete Department succeeds
 *
 * @param  {object} department  The Department object
 *
 * @return {object} An action object with type DEPARTMENT_DELETE_SUCCESS
 */
export function deleteDepartmentSuccess (department) {
	return {
		type: DEPARTMENT_DELETE_SUCCESS,
		payload: department
	}
}

/**
 * Dispatched when Delete Department fails
 *
 * @param  {object} department  The Department object
 *
 * @return {object} An action object with type DEPARTMENT_DELETE_FAIL
 */
export function deleteDepartmentFail (error) {
	return {
		type: DEPARTMENT_DELETE_FAIL,
		error: error
	}
}

/**
 * Search Department
 *
 * @param  {string} searchString   The search string
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type DEPARTMENT_SEARCH
 */
export function searchDepartment (searchString, form, promise) {
	return {
		type: DEPARTMENT_SEARCH,
		payload: searchString,
		form,
		promise
	}
}

/**
 * Dispatched when Search Department succeeds
 *
 * @param  {object} department  The Department object
 *
 * @return {object} An action object with type DEPARTMENT_SEARCH_SUCCESS
 */
export function searchDepartmentSuccess (departments) {
	return {
		type: DEPARTMENT_SEARCH_SUCCESS,
		payload: departments
	}
}

/**
 * Dispatched when Search Department fails
 *
 * @param  {object} department  The Department object
 *
 * @return {object} An action object with type DEPARTMENT_SEARCH_FAIL
 */
export function searchDepartmentFail (error) {
	return {
		type: DEPARTMENT_SEARCH_FAIL,
		error: error
	}
}

/**
 * setLocation Set Location
 *
 * @param  {object} location   The location
 *
 * @return {object} An action object with type DEPARTMENT_SET_LOCATION_SUCCESS
 */
export function setLocation (location) {
	return {
		type: DEPARTMENT_SET_LOCATION_SUCCESS,
		location
	}
}
/**
 * deleteLocation Set Location
 *
 * @param  {object} location   The location
 *
 * @return {object} An action object with type DEPARTMENT_DELETE_LOCATION_SUCCESS
 */
export function deleteLocation (location) {
	return {
		type: DEPARTMENT_DELETE_LOCATION_SUCCESS,
		location
	}
}

/**
 * addEmployee Add Employee
 *
 * @param  {object} employee   The employee
 *
 * @return {object} An action object with type DEPARTMENT_ADD_EMPLOYEE_SUCCESS
 */
export function addEmployee (employee) {
	return {
		type: DEPARTMENT_ADD_EMPLOYEE_SUCCESS,
		employee
	}
}
/**
 * deleteEmployee Add Employee
 *
 * @param  {object} employee   The employee
 *
 * @return {object} An action object with type DEPARTMENT_DELETE_EMPLOYEE_SUCCESS
 */
export function deleteEmployee (employee) {
	return {
		type: DEPARTMENT_DELETE_EMPLOYEE_SUCCESS,
		employee
	}
}
