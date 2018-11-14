// @flow
/*
 * Constants and actions for entity Location
 * Action constants and corresponding types
 *
*/

export const LOCATION_ADD = 'location/add'
export const LOCATION_ADD_SUCCESS = 'location/add/SUCCESS'
export const LOCATION_ADD_FAIL = 'location/add/FAIL'

export const LOCATION_SAVE = 'location/save'
export const LOCATION_SAVE_SUCCESS = 'location/save/SUCCESS'
export const LOCATION_SAVE_FAIL = 'location/save/FAIL'

export const LOCATION_UPDATE = 'location/update'
export const LOCATION_UPDATE_SUCCESS = 'location/update/SUCCESS'
export const LOCATION_UPDATE_FAIL = 'location/update/FAIL'

export const LOCATION_GET = 'location/get'
export const LOCATION_GET_SUCCESS = 'location/get/SUCCESS'
export const LOCATION_GET_FAIL = 'location/get/FAIL'

export const LOCATION_DELETE = 'location/delete'
export const LOCATION_DELETE_SUCCESS = 'location/delete/SUCCESS'
export const LOCATION_DELETE_FAIL = 'location/delete/FAIL'

export const LOCATION_SEARCH = 'location/search'
export const LOCATION_SEARCH_SUCCESS = 'location/search/SUCCESS'
export const LOCATION_SEARCH_FAIL = 'location/search/FAIL'

export type LOCATION_ADD_TYPE = {
  type: LOCATION_ADD,
  payload: Object
};
export type LOCATION_ADD_SUCCESS_TYPE = {
  type: LOCATION_ADD_SUCCESS,
  payload: Object
};
export type LOCATION_ADD_FAIL_TYPE = {
  type: LOCATION_ADD_FAIL,
  error: { errors: Object }
};

export type LOCATION_SAVE_TYPE = {
  type: LOCATION_SAVE,
  payload: Object
};
export type LOCATION_SAVE_SUCCESS_TYPE = {
  type: LOCATION_SAVE_SUCCESS,
  payload: Object
};
export type LOCATION_SAVE_FAIL_TYPE = {
  type: LOCATION_SAVE_FAIL,
  error: { errors: Object }
};

export type LOCATION_UPDATE_TYPE = {
  type: LOCATION_UPDATE,
  payload: Object
};
export type LOCATION_UPDATE_SUCCESS_TYPE = {
  type: LOCATION_UPDATE_SUCCESS,
  payload: Object
};
export type LOCATION_UPDATE_FAIL_TYPE = {
  type: LOCATION_UPDATE_FAIL,
  error: { errors: Object }
};

export type LOCATION_GET_TYPE = {
  type: LOCATION_GET,
  payload: Object
};
export type LOCATION_GET_SUCCESS_TYPE = {
  type: LOCATION_GET_SUCCESS,
  payload: Object
};
export type LOCATION_GET_FAIL_TYPE = {
  type: LOCATION_GET_FAIL,
  error: { errors: Object }
};

export type LOCATION_DELETE_TYPE = {
  type: LOCATION_DELETE,
  payload: Object
};
export type LOCATION_DELETE_SUCCESS_TYPE = {
  type: LOCATION_DELETE_SUCCESS,
  payload: Object
};
export type LOCATION_DELETE_FAIL_TYPE = {
  type: LOCATION_DELETE_FAIL,
  error: { errors: Object }
};

export type LOCATION_SEARCH_TYPE = {
  type: LOCATION_SEARCH,
  payload: Object
};
export type LOCATION_SEARCH_SUCCESS_TYPE = {
  type: LOCATION_SEARCH_SUCCESS,
  payload: [Object],

  total: number
};
export type LOCATION_SEARCH_FAIL_TYPE = {
  type: LOCATION_SEARCH_FAIL,
  error: { errors: Object }
};

export const LOCATION_SET_COUNTRY_SUCCESS = 'location/Set_Country/SUCCESS'
export const LOCATION_DELETE_COUNTRY_SUCCESS =
  'location/Delete_Country/SUCCESS'

export const LOCATION_SET_COUNTRY_SUCCESS_TYPE = {
	type: LOCATION_SET_COUNTRY_SUCCESS,
	country: Object
}
export const LOCATION_DELETE_COUNTRY_SUCCESS_TYPE = {
	type: LOCATION_DELETE_COUNTRY_SUCCESS,
	country: Object
}

/**
 * Add Location
 *
 * @param  {object} location  The Location object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type LOCATION_ADD
 */
export function addLocation (location, form, promise) {
	return {
		type: LOCATION_ADD,
		payload: location,
		form,
		promise
	}
}

/**
 * Dispatched when Add Location succeeds
 *
 * @param  {object} location  The Location object
 *
 * @return {object} An action object with type LOCATION_ADD_SUCCESS
 */
export function addLocationSuccess (location): LOCATION_ADD_SUCCESS_TYPE {
	return {
		type: LOCATION_ADD_SUCCESS,
		payload: location
	}
}

/**
 * Dispatched when Add Location fails
 *
 * @param  {object} location  The Location object
 *
 * @return {object} An action object with type LOCATION_ADD_FAIL
 */
export function addLocationFail (error): LOCATION_ADD_FAIL_TYPE {
	return {
		type: LOCATION_ADD_FAIL,
		error: error
	}
}

/**
 * Save Location
 *
 * @param  {object} location  The Location object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type LOCATION_SAVE
 */
export function saveLocation (location, form, promise) {
	return {
		type: LOCATION_SAVE,
		payload: location,
		form,
		promise
	}
}

/**
 * Dispatched when Save Location succeeds
 *
 * @param  {object} location  The Location object
 *
 * @return {object} An action object with type LOCATION_SAVE_SUCCESS
 */
export function saveLocationSuccess (location): LOCATION_SAVE_SUCCESS_TYPE {
	return {
		type: LOCATION_SAVE_SUCCESS,
		payload: location
	}
}

/**
 * Dispatched when Save Location fails
 *
 * @param  {object} location  The Location object
 *
 * @return {object} An action object with type LOCATION_SAVE_FAIL
 */
export function saveLocationFail (error): LOCATION_SAVE_FAIL_TYPE {
	return {
		type: LOCATION_SAVE_FAIL,
		error: error
	}
}

/**
 * Update Location
 *
 * @param  {object} location  The Location object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type LOCATION_UPDATE
 */
export function updateLocation (location, form, promise) {
	return {
		type: LOCATION_UPDATE,
		payload: location,
		form,
		promise
	}
}

/**
 * Dispatched when Update Location succeeds
 *
 * @param  {object} location  The Location object
 *
 * @return {object} An action object with type LOCATION_UPDATE_SUCCESS
 */
export function updateLocationSuccess (location): LOCATION_UPDATE_SUCCESS_TYPE {
	return {
		type: LOCATION_UPDATE_SUCCESS,
		payload: location
	}
}

/**
 * Dispatched when Update Location fails
 *
 * @param  {object} location  The Location object
 *
 * @return {object} An action object with type LOCATION_UPDATE_FAIL
 */
export function updateLocationFail (error): LOCATION_UPDATE_FAIL_TYPE {
	return {
		type: LOCATION_UPDATE_FAIL,
		error: error
	}
}

/**
 * Get Location
 *
 * @param  {string} locationId  Id of  Location object
 *
 * @return {object} An action object with type LOCATION_GET
 */
export function getLocation (locationId): LOCATION_GET_TYPE {
	return {
		type: LOCATION_GET,
		payload: locationId
	}
}

/**
 * Dispatched when Get Location succeeds
 *
 * @param  {object} location  The Location object
 *
 * @return {object} An action object with type LOCATION_GET_SUCCESS
 */
export function getLocationSuccess (location): LOCATION_GET_SUCCESS_TYPE {
	return {
		type: LOCATION_GET_SUCCESS,
		payload: location
	}
}

/**
 * Dispatched when Get Location fails
 *
 * @param  {object} location  The Location object
 *
 * @return {object} An action object with type LOCATION_GET_FAIL
 */
export function getLocationFail (error): LOCATION_GET_FAIL_TYPE {
	return {
		type: LOCATION_GET_FAIL,
		error: error
	}
}

/**
 * Delete Location
 *
 * @param  {string} locationId  Id of  Location object
 *
 * @return {object} An action object with type LOCATION_DELETE
 */
export function deleteLocation (locationId): LOCATION_DELETE_TYPE {
	return {
		type: LOCATION_DELETE,
		payload: locationId
	}
}

/**
 * Dispatched when Delete Location succeeds
 *
 * @param  {object} location  The Location object
 *
 * @return {object} An action object with type LOCATION_DELETE_SUCCESS
 */
export function deleteLocationSuccess (location): LOCATION_DELETE_SUCCESS_TYPE {
	return {
		type: LOCATION_DELETE_SUCCESS,
		payload: location
	}
}

/**
 * Dispatched when Delete Location fails
 *
 * @param  {object} location  The Location object
 *
 * @return {object} An action object with type LOCATION_DELETE_FAIL
 */
export function deleteLocationFail (error): LOCATION_DELETE_FAIL_TYPE {
	return {
		type: LOCATION_DELETE_FAIL,
		error: error
	}
}

/**
 * Search Location
 *
 * @param  {string} searchString   The search string
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type LOCATION_SEARCH
 */
export function searchLocation (searchString, form, promise) {
	return {
		type: LOCATION_SEARCH,
		payload: searchString,
		form,
		promise
	}
}

/**
 * Dispatched when Search Location succeeds
 *
 * @param  {object} locations  List of locations
 * @param  {number} total Total number of locations
 *
 * @return {object} An action object with type LOCATION_SEARCH_SUCCESS
 */
export function searchLocationSuccess (
	locations,
	total
): LOCATION_SEARCH_SUCCESS_TYPE {
	return {
		type: LOCATION_SEARCH_SUCCESS,
		payload: locations,
		total: total
	}
}

/**
 * Dispatched when Search Location fails
 *
 * @param  {object} location  The Location object
 *
 * @return {object} An action object with type LOCATION_SEARCH_FAIL
 */
export function searchLocationFail (error): LOCATION_SEARCH_FAIL_TYPE {
	return {
		type: LOCATION_SEARCH_FAIL,
		error: error
	}
}

/**
 * setCountry Set Country
 *
 * @param  {object} country   The country
 *
 * @return {object} An action object with type LOCATION_SET_COUNTRY_SUCCESS
 */
export function setCountry (country): LOCATION_SET_COUNTRY_SUCCESS_TYPE {
	return {
		type: LOCATION_SET_COUNTRY_SUCCESS,
		country
	}
}
/**
 * deleteCountry Set Country
 *
 * @param  {object} country   The country
 *
 * @return {object} An action object with type LOCATION_DELETE_COUNTRY_SUCCESS
 */
export function deleteCountry (country): LOCATION_DELETE_COUNTRY_SUCCESS_TYPE {
	return {
		type: LOCATION_DELETE_COUNTRY_SUCCESS,
		country
	}
}
