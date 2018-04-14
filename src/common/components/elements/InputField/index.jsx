// @flow
import React, { Component } from 'react'
import {
	Form,
	Message,
	Button,
	Label,
	Input as InputComponent
} from 'semantic-ui-react'

const InputField = ({
	input,
	label,
	labelText = null,
	required,
	meta: { touched, error },
	...rest
}: any) => (
	<Form.Field error={!!(touched && error)} required={required}>
		<label htmlFor={rest.id || rest.name || ''}>{label}</label>
		<InputComponent
			label={labelText}
			required={required}
			{...input}
			{...rest}
		/>
		{touched && error ? (
			<Label basic color="red" pointing>
				{error}
			</Label>
		) : null}
	</Form.Field>
)

export default InputField
