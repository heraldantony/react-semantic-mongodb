// @flow
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'

import type { State as AuthState } from 'reducers/auth'
import type { State as LayoutState } from 'reducers/layout'
import type { State as EntitiesLinksState } from 'reducers/links'

import { layout } from './layout'
import { links } from './links'
import { auth } from './auth'
import { region } from './region'
import { country } from './country'
import { location } from './location'
import { department } from './department'
import { employee } from './employee'
import { job } from './job'
import { task } from './task'
// Root reducer
export default combineReducers({
	layout,
	auth,
	region,
	country,
	location,
	department,
	employee,
	job,
	task,
	entities: combineReducers({
		links
	}),
	routing: routerReducer,
	form: reduxFormReducer
})

export type GlobalState = { layout: LayoutState } & { auth: AuthState } & {
  entities: { links: EntitiesLinksState }
};
