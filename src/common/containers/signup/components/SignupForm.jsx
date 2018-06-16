// @flow
import React, { Component } from 'react'
import {
	Form,
	Message,
	Button,
	Label,
	Icon,
	Input as InputComponent
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { signup as signupAction } from 'common/actions/signup'
import type { FormProps } from 'redux-form'
import { Link } from 'react-router-dom'
import InputField from 'components/elements/InputField'

type Props = {
  signup: (data: Object) => void
} & FormProps;

class SignupComponent extends Component<Props, State> {
	render () {
		const fields = [
			{
				name: 'non_field_errors',
				component ({ meta: { error } }) {
					return error ? (
						<Message error>
							<Message.Header>{'Signup failed :('}</Message.Header>
							<p>{error}</p>
						</Message>
					) : null
				}
			},
			{
				placeholder: 'Username',
				name: 'username',
				label: 'Username',
				required: true,
				component: InputField
			},
			{
				placeholder: 'Email',
				name: 'email',
				label: 'Email',
				required: true,
				component: InputField
			},
			{
				autoComplete: 'current-password',
				placeholder: 'Password',
				type: 'password',
				name: 'password',
				label: 'Password',
				required: true,
				component: InputField
			}
		]
		const {
			error,
			handleSubmit,
			signup,
			invalid,
			submitting,
			submitSucceeded
		} = this.props
		return (
			<div className="signup-form">
				<Form onSubmit={handleSubmit(signup)} error={invalid}>
					{fields.map((a, i) => <Field key={a.name} {...a} />)}
					<Message error header="Signup Failed" content={error} />
					<div style={{ textAlign: 'center' }}>
						<Button
							className="signup-button"
							content="Signup"
							icon="sign in"
							loading={submitting}
						/>
					</div>
				</Form>
				{submitSucceeded ? (
					<Message positive>
						<Message.Header>
              Your user registration was successful
						</Message.Header>
						<p>
              Please <Link to="/auth">login here</Link>.
						</p>
					</Message>
				) : (
					<Message attached="bottom" warning>
						<Icon name="help" />
            Already signed up?&nbsp;<Link to="/auth">
              Login here
						</Link>&nbsp;instead.
					</Message>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	signup (data) {
		return new Promise((resolve, reject) => {
			return dispatch(signupAction(data, 'SIGNUP_FORM', { resolve, reject }))
		})
	}
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default reduxForm({ form: 'SIGNUP_FORM' })(
	compose(withConnect)(SignupComponent)
)
