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
	DEPARTMENT_GET,
	DEPARTMENT_SAVE,
	DEPARTMENT_SET_LOCATION,
	DEPARTMENT_ADD_EMPLOYEE
} from 'actions/department'
import { createStructuredSelector } from 'reselect'

import LocationModalSearch from 'containers/location/modal_search'

import EmployeeModalSearch from 'containers/employee/modal_search'

import {
	makeSelectDepartment,
	makeSelectDepartmentInitialValues
} from 'selectors/department'

type Props = FormProps;

const fields = [
	{
		placeholder: 'Department Name',
		name: 'departmentName',
		label: 'Department Name',

		component: InputField
	}
]
class DepartmentEdit extends Component<Props, State> {
	componentDidMount () {
		if (this.props.match.params && this.props.match.params.id) {
			this.props.dispatch(DEPARTMENT_GET(this.props.match.params.id))
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

		const location = this.props.departmentProps.department.location
		var setLocation = this.props.setLocation.bind(this)

		const employee = this.props.departmentProps.department.employee
		var addEmployee = this.props.addEmployee.bind(this)

		return (
			<div>
				<Helmet>
					<title>Department</title>
				</Helmet>
				<Grid columns={1}>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Button>
								<Link
									to={{
										pathname: `/department`,
										state: {}
									}}
								>
                  Search Department
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
									<p>Department saved</p>
								</Message>
							)}
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Form>
								<div style={{ textAlign: 'left' }}>
									{location &&
                    location['_id'] && (
										<Link to={'/viewLocation/' + location['_id']}>{}</Link>
									)}
								</div>

								<div style={{ textAlign: 'right' }}>
									<LocationModalSearch
										trigger={<Button>Set Location</Button>}
										title="Set Location"
										buttonLabel="Set Location"
										buttonAction={setLocation}
										closeIcon
									>
										<Header icon="archive" content="Set Location" />
										<Modal.Content>
											<p>Set Location</p>
										</Modal.Content>
										<Modal.Actions>
											<Button color="red">
												<Icon name="remove" /> No
											</Button>
											<Button color="green">
												<Icon name="checkmark" /> Yes
											</Button>
										</Modal.Actions>
									</LocationModalSearch>
								</div>

								<div style={{ textAlign: 'left' }}>
									{employee &&
                    employee['_id'] && (
										<Link to={'/viewEmployee/' + employee['_id']}>
											{employee['firstName'] + '    ' + employee['lastName']}
										</Link>
									)}
								</div>

								<div style={{ textAlign: 'right' }}>
									<EmployeeModalSearch
										trigger={<Button>Add Employee</Button>}
										title="Add Employee"
										buttonLabel="Add Employee"
										buttonAction={addEmployee}
										closeIcon
									>
										<Header icon="archive" content="Add Employee" />
										<Modal.Content>
											<p>Add Employee</p>
										</Modal.Content>
										<Modal.Actions>
											<Button color="red">
												<Icon name="remove" /> No
											</Button>
											<Button color="green">
												<Icon name="checkmark" /> Yes
											</Button>
										</Modal.Actions>
									</EmployeeModalSearch>
								</div>

								{fields.map((a, i) => <Field key={i} {...a} />)}

								<div style={{ textAlign: 'right' }}>
									<Button
										content="Save"
										icon="save"
										onClick={handleSubmit(values =>
											this.props.save({
												...values,

												location: location,

												employee: employee,

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
		departmentProps: makeSelectDepartment(),
		initialValues: makeSelectDepartmentInitialValues()
	})

const mapDispatchToProps = dispatch => ({
	async save (data) {
		console.log(data)
		return dispatch(DEPARTMENT_SAVE(data))
	},

	setLocation (location) {
		console.log('setLocation')
		DEPARTMENT_SET_LOCATION(location, dispatch)
	},

	addEmployee (employee) {
		console.log('addEmployee')
		DEPARTMENT_ADD_EMPLOYEE(employee, dispatch)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(
	reduxForm({ form: 'DEPARTMENT_EDIT_FORM', enableReinitialize: true })(
		DepartmentEdit
	)
)
