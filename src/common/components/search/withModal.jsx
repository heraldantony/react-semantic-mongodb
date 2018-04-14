// @flow
import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import type {FormProps } from 'redux-form'
import {Grid, Header, Form, Button, Table, Icon, Modal} from 'semantic-ui-react'
import {FormattedMessage} from 'react-intl'
import { connect } from 'react-redux'
import InputField from 'components/elements/InputField'
import {DateTime} from 'react-datetime'
import TextAreaField from 'components/elements/TextAreaField'
import PropTypes from 'prop-types'

function withModal (WrappedComponent) {
	class ModalComponent extends Component {
		render () {
                	const { trigger, ...passThroughProps } = this.props
                	return (
                		<Modal trigger={trigger} closeIcon>
                			<Header icon={this.props.buttonIconName} content={this.props.title} />
                			<Modal.Content>
                				<WrappedComponent { ...passThroughProps } />
                			</Modal.Content>

                		</Modal>
                	)
		}
	}
	ModalComponent.propTypes = {
                	trigger: PropTypes.object,
                	title: PropTypes.string,
                	buttonIconName: PropTypes.string
	}
	return ModalComponent
}

export default withModal
