/*
 *  Test sagas for searching Job 
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
  JOB_SEARCH,
  searchJob as searchJobAction,
  searchJobSuccess,
  searchJobFail
} from "common/actions/job";

import { jobSearchAPI } from "common/api/JobSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSearchJob, searchJob } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doSearchJob Saga", () => {
  let doSearchJobGenerator;

  beforeEach(() => {
    doSearchJobGenerator = doSearchJob();
  });
  afterEach(() => {});

  it("should search and return  Job List", () => {
    let fakeJobList = [
      {
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
        undefined: []
      },
      {
        _id: "bf3691ab-a9f4-4c1a-942c-7335ebf10b92",
        jobTitle: "Regional Assurance Planner",
        minSalary: 41622,
        maxSalary: 5260,
        undefined: []
      },
      {
        _id: "27cce88f-85d6-43d8-9d7c-87e64938ab85",
        jobTitle: "Global Web Agent",
        minSalary: 52327,
        maxSalary: 11640,
        undefined: []
      }
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: fakeJobList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "JOB_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSearchJob, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(jobSearchAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield searchJobSuccess action with search
          .put(searchJobSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to search for Job with message', () => {
    let fakeJobList = [{"_id":"cc63e617-b34c-4808-a000-7faf49595268","jobTitle":"Central Program Assistant","minSalary":89368,"maxSalary":13863,"undefined":[]},{"_id":"bf3691ab-a9f4-4c1a-942c-7335ebf10b92","jobTitle":"Regional Assurance Planner","minSalary":41622,"maxSalary":5260,"undefined":[]},{"_id":"27cce88f-85d6-43d8-9d7c-87e64938ab85","jobTitle":"Global Web Agent","minSalary":52327,"maxSalary":11640,"undefined":[]}]
    let searchFormData = {search: 'test', pageNumber: 1, pageSize: 10}
    let fakeResult={ok: false, data: {message: 'Failed to search for Job, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: searchFormData, form: 'JOB_SEARCH_FORM', promise: {resolve, reject} }
       return expectSaga(doSearchJob, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(jobSearchAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield searchJobFail action with error message
           .put(searchJobFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeJobList = [
      {
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
        undefined: []
      },
      {
        _id: "bf3691ab-a9f4-4c1a-942c-7335ebf10b92",
        jobTitle: "Regional Assurance Planner",
        minSalary: 41622,
        maxSalary: 5260,
        undefined: []
      },
      {
        _id: "27cce88f-85d6-43d8-9d7c-87e64938ab85",
        jobTitle: "Global Web Agent",
        minSalary: 52327,
        maxSalary: 11640,
        undefined: []
      }
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: { docs: fakeJobList } };
    let finalState = { ...initialState, jobs: fakeJobList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "JOB_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSearchJob, action)
        .withReducer(jobReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(jobSearchAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(searchJobAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
