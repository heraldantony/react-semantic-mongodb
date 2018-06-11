// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import type { FormProps } from 'redux-form'
import {
	Grid,
	Header,
	Form,
	Button,
	Table,
	Icon,
	Modal
} from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import InputField from 'components/elements/InputField'
import { DateTime } from 'react-datetime'
import TextAreaField from 'components/elements/TextAreaField'
import PropTypes from 'prop-types'

// temporary fix for semantic-ui-react issue #2558
const inlineStyle = {
	modal: {
		marginTop: '0px !important',
		marginLeft: 'auto',
		marginRight: 'auto'
	}
}

class ConfirmationDialog extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  render () {
  	const {
  		title,
  		triggerButtonContent,
  		content,
  		okFunction,
  		cancelFunction
  	} = this.props
  	let newButtonAction = (...args) => {
  		okFunction(...args)
  		this.handleClose()
  	}
  	return (
  		<Modal
  			trigger={
  				<Button icon onClick={this.handleOpen}>
  					{triggerButtonContent}
  				</Button>
  			}
  			closeIcon
  			style={inlineStyle.modal}
  			open={this.state.modalOpen}
  			onClose={this.handleClose}
  		>
  			<Modal.Header>{title}</Modal.Header>
  			<Modal.Content>{content}</Modal.Content>
  			<Modal.Actions>
  				<Button onClick={newButtonAction}>Ok</Button>
  				<Button
  					onClick={() => {
  						this.handleClose()
  						if (cancelFunction) cancelFunction()
  					}}
  				>
            Cancel
  				</Button>
  			</Modal.Actions>
  		</Modal>
  	)
  }
}

ConfirmationDialog.propTypes = {
	title: PropTypes.string,
	triggerButtonContent: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	]),
	content: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	okFunction: PropTypes.func,
	cancelFunction: PropTypes.func
}
export default ConfirmationDialog
