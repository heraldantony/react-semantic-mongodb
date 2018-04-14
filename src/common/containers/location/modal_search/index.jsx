// @flow
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import type { FormProps } from 'redux-form'
import PropTypes from 'prop-types'
import {
	Grid,
	Header,
	Form,
	Button,
	Icon,
	Label,
	Menu,
	Table
} from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import InputField from 'components/elements/InputField'
import { LOCATION_SEARCH } from 'actions/location'
import { createStructuredSelector } from 'reselect'
import { makeSelectSearchLocation } from 'selectors/location'
import ModalSearch from 'components/search/ModalSearch'

const tableFields = [
	{ headerName: 'Street Address', fieldName: 'streetAddress' },

	{ headerName: 'Postal Code', fieldName: 'postalCode' },

	{ headerName: 'City', fieldName: 'city' },

	{ headerName: 'State Province', fieldName: 'stateProvince' }
]
const searchFields = [
	{
		placeholder: 'Search',
		name: 'search',
		label: 'Search',
		component: InputField
	}
]

const fixedProps = {
	tableFields: tableFields,
	searchFields: searchFields,
	itemName: 'location',
	itemsName: 'locations',
	itemNameCaps: 'Location'
}
class Search extends Component {
	render () {
		const props = {
			...this.props,
			...fixedProps,
			buttonIconName: 'object group',
			title: 'Set Location Parent',
			buttonLabel: 'Set as Parent',
			buttonAction: this.props.setParent
		}
		return <ModalSearch {...props} />
	}
}
Search.propTypes = {
	setParent: PropTypes.func,
	search: PropTypes.func
}

const mapStateToProps = state =>
	createStructuredSelector({
		searchProps: makeSelectSearchLocation()
	})

const mapDispatchToProps = dispatch => ({
	async search (data) {
		// if(data.action == "search") {}
		console.log(data)
		return dispatch(LOCATION_SEARCH(data))
	},
	setParent (parent) {
		console.log('parent=', parent)
	}
})

export default reduxForm({ form: 'LOCATION_SEARCH_FORM' })(
	connect(mapStateToProps, mapDispatchToProps)(Search)
)
