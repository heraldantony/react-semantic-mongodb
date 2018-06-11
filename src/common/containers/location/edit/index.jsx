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
	getLocation,
	saveLocation,
	setCountry as setCountryAction,
	deleteCountry as deleteCountryAction
} from 'common/actions/location'
import { createStructuredSelector } from 'reselect'

import CountryModalSearch from 'containers/country/modal_search'

import {
	makeSelectLocation,
	makeSelectLocationInitialValues
} from 'common/selectors/location'

type Props = {
  save: (data: Object) => Promise
} & FormProps;

class LocationEdit extends Component<Props, State> {
	componentDidMount () {
		if (this.props.match.params && this.props.match.params.id) {
			this.props.dispatch(getLocation(this.props.match.params.id))
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
				placeholder: 'Street Address',
				name: 'streetAddress',
				label: 'Street Address',

				component: InputField
			},

			{
				placeholder: 'Postal Code',
				name: 'postalCode',
				label: 'Postal Code',

				component: InputField
			},

			{
				placeholder: 'City',
				name: 'city',
				label: 'City',

				component: InputField
			},

			{
				placeholder: 'State Province',
				name: 'stateProvince',
				label: 'State Province',

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

		const country = this.props.locationProps.location.country
		var setCountry = this.props.setCountry.bind(this)
		var deleteCountry = this.props.deleteCountry.bind(this)

		return (
			<div>
				<Helmet>
					<title>Location</title>
				</Helmet>
				<Grid columns={1}>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Button>
								<Link
									to={{
										pathname: `/location`,
										state: {}
									}}
								>
                  Search Location
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
									<p>Location saved</p>
								</Message>
							)}
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Form>
								<div style={{ textAlign: 'left' }}>
									{country &&
                    country['_id'] && (
										<Button.Group>
											<Button as={Link} to={'/viewCountry/' + country['_id']}>
												{country['countryName']}
											</Button>
											<Button icon onClick={deleteCountry}>
												<Icon name="delete" />
											</Button>
										</Button.Group>
									)}
								</div>

								<div style={{ textAlign: 'right' }}>
									<CountryModalSearch
										triggerButtonContent="Set Country"
										title="Set Country"
										buttonLabel="Set Country"
										buttonAction={setCountry}
										closeIcon
									>
										<Header icon="archive" content="Set Country" />
										<Modal.Content>
											<p>Set Country</p>
										</Modal.Content>
										<Modal.Actions>
											<Button color="red">
												<Icon name="remove" /> No
											</Button>
											<Button color="green">
												<Icon name="checkmark" /> Yes
											</Button>
										</Modal.Actions>
									</CountryModalSearch>
								</div>

								{fields.map((a, i) => <Field key={i} {...a} />)}
								<Message error header="Add Failed" content={error} />
								<div style={{ textAlign: 'right' }}>
									<Button
										content="Save"
										icon="save"
										loading={submitting}
										onClick={handleSubmit(values =>
											this.props.save({
												...values,

												country: country,

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
		locationProps: makeSelectLocation(),
		initialValues: makeSelectLocationInitialValues()
	})

const mapDispatchToProps = dispatch => ({
	async save (data) {
		console.log(data)
		return new Promise((resolve, reject) => {
			return dispatch(
				saveLocation(data, 'LOCATION_EDIT_FORM', { resolve, reject })
			)
		})
	},

	setCountry (country) {
		console.log('setCountry')
		return dispatch(setCountryAction(country))
	},
	deleteCountry (country) {
		return dispatch(deleteCountryAction(country))
	}
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(
	reduxForm({ form: 'LOCATION_EDIT_FORM', enableReinitialize: true })(
		LocationEdit
	)
)
