// @flow
import { createSelector } from 'reselect'
import type { State as LocationState } from 'common/reducers/location'

import _ from 'lodash'

/**
 * Direct selector to the Location domain
 */
const selectLocationDomain = (state): LocationState => state['location']

/**
 * Other specific selectors
 */

/**
 * Default selector used by add/edit Location
 */

const makeSelectLocation = () =>
	createSelector(selectLocationDomain, substate => {
		return {
			location: substate['location'],
			message: substate['message'],
			error: substate['error']
		}
	})
const makeSelectLocationInitialValues = () =>
	createSelector(selectLocationDomain, substate => {
		return substate['location']
	})
const makeSelectSearchLocation = () =>
	createSelector(selectLocationDomain, substate => {
		return {
			location: substate['location'],
			locations: substate['locations'],
			message: substate['message'],
			error: substate['error']
		}
	})
const makeSelectOtherSearchLocation = () =>
	createSelector(selectLocationDomain, substate => {
		return {
			otherSearchLocation: substate['otherSearchLocation'],
			otherSearchLocations: substate['Locations'],
			message: substate['message'],
			error: substate['error']
		}
	})

export {
	selectLocationDomain,
	makeSelectLocation,
	makeSelectLocationInitialValues,
	makeSelectSearchLocation,
	makeSelectOtherSearchLocation
}
