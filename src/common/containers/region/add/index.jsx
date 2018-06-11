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
import { addRegion } from 'common/actions/region'
import { createStructuredSelector } from 'reselect'

import {
	makeSelectRegion,
	makeSelectRegionInitialValues
} from 'common/selectors/region'

type Props = {
  add: (data: Object) => Promise
} & FormProps;

class RegionAdd extends Component<Props, State> {
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
				placeholder: 'Region Name',
				name: 'regionName',
				label: 'Region Name',

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

		return (
			<div>
				<Helmet>
					<title>Region</title>
				</Helmet>
				<Grid columns={1}>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Button>
								<Link
									to={{
										pathname: `/region`,
										state: {}
									}}
								>
                  Search Region
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
									<p>Region saved</p>
								</Message>
							)}
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Form error={invalid}>
								{fields.map((a, i) => <Field key={i} {...a} />)}
								<Message error header="Add Failed" content={error} />
								<div style={{ textAlign: 'right' }}>
									<Button
										content="Add"
										icon="add"
										loading={submitting}
										onClick={handleSubmit(values =>
											this.props.add({
												...values,

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
		regionProps: makeSelectRegion()
	})

const mapDispatchToProps = dispatch => ({
	add (data) {
		return new Promise((resolve, reject) => {
			return dispatch(addRegion(data, 'REGION_ADD_FORM', { resolve, reject }))
		})
	}
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default reduxForm({ form: 'REGION_ADD_FORM' })(
	compose(withConnect)(RegionAdd)
)
