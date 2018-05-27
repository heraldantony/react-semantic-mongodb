/*
 *  Test sagas for saving Employee 
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
  EMPLOYEE_SAVE,
  saveEmployee as saveEmployeeAction,
  saveEmployeeSuccess,
  saveEmployeeFail
} from "common/actions/employee";

import { employeeSaveAPI } from "common/api/EmployeeSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSaveEmployee, saveEmployee } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doSaveEmployee Saga", () => {
  let doSaveEmployeeGenerator;

  beforeEach(() => {
    doSaveEmployeeGenerator = doSaveEmployee();
  });
  afterEach(() => {});

  it("should save Employee", () => {
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

    fakeEmployee["firstName"] = "Craig";

    fakeEmployee["lastName"] = "Auer";

    fakeEmployee["email"] = "Rocio_Funk@hotmail.com";

    fakeEmployee["phoneNumber"] = "(252) 046-9855 x058";

    fakeEmployee["hireDate"] =
      "Sun Mar 04 2018 02:32:01 GMT+0530 (India Standard Time)";

    fakeEmployee["salary"] = 94196;

    fakeEmployee["commissionPct"] = 29809;

    let fakeResult = { ok: true, data: fakeEmployee };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeEmployee,
        form: "EMPLOYEE_EDIT_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSaveEmployee, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(employeeSaveAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield saveEmployeeSuccess action with saving entity data
          .put(saveEmployeeSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to save Employee with message', () => {
    let fakeEmployee = {"_id":"595533cc-8c3d-4d69-9106-1e1bc8a0ccda","firstName":"Wallace","lastName":"Pollich","email":"Kara38@gmail.com","phoneNumber":"1-701-546-0394 x188","hireDate":"2017-10-21T22:25:56.081Z","salary":6438,"commissionPct":44475,"undefined":[]}
    let fakeResult={ok: false, data: {message: 'Failed to save Employee, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeEmployee, form: 'EMPLOYEE_EDIT_FORM', promise: {resolve, reject} }
       return expectSaga(doSaveEmployee, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(employeeSaveAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield saveEmployeeFail action with error message
           .put(saveEmployeeFail(fakeResult.data.message))
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

    fakeEmployee["firstName"] = "Brook";

    fakeEmployee["lastName"] = "Treutel";

    fakeEmployee["email"] = "Bernadine_Mertz36@yahoo.com";

    fakeEmployee["phoneNumber"] = "(650) 417-5242 x5987";

    fakeEmployee["hireDate"] =
      "Tue Dec 05 2017 13:03:54 GMT+0530 (India Standard Time)";

    fakeEmployee["salary"] = 93292;

    fakeEmployee["commissionPct"] = 13892;

    let fakeResult = { ok: true, data: fakeEmployee };
    let finalState = { ...initialState, employee: fakeEmployee };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeEmployee,
        form: "EMPLOYEE_EDIT_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSaveEmployee, action)
        .withReducer(employeeReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(employeeSaveAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          saveEmployeeAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
