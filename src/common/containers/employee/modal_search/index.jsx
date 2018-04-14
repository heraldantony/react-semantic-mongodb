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
import { EMPLOYEE_SEARCH } from 'actions/employee'
import { createStructuredSelector } from 'reselect'
import { makeSelectSearchEmployee } from 'selectors/employee'
import ModalSearch from 'components/search/ModalSearch'

const tableFields = [
	{ headerName: 'First Name', fieldName: 'firstName' },

	{ headerName: 'Last Name', fieldName: 'lastName' },

	{ headerName: 'Email', fieldName: 'email' },

	{ headerName: 'Phone Number', fieldName: 'phoneNumber' },

	{ headerName: 'Hire Date', fieldName: 'hireDate' },

	{ headerName: 'Salary', fieldName: 'salary' },

	{ headerName: 'Commission Pct', fieldName: 'commissionPct' }
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
	itemName: 'employee',
	itemsName: 'employees',
	itemNameCaps: 'Employee'
}
class Search extends Component {
	render () {
		const props = {
			...this.props,
			...fixedProps,
			buttonIconName: 'object group',
			title: 'Set Employee Parent',
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
		searchProps: makeSelectSearchEmployee()
	})

const mapDispatchToProps = dispatch => ({
	async search (data) {
		// if(data.action == "search") {}
		console.log(data)
		return dispatch(EMPLOYEE_SEARCH(data))
	},
	setParent (parent) {
		console.log('parent=', parent)
	}
})

export default reduxForm({ form: 'EMPLOYEE_SEARCH_FORM' })(
	connect(mapStateToProps, mapDispatchToProps)(Search)
)
