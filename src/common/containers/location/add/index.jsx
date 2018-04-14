// @flow
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import type { FormProps } from 'redux-form'
import { Grid, Header, Form, Button, Table, Message } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { DateTime } from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import InputField from 'components/elements/InputField'
import TextAreaField from 'components/elements/TextAreaField'
import DateTimeField from 'components/elements/DateTimeField'
import { LOCATION_ADD } from 'actions/location'

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
class LocationAdd extends Component<Props, State> {
	render () {
		const {
			handleSubmit,
			submitting,
			submitSucceeded,
			error,
			warning
		} = this.props
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
								{fields.map((a, i) => <Field key={i} {...a} />)}

								<div style={{ textAlign: 'right' }}>
									<Button
										content="Add"
										icon="add"
										onClick={handleSubmit(values =>
											this.props.add({
												...values,
												action: 'add'
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
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	async add (data) {
		console.log(data)
		return dispatch(LOCATION_ADD(data))
	}
})

export default reduxForm({ form: 'LOCATION_ADD_FORM' })(
	connect(mapStateToProps, mapDispatchToProps)(LocationAdd)
)
