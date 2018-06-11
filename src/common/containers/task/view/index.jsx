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
import { getTask } from 'common/actions/task'
import { createStructuredSelector } from 'reselect'
import {
	makeSelectTask,
	makeSelectTaskInitialValues
} from 'common/selectors/task'

type Props = FormProps;

const fields = [
	{
		placeholder: 'Title',
		name: 'title',
		label: 'Title',

		component: InputField
	},

	{
		placeholder: 'Description',
		name: 'description',
		label: 'Description',

		component: TextAreaField
	}
]
class TaskView extends Component<Props, State> {
	componentDidMount () {
		if (this.props.match.params && this.props.match.params.id) {
			this.props.dispatch(getTask(this.props.match.params.id))
		}
	}
	render () {
		const { initialValues } = this.props
		const { error, message } = this.props.task
		return (
			<div>
				<Helmet>
					<title>Task</title>
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
											pathname: `/task`,
											state: {}
										}}
									>
                    Search Task
									</Link>
								</Button>
								<Button>
									<Link
										to={{
											pathname: `/editTask/${initialValues._id}`,
											state: {}
										}}
									>
                    Edit Task
									</Link>
								</Button>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row centered>
							<Grid.Column width={16}>
								<h3> Title</h3>
								<p>{initialValues['title']}</p>

								<h3> Description</h3>
								<p>{initialValues['description']}</p>
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
		initialValues: makeSelectTaskInitialValues(),
		task: makeSelectTask()
	})

const withConnect = connect(mapStateToProps)

export default compose(withConnect)(TaskView)
