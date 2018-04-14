// @flow
import { createSelector } from 'reselect'
import type { State as EmployeeState } from 'reducers/employee'

import _ from 'lodash'

/**
 * Direct selector to the Employee domain
 */
const selectEmployeeDomain = (state): EmployeeState => state['employee']

/**
 * Other specific selectors
 */

/**
 * Default selector used by add/edit Employee
 */

const makeSelectEmployee = () =>
	createSelector(selectEmployeeDomain, substate => {
		return {
			employee: substate['employee'],
			message: substate['message'],
			error: substate['error']
		}
	})
const makeSelectEmployeeInitialValues = () =>
	createSelector(selectEmployeeDomain, substate => {
		return substate['employee']
	})
const makeSelectSearchEmployee = () =>
	createSelector(selectEmployeeDomain, substate => {
		return {
			employee: substate['employee'],
			employees: substate['employees'],
			message: substate['message'],
			error: substate['error']
		}
	})
const makeSelectOtherSearchEmployee = () =>
	createSelector(selectEmployeeDomain, substate => {
		return {
			otherSearchEmployee: substate['otherSearchEmployee'],
			otherSearchEmployees: substate['Employees'],
			message: substate['message'],
			error: substate['error']
		}
	})

export {
	selectEmployeeDomain,
	makeSelectEmployee,
	makeSelectEmployeeInitialValues,
	makeSelectSearchEmployee,
	makeSelectOtherSearchEmployee
}
