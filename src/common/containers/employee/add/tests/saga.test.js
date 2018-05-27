/*
 *  Test sagas for adding Employee 
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
  EMPLOYEE_ADD,
  addEmployee as addEmployeeAction,
  addEmployeeSuccess,
  addEmployeeFail
} from "common/actions/employee";

import { employeeAddAPI } from "common/api/EmployeeSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doAddEmployee, addEmployee } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doAddEmployee Saga", () => {
  let doAddEmployeeGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    doAddEmployeeGenerator = doAddEmployee();
  });
  afterEach(() => {});

  it("should add Employee", () => {
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
    delete fakeEmployee["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "1dbdc85d-3c59-4d99-9026-79cb9ef7b9fd", ...fakeEmployee }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeEmployee,
        form: "EMPLOYEE_ADD_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doAddEmployee, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(employeeAddAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield addEmployeeSuccess action with new entity data
          .put(addEmployeeSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to add Employee with message', () => {
    let fakeEmployee = {"_id":"595533cc-8c3d-4d69-9106-1e1bc8a0ccda","firstName":"Wallace","lastName":"Pollich","email":"Kara38@gmail.com","phoneNumber":"1-701-546-0394 x188","hireDate":"2017-10-21T22:25:56.081Z","salary":6438,"commissionPct":44475,"undefined":[]}
    delete fakeEmployee['_id'];
    let fakeResult={ok: false, data: {message: 'Failed to add Employee, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeEmployee, form: 'EMPLOYEE_ADD_FORM', promise: {resolve, reject} }
       return expectSaga(doAddEmployee, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(employeeAddAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield addEmployeeFail action with error message
           .put(addEmployeeFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
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
    delete fakeEmployee["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "64b548e8-f65c-4481-9f26-064401f887d1", ...fakeEmployee }
    };
    let finalState = {
      ...initialState,
      employee: { ...fakeEmployee, _id: fakeResult.data._id }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeEmployee,
        form: "EMPLOYEE_ADD_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doAddEmployee, action)
        .withReducer(employeeReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(employeeAddAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          addEmployeeAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
