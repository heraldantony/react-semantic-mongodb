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
import { DEPARTMENT_GET } from 'actions/department'
import { createStructuredSelector } from 'reselect'
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
class DepartmentView extends Component<Props, State> {
	componentDidMount () {
		if (this.props.match.params && this.props.match.params.id) {
			this.props.dispatch(DEPARTMENT_GET(this.props.match.params.id))
		}
	}
	render () {
		const { initialValues } = this.props
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
							<Button>
								<Link
									to={{
										pathname: `/editDepartment/${initialValues._id}`,
										state: {}
									}}
								>
                  Edit Department
								</Link>
							</Button>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<h3> Department Name</h3>
							<p>{initialValues['departmentName']}</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}
const mapStateToProps = state =>
	createStructuredSelector({
		initialValues: makeSelectDepartmentInitialValues()
	})

export default connect(mapStateToProps)(DepartmentView)
