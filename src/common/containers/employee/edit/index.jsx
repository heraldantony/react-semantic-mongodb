// @flow
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import type { FormProps } from 'redux-form'
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
import { connect } from 'react-redux'
import InputField from 'components/elements/InputField'
import { DateTime } from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import TextAreaField from 'components/elements/TextAreaField'
import DateTimeField from 'components/elements/DateTimeField'
import {
	EMPLOYEE_GET,
	EMPLOYEE_SAVE,
	EMPLOYEE_ADD_JOB
} from 'actions/employee'
import { createStructuredSelector } from 'reselect'

import JobModalSearch from 'containers/job/modal_search'

import {
	makeSelectEmployee,
	makeSelectEmployeeInitialValues
} from 'selectors/employee'

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

		component: DateTimeField
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
class EmployeeEdit extends Component<Props, State> {
	componentDidMount () {
		if (this.props.match.params && this.props.match.params.id) {
			this.props.dispatch(EMPLOYEE_GET(this.props.match.params.id))
		}
	}

	render () {
		const {
			handleSubmit,
			submitting,
			submitSucceeded,
			error,
			warning
		} = this.props

		const jobs = this.props.employeeProps.employee.jobs
		var addJob = this.props.addJob.bind(this)

		return (
			<div>
				<Helmet>
					<title>Employee</title>
				</Helmet>
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
									<p>Employee saved</p>
								</Message>
							)}
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Form>
								<div style={{ textAlign: 'left' }}>
									{jobs &&
                    jobs.length > 0 &&
                    jobs.map((entity, idx) => {
                    	return (
                    		<Button
                    			as={Link}
                    			key={entity['_id'] + idx}
                    			to={'/viewJob/' + entity['_id']}
                    		>
                    			{entity['jobTitle']}
                    		</Button>
                    	)
                    })}
								</div>

								<div style={{ textAlign: 'right' }}>
									<JobModalSearch
										trigger={<Button>Add Job</Button>}
										title="Add Job"
										buttonLabel="Add Job"
										buttonAction={addJob}
										closeIcon
									>
										<Header icon="archive" content="Add Job" />
										<Modal.Content>
											<p>Add Job</p>
										</Modal.Content>
										<Modal.Actions>
											<Button color="red">
												<Icon name="remove" /> No
											</Button>
											<Button color="green">
												<Icon name="checkmark" /> Yes
											</Button>
										</Modal.Actions>
									</JobModalSearch>
								</div>

								{fields.map((a, i) => <Field key={i} {...a} />)}

								<div style={{ textAlign: 'right' }}>
									<Button
										content="Save"
										icon="save"
										onClick={handleSubmit(values =>
											this.props.save({
												...values,

												jobs: jobs,

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
		employeeProps: makeSelectEmployee(),
		initialValues: makeSelectEmployeeInitialValues()
	})

const mapDispatchToProps = dispatch => ({
	async save (data) {
		console.log(data)
		return dispatch(EMPLOYEE_SAVE(data))
	},

	addJob (job) {
		console.log('addJob')
		EMPLOYEE_ADD_JOB(job, dispatch)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(
	reduxForm({ form: 'EMPLOYEE_EDIT_FORM', enableReinitialize: true })(
		EmployeeEdit
	)
)
