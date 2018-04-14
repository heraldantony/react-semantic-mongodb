// @flow
import React, { Component } from 'react'
import {
	Form,
	Message,
	Button,
	Label,
	Input as InputComponent
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { LOGIN_AUTH } from 'actions/auth'
import type {FormProps } from 'redux-form'
import { Link } from 'react-router-dom'
import InputField from 'components/elements/InputField'
type Props = {
  login: (data: Object) => void
} & FormProps

class LoginComponent extends Component<Props, State> {
	render () {
		/* By default we use https://github.com/erikras/redux-form
			Probably, you'll need: https://github.com/ckshekhar73/react-semantic-redux-form/blob/master/src/index.js
			(don't install, better copy sources to the project)
		*/

		const fields = [
			{
				name: 'non_field_errors',
				component ({ meta: { error } }) {
					return error ? (
						<Message error>
							<Message.Header>{'Login failed :('}</Message.Header>
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
				autoComplete: 'current-password',
				placeholder: 'Password',
				type: 'password',
				name: 'password',
				label: 'Password',
				required: true,
				component: InputField
			}
		]
		const { error, handleSubmit, login, invalid, submitting } = this.props

		return (
			<div>
				<Form onSubmit={handleSubmit(login)} error={invalid}>
					{fields.map((a, i) => <Field key={i} {...a} />)}
					<Message
						error
						header='Login Failed'
						content={error}
					/>

					<div style={{ textAlign: 'center' }}>
						<Button content="Login" icon="sign in" loading={submitting} />
					</div>
				</Form>
				<div>If you do not have an account, please <Link to="/signup">sign up</Link> for a new account</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	async login (data) {
		return dispatch(LOGIN_AUTH(data))
	}
})

export default reduxForm({ form: 'LOGIN_FORM' })(
	connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
)
