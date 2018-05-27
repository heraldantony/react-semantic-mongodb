/*
 *  Test sagas for updating Job 
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
  JOB_UPDATE,
  updateJob as updateJobAction,
  updateJobSuccess,
  updateJobFail
} from "common/actions/job";

import { jobUpdateAPI } from "common/api/JobSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doUpdateJob, updateJob } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doUpdateJob Saga", () => {
  let doUpdateJobGenerator;

  beforeEach(() => {
    doUpdateJobGenerator = doUpdateJob();
  });
  afterEach(() => {});

  it("should update Job", () => {
    let fakeJob = {
      _id: "cc63e617-b34c-4808-a000-7faf49595268",
      jobTitle: "Central Program Assistant",
      minSalary: 89368,
      maxSalary: 13863,
      undefined: []
    };

    fakeJob["jobTitle"] = "Dynamic Interactions Officer";

    fakeJob["minSalary"] = 30932;

    fakeJob["maxSalary"] = 18911;

    let fakeResult = { ok: true, data: fakeJob };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeJob,
        form: "JOB_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doUpdateJob, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(jobUpdateAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield updateJobSuccess action with updating entity data
          .put(updateJobSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to update Job with message', () => {
    let fakeJob = {"_id":"cc63e617-b34c-4808-a000-7faf49595268","jobTitle":"Central Program Assistant","minSalary":89368,"maxSalary":13863,"undefined":[]}
    let fakeResult={ok: false, data: {message: 'Failed to update Job, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeJob, form: 'JOB_UPDATE_FORM', promise: {resolve, reject} }
       return expectSaga(doUpdateJob, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(jobUpdateAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield updateJobFail action with error message
           .put(updateJobFail(fakeResult.data.message))
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

    fakeJob["jobTitle"] = "Product Program Assistant";

    fakeJob["minSalary"] = 60581;

    fakeJob["maxSalary"] = 11443;

    let fakeResult = { ok: true, data: fakeJob };
    let finalState = { ...initialState, job: fakeJob };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeJob,
        form: "JOB_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(updateJob, action)
        .withReducer(jobReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(jobUpdateAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(updateJobAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
