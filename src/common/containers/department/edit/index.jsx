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
import InputField from 'components/elements/InputField'
import { DateTime } from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import TextAreaField from 'components/elements/TextAreaField'
import DateTimeField from 'components/elements/DateTimeField'
import {
	getDepartment,
	saveDepartment,
	setLocation as setLocationAction,
	deleteLocation as deleteLocationAction,
	addEmployee as addEmployeeAction,
	deleteEmployee as deleteEmployeeAction
} from 'common/actions/department'
import { createStructuredSelector } from 'reselect'

import LocationModalSearch from 'containers/location/modal_search'

import EmployeeModalSearch from 'containers/employee/modal_search'

import {
	makeSelectDepartment,
	makeSelectDepartmentInitialValues
} from 'common/selectors/department'

type Props = {
  save: (data: Object) => Promise
} & FormProps;

class DepartmentEdit extends Component<Props, State> {
	componentDidMount () {
		if (this.props.match.params && this.props.match.params.id) {
			this.props.dispatch(getDepartment(this.props.match.params.id))
		}
	}

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
				placeholder: 'Department Name',
				name: 'departmentName',
				label: 'Department Name',

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

		const location = this.props.departmentProps.department.location
		var setLocation = this.props.setLocation.bind(this)
		var deleteLocation = this.props.deleteLocation.bind(this)

		const employees = this.props.departmentProps.department.employees
		var addEmployee = this.props.addEmployee.bind(this)
		var deleteEmployee = this.props.deleteEmployee.bind(this)

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
										<Button.Group>
											<Button
												as={Link}
												to={'/viewLocation/' + location['_id']}
											>
												{location['streetAddress']}
											</Button>
											<Button icon onClick={() => deleteLocation(location)}>
												<Icon name="delete" />
											</Button>
										</Button.Group>
									)}
								</div>

								<div style={{ textAlign: 'right' }}>
									<LocationModalSearch
										triggerButtonContent="Set Location"
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
									{employees &&
                    employees.length > 0 &&
                    employees.map((entity, idx) => {
                    	return (
                    		<Button.Group key={entity['_id'] + idx}>
                    			<Button
                    				as={Link}
                    				to={'/viewEmployee/' + entity['_id']}
                    			>
                    				{entity['firstName'] + '    ' + entity['lastName']}
                    			</Button>
                    			<Button icon onClick={() => deleteEmployee(entity)}>
                    				<Icon name="delete" />
                    			</Button>
                    		</Button.Group>
                    	)
                    })}
								</div>

								<div style={{ textAlign: 'right' }}>
									<EmployeeModalSearch
										triggerButtonContent="Add Employee"
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
								<Message error header="Add Failed" content={error} />
								<div style={{ textAlign: 'right' }}>
									<Button
										className="save-button"
										content="Save"
										icon="save"
										loading={submitting}
										onClick={handleSubmit(values =>
											this.props.save({
												...values,

												location: location,

												employees: employees,

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
		return new Promise((resolve, reject) => {
			return dispatch(
				saveDepartment(data, 'DEPARTMENT_EDIT_FORM', { resolve, reject })
			)
		})
	},

	setLocation (location) {
		console.log('setLocation')
		return dispatch(setLocationAction(location))
	},
	deleteLocation (location) {
		return dispatch(deleteLocationAction(location))
	},

	addEmployee (employee) {
		console.log('addEmployee')
		return dispatch(addEmployeeAction(employee))
	},
	deleteEmployee (employee) {
		return dispatch(deleteEmployeeAction(employee))
	}
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(
	reduxForm({ form: 'DEPARTMENT_EDIT_FORM', enableReinitialize: true })(
		DepartmentEdit
	)
)
