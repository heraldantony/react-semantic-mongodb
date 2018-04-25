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
import { JOB_SEARCH } from 'actions/job'
import { createStructuredSelector } from 'reselect'
import { makeSelectSearchJob } from 'selectors/job'
import ModalSearch from 'components/search/ModalSearch'
import { PAGE_SIZE, PAGE_RANGE_DISPLAYED } from 'common/constants'

const tableFields = [
	{ headerName: 'Job Title', fieldName: 'jobTitle' },

	{ headerName: 'Min Salary', fieldName: 'minSalary' },

	{ headerName: 'Max Salary', fieldName: 'maxSalary' }
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
	itemName: 'job',
	itemsName: 'jobs',
	itemNameCaps: 'Job'
}
class Search extends Component {
	constructor (props) {
		super(props)
		this.state = {
			activePage: 1,
			pageSize: PAGE_SIZE,
			totalItemsCount: 0,
			searchString: ''
		}
	}
	render () {
		var handlePageChange = this.props.handlePageChange.bind(this)
		var search = this.props.search.bind(this)
		const props = {
			...fixedProps,
			buttonIconName: 'object group',
			title: 'Set Job Parent',
			...this.props,
			handlePageChange,
			search
		}
		return <ModalSearch {...props} />
	}
}
Search.propTypes = {
	setParent: PropTypes.func,
	search: PropTypes.func,
	handlePageChange: PropTypes.func
}

const mapStateToProps = state =>
	createStructuredSelector({
		searchProps: makeSelectSearchJob()
	})

const mapDispatchToProps = dispatch => ({
	async search (data) {
		// if(data.action == "search") {}
		console.log(data)
		this.setState({ searchString: data.search })
		return dispatch(JOB_SEARCH(data))
	},
	setParent (parent) {
		console.log('parent=', parent)
	},
	handlePageChange (pageNumber) {
		console.log(`active page is ${pageNumber}`)
		this.setState({ activePage: pageNumber })
		return dispatch(
			JOB_SEARCH({
				search: this.state.searchString,
				pageNumber: pageNumber,
				pageSize: this.state.pageSize
			})
		)
	}
})

export default reduxForm({ form: 'JOB_SEARCH_FORM' })(
	connect(mapStateToProps, mapDispatchToProps)(Search)
)