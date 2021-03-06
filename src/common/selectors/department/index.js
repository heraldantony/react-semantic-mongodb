// @flow
import { createSelector } from 'reselect'
import type { State as DepartmentState } from 'common/reducers/department'

import _ from 'lodash'

/**
 * Direct selector to the Department domain
 */
const selectDepartmentDomain = (state): DepartmentState => state['department']

/**
 * Other specific selectors
 */

/**
 * Default selector used by add/edit Department
 */

const makeSelectDepartment = () =>
	createSelector(selectDepartmentDomain, substate => {
		return {
			department: substate['department'],
			message: substate['message'],
			error: substate['error']
		}
	})
const makeSelectDepartmentInitialValues = () =>
	createSelector(selectDepartmentDomain, substate => {
		return substate['department']
	})
const makeSelectSearchDepartment = () =>
	createSelector(selectDepartmentDomain, substate => {
		return {
			department: substate['department'],
			departments: substate['departments'],
			totalItemsCount: substate['totalItemsCount'],
			message: substate['message'],
			error: substate['error']
		}
	})
const makeSelectOtherSearchDepartment = () =>
	createSelector(selectDepartmentDomain, substate => {
		return {
			otherSearchDepartment: substate['otherSearchDepartment'],
			otherSearchDepartments: substate['Departments'],
			otherSearchTotalItemsCount: substate['otherSearchTotalItemsCount'],
			message: substate['message'],
			error: substate['error']
		}
	})

export {
	selectDepartmentDomain,
	makeSelectDepartment,
	makeSelectDepartmentInitialValues,
	makeSelectSearchDepartment,
	makeSelectOtherSearchDepartment
}
