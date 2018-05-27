/*
 *  Test sagas for updating Employee 
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
  EMPLOYEE_UPDATE,
  updateEmployee as updateEmployeeAction,
  updateEmployeeSuccess,
  updateEmployeeFail
} from "common/actions/employee";

import { employeeUpdateAPI } from "common/api/EmployeeSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doUpdateEmployee, updateEmployee } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doUpdateEmployee Saga", () => {
  let doUpdateEmployeeGenerator;

  beforeEach(() => {
    doUpdateEmployeeGenerator = doUpdateEmployee();
  });
  afterEach(() => {});

  it("should update Employee", () => {
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

    fakeEmployee["firstName"] = "Emmett";

    fakeEmployee["lastName"] = "Murray";

    fakeEmployee["email"] = "Reymundo46@yahoo.com";

    fakeEmployee["phoneNumber"] = "1-040-510-8718 x07298";

    fakeEmployee["hireDate"] =
      "Sun Dec 24 2017 09:09:53 GMT+0530 (India Standard Time)";

    fakeEmployee["salary"] = 78702;

    fakeEmployee["commissionPct"] = 96182;

    let fakeResult = { ok: true, data: fakeEmployee };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeEmployee,
        form: "EMPLOYEE_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doUpdateEmployee, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(employeeUpdateAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield updateEmployeeSuccess action with updating entity data
          .put(updateEmployeeSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to update Employee with message', () => {
    let fakeEmployee = {"_id":"595533cc-8c3d-4d69-9106-1e1bc8a0ccda","firstName":"Wallace","lastName":"Pollich","email":"Kara38@gmail.com","phoneNumber":"1-701-546-0394 x188","hireDate":"2017-10-21T22:25:56.081Z","salary":6438,"commissionPct":44475,"undefined":[]}
    let fakeResult={ok: false, data: {message: 'Failed to update Employee, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeEmployee, form: 'EMPLOYEE_UPDATE_FORM', promise: {resolve, reject} }
       return expectSaga(doUpdateEmployee, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(employeeUpdateAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield updateEmployeeFail action with error message
           .put(updateEmployeeFail(fakeResult.data.message))
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

    fakeEmployee["firstName"] = "Kenneth";

    fakeEmployee["lastName"] = "Osinski";

    fakeEmployee["email"] = "Jaida.Prosacco51@hotmail.com";

    fakeEmployee["phoneNumber"] = "(585) 089-7557 x764";

    fakeEmployee["hireDate"] =
      "Tue Mar 13 2018 04:00:58 GMT+0530 (India Standard Time)";

    fakeEmployee["salary"] = 25667;

    fakeEmployee["commissionPct"] = 5182;

    let fakeResult = { ok: true, data: fakeEmployee };
    let finalState = { ...initialState, employee: fakeEmployee };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeEmployee,
        form: "EMPLOYEE_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(updateEmployee, action)
        .withReducer(employeeReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(employeeUpdateAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          updateEmployeeAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
