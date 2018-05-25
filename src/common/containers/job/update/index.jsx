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
import InputField from "components/elements/InputField";
import { DateTime } from "react-datetime";
import "react-datetime/css/react-datetime.css";
import TextAreaField from "components/elements/TextAreaField";
import DateTimeField from "components/elements/DateTimeField";
import { getJob, updateJob, JOB_ADD_TASK } from "common/actions/job";
import { createStructuredSelector } from "reselect";

import TaskModalSearch from "containers/task/modal_search";

import {
  makeSelectJob,
  makeSelectJobInitialValues
} from "common/selectors/job";
import injectSaga from "common/utils/injectSaga";
import { updateJob as updateJobSaga } from "./saga";

type Props = FormProps;

const fields = [
  {
    placeholder: "Job Title",
    name: "jobTitle",
    label: "Job Title",

    component: InputField
  },

  {
    placeholder: "Min Salary",
    name: "minSalary",
    label: "Min Salary",

    component: InputField
  },

  {
    placeholder: "Max Salary",
    name: "maxSalary",
    label: "Max Salary",

    component: InputField
  }
];
class JobEdit extends Component<Props, State> {
  componentDidMount() {
    if (this.props.match.params && this.props.match.params.id) {
      this.props.dispatch(getJob(this.props.match.params.id));
    }
  }

  render() {
    const {
      handleSubmit,
      submitting,
      submitSucceeded,
      error,
      warning
    } = this.props;

    const tasks = this.props.jobProps.job.tasks;
    var addTask = this.props.addTask.bind(this);

    return (
      <div>
        <Helmet>
          <title>Job</title>
        </Helmet>
        <Grid columns={1}>
          <Grid.Row centered>
            <Grid.Column width={16}>
              <Button>
                <Link
                  to={{
                    pathname: `/job`,
                    state: {}
                  }}
                >
                  Search Job
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
                    <p>Job saved</p>
                  </Message>
                )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={16}>
              <Form>
                <div style={{ textAlign: "left" }}>
                  {tasks &&
                    tasks.length > 0 &&
                    tasks.map((entity, idx) => {
                      return (
                        <Button
                          as={Link}
                          key={entity["_id"] + idx}
                          to={"/viewTask/" + entity["_id"]}
                        >
                          {entity["title"]}
                        </Button>
                      );
                    })}
                </div>

                <div style={{ textAlign: "right" }}>
                  <TaskModalSearch
                    trigger={<Button>Add Task</Button>}
                    title="Add Task"
                    buttonLabel="Add Task"
                    buttonAction={addTask}
                    closeIcon
                  >
                    <Header icon="archive" content="Add Task" />
                    <Modal.Content>
                      <p>Add Task</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color="red">
                        <Icon name="remove" /> No
                      </Button>
                      <Button color="green">
                        <Icon name="checkmark" /> Yes
                      </Button>
                    </Modal.Actions>
                  </TaskModalSearch>
                </div>

                {fields.map((a, i) => <Field key={i} {...a} />)}

                <div style={{ textAlign: "right" }}>
                  <Button
                    content="Save"
                    icon="save"
                    onClick={handleSubmit(values =>
                      this.props.save({
                        ...values,

                        tasks: tasks,

                        action: "save"
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
const mapStateToProps = state =>
  createStructuredSelector({
    jobProps: makeSelectJob(),
    initialValues: makeSelectJobInitialValues()
  });

const mapDispatchToProps = dispatch => ({
  async save(data) {
    console.log(data);
    return dispatch(updateJob(data));
  },

  addTask(task) {
    console.log("addTask");
    JOB_ADD_TASK(task, dispatch);
  }
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: "updateJob", saga: updateJobSaga });

export default compose(withSaga, withConnect)(
  reduxForm({ form: "JOB_EDIT_FORM", enableReinitialize: true })(JobEdit)
);
