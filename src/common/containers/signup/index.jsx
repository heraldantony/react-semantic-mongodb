// @flow
import React from 'react'
import SignupForm from './components/SignupForm'
import { Helmet } from 'react-helmet'
import { Grid } from 'semantic-ui-react'
import { APP_NAME } from 'common/constants'

const Signup = ({ signup, errors }: Props) => {
	return (
		<Grid
			verticalAlign="middle"
			centered
			columns={1}
			textAlign="center"
			relaxed
			stretched
			style={{ flexGrow: 1 }}
		>
			<Helmet>
				<title>{APP_NAME}:Signup</title>
			</Helmet>
			<Grid.Row>
				<Grid.Column tablet={10} mobile={16} computer={6}>
					<SignupForm />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	)
}

export default Signup
