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
import { REGION_GET } from 'actions/region'
import { createStructuredSelector } from 'reselect'
import {
	makeSelectRegion,
	makeSelectRegionInitialValues
} from 'selectors/region'

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
			this.props.dispatch(REGION_GET(this.props.match.params.id))
		}
	}
	render () {
		const { initialValues } = this.props
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
			</div>
		)
	}
}
const mapStateToProps = state =>
	createStructuredSelector({
		initialValues: makeSelectRegionInitialValues()
	})

export default connect(mapStateToProps)(RegionView)
