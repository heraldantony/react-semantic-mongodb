// @flow
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import type { FormProps } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import { Grid, Header, Form, Button, Table, Message } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import { DateTime } from "react-datetime";
import InputField from "components/elements/InputField";
import TextAreaField from "components/elements/TextAreaField";
import { getCountry } from "common/actions/country";
import { createStructuredSelector } from "reselect";
import {
  makeSelectCountry,
  makeSelectCountryInitialValues
} from "common/selectors/country";
import injectSaga from "common/utils/injectSaga";
import { getCountry as getCountrySaga } from "./saga";

type Props = FormProps;

const fields = [
  {
    placeholder: "Country Name",
    name: "countryName",
    label: "Country Name",

    component: InputField
  }
];
class CountryView extends Component<Props, State> {
  componentDidMount() {
    if (this.props.match.params && this.props.match.params.id) {
      this.props.dispatch(getCountry(this.props.match.params.id));
    }
  }
  render() {
    const { initialValues } = this.props;
    const { error, message } = this.props.country;
    return (
      <div>
        <Helmet>
          <title>Country</title>
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
                      pathname: `/country`,
                      state: {}
                    }}
                  >
                    Search Country
                  </Link>
                </Button>
                <Button>
                  <Link
                    to={{
                      pathname: `/editCountry/${initialValues._id}`,
                      state: {}
                    }}
                  >
                    Edit Country
                  </Link>
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column width={16}>
                <h3> Country Name</h3>
                <p>{initialValues["countryName"]}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </div>
    );
  }
}
const mapStateToProps = state =>
  createStructuredSelector({
    initialValues: makeSelectCountryInitialValues(),
    country: makeSelectCountry()
  });

const withConnect = connect(mapStateToProps);

const withSaga = injectSaga({ key: "getCountry", saga: getCountrySaga });

export default compose(withSaga, withConnect)(CountryView);
