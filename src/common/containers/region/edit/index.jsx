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
import { getRegion, saveRegion } from 'common/actions/region'
import { createStructuredSelector } from 'reselect'

import {
	makeSelectRegion,
	makeSelectRegionInitialValues
} from 'common/selectors/region'

type Props = {
  save: (data: Object) => Promise
} & FormProps;

class RegionEdit extends Component<Props, State> {
	componentDidMount () {
		if (this.props.match.params && this.props.match.params.id) {
			this.props.dispatch(getRegion(this.props.match.params.id))
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
							<Form>
								{fields.map((a, i) => <Field key={i} {...a} />)}
								<Message error header="Add Failed" content={error} />
								<div style={{ textAlign: 'right' }}>
									<Button
										content="Save"
										icon="save"
										loading={submitting}
										onClick={handleSubmit(values =>
											this.props.save({
												...values,

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
		regionProps: makeSelectRegion(),
		initialValues: makeSelectRegionInitialValues()
	})

const mapDispatchToProps = dispatch => ({
	async save (data) {
		console.log(data)
		return new Promise((resolve, reject) => {
			return dispatch(
				saveRegion(data, 'REGION_EDIT_FORM', { resolve, reject })
			)
		})
	}
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(
	reduxForm({ form: 'REGION_EDIT_FORM', enableReinitialize: true })(RegionEdit)
)
