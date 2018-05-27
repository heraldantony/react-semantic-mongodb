/*
 *  Test sagas for getting Employee 
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

import { initialState, employeeReducer } from "common/reducers/employee";

import {
  EMPLOYEE_GET,
  getEmployee as getEmployeeAction,
  getEmployeeSuccess,
  getEmployeeFail
} from "common/actions/employee";

import { employeeGetAPI } from "common/api/EmployeeSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doGetEmployee, getEmployee } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doGetEmployee Saga", () => {
  let doGetEmployeeGenerator;

  beforeEach(() => {
    doGetEmployeeGenerator = doGetEmployee();
  });
  afterEach(() => {});

  it("should get Employee ", () => {
    let fakeEmployee = {
      _id: "595533cc-8c3d-4d69-9106-1e1bc8a0ccda",
      firstName: "Wallace",
      lastName: "Pollich",
      email: "Kara38@gmail.com",
      phoneNumber: "1-701-546-0394 x188",
      hireDate: "2017-10-21T22:25:56.081Z",
      salary: 6438,
      commissionPct: 44475,
      undefined: []
    };
    let employeeId = fakeEmployee._id;
    let fakeResult = { ok: true, data: fakeEmployee };
    let action = { payload: employeeId };
    return (
      expectSaga(doGetEmployee, action)
        .provide([[call(employeeGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getEmployeeSuccess action with retrieved entity
        .put(getEmployeeSuccess(fakeResult.data))
        .run()
    );
  });
  it("should fail to get Employee with message", () => {
    let fakeEmployee = {
      _id: "595533cc-8c3d-4d69-9106-1e1bc8a0ccda",
      firstName: "Wallace",
      lastName: "Pollich",
      email: "Kara38@gmail.com",
      phoneNumber: "1-701-546-0394 x188",
      hireDate: "2017-10-21T22:25:56.081Z",
      salary: 6438,
      commissionPct: 44475,
      undefined: []
    };
    let employeeId = fakeEmployee._id;
    let fakeResult = {
      ok: false,
      data: { message: "Failed to get Employee, random error" }
    };
    let action = { payload: employeeId };
    return (
      expectSaga(doGetEmployee, action)
        .provide([[call(employeeGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getEmployeeFail action with error message
        .put(getEmployeeFail(fakeResult.data.message))
        .run()
        .catch(error => {
          expect(error).toEqual(
            new SubmissionError({ _error: result.data.message })
          );
        })
    );
  });
  it("should handle reducer and store state", () => {
    let fakeEmployee = {
      _id: "595533cc-8c3d-4d69-9106-1e1bc8a0ccda",
      firstName: "Wallace",
      lastName: "Pollich",
      email: "Kara38@gmail.com",
      phoneNumber: "1-701-546-0394 x188",
      hireDate: "2017-10-21T22:25:56.081Z",
      salary: 6438,
      commissionPct: 44475,
      undefined: []
    };
    let employeeId = fakeEmployee._id;
    let fakeResult = { ok: true, data: fakeEmployee };
    let finalState = { ...initialState, employee: fakeEmployee };
    let action = { payload: employeeId };
    return expectSaga(doGetEmployee, action)
      .withReducer(employeeReducer)
      .provide([[call(employeeGetAPI, action.payload), fakeResult]])
      .hasFinalState(finalState)
      .dispatch(getEmployeeAction(action.payload, action.form, action.promise))
      .run();
  });
});
