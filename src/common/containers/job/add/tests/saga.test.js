/*
 *  Test sagas for adding Job 
 *
*/

import { SubmissionError, startSubmit, reset, stopSubmit } from "redux-form";
import {
  call,
  put,
  select,
  takeLatest,
  take,
  cancel
} from "redux-saga/effects";
import { LOCATION_CHANGE } from "react-router-redux";

import { initialState, jobReducer } from "common/reducers/job";

import {
  JOB_ADD,
  addJob as addJobAction,
  addJobSuccess,
  addJobFail
} from "common/actions/job";

import { jobAddAPI } from "common/api/JobSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doAddJob, addJob } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doAddJob Saga", () => {
  let doAddJobGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    doAddJobGenerator = doAddJob();
  });
  afterEach(() => {});

  it("should add Job", () => {
    let fakeJob = {
      _id: "cc63e617-b34c-4808-a000-7faf49595268",
      jobTitle: "Central Program Assistant",
      minSalary: 89368,
      maxSalary: 13863,
      undefined: []
    };
    delete fakeJob["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "59affc89-411e-4e2b-879a-cd0bd333153d", ...fakeJob }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeJob,
        form: "JOB_ADD_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doAddJob, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(jobAddAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield addJobSuccess action with new entity data
          .put(addJobSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to add Job with message', () => {
    let fakeJob = {"_id":"cc63e617-b34c-4808-a000-7faf49595268","jobTitle":"Central Program Assistant","minSalary":89368,"maxSalary":13863,"undefined":[]}
    delete fakeJob['_id'];
    let fakeResult={ok: false, data: {message: 'Failed to add Job, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeJob, form: 'JOB_ADD_FORM', promise: {resolve, reject} }
       return expectSaga(doAddJob, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(jobAddAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield addJobFail action with error message
           .put(addJobFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeJob = {
      _id: "cc63e617-b34c-4808-a000-7faf49595268",
      jobTitle: "Central Program Assistant",
      minSalary: 89368,
      maxSalary: 13863,
      undefined: []
    };
    delete fakeJob["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "b7e1ebc1-16a1-4d6e-8b49-6eb4827baf07", ...fakeJob }
    };
    let finalState = {
      ...initialState,
      job: { ...fakeJob, _id: fakeResult.data._id }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeJob,
        form: "JOB_ADD_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doAddJob, action)
        .withReducer(jobReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(jobAddAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(addJobAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
