// @flow
/*
 * Constants and actions for entity Country
 * Action constants and corresponding types
 *
*/

export const COUNTRY_ADD = 'country/add'
export const COUNTRY_ADD_SUCCESS = 'country/add/SUCCESS'
export const COUNTRY_ADD_FAIL = 'country/add/FAIL'

export const COUNTRY_SAVE = 'country/save'
export const COUNTRY_SAVE_SUCCESS = 'country/save/SUCCESS'
export const COUNTRY_SAVE_FAIL = 'country/save/FAIL'

export const COUNTRY_UPDATE = 'country/update'
export const COUNTRY_UPDATE_SUCCESS = 'country/update/SUCCESS'
export const COUNTRY_UPDATE_FAIL = 'country/update/FAIL'

export const COUNTRY_GET = 'country/get'
export const COUNTRY_GET_SUCCESS = 'country/get/SUCCESS'
export const COUNTRY_GET_FAIL = 'country/get/FAIL'

export const COUNTRY_DELETE = 'country/delete'
export const COUNTRY_DELETE_SUCCESS = 'country/delete/SUCCESS'
export const COUNTRY_DELETE_FAIL = 'country/delete/FAIL'

export const COUNTRY_SEARCH = 'country/search'
export const COUNTRY_SEARCH_SUCCESS = 'country/search/SUCCESS'
export const COUNTRY_SEARCH_FAIL = 'country/search/FAIL'

export type COUNTRY_ADD_TYPE = {
  type: COUNTRY_ADD,
  payload: Object
};
export type COUNTRY_ADD_SUCCESS_TYPE = {
  type: COUNTRY_ADD_SUCCESS,
  payload: Object
};
export type COUNTRY_ADD_FAIL_TYPE = {
  type: COUNTRY_ADD_FAIL,
  payload: { errors: Object }
};

export type COUNTRY_SAVE_TYPE = {
  type: COUNTRY_SAVE,
  payload: Object
};
export type COUNTRY_SAVE_SUCCESS_TYPE = {
  type: COUNTRY_SAVE_SUCCESS,
  payload: Object
};
export type COUNTRY_SAVE_FAIL_TYPE = {
  type: COUNTRY_SAVE_FAIL,
  payload: { errors: Object }
};

export type COUNTRY_UPDATE_TYPE = {
  type: COUNTRY_UPDATE,
  payload: Object
};
export type COUNTRY_UPDATE_SUCCESS_TYPE = {
  type: COUNTRY_UPDATE_SUCCESS,
  payload: Object
};
export type COUNTRY_UPDATE_FAIL_TYPE = {
  type: COUNTRY_UPDATE_FAIL,
  payload: { errors: Object }
};

export type COUNTRY_GET_TYPE = {
  type: COUNTRY_GET,
  payload: Object
};
export type COUNTRY_GET_SUCCESS_TYPE = {
  type: COUNTRY_GET_SUCCESS,
  payload: Object
};
export type COUNTRY_GET_FAIL_TYPE = {
  type: COUNTRY_GET_FAIL,
  payload: { errors: Object }
};

export type COUNTRY_DELETE_TYPE = {
  type: COUNTRY_DELETE,
  payload: Object
};
export type COUNTRY_DELETE_SUCCESS_TYPE = {
  type: COUNTRY_DELETE_SUCCESS,
  payload: Object
};
export type COUNTRY_DELETE_FAIL_TYPE = {
  type: COUNTRY_DELETE_FAIL,
  payload: { errors: Object }
};

export type COUNTRY_SEARCH_TYPE = {
  type: COUNTRY_SEARCH,
  payload: Object
};
export type COUNTRY_SEARCH_SUCCESS_TYPE = {
  type: COUNTRY_SEARCH_SUCCESS,
  payload: [Object]
};
export type COUNTRY_SEARCH_FAIL_TYPE = {
  type: COUNTRY_SEARCH_FAIL,
  payload: { errors: Object }
};

export const COUNTRY_SET_REGION_SUCCESS = 'country/Set_Region/SUCCESS'
export const COUNTRY_DELETE_REGION_SUCCESS = 'country/Delete_Region/SUCCESS'

export const COUNTRY_SET_REGION_SUCCESS_TYPE = {
	type: COUNTRY_SET_REGION_SUCCESS,
	payload: Object
}
export const COUNTRY_DELETE_REGION_SUCCESS_TYPE = {
	type: COUNTRY_DELETE_REGION_SUCCESS,
	payload: Object
}

/**
 * Add Country
 *
 * @param  {object} country  The Country object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type COUNTRY_ADD
 */
export function addCountry (country, form, promise) {
	return {
		type: COUNTRY_ADD,
		payload: country,
		form,
		promise
	}
}

/**
 * Dispatched when Add Country succeeds
 *
 * @param  {object} country  The Country object
 *
 * @return {object} An action object with type COUNTRY_ADD_SUCCESS
 */
export function addCountrySuccess (country) {
	return {
		type: COUNTRY_ADD_SUCCESS,
		payload: country
	}
}

/**
 * Dispatched when Add Country fails
 *
 * @param  {object} country  The Country object
 *
 * @return {object} An action object with type COUNTRY_ADD_FAIL
 */
export function addCountryFail (error) {
	return {
		type: COUNTRY_ADD_FAIL,
		error: error
	}
}

/**
 * Save Country
 *
 * @param  {object} country  The Country object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type COUNTRY_SAVE
 */
export function saveCountry (country, form, promise) {
	return {
		type: COUNTRY_SAVE,
		payload: country,
		form,
		promise
	}
}

/**
 * Dispatched when Save Country succeeds
 *
 * @param  {object} country  The Country object
 *
 * @return {object} An action object with type COUNTRY_SAVE_SUCCESS
 */
export function saveCountrySuccess (country) {
	return {
		type: COUNTRY_SAVE_SUCCESS,
		payload: country
	}
}

/**
 * Dispatched when Save Country fails
 *
 * @param  {object} country  The Country object
 *
 * @return {object} An action object with type COUNTRY_SAVE_FAIL
 */
export function saveCountryFail (error) {
	return {
		type: COUNTRY_SAVE_FAIL,
		error: error
	}
}

/**
 * Update Country
 *
 * @param  {object} country  The Country object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type COUNTRY_UPDATE
 */
export function updateCountry (country, form, promise) {
	return {
		type: COUNTRY_UPDATE,
		payload: country,
		form,
		promise
	}
}

/**
 * Dispatched when Update Country succeeds
 *
 * @param  {object} country  The Country object
 *
 * @return {object} An action object with type COUNTRY_UPDATE_SUCCESS
 */
export function updateCountrySuccess (country) {
	return {
		type: COUNTRY_UPDATE_SUCCESS,
		payload: country
	}
}

/**
 * Dispatched when Update Country fails
 *
 * @param  {object} country  The Country object
 *
 * @return {object} An action object with type COUNTRY_UPDATE_FAIL
 */
export function updateCountryFail (error) {
	return {
		type: COUNTRY_UPDATE_FAIL,
		error: error
	}
}

/**
 * Get Country
 *
 * @param  {string} countryId  Id of  Country object
 *
 * @return {object} An action object with type COUNTRY_GET
 */
export function getCountry (countryId) {
	return {
		type: COUNTRY_GET,
		payload: countryId
	}
}

/**
 * Dispatched when Get Country succeeds
 *
 * @param  {object} country  The Country object
 *
 * @return {object} An action object with type COUNTRY_GET_SUCCESS
 */
export function getCountrySuccess (country) {
	return {
		type: COUNTRY_GET_SUCCESS,
		payload: country
	}
}

/**
 * Dispatched when Get Country fails
 *
 * @param  {object} country  The Country object
 *
 * @return {object} An action object with type COUNTRY_GET_FAIL
 */
export function getCountryFail (error) {
	return {
		type: COUNTRY_GET_FAIL,
		error: error
	}
}

/**
 * Delete Country
 *
 * @param  {string} countryId  Id of  Country object
 *
 * @return {object} An action object with type COUNTRY_DELETE
 */
export function deleteCountry (countryId) {
	return {
		type: COUNTRY_DELETE,
		payload: countryId
	}
}

/**
 * Dispatched when Delete Country succeeds
 *
 * @param  {object} country  The Country object
 *
 * @return {object} An action object with type COUNTRY_DELETE_SUCCESS
 */
export function deleteCountrySuccess (country) {
	return {
		type: COUNTRY_DELETE_SUCCESS,
		payload: country
	}
}

/**
 * Dispatched when Delete Country fails
 *
 * @param  {object} country  The Country object
 *
 * @return {object} An action object with type COUNTRY_DELETE_FAIL
 */
export function deleteCountryFail (error) {
	return {
		type: COUNTRY_DELETE_FAIL,
		error: error
	}
}

/**
 * Search Country
 *
 * @param  {string} searchString   The search string
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type COUNTRY_SEARCH
 */
export function searchCountry (searchString, form, promise) {
	return {
		type: COUNTRY_SEARCH,
		payload: searchString,
		form,
		promise
	}
}

/**
 * Dispatched when Search Country succeeds
 *
 * @param  {object} country  The Country object
 *
 * @return {object} An action object with type COUNTRY_SEARCH_SUCCESS
 */
export function searchCountrySuccess (countries) {
	return {
		type: COUNTRY_SEARCH_SUCCESS,
		payload: countries
	}
}

/**
 * Dispatched when Search Country fails
 *
 * @param  {object} country  The Country object
 *
 * @return {object} An action object with type COUNTRY_SEARCH_FAIL
 */
export function searchCountryFail (error) {
	return {
		type: COUNTRY_SEARCH_FAIL,
		error: error
	}
}

/**
 * setRegion Set Region
 *
 * @param  {object} region   The region
 *
 * @return {object} An action object with type COUNTRY_SET_REGION_SUCCESS
 */
export function setRegion (region) {
	return {
		type: COUNTRY_SET_REGION_SUCCESS,
		region
	}
}
/**
 * deleteRegion Set Region
 *
 * @param  {object} region   The region
 *
 * @return {object} An action object with type COUNTRY_DELETE_REGION_SUCCESS
 */
export function deleteRegion (region) {
	return {
		type: COUNTRY_DELETE_REGION_SUCCESS,
		region
	}
}
