// @flow
import { createSelector } from 'reselect'
import type { State as RegionState } from 'common/reducers/region'

import _ from 'lodash'

/**
 * Direct selector to the Region domain
 */
const selectRegionDomain = (state): RegionState => state['region']

/**
 * Other specific selectors
 */

/**
 * Default selector used by add/edit Region
 */

const makeSelectRegion = () =>
	createSelector(selectRegionDomain, substate => {
		return {
			region: substate['region'],
			message: substate['message'],
			error: substate['error']
		}
	})
const makeSelectRegionInitialValues = () =>
	createSelector(selectRegionDomain, substate => {
		return substate['region']
	})
const makeSelectSearchRegion = () =>
	createSelector(selectRegionDomain, substate => {
		return {
			region: substate['region'],
			regions: substate['regions'],
			totalItemsCount: substate['totalItemsCount'],
			message: substate['message'],
			error: substate['error']
		}
	})
const makeSelectOtherSearchRegion = () =>
	createSelector(selectRegionDomain, substate => {
		return {
			otherSearchRegion: substate['otherSearchRegion'],
			otherSearchRegions: substate['Regions'],
			otherSearchTotalItemsCount: substate['otherSearchTotalItemsCount'],
			message: substate['message'],
			error: substate['error']
		}
	})

export {
	selectRegionDomain,
	makeSelectRegion,
	makeSelectRegionInitialValues,
	makeSelectSearchRegion,
	makeSelectOtherSearchRegion
}
