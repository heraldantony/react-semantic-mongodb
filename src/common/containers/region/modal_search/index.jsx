// @flow
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
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
	Table,
	Message
} from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import InputField from 'components/elements/InputField'
import { searchRegion } from 'common/actions/region'
import { createStructuredSelector } from 'reselect'
import { makeSelectSearchRegion } from 'common/selectors/region'
import ModalSearch from 'components/search/ModalSearch'
import { PAGE_SIZE, PAGE_RANGE_DISPLAYED } from 'common/constants'

const tableFields = [{ headerName: 'Region Name', fieldName: 'regionName' }]

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
		const searchFields = [
			{
				name: 'non_field_errors',
				component ({ meta: { error } }) {
					return error ? (
						<Message error>
							<Message.Header />
							<p>{error}</p>
						</Message>
					) : null
				}
			},
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
		var handlePageChange = this.props.handlePageChange.bind(this)
		var searchFn = this.props.searchSubmit.bind(this)
		const props = {
			...fixedProps,
			buttonIconName: 'object group',
			title: 'Set Region Parent',
			...this.props,
			handlePageChange,
			search: searchFn
		}
		return <ModalSearch {...props} />
	}
}
Search.propTypes = {
	setParent: PropTypes.func,
	searchSubmit: PropTypes.func,
	handlePageChange: PropTypes.func
}

const mapStateToProps = state =>
	createStructuredSelector({
		searchProps: makeSelectSearchRegion()
	})

const mapDispatchToProps = dispatch => ({
	searchSubmit (data) {
		// if(data.action == "search") {}
		console.log(data)
		return new Promise((resolve, reject) => {
			this.setState({ searchString: data.search })
			return dispatch(
				searchRegion(data, 'REGION_SEARCH_FORM', { resolve, reject })
			)
		})
	},
	setParent (parent) {
		console.log('parent=', parent)
	},
	handlePageChange (pageNumber) {
		console.log(`active page is ${pageNumber}`)
		this.setState({ activePage: pageNumber })
		return new Promise((resolve, reject) => {
			this.setState({ activePage: pageNumber })
			return dispatch(
				searchRegion(
					{
						search: this.state.search,
						pageNumber: pageNumber,
						pageSize: this.state.pageSize
					},
					'REGION_SEARCH_FORM',
					{ resolve, reject }
				)
			)
		})
	}
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default reduxForm({ form: 'REGION_SEARCH_FORM' })(
	compose(withConnect)(Search)
)
