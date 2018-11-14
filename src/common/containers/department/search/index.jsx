// @flow
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import type { FormProps } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Pagination from 'components/Pagination/Pagination'
import { PAGE_SIZE, PAGE_RANGE_DISPLAYED } from 'common/constants'
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
import { searchDepartment, deleteDepartment } from 'common/actions/department'
import { createStructuredSelector } from 'reselect'
import { makeSelectSearchDepartment } from 'common/selectors/department'
import ConfirmationDialog from 'common/components/ConfirmationDialog'

type Props = {
  searchSubmit: (data: Object) => Promise,
  handlePageChange: (pageNumber: Object) => Promise
} & FormProps;

const headerNames = ['Department Name']

class DepartmentSearch extends Component<Props, State> {
	constructor (props) {
		super(props)
		this.state = {
			activePage: 1,
			pageSize: PAGE_SIZE,
			search: ''
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
		const {
			handleSubmit,
			searchProps,
			submitSucceeded,
			submitting,
			error,
			invalid
		} = this.props
		const totalItemsCount = (searchProps && searchProps.totalItemsCount) || 0
		var handlePageChange = this.props.handlePageChange.bind(this)
		const { activePage, pageSize } = this.state
		var searchFn = this.props.searchSubmit.bind(this)
		var deleteEntity = this.props.deleteEntity.bind(this)
		return (
			<div>
				<Helmet>
					<title>Departments</title>
				</Helmet>
				<Grid columns={1}>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Button>
								<Link
									to={{
										pathname: `/addDepartment`,
										state: {}
									}}
								>
                  Add Department
								</Link>
							</Button>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Form error={invalid}>
								{searchFields.map((a, i) => <Field key={i} {...a} />)}
								<Message error header="Search Failed" content={error} />
								<div style={{ textAlign: 'right' }}>
									<Button
										className="search-button"
										content="Search"
										icon="search"
										loading={submitting}
										onClick={handleSubmit(values =>
											searchFn({
												...values,
												action: 'search',
												pageNumber: 1,
												pageSize: pageSize
											})
										)}
									/>
								</div>
							</Form>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				{searchProps && searchProps.departments.length ? (
					<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Department Name</Table.HeaderCell>

								<Table.HeaderCell>&nbsp;</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							{searchProps.departments.map((department, idx) => {
								return (
									<Table.Row key={'department_' + idx}>
										<Table.Cell>{department['departmentName']}</Table.Cell>

										<Table.Cell>
											<Link to={'/editDepartment/' + department['_id']}>
												<Button icon>
													<Icon name="edit" />
												</Button>
											</Link>
											<Link to={'/viewDepartment/' + department['_id']}>
												<Button icon>
													<Icon name="unhide" />
												</Button>
											</Link>

											<ConfirmationDialog
												title={'Delete Department'}
												content={
													'Are you sure you want to delete Department with Id ' +
                          department['_id'] +
                          ' and departmentName ' +
                          department['departmentName']
												}
												triggerButtonContent={<Icon name="trash" />}
												okFunction={() => deleteEntity(department)}
											/>
										</Table.Cell>
									</Table.Row>
								)
							})}
						</Table.Body>

						<Table.Footer>
							<Table.Row>
								<Table.HeaderCell colSpan="3">
									<Pagination
										activePage={activePage}
										itemsCountPerPage={pageSize}
										totalItemsCount={totalItemsCount}
										pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
										onChange={handlePageChange}
									/>
								</Table.HeaderCell>
							</Table.Row>
						</Table.Footer>
					</Table>
				) : (
					submitSucceeded && 'No Departments found'
				)}
			</div>
		)
	}
}
const mapStateToProps = state =>
	createStructuredSelector({
		searchProps: makeSelectSearchDepartment()
	})

const mapDispatchToProps = dispatch => ({
	searchSubmit (data) {
		// if(data.action == "search") {}
		console.log(data)
		return new Promise((resolve, reject) => {
			this.setState({ activePage: 1, search: data.search })

			return dispatch(
				searchDepartment(data, 'DEPARTMENT_SEARCH_FORM', { resolve, reject })
			)
		})
	},
	handlePageChange (pageNumber) {
		console.log(`active page is ${pageNumber}`)
		return new Promise((resolve, reject) => {
			this.setState({ activePage: pageNumber })
			return dispatch(
				searchDepartment(
					{
						search: this.state.search,
						pageNumber: pageNumber,
						pageSize: this.state.pageSize
					},
					'DEPARTMENT_SEARCH_FORM',
					{ resolve, reject }
				)
			)
		})
	},
	deleteEntity (department) {
		console.log('Deleting Department with id ', department._id)
		return dispatch(deleteDepartment(department._id))
	}
})
const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default reduxForm({ form: 'DEPARTMENT_SEARCH_FORM' })(
	compose(withConnect)(DepartmentSearch)
)
