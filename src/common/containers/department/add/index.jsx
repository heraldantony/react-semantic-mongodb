// @flow
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import type { FormProps } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  Grid,
  Header,
  Form,
  Button,
  Table,
  Icon,
  Modal,
  Message
} from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import { DateTime } from "react-datetime";
import "react-datetime/css/react-datetime.css";
import InputField from "components/elements/InputField";
import TextAreaField from "components/elements/TextAreaField";
import DateTimeField from "components/elements/DateTimeField";
import {
  addDepartment,
  setLocation as setLocationAction,
  addEmployee as addEmployeeAction
} from "common/actions/department";
import { createStructuredSelector } from "reselect";

import LocationModalSearch from "containers/location/modal_search";

import EmployeeModalSearch from "containers/employee/modal_search";

import {
  makeSelectDepartment,
  makeSelectDepartmentInitialValues
} from "common/selectors/department";

import injectSaga from "common/utils/injectSaga";
import { addDepartment as addDepartmentSaga } from "./saga";

type Props = {
  add: (data: Object) => Promise
} & FormProps;

class DepartmentAdd extends Component<Props, State> {
  render() {
    const fields = [
      {
        name: "non_field_errors",
        component({ meta: { error } }) {
          return error ? (
            <Message error>
              <Message.Header />
              <p>{error}</p>
            </Message>
          ) : null;
        }
      },

      {
        placeholder: "Department Name",
        name: "departmentName",
        label: "Department Name",

        component: InputField
      }
    ];
    const {
      handleSubmit,
      submitting,
      submitSucceeded,
      error,
      warning,
      invalid
    } = this.props;

    const location = this.props.departmentProps.department.location;
    var setLocation = this.props.setLocation.bind(this);

    const employees = this.props.departmentProps.department.employees;
    var addEmployee = this.props.addEmployee.bind(this);

    return (
      <div>
        <Helmet>
          <title>Department</title>
        </Helmet>
        <Grid columns={1}>
          <Grid.Row centered>
            <Grid.Column width={16}>
              <Button>
                <Link
                  to={{
                    pathname: `/department`,
                    state: {}
                  }}
                >
                  Search Department
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
                    <p>Department saved</p>
                  </Message>
                )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={16}>
              <Form error={invalid}>
                <div style={{ textAlign: "left" }}>
                  {location &&
                    location["_id"] && (
                      <Button as={Link} to={"/viewLocation/" + location["_id"]}>
                        {}
                      </Button>
                    )}
                </div>

                <div style={{ textAlign: "right" }}>
                  <LocationModalSearch
                    trigger={<Button>Set Location</Button>}
                    title="Set Location"
                    buttonLabel="Set Location"
                    buttonAction={setLocation}
                    closeIcon
                  >
                    <Header icon="archive" content="Set Location" />
                    <Modal.Content>
                      <p>Set Location</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color="red">
                        <Icon name="remove" /> No
                      </Button>
                      <Button color="green">
                        <Icon name="checkmark" /> Yes
                      </Button>
                    </Modal.Actions>
                  </LocationModalSearch>
                </div>

                <div style={{ textAlign: "left" }}>
                  {employees &&
                    employees.length > 0 &&
                    employees.map((entity, idx) => {
                      return (
                        <Button
                          as={Link}
                          key={entity["_id"] + idx}
                          to={"/viewEmployee/" + entity["_id"]}
                        >
                          {entity["firstName"] + "    " + entity["lastName"]}
                        </Button>
                      );
                    })}
                </div>

                <div style={{ textAlign: "right" }}>
                  <EmployeeModalSearch
                    trigger={<Button>Add Employee</Button>}
                    title="Add Employee"
                    buttonLabel="Add Employee"
                    buttonAction={addEmployee}
                    closeIcon
                  >
                    <Header icon="archive" content="Add Employee" />
                    <Modal.Content>
                      <p>Add Employee</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color="red">
                        <Icon name="remove" /> No
                      </Button>
                      <Button color="green">
                        <Icon name="checkmark" /> Yes
                      </Button>
                    </Modal.Actions>
                  </EmployeeModalSearch>
                </div>

                {fields.map((a, i) => <Field key={i} {...a} />)}
                <Message error header="Add Failed" content={error} />
                <div style={{ textAlign: "right" }}>
                  <Button
                    content="Add"
                    icon="add"
                    loading={submitting}
                    onClick={handleSubmit(values =>
                      this.props.add({
                        ...values,

                        location: location,

                        employees: employees,

                        action: "add"
                      })
                    )}
                  />
                </div>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  add(data) {
    return new Promise((resolve, reject) => {
      return dispatch(
        addDepartment(data, "DEPARTMENT_ADD_FORM", { resolve, reject })
      );
    });
  },

  setLocation(location) {
    return dispatch(setLocationAction(location));
  },

  addEmployee(employee) {
    return dispatch(addEmployeeAction(employee));
  }
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: "addDepartment", saga: addDepartmentSaga });

export default reduxForm({ form: "DEPARTMENT_ADD_FORM" })(
  compose(withSaga, withConnect)(DepartmentAdd)
);
