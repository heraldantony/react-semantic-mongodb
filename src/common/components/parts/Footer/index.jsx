/**
 * @flow
 */
import React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import { StyledFooter, StyledFooterInner } from './style'

const Footer = () => {
	return (
		<StyledFooter>
			<StyledFooterInner>
				<Grid relaxed>
					<Grid.Row verticalAlign="middle">
						<Grid.Column width={12} mobile={16}>
							<a href="https://github.com/heraldantony/reactsemanticmongo">
								<Header as="h3" inverted>
									<Icon name="github" />
									<Header.Content>
										<Header.Subheader>
                      React Semantic UI MongoDB
										</Header.Subheader>
									</Header.Content>
								</Header>
							</a>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</StyledFooterInner>
		</StyledFooter>
	)
}

export default Footer
