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
import { addTask, addJob as addJobAction } from "common/actions/task";
import { createStructuredSelector } from "reselect";

import JobModalSearch from "containers/job/modal_search";

import {
  makeSelectTask,
  makeSelectTaskInitialValues
} from "common/selectors/task";

import injectSaga from "common/utils/injectSaga";
import { addTask as addTaskSaga } from "./saga";

type Props = {
  add: (data: Object) => Promise
} & FormProps;

class TaskAdd extends Component<Props, State> {
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
        placeholder: "Title",
        name: "title",
        label: "Title",

        component: InputField
      },

      {
        placeholder: "Description",
        name: "description",
        label: "Description",

        component: TextAreaField
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

    const jobs = this.props.taskProps.task.jobs;
    var addJob = this.props.addJob.bind(this);

    return (
      <div>
        <Helmet>
          <title>Task</title>
        </Helmet>
        <Grid columns={1}>
          <Grid.Row centered>
            <Grid.Column width={16}>
              <Button>
                <Link
                  to={{
                    pathname: `/task`,
                    state: {}
                  }}
                >
                  Search Task
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
                    <p>Task saved</p>
                  </Message>
                )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={16}>
              <Form error={invalid}>
                <div style={{ textAlign: "left" }}>
                  {jobs &&
                    jobs.length > 0 &&
                    jobs.map((entity, idx) => {
                      return (
                        <Button
                          as={Link}
                          key={entity["_id"] + idx}
                          to={"/viewJob/" + entity["_id"]}
                        >
                          {entity["jobTitle"]}
                        </Button>
                      );
                    })}
                </div>

                <div style={{ textAlign: "right" }}>
                  <JobModalSearch
                    trigger={<Button>Add Job</Button>}
                    title="Add Job"
                    buttonLabel="Add Job"
                    buttonAction={addJob}
                    closeIcon
                  >
                    <Header icon="archive" content="Add Job" />
                    <Modal.Content>
                      <p>Add Job</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color="red">
                        <Icon name="remove" /> No
                      </Button>
                      <Button color="green">
                        <Icon name="checkmark" /> Yes
                      </Button>
                    </Modal.Actions>
                  </JobModalSearch>
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

                        jobs: jobs,

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
      return dispatch(addTask(data, "TASK_ADD_FORM", { resolve, reject }));
    });
  },

  addJob(job) {
    return dispatch(addJobAction(job));
  }
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: "addTask", saga: addTaskSaga });

export default reduxForm({ form: "TASK_ADD_FORM" })(
  compose(withSaga, withConnect)(TaskAdd)
);
