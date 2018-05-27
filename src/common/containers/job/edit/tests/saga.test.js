/*
 *  Test sagas for saving Job 
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
  JOB_SAVE,
  saveJob as saveJobAction,
  saveJobSuccess,
  saveJobFail
} from "common/actions/job";

import { jobSaveAPI } from "common/api/JobSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSaveJob, saveJob } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doSaveJob Saga", () => {
  let doSaveJobGenerator;

  beforeEach(() => {
    doSaveJobGenerator = doSaveJob();
  });
  afterEach(() => {});

  it("should save Job", () => {
    let fakeJob = {
      _id: "cc63e617-b34c-4808-a000-7faf49595268",
      jobTitle: "Central Program Assistant",
      minSalary: 89368,
      maxSalary: 13863,
      undefined: []
    };

    fakeJob["jobTitle"] = "Dynamic Applications Developer";

    fakeJob["minSalary"] = 80214;

    fakeJob["maxSalary"] = 32950;

    let fakeResult = { ok: true, data: fakeJob };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeJob,
        form: "JOB_EDIT_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSaveJob, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(jobSaveAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield saveJobSuccess action with saving entity data
          .put(saveJobSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to save Job with message', () => {
    let fakeJob = {"_id":"cc63e617-b34c-4808-a000-7faf49595268","jobTitle":"Central Program Assistant","minSalary":89368,"maxSalary":13863,"undefined":[]}
    let fakeResult={ok: false, data: {message: 'Failed to save Job, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeJob, form: 'JOB_EDIT_FORM', promise: {resolve, reject} }
       return expectSaga(doSaveJob, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(jobSaveAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield saveJobFail action with error message
           .put(saveJobFail(fakeResult.data.message))
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

    fakeJob["jobTitle"] = "Global Factors Representative";

    fakeJob["minSalary"] = 38979;

    fakeJob["maxSalary"] = 24962;

    let fakeResult = { ok: true, data: fakeJob };
    let finalState = { ...initialState, job: fakeJob };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeJob,
        form: "JOB_EDIT_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSaveJob, action)
        .withReducer(jobReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(jobSaveAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(saveJobAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
