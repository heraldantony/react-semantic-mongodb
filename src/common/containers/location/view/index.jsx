// @flow
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import type { FormProps } from 'redux-form'
import { Grid, Header, Form, Button, Table } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { DateTime } from 'react-datetime'
import InputField from 'components/elements/InputField'
import TextAreaField from 'components/elements/TextAreaField'
import { LOCATION_GET } from 'actions/location'
import { createStructuredSelector } from 'reselect'
import {
	makeSelectLocation,
	makeSelectLocationInitialValues
} from 'selectors/location'

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
			this.props.dispatch(LOCATION_GET(this.props.match.params.id))
		}
	}
	render () {
		const { initialValues } = this.props
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
			</div>
		)
	}
}
const mapStateToProps = state =>
	createStructuredSelector({
		initialValues: makeSelectLocationInitialValues()
	})

export default connect(mapStateToProps)(LocationView)
