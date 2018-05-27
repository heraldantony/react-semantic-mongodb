/*
 *  Test sagas for searching Employee 
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
  EMPLOYEE_SEARCH,
  searchEmployee as searchEmployeeAction,
  searchEmployeeSuccess,
  searchEmployeeFail
} from "common/actions/employee";

import { employeeSearchAPI } from "common/api/EmployeeSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSearchEmployee, searchEmployee } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doSearchEmployee Saga", () => {
  let doSearchEmployeeGenerator;

  beforeEach(() => {
    doSearchEmployeeGenerator = doSearchEmployee();
  });
  afterEach(() => {});

  it("should search and return  Employee List", () => {
    let fakeEmployeeList = [
      {
        _id: "595533cc-8c3d-4d69-9106-1e1bc8a0ccda",
        firstName: "Wallace",
        lastName: "Pollich",
        email: "Kara38@gmail.com",
        phoneNumber: "1-701-546-0394 x188",
        hireDate: "2017-10-21T22:25:56.081Z",
        salary: 6438,
        commissionPct: 44475,
        undefined: []
      },
      {
        _id: "a10c5c2e-1bc4-4420-9e01-9903ff279a07",
        firstName: "Derick",
        lastName: "Pfeffer",
        email: "Felton.Hansen37@yahoo.com",
        phoneNumber: "759-856-0321 x4561",
        hireDate: "2017-07-07T18:05:18.274Z",
        salary: 85216,
        commissionPct: 95379,
        undefined: []
      },
      {
        _id: "80e75d2c-1cef-4c5a-bf35-abdd46462568",
        firstName: "Jaron",
        lastName: "Koelpin",
        email: "Watson.Batz@yahoo.com",
        phoneNumber: "514-926-5302 x1530",
        hireDate: "2017-06-16T09:49:47.342Z",
        salary: 83923,
        commissionPct: 96603,
        undefined: []
      }
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: fakeEmployeeList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "EMPLOYEE_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSearchEmployee, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(employeeSearchAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield searchEmployeeSuccess action with search
          .put(searchEmployeeSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to search for Employee with message', () => {
    let fakeEmployeeList = [{"_id":"595533cc-8c3d-4d69-9106-1e1bc8a0ccda","firstName":"Wallace","lastName":"Pollich","email":"Kara38@gmail.com","phoneNumber":"1-701-546-0394 x188","hireDate":"2017-10-21T22:25:56.081Z","salary":6438,"commissionPct":44475,"undefined":[]},{"_id":"a10c5c2e-1bc4-4420-9e01-9903ff279a07","firstName":"Derick","lastName":"Pfeffer","email":"Felton.Hansen37@yahoo.com","phoneNumber":"759-856-0321 x4561","hireDate":"2017-07-07T18:05:18.274Z","salary":85216,"commissionPct":95379,"undefined":[]},{"_id":"80e75d2c-1cef-4c5a-bf35-abdd46462568","firstName":"Jaron","lastName":"Koelpin","email":"Watson.Batz@yahoo.com","phoneNumber":"514-926-5302 x1530","hireDate":"2017-06-16T09:49:47.342Z","salary":83923,"commissionPct":96603,"undefined":[]}]
    let searchFormData = {search: 'test', pageNumber: 1, pageSize: 10}
    let fakeResult={ok: false, data: {message: 'Failed to search for Employee, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: searchFormData, form: 'EMPLOYEE_SEARCH_FORM', promise: {resolve, reject} }
       return expectSaga(doSearchEmployee, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(employeeSearchAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield searchEmployeeFail action with error message
           .put(searchEmployeeFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeEmployeeList = [
      {
        _id: "595533cc-8c3d-4d69-9106-1e1bc8a0ccda",
        firstName: "Wallace",
        lastName: "Pollich",
        email: "Kara38@gmail.com",
        phoneNumber: "1-701-546-0394 x188",
        hireDate: "2017-10-21T22:25:56.081Z",
        salary: 6438,
        commissionPct: 44475,
        undefined: []
      },
      {
        _id: "a10c5c2e-1bc4-4420-9e01-9903ff279a07",
        firstName: "Derick",
        lastName: "Pfeffer",
        email: "Felton.Hansen37@yahoo.com",
        phoneNumber: "759-856-0321 x4561",
        hireDate: "2017-07-07T18:05:18.274Z",
        salary: 85216,
        commissionPct: 95379,
        undefined: []
      },
      {
        _id: "80e75d2c-1cef-4c5a-bf35-abdd46462568",
        firstName: "Jaron",
        lastName: "Koelpin",
        email: "Watson.Batz@yahoo.com",
        phoneNumber: "514-926-5302 x1530",
        hireDate: "2017-06-16T09:49:47.342Z",
        salary: 83923,
        commissionPct: 96603,
        undefined: []
      }
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: { docs: fakeEmployeeList } };
    let finalState = { ...initialState, employees: fakeEmployeeList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "EMPLOYEE_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSearchEmployee, action)
        .withReducer(employeeReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(employeeSearchAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          searchEmployeeAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
