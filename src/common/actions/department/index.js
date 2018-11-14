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
  error: { errors: Object }
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
  error: { errors: Object }
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
  error: { errors: Object }
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
  error: { errors: Object }
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
  error: { errors: Object }
};

export type DEPARTMENT_SEARCH_TYPE = {
  type: DEPARTMENT_SEARCH,
  payload: Object
};
export type DEPARTMENT_SEARCH_SUCCESS_TYPE = {
  type: DEPARTMENT_SEARCH_SUCCESS,
  payload: [Object],

  total: number
};
export type DEPARTMENT_SEARCH_FAIL_TYPE = {
  type: DEPARTMENT_SEARCH_FAIL,
  error: { errors: Object }
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
	location: Object
}
export const DEPARTMENT_DELETE_LOCATION_SUCCESS_TYPE = {
	type: DEPARTMENT_DELETE_LOCATION_SUCCESS,
	location: Object
}

export const DEPARTMENT_ADD_EMPLOYEE_SUCCESS_TYPE = {
	type: DEPARTMENT_ADD_EMPLOYEE_SUCCESS,
	employee: Object
}
export const DEPARTMENT_DELETE_EMPLOYEE_SUCCESS_TYPE = {
	type: DEPARTMENT_DELETE_EMPLOYEE_SUCCESS,
	employee: Object
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
export function addDepartmentSuccess (department): DEPARTMENT_ADD_SUCCESS_TYPE {
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
export function addDepartmentFail (error): DEPARTMENT_ADD_FAIL_TYPE {
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
export function saveDepartmentSuccess (
	department
): DEPARTMENT_SAVE_SUCCESS_TYPE {
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
export function saveDepartmentFail (error): DEPARTMENT_SAVE_FAIL_TYPE {
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
export function updateDepartmentSuccess (
	department
): DEPARTMENT_UPDATE_SUCCESS_TYPE {
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
export function updateDepartmentFail (error): DEPARTMENT_UPDATE_FAIL_TYPE {
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
export function getDepartment (departmentId): DEPARTMENT_GET_TYPE {
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
export function getDepartmentSuccess (department): DEPARTMENT_GET_SUCCESS_TYPE {
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
export function getDepartmentFail (error): DEPARTMENT_GET_FAIL_TYPE {
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
export function deleteDepartment (departmentId): DEPARTMENT_DELETE_TYPE {
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
export function deleteDepartmentSuccess (
	department
): DEPARTMENT_DELETE_SUCCESS_TYPE {
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
export function deleteDepartmentFail (error): DEPARTMENT_DELETE_FAIL_TYPE {
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
 * @param  {object} departments  List of departments
 * @param  {number} total Total number of departments
 *
 * @return {object} An action object with type DEPARTMENT_SEARCH_SUCCESS
 */
export function searchDepartmentSuccess (
	departments,
	total
): DEPARTMENT_SEARCH_SUCCESS_TYPE {
	return {
		type: DEPARTMENT_SEARCH_SUCCESS,
		payload: departments,
		total: total
	}
}

/**
 * Dispatched when Search Department fails
 *
 * @param  {object} department  The Department object
 *
 * @return {object} An action object with type DEPARTMENT_SEARCH_FAIL
 */
export function searchDepartmentFail (error): DEPARTMENT_SEARCH_FAIL_TYPE {
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
export function setLocation (location): DEPARTMENT_SET_LOCATION_SUCCESS_TYPE {
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
export function deleteLocation (
	location
): DEPARTMENT_DELETE_LOCATION_SUCCESS_TYPE {
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
export function addEmployee (employee): DEPARTMENT_ADD_EMPLOYEE_SUCCESS_TYPE {
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
export function deleteEmployee (
	employee
): DEPARTMENT_DELETE_EMPLOYEE_SUCCESS_TYPE {
	return {
		type: DEPARTMENT_DELETE_EMPLOYEE_SUCCESS,
		employee
	}
}
