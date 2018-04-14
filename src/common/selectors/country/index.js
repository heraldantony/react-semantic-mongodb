// @flow
import { createSelector } from 'reselect'
import type { State as CountryState } from 'reducers/country'

import _ from 'lodash'

/**
 * Direct selector to the Country domain
 */
const selectCountryDomain = (state): CountryState => state['country']

/**
 * Other specific selectors
 */

/**
 * Default selector used by add/edit Country
 */

const makeSelectCountry = () =>
	createSelector(selectCountryDomain, substate => {
		return {
			country: substate['country'],
			message: substate['message'],
			error: substate['error']
		}
	})
const makeSelectCountryInitialValues = () =>
	createSelector(selectCountryDomain, substate => {
		return substate['country']
	})
const makeSelectSearchCountry = () =>
	createSelector(selectCountryDomain, substate => {
		return {
			country: substate['country'],
			countries: substate['countries'],
			message: substate['message'],
			error: substate['error']
		}
	})
const makeSelectOtherSearchCountry = () =>
	createSelector(selectCountryDomain, substate => {
		return {
			otherSearchCountry: substate['otherSearchCountry'],
			otherSearchCountries: substate['Countries'],
			message: substate['message'],
			error: substate['error']
		}
	})

export {
	selectCountryDomain,
	makeSelectCountry,
	makeSelectCountryInitialValues,
	makeSelectSearchCountry,
	makeSelectOtherSearchCountry
}
