// @flow
import React, { Component } from 'react'
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
import { connect } from 'react-redux'
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

function withModal (WrappedComponent) {
	class ModalComponent extends Component {
    state = { modalOpen: false };

    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false });
    render () {
    	const {
    		triggerButtonContent,
    		buttonAction,
    		...passThroughProps
    	} = this.props
    	let newButtonAction = (...args) => {
    		buttonAction(...args)
    		this.handleClose()
    	}
    	return (
    		<Modal
    			trigger={
    				<Button onClick={this.handleOpen}>{triggerButtonContent}</Button>
    			}
    			closeIcon
    			style={inlineStyle.modal}
    			open={this.state.modalOpen}
    			onClose={this.handleClose}
    		>
    			<Header icon={this.props.buttonIconName} content={this.props.title} />
    			<Modal.Content>
    				<WrappedComponent
    					buttonAction={newButtonAction}
    					{...passThroughProps}
    				/>
    			</Modal.Content>
    		</Modal>
    	)
    }
	}
	ModalComponent.propTypes = {
		triggerButtonContent: PropTypes.oneOfType([
			PropTypes.object,
			PropTypes.string
		]),
		buttonAction: PropTypes.func,
		title: PropTypes.string,
		buttonIconName: PropTypes.string
	}
	return ModalComponent
}

export default withModal
