/*
 *  Test sagas for getting Department 
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
  DEPARTMENT_GET,
  getDepartment as getDepartmentAction,
  getDepartmentSuccess,
  getDepartmentFail
} from "common/actions/department";

import { departmentGetAPI } from "common/api/DepartmentSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doGetDepartment, getDepartment } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doGetDepartment Saga", () => {
  let doGetDepartmentGenerator;

  beforeEach(() => {
    doGetDepartmentGenerator = doGetDepartment();
  });
  afterEach(() => {});

  it("should get Department ", () => {
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
    let departmentId = fakeDepartment._id;
    let fakeResult = { ok: true, data: fakeDepartment };
    let action = { payload: departmentId };
    return (
      expectSaga(doGetDepartment, action)
        .provide([[call(departmentGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getDepartmentSuccess action with retrieved entity
        .put(getDepartmentSuccess(fakeResult.data))
        .run()
    );
  });
  it("should fail to get Department with message", () => {
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
    let departmentId = fakeDepartment._id;
    let fakeResult = {
      ok: false,
      data: { message: "Failed to get Department, random error" }
    };
    let action = { payload: departmentId };
    return (
      expectSaga(doGetDepartment, action)
        .provide([[call(departmentGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getDepartmentFail action with error message
        .put(getDepartmentFail(fakeResult.data.message))
        .run()
        .catch(error => {
          expect(error).toEqual(
            new SubmissionError({ _error: result.data.message })
          );
        })
    );
  });
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
    let departmentId = fakeDepartment._id;
    let fakeResult = { ok: true, data: fakeDepartment };
    let finalState = { ...initialState, department: fakeDepartment };
    let action = { payload: departmentId };
    return expectSaga(doGetDepartment, action)
      .withReducer(departmentReducer)
      .provide([[call(departmentGetAPI, action.payload), fakeResult]])
      .hasFinalState(finalState)
      .dispatch(
        getDepartmentAction(action.payload, action.form, action.promise)
      )
      .run();
  });
});
