/*
 *  Test sagas for updating Department 
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

import { initialState, departmentReducer } from "common/reducers/department";

import {
  DEPARTMENT_UPDATE,
  updateDepartment as updateDepartmentAction,
  updateDepartmentSuccess,
  updateDepartmentFail
} from "common/actions/department";

import { departmentUpdateAPI } from "common/api/DepartmentSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doUpdateDepartment, updateDepartment } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doUpdateDepartment Saga", () => {
  let doUpdateDepartmentGenerator;

  beforeEach(() => {
    doUpdateDepartmentGenerator = doUpdateDepartment();
  });
  afterEach(() => {});

  it("should update Department", () => {
    let fakeDepartment = {
      _id: "ead82594-40fe-4e42-a0a3-4dbaf524333b",
      departmentName: "Communications",
      location: {
        _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
        streetAddress: "15615 Prosacco Alley",
        postalCode: "69000",
        city: "Lake Anaton",
        stateProvince: "Michigan",
        country: {
          _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
          countryName: "Aruba",
          region: {
            _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
            regionName: "South-east Asia"
          }
        }
      },
      undefined: []
    };

    fakeDepartment["departmentName"] = "Response";

    let fakeResult = { ok: true, data: fakeDepartment };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeDepartment,
        form: "DEPARTMENT_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doUpdateDepartment, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(departmentUpdateAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield updateDepartmentSuccess action with updating entity data
          .put(updateDepartmentSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to update Department with message', () => {
    let fakeDepartment = {"_id":"ead82594-40fe-4e42-a0a3-4dbaf524333b","departmentName":"Communications","location":{"_id":"10484fff-9593-4d5b-b26d-f01799c79a3f","streetAddress":"15615 Prosacco Alley","postalCode":"69000","city":"Lake Anaton","stateProvince":"Michigan","country":{"_id":"f8057f81-9663-4c01-a556-dfe45c72fb50","countryName":"Aruba","region":{"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}}},"undefined":[]}
    let fakeResult={ok: false, data: {message: 'Failed to update Department, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeDepartment, form: 'DEPARTMENT_UPDATE_FORM', promise: {resolve, reject} }
       return expectSaga(doUpdateDepartment, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(departmentUpdateAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield updateDepartmentFail action with error message
           .put(updateDepartmentFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeDepartment = {
      _id: "ead82594-40fe-4e42-a0a3-4dbaf524333b",
      departmentName: "Communications",
      location: {
        _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
        streetAddress: "15615 Prosacco Alley",
        postalCode: "69000",
        city: "Lake Anaton",
        stateProvince: "Michigan",
        country: {
          _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
          countryName: "Aruba",
          region: {
            _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
            regionName: "South-east Asia"
          }
        }
      },
      undefined: []
    };

    fakeDepartment["departmentName"] = "Mobility";

    let fakeResult = { ok: true, data: fakeDepartment };
    let finalState = { ...initialState, department: fakeDepartment };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeDepartment,
        form: "DEPARTMENT_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(updateDepartment, action)
        .withReducer(departmentReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(departmentUpdateAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          updateDepartmentAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
