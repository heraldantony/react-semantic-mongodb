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
import { JOB_GET } from 'actions/job'
import { createStructuredSelector } from 'reselect'
import { makeSelectJob, makeSelectJobInitialValues } from 'selectors/job'

type Props = FormProps;

const fields = [
	{
		placeholder: 'Job Title',
		name: 'jobTitle',
		label: 'Job Title',

		component: InputField
	},

	{
		placeholder: 'Min Salary',
		name: 'minSalary',
		label: 'Min Salary',

		component: InputField
	},

	{
		placeholder: 'Max Salary',
		name: 'maxSalary',
		label: 'Max Salary',

		component: InputField
	}
]
class JobView extends Component<Props, State> {
	componentDidMount () {
		if (this.props.match.params && this.props.match.params.id) {
			this.props.dispatch(JOB_GET(this.props.match.params.id))
		}
	}
	render () {
		const { initialValues } = this.props
		return (
			<div>
				<Helmet>
					<title>Job</title>
				</Helmet>
				<Grid columns={1}>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Button>
								<Link
									to={{
										pathname: `/job`,
										state: {}
									}}
								>
                  Search Job
								</Link>
							</Button>
							<Button>
								<Link
									to={{
										pathname: `/editJob/${initialValues._id}`,
										state: {}
									}}
								>
                  Edit Job
								</Link>
							</Button>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<h3> Job Title</h3>
							<p>{initialValues['jobTitle']}</p>

							<h3> Min Salary</h3>
							<p>{initialValues['minSalary']}</p>

							<h3> Max Salary</h3>
							<p>{initialValues['maxSalary']}</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}
const mapStateToProps = state =>
	createStructuredSelector({
		initialValues: makeSelectJobInitialValues()
	})

export default connect(mapStateToProps)(JobView)
