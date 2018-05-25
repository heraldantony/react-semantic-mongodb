// @flow
import React, { Component } from "react";
import {
  Form,
  Message,
  Button,
  Label,
  Icon,
  Input as InputComponent
} from "semantic-ui-react";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { signup as signupAction } from "common/actions/signup";
import type { FormProps } from "redux-form";
import { Link } from "react-router-dom";
import injectSaga from "common/utils/injectSaga";
import signup from "common/sagas/signup";
type Props = {
  signup: (data: Object) => void
} & FormProps;

class SignupComponent extends Component<Props, State> {
  render() {
    /* By default we use https://github.com/erikras/redux-form
        Probably, you'll need: https://github.com/ckshekhar73/react-semantic-redux-form/blob/master/src/index.js
        (don't install, better copy sources to the project)
    */
    const InputField = ({
      input,
      label,
      labelText = null,
      required,
      meta: { touched, error },
      ...rest
    }: any) => (
      <Form.Field error={!!(touched && error)} required={required}>
        <label htmlFor={rest.id || rest.name || ""}>{label}</label>
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
    );

    const fields = [
      {
        name: "non_field_errors",
        component({ meta: { error } }) {
          return error ? (
            <Message error>
              <Message.Header>{"Signup failed :("}</Message.Header>
              <p>{error}</p>
            </Message>
          ) : null;
        }
      },
      {
        placeholder: "Username",
        name: "username",
        label: "Username",
        required: true,
        component: InputField
      },
      {
        placeholder: "Email",
        name: "email",
        label: "Email",
        required: true,
        component: InputField
      },
      {
        autoComplete: "current-password",
        placeholder: "Password",
        type: "password",
        name: "password",
        label: "Password",
        required: true,
        component: InputField
      }
    ];
    const {
      error,
      handleSubmit,
      signup,
      invalid,
      submitting,
      submitSucceeded
    } = this.props;
    return (
      <div>
        <Form onSubmit={handleSubmit(signup)} error={invalid}>
          {fields.map((a, i) => <Field key={i} {...a} />)}
          <Message error header="Signup Failed" content={error} />
          <div style={{ textAlign: "center" }}>
            <Button content="Signup" icon="sign in" loading={submitting} />
          </div>
        </Form>
        {submitSucceeded ? (
          <Message positive>
            <Message.Header>
              Your user registration was successful
            </Message.Header>
            <p>
              Please <Link to="/auth">login here</Link>.
            </p>
          </Message>
        ) : (
          <Message attached="bottom" warning>
            <Icon name="help" />
            Already signed up?&nbsp;<Link to="/auth">
              Login here
            </Link>&nbsp;instead.
          </Message>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  signup(data) {
    return new Promise((resolve, reject) => {
      return dispatch(signupAction(data, "SIGNUP_FORM", { resolve, reject }));
    });
  }
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSignupSaga = injectSaga({ key: "signup", saga: signup });

export default reduxForm({ form: "SIGNUP_FORM" })(
  compose(withConnect, withSignupSaga)(SignupComponent)
);
