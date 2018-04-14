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
import { COUNTRY_SEARCH } from 'actions/country'
import { createStructuredSelector } from 'reselect'
import { makeSelectSearchCountry } from 'selectors/country'

type Props = FormProps;

const headerNames = ['Country Name']
const searchFields = [
	{
		placeholder: 'Search',
		name: 'search',
		label: 'Search',
		component: InputField
	}
]
class CountrySearch extends Component<Props, State> {
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
					<title>Countries</title>
				</Helmet>
				<Grid columns={1}>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Button>
								<Link
									to={{
										pathname: `/addCountry`,
										state: {}
									}}
								>
                  Add Country
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
				{searchProps && searchProps.countries.length ? (
					<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Country Name</Table.HeaderCell>

								<Table.HeaderCell>&nbsp;</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							{searchProps.countries.map((country, idx) => {
								return (
									<Table.Row key={'country_' + idx}>
										<Table.Cell>{country['countryName']}</Table.Cell>

										<Table.Cell>
											<Link to={'/editCountry/' + country['_id']}>
												<Button icon>
													<Icon name="edit" />
												</Button>
											</Link>
											<Link to={'/viewCountry/' + country['_id']}>
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
					submitSucceeded && 'No Countries found'
				)}
			</div>
		)
	}
}
const mapStateToProps = state =>
	createStructuredSelector({
		searchProps: makeSelectSearchCountry()
	})

const mapDispatchToProps = dispatch => ({
	async search (data) {
		// if(data.action == "search") {}
		console.log(data)
		this.setState({ activePage: 1, search: data.search })
		return dispatch(COUNTRY_SEARCH(data))
	},
	handlePageChange (pageNumber) {
		console.log(`active page is ${pageNumber}`)
		this.setState({ activePage: pageNumber })
		return dispatch(
			COUNTRY_SEARCH({
				search: this.state.search,
				pageNumber: pageNumber,
				pageSize: this.state.pageSize
			})
		)
	}
})

export default reduxForm({ form: 'COUNTRY_SEARCH_FORM' })(
	connect(mapStateToProps, mapDispatchToProps)(CountrySearch)
)
