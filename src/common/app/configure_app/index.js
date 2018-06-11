// @flow
// Redux stuff
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
// // Application
import createSagaMiddleware from 'redux-saga'
import createReducer from 'common/reducers'
import { history, getRoutes } from 'routing'
import getSagaList from 'common/sagas'

import { injectSagaFactory } from 'common/utils/sagaInjectors'
import {
	DAEMON,
	ONCE_TILL_UNMOUNT,
	RESTART_ON_REMOUNT
} from 'common/utils/constants'

const sagaMiddleware = createSagaMiddleware()

/**
 * Configure application store
 * @param  {Object} initialState - preloadedState
 * @return {Object} - configured store
 */
export const configureStore = (initialState: Object) => {
	const middlewares = [sagaMiddleware, routerMiddleware(history)]

	const enhancers = [applyMiddleware(...middlewares)]

	// If Redux DevTools Extension is installed use it, otherwise use Redux compose
	/* eslint-disable no-underscore-dangle */
	const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    		// TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
    		// Prevent recomputing reducers for `replaceReducer`
    		shouldHotReload: false
    	})
    	: compose
	/* eslint-enable */

	const store = createStore(
		createReducer(),
		initialState,
		composeEnhancers(...enhancers)
	)

	// Extensions
	store.runSaga = sagaMiddleware.run
	store.injectedReducers = {} // Reducer registry
	store.injectedSagas = {} // Saga registry

	// Make reducers hot reloadable, see http://mxs.is/googmo
	/* istanbul ignore next */
	if (module.hot) {
		module.hot.accept('common/reducers', () => {
			store.replaceReducer(createReducer(store.injectedReducers))
		})
	}

	return store
}

/**
 * Return configured history, routes and store
 * @param  {Object} initialState
 * @return {Object} Object containting configured store, routes, history
 */
export default (initialState: Object) => {
	const routes = getRoutes()
	const store = configureStore(initialState)
	const sagas = getSagaList()
	sagas.forEach(saga => {
		injectSagaFactory(store, true)(
			saga.name,
			{ saga: saga.saga, mode: ONCE_TILL_UNMOUNT },
			{}
		)
	})
	return {
		store,
		routes,
		history
	}
}
