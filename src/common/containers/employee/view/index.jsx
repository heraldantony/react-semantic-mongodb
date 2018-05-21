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
import { getEmployee } from 'common/actions/employee'
import { createStructuredSelector } from 'reselect'
import {
	makeSelectEmployee,
	makeSelectEmployeeInitialValues
} from 'common/selectors/employee'
import injectSaga from 'common/utils/injectSaga'
import { getEmployee as getEmployeeSaga } from './saga'

type Props = FormProps;

const fields = [
	{
		placeholder: 'First Name',
		name: 'firstName',
		label: 'First Name',

		component: InputField
	},

	{
		placeholder: 'Last Name',
		name: 'lastName',
		label: 'Last Name',

		component: InputField
	},

	{
		placeholder: 'Email',
		name: 'email',
		label: 'Email',

		component: InputField
	},

	{
		placeholder: 'Phone Number',
		name: 'phoneNumber',
		label: 'Phone Number',

		component: InputField
	},

	{
		placeholder: 'Hire Date',
		name: 'hireDate',
		label: 'Hire Date',

		component: DateTime
	},

	{
		placeholder: 'Salary',
		name: 'salary',
		label: 'Salary',

		component: InputField
	},

	{
		placeholder: 'Commission Pct',
		name: 'commissionPct',
		label: 'Commission Pct',

		component: InputField
	}
]
class EmployeeView extends Component<Props, State> {
	componentDidMount () {
		if (this.props.match.params && this.props.match.params.id) {
			this.props.dispatch(getEmployee(this.props.match.params.id))
		}
	}
	render () {
		const { initialValues } = this.props
		const { error, message } = this.props.employee
		return (
			<div>
				<Helmet>
					<title>Employee</title>
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
											pathname: `/employee`,
											state: {}
										}}
									>
                    Search Employee
									</Link>
								</Button>
								<Button>
									<Link
										to={{
											pathname: `/editEmployee/${initialValues._id}`,
											state: {}
										}}
									>
                    Edit Employee
									</Link>
								</Button>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row centered>
							<Grid.Column width={16}>
								<h3> First Name</h3>
								<p>{initialValues['firstName']}</p>

								<h3> Last Name</h3>
								<p>{initialValues['lastName']}</p>

								<h3> Email</h3>
								<p>{initialValues['email']}</p>

								<h3> Phone Number</h3>
								<p>{initialValues['phoneNumber']}</p>

								<h3> Hire Date</h3>
								<p>{initialValues['hireDate']}</p>

								<h3> Salary</h3>
								<p>{initialValues['salary']}</p>

								<h3> Commission Pct</h3>
								<p>{initialValues['commissionPct']}</p>
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
		initialValues: makeSelectEmployeeInitialValues(),
		employee: makeSelectEmployee()
	})

const withConnect = connect(mapStateToProps)

const withSaga = injectSaga({ key: 'getEmployee', saga: getEmployeeSaga })

export default compose(withSaga, withConnect)(EmployeeView)
