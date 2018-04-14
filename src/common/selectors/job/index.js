// @flow
import { createSelector } from 'reselect'
import type { State as JobState } from 'reducers/job'

import _ from 'lodash'

/**
 * Direct selector to the Job domain
 */
const selectJobDomain = (state): JobState => state['job']

/**
 * Other specific selectors
 */

/**
 * Default selector used by add/edit Job
 */

const makeSelectJob = () =>
	createSelector(selectJobDomain, substate => {
		return {
			job: substate['job'],
			message: substate['message'],
			error: substate['error']
		}
	})
const makeSelectJobInitialValues = () =>
	createSelector(selectJobDomain, substate => {
		return substate['job']
	})
const makeSelectSearchJob = () =>
	createSelector(selectJobDomain, substate => {
		return {
			job: substate['job'],
			jobs: substate['jobs'],
			message: substate['message'],
			error: substate['error']
		}
	})
const makeSelectOtherSearchJob = () =>
	createSelector(selectJobDomain, substate => {
		return {
			otherSearchJob: substate['otherSearchJob'],
			otherSearchJobs: substate['Jobs'],
			message: substate['message'],
			error: substate['error']
		}
	})

export {
	selectJobDomain,
	makeSelectJob,
	makeSelectJobInitialValues,
	makeSelectSearchJob,
	makeSelectOtherSearchJob
}
