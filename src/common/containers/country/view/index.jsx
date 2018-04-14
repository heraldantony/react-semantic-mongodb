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
import { COUNTRY_GET } from 'actions/country'
import { createStructuredSelector } from 'reselect'
import {
	makeSelectCountry,
	makeSelectCountryInitialValues
} from 'selectors/country'

type Props = FormProps;

const fields = [
	{
		placeholder: 'Country Name',
		name: 'countryName',
		label: 'Country Name',

		component: InputField
	}
]
class CountryView extends Component<Props, State> {
	componentDidMount () {
		if (this.props.match.params && this.props.match.params.id) {
			this.props.dispatch(COUNTRY_GET(this.props.match.params.id))
		}
	}
	render () {
		const { initialValues } = this.props
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
							<Button>
								<Link
									to={{
										pathname: `/editCountry/${initialValues._id}`,
										state: {}
									}}
								>
                  Edit Country
								</Link>
							</Button>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<h3> Country Name</h3>
							<p>{initialValues['countryName']}</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}
const mapStateToProps = state =>
	createStructuredSelector({
		initialValues: makeSelectCountryInitialValues()
	})

export default connect(mapStateToProps)(CountryView)
