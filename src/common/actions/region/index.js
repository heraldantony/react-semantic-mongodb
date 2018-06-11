// @flow
/*
 * Constants and actions for entity Region
 * Action constants and corresponding types
 *
*/

export const REGION_ADD = 'region/add'
export const REGION_ADD_SUCCESS = 'region/add/SUCCESS'
export const REGION_ADD_FAIL = 'region/add/FAIL'

export const REGION_SAVE = 'region/save'
export const REGION_SAVE_SUCCESS = 'region/save/SUCCESS'
export const REGION_SAVE_FAIL = 'region/save/FAIL'

export const REGION_UPDATE = 'region/update'
export const REGION_UPDATE_SUCCESS = 'region/update/SUCCESS'
export const REGION_UPDATE_FAIL = 'region/update/FAIL'

export const REGION_GET = 'region/get'
export const REGION_GET_SUCCESS = 'region/get/SUCCESS'
export const REGION_GET_FAIL = 'region/get/FAIL'

export const REGION_DELETE = 'region/delete'
export const REGION_DELETE_SUCCESS = 'region/delete/SUCCESS'
export const REGION_DELETE_FAIL = 'region/delete/FAIL'

export const REGION_SEARCH = 'region/search'
export const REGION_SEARCH_SUCCESS = 'region/search/SUCCESS'
export const REGION_SEARCH_FAIL = 'region/search/FAIL'

export type REGION_ADD_TYPE = {
  type: REGION_ADD,
  payload: Object
};
export type REGION_ADD_SUCCESS_TYPE = {
  type: REGION_ADD_SUCCESS,
  payload: Object
};
export type REGION_ADD_FAIL_TYPE = {
  type: REGION_ADD_FAIL,
  payload: { errors: Object }
};

export type REGION_SAVE_TYPE = {
  type: REGION_SAVE,
  payload: Object
};
export type REGION_SAVE_SUCCESS_TYPE = {
  type: REGION_SAVE_SUCCESS,
  payload: Object
};
export type REGION_SAVE_FAIL_TYPE = {
  type: REGION_SAVE_FAIL,
  payload: { errors: Object }
};

export type REGION_UPDATE_TYPE = {
  type: REGION_UPDATE,
  payload: Object
};
export type REGION_UPDATE_SUCCESS_TYPE = {
  type: REGION_UPDATE_SUCCESS,
  payload: Object
};
export type REGION_UPDATE_FAIL_TYPE = {
  type: REGION_UPDATE_FAIL,
  payload: { errors: Object }
};

export type REGION_GET_TYPE = {
  type: REGION_GET,
  payload: Object
};
export type REGION_GET_SUCCESS_TYPE = {
  type: REGION_GET_SUCCESS,
  payload: Object
};
export type REGION_GET_FAIL_TYPE = {
  type: REGION_GET_FAIL,
  payload: { errors: Object }
};

export type REGION_DELETE_TYPE = {
  type: REGION_DELETE,
  payload: Object
};
export type REGION_DELETE_SUCCESS_TYPE = {
  type: REGION_DELETE_SUCCESS,
  payload: Object
};
export type REGION_DELETE_FAIL_TYPE = {
  type: REGION_DELETE_FAIL,
  payload: { errors: Object }
};

export type REGION_SEARCH_TYPE = {
  type: REGION_SEARCH,
  payload: Object
};
export type REGION_SEARCH_SUCCESS_TYPE = {
  type: REGION_SEARCH_SUCCESS,
  payload: [Object]
};
export type REGION_SEARCH_FAIL_TYPE = {
  type: REGION_SEARCH_FAIL,
  payload: { errors: Object }
};

/**
 * Add Region
 *
 * @param  {object} region  The Region object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type REGION_ADD
 */
export function addRegion (region, form, promise) {
	return {
		type: REGION_ADD,
		payload: region,
		form,
		promise
	}
}

/**
 * Dispatched when Add Region succeeds
 *
 * @param  {object} region  The Region object
 *
 * @return {object} An action object with type REGION_ADD_SUCCESS
 */
export function addRegionSuccess (region) {
	return {
		type: REGION_ADD_SUCCESS,
		payload: region
	}
}

/**
 * Dispatched when Add Region fails
 *
 * @param  {object} region  The Region object
 *
 * @return {object} An action object with type REGION_ADD_FAIL
 */
export function addRegionFail (error) {
	return {
		type: REGION_ADD_FAIL,
		error: error
	}
}

/**
 * Save Region
 *
 * @param  {object} region  The Region object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type REGION_SAVE
 */
export function saveRegion (region, form, promise) {
	return {
		type: REGION_SAVE,
		payload: region,
		form,
		promise
	}
}

/**
 * Dispatched when Save Region succeeds
 *
 * @param  {object} region  The Region object
 *
 * @return {object} An action object with type REGION_SAVE_SUCCESS
 */
export function saveRegionSuccess (region) {
	return {
		type: REGION_SAVE_SUCCESS,
		payload: region
	}
}

/**
 * Dispatched when Save Region fails
 *
 * @param  {object} region  The Region object
 *
 * @return {object} An action object with type REGION_SAVE_FAIL
 */
export function saveRegionFail (error) {
	return {
		type: REGION_SAVE_FAIL,
		error: error
	}
}

/**
 * Update Region
 *
 * @param  {object} region  The Region object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type REGION_UPDATE
 */
export function updateRegion (region, form, promise) {
	return {
		type: REGION_UPDATE,
		payload: region,
		form,
		promise
	}
}

/**
 * Dispatched when Update Region succeeds
 *
 * @param  {object} region  The Region object
 *
 * @return {object} An action object with type REGION_UPDATE_SUCCESS
 */
export function updateRegionSuccess (region) {
	return {
		type: REGION_UPDATE_SUCCESS,
		payload: region
	}
}

/**
 * Dispatched when Update Region fails
 *
 * @param  {object} region  The Region object
 *
 * @return {object} An action object with type REGION_UPDATE_FAIL
 */
export function updateRegionFail (error) {
	return {
		type: REGION_UPDATE_FAIL,
		error: error
	}
}

/**
 * Get Region
 *
 * @param  {string} regionId  Id of  Region object
 *
 * @return {object} An action object with type REGION_GET
 */
export function getRegion (regionId) {
	return {
		type: REGION_GET,
		payload: regionId
	}
}

/**
 * Dispatched when Get Region succeeds
 *
 * @param  {object} region  The Region object
 *
 * @return {object} An action object with type REGION_GET_SUCCESS
 */
export function getRegionSuccess (region) {
	return {
		type: REGION_GET_SUCCESS,
		payload: region
	}
}

/**
 * Dispatched when Get Region fails
 *
 * @param  {object} region  The Region object
 *
 * @return {object} An action object with type REGION_GET_FAIL
 */
export function getRegionFail (error) {
	return {
		type: REGION_GET_FAIL,
		error: error
	}
}

/**
 * Delete Region
 *
 * @param  {string} regionId  Id of  Region object
 *
 * @return {object} An action object with type REGION_DELETE
 */
export function deleteRegion (regionId) {
	return {
		type: REGION_DELETE,
		payload: regionId
	}
}

/**
 * Dispatched when Delete Region succeeds
 *
 * @param  {object} region  The Region object
 *
 * @return {object} An action object with type REGION_DELETE_SUCCESS
 */
export function deleteRegionSuccess (region) {
	return {
		type: REGION_DELETE_SUCCESS,
		payload: region
	}
}

/**
 * Dispatched when Delete Region fails
 *
 * @param  {object} region  The Region object
 *
 * @return {object} An action object with type REGION_DELETE_FAIL
 */
export function deleteRegionFail (error) {
	return {
		type: REGION_DELETE_FAIL,
		error: error
	}
}

/**
 * Search Region
 *
 * @param  {string} searchString   The search string
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type REGION_SEARCH
 */
export function searchRegion (searchString, form, promise) {
	return {
		type: REGION_SEARCH,
		payload: searchString,
		form,
		promise
	}
}

/**
 * Dispatched when Search Region succeeds
 *
 * @param  {object} region  The Region object
 *
 * @return {object} An action object with type REGION_SEARCH_SUCCESS
 */
export function searchRegionSuccess (regions) {
	return {
		type: REGION_SEARCH_SUCCESS,
		payload: regions
	}
}

/**
 * Dispatched when Search Region fails
 *
 * @param  {object} region  The Region object
 *
 * @return {object} An action object with type REGION_SEARCH_FAIL
 */
export function searchRegionFail (error) {
	return {
		type: REGION_SEARCH_FAIL,
		error: error
	}
}
