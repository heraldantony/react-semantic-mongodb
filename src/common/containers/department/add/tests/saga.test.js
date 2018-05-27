/*
 *  Test sagas for adding Department 
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
  DEPARTMENT_ADD,
  addDepartment as addDepartmentAction,
  addDepartmentSuccess,
  addDepartmentFail
} from "common/actions/department";

import { departmentAddAPI } from "common/api/DepartmentSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doAddDepartment, addDepartment } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doAddDepartment Saga", () => {
  let doAddDepartmentGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    doAddDepartmentGenerator = doAddDepartment();
  });
  afterEach(() => {});

  it("should add Department", () => {
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
    delete fakeDepartment["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "67859c24-3b5f-4597-b7ec-0e572d5c4239", ...fakeDepartment }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeDepartment,
        form: "DEPARTMENT_ADD_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doAddDepartment, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(departmentAddAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield addDepartmentSuccess action with new entity data
          .put(addDepartmentSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to add Department with message', () => {
    let fakeDepartment = {"_id":"ead82594-40fe-4e42-a0a3-4dbaf524333b","departmentName":"Communications","location":{"_id":"10484fff-9593-4d5b-b26d-f01799c79a3f","streetAddress":"15615 Prosacco Alley","postalCode":"69000","city":"Lake Anaton","stateProvince":"Michigan","country":{"_id":"f8057f81-9663-4c01-a556-dfe45c72fb50","countryName":"Aruba","region":{"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}}},"undefined":[]}
    delete fakeDepartment['_id'];
    let fakeResult={ok: false, data: {message: 'Failed to add Department, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeDepartment, form: 'DEPARTMENT_ADD_FORM', promise: {resolve, reject} }
       return expectSaga(doAddDepartment, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(departmentAddAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield addDepartmentFail action with error message
           .put(addDepartmentFail(fakeResult.data.message))
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
    delete fakeDepartment["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "b3ff363c-4164-4062-8107-19f51f642bd1", ...fakeDepartment }
    };
    let finalState = {
      ...initialState,
      department: { ...fakeDepartment, _id: fakeResult.data._id }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeDepartment,
        form: "DEPARTMENT_ADD_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doAddDepartment, action)
        .withReducer(departmentReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(departmentAddAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          addDepartmentAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
