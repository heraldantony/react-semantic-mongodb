/*
 *  Test sagas for saving Department 
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
  DEPARTMENT_SAVE,
  saveDepartment as saveDepartmentAction,
  saveDepartmentSuccess,
  saveDepartmentFail
} from "common/actions/department";

import { departmentSaveAPI } from "common/api/DepartmentSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSaveDepartment, saveDepartment } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doSaveDepartment Saga", () => {
  let doSaveDepartmentGenerator;

  beforeEach(() => {
    doSaveDepartmentGenerator = doSaveDepartment();
  });
  afterEach(() => {});

  it("should save Department", () => {
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

    fakeDepartment["departmentName"] = "Group";

    let fakeResult = { ok: true, data: fakeDepartment };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeDepartment,
        form: "DEPARTMENT_EDIT_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSaveDepartment, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(departmentSaveAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield saveDepartmentSuccess action with saving entity data
          .put(saveDepartmentSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to save Department with message', () => {
    let fakeDepartment = {"_id":"ead82594-40fe-4e42-a0a3-4dbaf524333b","departmentName":"Communications","location":{"_id":"10484fff-9593-4d5b-b26d-f01799c79a3f","streetAddress":"15615 Prosacco Alley","postalCode":"69000","city":"Lake Anaton","stateProvince":"Michigan","country":{"_id":"f8057f81-9663-4c01-a556-dfe45c72fb50","countryName":"Aruba","region":{"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}}},"undefined":[]}
    let fakeResult={ok: false, data: {message: 'Failed to save Department, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeDepartment, form: 'DEPARTMENT_EDIT_FORM', promise: {resolve, reject} }
       return expectSaga(doSaveDepartment, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(departmentSaveAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield saveDepartmentFail action with error message
           .put(saveDepartmentFail(fakeResult.data.message))
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

    fakeDepartment["departmentName"] = "Marketing";

    let fakeResult = { ok: true, data: fakeDepartment };
    let finalState = { ...initialState, department: fakeDepartment };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeDepartment,
        form: "DEPARTMENT_EDIT_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSaveDepartment, action)
        .withReducer(departmentReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(departmentSaveAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          saveDepartmentAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
