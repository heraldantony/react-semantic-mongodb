/*
 *  Test sagas for getting Job 
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
  JOB_GET,
  getJob as getJobAction,
  getJobSuccess,
  getJobFail
} from "common/actions/job";

import { jobGetAPI } from "common/api/JobSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doGetJob, getJob } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doGetJob Saga", () => {
  let doGetJobGenerator;

  beforeEach(() => {
    doGetJobGenerator = doGetJob();
  });
  afterEach(() => {});

  it("should get Job ", () => {
    let fakeJob = {
      _id: "cc63e617-b34c-4808-a000-7faf49595268",
      jobTitle: "Central Program Assistant",
      minSalary: 89368,
      maxSalary: 13863,
      undefined: []
    };
    let jobId = fakeJob._id;
    let fakeResult = { ok: true, data: fakeJob };
    let action = { payload: jobId };
    return (
      expectSaga(doGetJob, action)
        .provide([[call(jobGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getJobSuccess action with retrieved entity
        .put(getJobSuccess(fakeResult.data))
        .run()
    );
  });
  it("should fail to get Job with message", () => {
    let fakeJob = {
      _id: "cc63e617-b34c-4808-a000-7faf49595268",
      jobTitle: "Central Program Assistant",
      minSalary: 89368,
      maxSalary: 13863,
      undefined: []
    };
    let jobId = fakeJob._id;
    let fakeResult = {
      ok: false,
      data: { message: "Failed to get Job, random error" }
    };
    let action = { payload: jobId };
    return (
      expectSaga(doGetJob, action)
        .provide([[call(jobGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getJobFail action with error message
        .put(getJobFail(fakeResult.data.message))
        .run()
        .catch(error => {
          expect(error).toEqual(
            new SubmissionError({ _error: result.data.message })
          );
        })
    );
  });
  it("should handle reducer and store state", () => {
    let fakeJob = {
      _id: "cc63e617-b34c-4808-a000-7faf49595268",
      jobTitle: "Central Program Assistant",
      minSalary: 89368,
      maxSalary: 13863,
      undefined: []
    };
    let jobId = fakeJob._id;
    let fakeResult = { ok: true, data: fakeJob };
    let finalState = { ...initialState, job: fakeJob };
    let action = { payload: jobId };
    return expectSaga(doGetJob, action)
      .withReducer(jobReducer)
      .provide([[call(jobGetAPI, action.payload), fakeResult]])
      .hasFinalState(finalState)
      .dispatch(getJobAction(action.payload, action.form, action.promise))
      .run();
  });
});
