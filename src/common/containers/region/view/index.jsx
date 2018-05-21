// @flow
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import type { FormProps } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { Grid, Header, Form, Button, Table, Message } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import { DateTime } from 'react-datetime'
import InputField from 'components/elements/InputField'
import TextAreaField from 'components/elements/TextAreaField'
import { getRegion } from 'common/actions/region'
import { createStructuredSelector } from 'reselect'
import {
	makeSelectRegion,
	makeSelectRegionInitialValues
} from 'common/selectors/region'
import injectSaga from 'common/utils/injectSaga'
import { getRegion as getRegionSaga } from './saga'

type Props = FormProps;

const fields = [
	{
		placeholder: 'Region Name',
		name: 'regionName',
		label: 'Region Name',

		component: InputField
	}
]
class RegionView extends Component<Props, State> {
	componentDidMount () {
		if (this.props.match.params && this.props.match.params.id) {
			this.props.dispatch(getRegion(this.props.match.params.id))
		}
	}
	render () {
		const { initialValues } = this.props
		const { error, message } = this.props.region
		return (
			<div>
				<Helmet>
					<title>Region</title>
				</Helmet>
				{error && (
					<Message error>
						<Message.Header />
						<p>{error}</p>
					</Message>
				)}
				{message && (
					<Message>
						<Message.Header />
						<p>{message}</p>
					</Message>
				)}
				{!error && (
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
								<Button>
									<Link
										to={{
											pathname: `/editRegion/${initialValues._id}`,
											state: {}
										}}
									>
                    Edit Region
									</Link>
								</Button>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row centered>
							<Grid.Column width={16}>
								<h3> Region Name</h3>
								<p>{initialValues['regionName']}</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				)}
			</div>
		)
	}
}
const mapStateToProps = state =>
	createStructuredSelector({
		initialValues: makeSelectRegionInitialValues(),
		region: makeSelectRegion()
	})

const withConnect = connect(mapStateToProps)

const withSaga = injectSaga({ key: 'getRegion', saga: getRegionSaga })

export default compose(withSaga, withConnect)(RegionView)
