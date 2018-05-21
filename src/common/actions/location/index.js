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
  payload: { errors: Object }
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
  payload: { errors: Object }
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
  payload: { errors: Object }
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
  payload: { errors: Object }
};

export type LOCATION_SEARCH_TYPE = {
  type: LOCATION_SEARCH,
  payload: Object
};
export type LOCATION_SEARCH_SUCCESS_TYPE = {
  type: LOCATION_SEARCH_SUCCESS,
  payload: [Object]
};
export type LOCATION_SEARCH_FAIL_TYPE = {
  type: LOCATION_SEARCH_FAIL,
  payload: { errors: Object }
};

export const LOCATION_SET_COUNTRY_SUCCESS = 'location/Set_Country/SUCCESS'

export const LOCATION_SET_COUNTRY_SUCCESS_TYPE = {
	type: LOCATION_SET_COUNTRY_SUCCESS,
	payload: Object
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
export function addLocationSuccess (location) {
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
export function addLocationFail (error) {
	return {
		type: LOCATION_ADD_FAIL,
		payload: error
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
export function saveLocationSuccess (location) {
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
export function saveLocationFail (error) {
	return {
		type: LOCATION_SAVE_FAIL,
		payload: error
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
export function updateLocationSuccess (location) {
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
export function updateLocationFail (error) {
	return {
		type: LOCATION_UPDATE_FAIL,
		payload: error
	}
}

/**
 * Get Location
 *
 * @param  {string} locationId  Id of  Location object
 *
 * @return {object} An action object with type LOCATION_GET
 */
export function getLocation (locationId) {
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
export function getLocationSuccess (location) {
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
export function getLocationFail (error) {
	return {
		type: LOCATION_GET_FAIL,
		payload: error
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
 * @param  {object} location  The Location object
 *
 * @return {object} An action object with type LOCATION_SEARCH_SUCCESS
 */
export function searchLocationSuccess (locations) {
	return {
		type: LOCATION_SEARCH_SUCCESS,
		payload: locations
	}
}

/**
 * Dispatched when Search Location fails
 *
 * @param  {object} location  The Location object
 *
 * @return {object} An action object with type LOCATION_SEARCH_FAIL
 */
export function searchLocationFail (error) {
	return {
		type: LOCATION_SEARCH_FAIL,
		payload: error
	}
}

/**
 * setCountry Set Country
 *
 * @param  {object} country   The country
 *
 * @return {object} An action object with type LOCATION_SET_COUNTRY_SUCCESS
 */
export function setCountry (country) {
	return {
		type: LOCATION_SET_COUNTRY_SUCCESS,
		country
	}
}
