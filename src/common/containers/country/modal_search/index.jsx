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
import { COUNTRY_SEARCH } from 'actions/country'
import { createStructuredSelector } from 'reselect'
import { makeSelectSearchCountry } from 'selectors/country'
import ModalSearch from 'components/search/ModalSearch'

const tableFields = [{ headerName: 'Country Name', fieldName: 'countryName' }]
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
	itemName: 'country',
	itemsName: 'countries',
	itemNameCaps: 'Country'
}
class Search extends Component {
	render () {
		const props = {
			...this.props,
			...fixedProps,
			buttonIconName: 'object group',
			title: 'Set Country Parent',
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
		searchProps: makeSelectSearchCountry()
	})

const mapDispatchToProps = dispatch => ({
	async search (data) {
		// if(data.action == "search") {}
		console.log(data)
		return dispatch(COUNTRY_SEARCH(data))
	},
	setParent (parent) {
		console.log('parent=', parent)
	}
})

export default reduxForm({ form: 'COUNTRY_SEARCH_FORM' })(
	connect(mapStateToProps, mapDispatchToProps)(Search)
)
