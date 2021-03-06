// @flow
import { createSelector } from 'reselect'
import type { State as TaskState } from 'common/reducers/task'

import _ from 'lodash'

/**
 * Direct selector to the Task domain
 */
const selectTaskDomain = (state): TaskState => state['task']

/**
 * Other specific selectors
 */

/**
 * Default selector used by add/edit Task
 */

const makeSelectTask = () =>
	createSelector(selectTaskDomain, substate => {
		return {
			task: substate['task'],
			message: substate['message'],
			error: substate['error']
		}
	})
const makeSelectTaskInitialValues = () =>
	createSelector(selectTaskDomain, substate => {
		return substate['task']
	})
const makeSelectSearchTask = () =>
	createSelector(selectTaskDomain, substate => {
		return {
			task: substate['task'],
			tasks: substate['tasks'],
			totalItemsCount: substate['totalItemsCount'],
			message: substate['message'],
			error: substate['error']
		}
	})
const makeSelectOtherSearchTask = () =>
	createSelector(selectTaskDomain, substate => {
		return {
			otherSearchTask: substate['otherSearchTask'],
			otherSearchTasks: substate['Tasks'],
			otherSearchTotalItemsCount: substate['otherSearchTotalItemsCount'],
			message: substate['message'],
			error: substate['error']
		}
	})

export {
	selectTaskDomain,
	makeSelectTask,
	makeSelectTaskInitialValues,
	makeSelectSearchTask,
	makeSelectOtherSearchTask
}
