// @flow
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import type { FormProps } from 'redux-form'
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
	Table
} from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import InputField from 'components/elements/InputField'
import { JOB_SEARCH } from 'actions/job'
import { createStructuredSelector } from 'reselect'
import { makeSelectSearchJob } from 'selectors/job'

type Props = FormProps;

const headerNames = ['Job Title', 'Min Salary', 'Max Salary']
const searchFields = [
	{
		placeholder: 'Search',
		name: 'search',
		label: 'Search',
		component: InputField
	}
]
class JobSearch extends Component<Props, State> {
	constructor (props) {
		super(props)
		this.state = {
			activePage: 1,
			pageSize: PAGE_SIZE,
			totalItemsCount: 0,
			search: ''
		}
	}
	render () {
		const { handleSubmit, searchProps, submitSucceeded } = this.props
		var handlePageChange = this.props.handlePageChange.bind(this)
		const { activePage, pageSize, totalItemsCount } = this.state
		var searchFn = this.props.search.bind(this)
		return (
			<div>
				<Helmet>
					<title>Jobs</title>
				</Helmet>
				<Grid columns={1}>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Button>
								<Link
									to={{
										pathname: `/addJob`,
										state: {}
									}}
								>
                  Add Job
								</Link>
							</Button>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Form>
								{searchFields.map((a, i) => <Field key={i} {...a} />)}

								<div style={{ textAlign: 'right' }}>
									<Button
										content="Search"
										icon="search"
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
				{searchProps && searchProps.jobs.length ? (
					<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Job Title</Table.HeaderCell>

								<Table.HeaderCell>Min Salary</Table.HeaderCell>

								<Table.HeaderCell>Max Salary</Table.HeaderCell>

								<Table.HeaderCell>&nbsp;</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							{searchProps.jobs.map((job, idx) => {
								return (
									<Table.Row key={'job_' + idx}>
										<Table.Cell>{job['jobTitle']}</Table.Cell>

										<Table.Cell>{job['minSalary']}</Table.Cell>

										<Table.Cell>{job['maxSalary']}</Table.Cell>

										<Table.Cell>
											<Link to={'/editJob/' + job['_id']}>
												<Button icon>
													<Icon name="edit" />
												</Button>
											</Link>
											<Link to={'/viewJob/' + job['_id']}>
												<Button icon>
													<Icon name="unhide" />
												</Button>
											</Link>
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
					submitSucceeded && 'No Jobs found'
				)}
			</div>
		)
	}
}
const mapStateToProps = state =>
	createStructuredSelector({
		searchProps: makeSelectSearchJob()
	})

const mapDispatchToProps = dispatch => ({
	async search (data) {
		// if(data.action == "search") {}
		console.log(data)
		this.setState({ activePage: 1, search: data.search })
		return dispatch(JOB_SEARCH(data))
	},
	handlePageChange (pageNumber) {
		console.log(`active page is ${pageNumber}`)
		this.setState({ activePage: pageNumber })
		return dispatch(
			JOB_SEARCH({
				search: this.state.search,
				pageNumber: pageNumber,
				pageSize: this.state.pageSize
			})
		)
	}
})

export default reduxForm({ form: 'JOB_SEARCH_FORM' })(
	connect(mapStateToProps, mapDispatchToProps)(JobSearch)
)
