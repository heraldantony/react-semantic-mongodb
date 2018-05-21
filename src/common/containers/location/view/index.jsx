// @flow
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import type { FormProps } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { Grid, Header, Form, Button, Table, Message } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import { DateTime } from 'react-datetime'
import InputField from 'components/elements/InputField'
import TextAreaField from 'components/elements/TextAreaField'
import { getLocation } from 'common/actions/location'
import { createStructuredSelector } from 'reselect'
import {
	makeSelectLocation,
	makeSelectLocationInitialValues
} from 'common/selectors/location'
import injectSaga from 'common/utils/injectSaga'
import { getLocation as getLocationSaga } from './saga'

type Props = FormProps;

const fields = [
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
class LocationView extends Component<Props, State> {
	componentDidMount () {
		if (this.props.match.params && this.props.match.params.id) {
			this.props.dispatch(getLocation(this.props.match.params.id))
		}
	}
	render () {
		const { initialValues } = this.props
		const { error, message } = this.props.location
		return (
			<div>
				<Helmet>
					<title>Location</title>
				</Helmet>
				{error && (
					<Message error>
						<Message.Header />
						<p>{error}</p>
					</Message>
				)}
				{message && (
					<Message>
						<Message.Header />
						<p>{message}</p>
					</Message>
				)}
				{!error && (
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
								<Button>
									<Link
										to={{
											pathname: `/editLocation/${initialValues._id}`,
											state: {}
										}}
									>
                    Edit Location
									</Link>
								</Button>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row centered>
							<Grid.Column width={16}>
								<h3> Street Address</h3>
								<p>{initialValues['streetAddress']}</p>

								<h3> Postal Code</h3>
								<p>{initialValues['postalCode']}</p>

								<h3> City</h3>
								<p>{initialValues['city']}</p>

								<h3> State Province</h3>
								<p>{initialValues['stateProvince']}</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				)}
			</div>
		)
	}
}
const mapStateToProps = state =>
	createStructuredSelector({
		initialValues: makeSelectLocationInitialValues(),
		location: makeSelectLocation()
	})

const withConnect = connect(mapStateToProps)

const withSaga = injectSaga({ key: 'getLocation', saga: getLocationSaga })

export default compose(withSaga, withConnect)(LocationView)
