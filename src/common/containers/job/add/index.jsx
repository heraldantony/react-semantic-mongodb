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
import { DateTime } from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import InputField from 'components/elements/InputField'
import TextAreaField from 'components/elements/TextAreaField'
import DateTimeField from 'components/elements/DateTimeField'
import {
	addJob,
	addTask as addTaskAction,
	deleteTask as deleteTaskAction
} from 'common/actions/job'
import { createStructuredSelector } from 'reselect'

import TaskModalSearch from 'containers/task/modal_search'

import {
	makeSelectJob,
	makeSelectJobInitialValues
} from 'common/selectors/job'

type Props = {
  add: (data: Object) => Promise
} & FormProps;

class JobAdd extends Component<Props, State> {
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
		const {
			handleSubmit,
			submitting,
			submitSucceeded,
			error,
			warning,
			invalid
		} = this.props

		const tasks = this.props.jobProps.job
			? this.props.jobProps.job.tasks
			: null
		var addTask = this.props.addTask.bind(this)
		var deleteTask = this.props.deleteTask.bind(this)

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
									<p>Job saved</p>
								</Message>
							)}
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Form error={invalid}>
								<div style={{ textAlign: 'left' }}>
									{tasks &&
                    tasks.length > 0 &&
                    tasks.map((entity, idx) => {
                    	return (
                    		<Button.Group key={entity['_id'] + idx}>
                    			<Button as={Link} to={'/viewTask/' + entity['_id']}>
                    				{entity['title']}
                    			</Button>
                    			<Button icon onClick={() => deleteTask(entity)}>
                    				<Icon name="delete" />
                    			</Button>
                    		</Button.Group>
                    	)
                    })}
								</div>

								<div style={{ textAlign: 'right' }}>
									<TaskModalSearch
										triggerButtonContent="Add Task"
										title="Add Task"
										buttonLabel="Add Task"
										buttonAction={addTask}
										closeIcon
									>
										<Header icon="archive" content="Add Task" />
										<Modal.Content>
											<p>Add Task</p>
										</Modal.Content>
										<Modal.Actions>
											<Button color="red">
												<Icon name="remove" /> No
											</Button>
											<Button color="green">
												<Icon name="checkmark" /> Yes
											</Button>
										</Modal.Actions>
									</TaskModalSearch>
								</div>

								{fields.map((a, i) => <Field key={i} {...a} />)}
								<Message error header="Add Failed" content={error} />
								<div style={{ textAlign: 'right' }}>
									<Button
										className="add-button"
										content="Add"
										icon="add"
										loading={submitting}
										onClick={handleSubmit(values =>
											this.props.add({
												...values,

												tasks: tasks,

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
const mapStateToProps = state =>
	createStructuredSelector({
		jobProps: makeSelectJob()
	})

const mapDispatchToProps = dispatch => ({
	add (data) {
		return new Promise((resolve, reject) => {
			return dispatch(addJob(data, 'JOB_ADD_FORM', { resolve, reject }))
		})
	},

	addTask (task) {
		console.log('addTask')
		return dispatch(addTaskAction(task))
	},
	deleteTask (task) {
		return dispatch(deleteTaskAction(task))
	}
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default reduxForm({ form: 'JOB_ADD_FORM' })(
	compose(withConnect)(JobAdd)
)
