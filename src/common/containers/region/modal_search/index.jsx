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
import { REGION_SEARCH } from 'actions/region'
import { createStructuredSelector } from 'reselect'
import { makeSelectSearchRegion } from 'selectors/region'
import ModalSearch from 'components/search/ModalSearch'

const tableFields = [{ headerName: 'Region Name', fieldName: 'regionName' }]
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
	itemName: 'region',
	itemsName: 'regions',
	itemNameCaps: 'Region'
}
class Search extends Component {
	render () {
		const props = {
			...this.props,
			...fixedProps,
			buttonIconName: 'object group',
			title: 'Set Region Parent',
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
		searchProps: makeSelectSearchRegion()
	})

const mapDispatchToProps = dispatch => ({
	async search (data) {
		// if(data.action == "search") {}
		console.log(data)
		return dispatch(REGION_SEARCH(data))
	},
	setParent (parent) {
		console.log('parent=', parent)
	}
})

export default reduxForm({ form: 'REGION_SEARCH_FORM' })(
	connect(mapStateToProps, mapDispatchToProps)(Search)
)
