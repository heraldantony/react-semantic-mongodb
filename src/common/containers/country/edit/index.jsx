// @flow
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import type { FormProps } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

import {
	Grid,
	Header,
	Form,
	Button,
	Table,
	Icon,
	Modal,
	Message
} from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import InputField from 'components/elements/InputField'
import { DateTime } from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import TextAreaField from 'components/elements/TextAreaField'
import DateTimeField from 'components/elements/DateTimeField'
import {
	getCountry,
	saveCountry,
	setRegion as setRegionAction,
	deleteRegion as deleteRegionAction
} from 'common/actions/country'
import { createStructuredSelector } from 'reselect'

import RegionModalSearch from 'containers/region/modal_search'

import {
	makeSelectCountry,
	makeSelectCountryInitialValues
} from 'common/selectors/country'

type Props = {
  save: (data: Object) => Promise
} & FormProps;

class CountryEdit extends Component<Props, State> {
	componentDidMount () {
		if (this.props.match.params && this.props.match.params.id) {
			this.props.dispatch(getCountry(this.props.match.params.id))
		}
	}

	render () {
		const fields = [
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
				placeholder: 'Country Name',
				name: 'countryName',
				label: 'Country Name',

				component: InputField
			}
		]
		const {
			handleSubmit,
			submitting,
			submitSucceeded,
			error,
			warning,
			invalid
		} = this.props

		const region = this.props.countryProps.country.region
		var setRegion = this.props.setRegion.bind(this)
		var deleteRegion = this.props.deleteRegion.bind(this)

		return (
			<div>
				<Helmet>
					<title>Country</title>
				</Helmet>
				<Grid columns={1}>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Button>
								<Link
									to={{
										pathname: `/country`,
										state: {}
									}}
								>
                  Search Country
								</Link>
							</Button>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							{error && (
								<Message error>
									<Message.Header />
									<p>{error}</p>
								</Message>
							)}
							{warning && (
								<Message warning>
									<Message.Header />
									<p>{warning}</p>
								</Message>
							)}
							{submitSucceeded &&
                !submitting && (
								<Message>
									<Message.Header />
									<p>Country saved</p>
								</Message>
							)}
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Form>
								<div style={{ textAlign: 'left' }}>
									{region &&
                    region['_id'] && (
										<Button.Group>
											<Button as={Link} to={'/viewRegion/' + region['_id']}>
												{region['regionName']}
											</Button>
											<Button icon onClick={() => deleteRegion(region)}>
												<Icon name="delete" />
											</Button>
										</Button.Group>
									)}
								</div>

								<div style={{ textAlign: 'right' }}>
									<RegionModalSearch
										triggerButtonContent="Set Region"
										title="Set Region"
										buttonLabel="Set Region"
										buttonAction={setRegion}
										closeIcon
									>
										<Header icon="archive" content="Set Region" />
										<Modal.Content>
											<p>Set Region</p>
										</Modal.Content>
										<Modal.Actions>
											<Button color="red">
												<Icon name="remove" /> No
											</Button>
											<Button color="green">
												<Icon name="checkmark" /> Yes
											</Button>
										</Modal.Actions>
									</RegionModalSearch>
								</div>

								{fields.map((a, i) => <Field key={i} {...a} />)}
								<Message error header="Add Failed" content={error} />
								<div style={{ textAlign: 'right' }}>
									<Button
										className="save-button"
										content="Save"
										icon="save"
										loading={submitting}
										onClick={handleSubmit(values =>
											this.props.save({
												...values,

												region: region,

												action: 'save'
											})
										)}
									/>
								</div>
							</Form>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}
const mapStateToProps = state =>
	createStructuredSelector({
		countryProps: makeSelectCountry(),
		initialValues: makeSelectCountryInitialValues()
	})

const mapDispatchToProps = dispatch => ({
	async save (data) {
		console.log(data)
		return new Promise((resolve, reject) => {
			return dispatch(
				saveCountry(data, 'COUNTRY_EDIT_FORM', { resolve, reject })
			)
		})
	},

	setRegion (region) {
		console.log('setRegion')
		return dispatch(setRegionAction(region))
	},
	deleteRegion (region) {
		return dispatch(deleteRegionAction(region))
	}
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(
	reduxForm({ form: 'COUNTRY_EDIT_FORM', enableReinitialize: true })(
		CountryEdit
	)
)
