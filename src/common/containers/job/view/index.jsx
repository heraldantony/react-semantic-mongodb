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
import { getJob } from 'common/actions/job'
import { createStructuredSelector } from 'reselect'
import {
	makeSelectJob,
	makeSelectJobInitialValues
} from 'common/selectors/job'
import injectSaga from 'common/utils/injectSaga'
import { getJob as getJobSaga } from './saga'

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
			this.props.dispatch(getJob(this.props.match.params.id))
		}
	}
	render () {
		const { initialValues } = this.props
		const { error, message } = this.props.job
		return (
			<div>
				<Helmet>
					<title>Job</title>
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
				)}
			</div>
		)
	}
}
const mapStateToProps = state =>
	createStructuredSelector({
		initialValues: makeSelectJobInitialValues(),
		job: makeSelectJob()
	})

const withConnect = connect(mapStateToProps)

const withSaga = injectSaga({ key: 'getJob', saga: getJobSaga })

export default compose(withSaga, withConnect)(JobView)
