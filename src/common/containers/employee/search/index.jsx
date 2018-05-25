// @flow
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import type { FormProps } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import Pagination from "components/Pagination/Pagination";
import { PAGE_SIZE, PAGE_RANGE_DISPLAYED } from "common/constants";
import {
  Grid,
  Header,
  Form,
  Button,
  Icon,
  Label,
  Menu,
  Table,
  Message
} from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import InputField from "components/elements/InputField";
import { searchEmployee } from "common/actions/employee";
import { createStructuredSelector } from "reselect";
import { makeSelectSearchEmployee } from "common/selectors/employee";
import injectSaga from "common/utils/injectSaga";
import { searchEmployee as searchEmployeeSaga } from "./saga";

type Props = {
  searchSubmit: (data: Object) => Promise,
  handlePageChange: (pageNumber: Object) => Promise
} & FormProps;

const headerNames = [
  "First Name",

  "Last Name",

  "Email",

  "Phone Number",

  "Hire Date",

  "Salary",

  "Commission Pct"
];

class EmployeeSearch extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      pageSize: PAGE_SIZE,
      totalItemsCount: 0,
      search: ""
    };
  }
  render() {
    const searchFields = [
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
        placeholder: "Search",
        name: "search",
        label: "Search",
        component: InputField
      }
    ];
    const {
      handleSubmit,
      searchProps,
      submitSucceeded,
      submitting,
      error,
      invalid
    } = this.props;
    var handlePageChange = this.props.handlePageChange.bind(this);
    const { activePage, pageSize, totalItemsCount } = this.state;
    var searchFn = this.props.searchSubmit.bind(this);
    return (
      <div>
        <Helmet>
          <title>Employees</title>
        </Helmet>
        <Grid columns={1}>
          <Grid.Row centered>
            <Grid.Column width={16}>
              <Button>
                <Link
                  to={{
                    pathname: `/addEmployee`,
                    state: {}
                  }}
                >
                  Add Employee
                </Link>
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={16}>
              <Form error={invalid}>
                {searchFields.map((a, i) => <Field key={i} {...a} />)}
                <Message error header="Search Failed" content={error} />
                <div style={{ textAlign: "right" }}>
                  <Button
                    content="Search"
                    icon="search"
                    loading={submitting}
                    onClick={handleSubmit(values =>
                      searchFn({
                        ...values,
                        action: "search",
                        pageNumber: 1,
                        pageSize: pageSize
                      })
                    )}
                  />
                </div>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {searchProps && searchProps.employees.length ? (
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>First Name</Table.HeaderCell>

                <Table.HeaderCell>Last Name</Table.HeaderCell>

                <Table.HeaderCell>Email</Table.HeaderCell>

                <Table.HeaderCell>Phone Number</Table.HeaderCell>

                <Table.HeaderCell>Hire Date</Table.HeaderCell>

                <Table.HeaderCell>Salary</Table.HeaderCell>

                <Table.HeaderCell>Commission Pct</Table.HeaderCell>

                <Table.HeaderCell>&nbsp;</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {searchProps.employees.map((employee, idx) => {
                return (
                  <Table.Row key={"employee_" + idx}>
                    <Table.Cell>{employee["firstName"]}</Table.Cell>

                    <Table.Cell>{employee["lastName"]}</Table.Cell>

                    <Table.Cell>{employee["email"]}</Table.Cell>

                    <Table.Cell>{employee["phoneNumber"]}</Table.Cell>

                    <Table.Cell>{employee["hireDate"]}</Table.Cell>

                    <Table.Cell>{employee["salary"]}</Table.Cell>

                    <Table.Cell>{employee["commissionPct"]}</Table.Cell>

                    <Table.Cell>
                      <Link to={"/editEmployee/" + employee["_id"]}>
                        <Button icon>
                          <Icon name="edit" />
                        </Button>
                      </Link>
                      <Link to={"/viewEmployee/" + employee["_id"]}>
                        <Button icon>
                          <Icon name="unhide" />
                        </Button>
                      </Link>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Pagination
                    activePage={activePage}
                    itemsCountPerPage={pageSize}
                    totalItemsCount={totalItemsCount}
                    pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
                    onChange={handlePageChange}
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        ) : (
          submitSucceeded && "No Employees found"
        )}
      </div>
    );
  }
}
const mapStateToProps = state =>
  createStructuredSelector({
    searchProps: makeSelectSearchEmployee()
  });

const mapDispatchToProps = dispatch => ({
  searchSubmit(data) {
    // if(data.action == "search") {}
    console.log(data);
    return new Promise((resolve, reject) => {
      this.setState({ activePage: 1, search: data.search });

      return dispatch(
        searchEmployee(data, "EMPLOYEE_SEARCH_FORM", { resolve, reject })
      );
    });
  },
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    return new Promise((resolve, reject) => {
      this.setState({ activePage: pageNumber });
      return dispatch(
        searchEmployee(
          {
            search: this.state.search,
            pageNumber: pageNumber,
            pageSize: this.state.pageSize
          },
          "EMPLOYEE_SEARCH_FORM",
          { resolve, reject }
        )
      );
    });
  }
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({
  key: "searchEmployee",
  saga: searchEmployeeSaga
});

export default reduxForm({ form: "EMPLOYEE_SEARCH_FORM" })(
  compose(withSaga, withConnect)(EmployeeSearch)
);
