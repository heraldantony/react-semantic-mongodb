/*
 *  Test sagas for searching Department 
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
  DEPARTMENT_SEARCH,
  searchDepartment as searchDepartmentAction,
  searchDepartmentSuccess,
  searchDepartmentFail
} from "common/actions/department";

import { departmentSearchAPI } from "common/api/DepartmentSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSearchDepartment, searchDepartment } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doSearchDepartment Saga", () => {
  let doSearchDepartmentGenerator;

  beforeEach(() => {
    doSearchDepartmentGenerator = doSearchDepartment();
  });
  afterEach(() => {});

  it("should search and return  Department List", () => {
    let fakeDepartmentList = [
      {
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
      },
      {
        _id: "577923db-db20-4322-8562-28e08dd28bef",
        departmentName: "Solutions",
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
      },
      {
        _id: "d760be3b-3b1f-42da-9d52-5f0d080a05b6",
        departmentName: "Group",
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
      }
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: fakeDepartmentList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "DEPARTMENT_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSearchDepartment, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(departmentSearchAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield searchDepartmentSuccess action with search
          .put(searchDepartmentSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to search for Department with message', () => {
    let fakeDepartmentList = [{"_id":"ead82594-40fe-4e42-a0a3-4dbaf524333b","departmentName":"Communications","location":{"_id":"10484fff-9593-4d5b-b26d-f01799c79a3f","streetAddress":"15615 Prosacco Alley","postalCode":"69000","city":"Lake Anaton","stateProvince":"Michigan","country":{"_id":"f8057f81-9663-4c01-a556-dfe45c72fb50","countryName":"Aruba","region":{"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}}},"undefined":[]},{"_id":"577923db-db20-4322-8562-28e08dd28bef","departmentName":"Solutions","location":{"_id":"10484fff-9593-4d5b-b26d-f01799c79a3f","streetAddress":"15615 Prosacco Alley","postalCode":"69000","city":"Lake Anaton","stateProvince":"Michigan","country":{"_id":"f8057f81-9663-4c01-a556-dfe45c72fb50","countryName":"Aruba","region":{"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}}},"undefined":[]},{"_id":"d760be3b-3b1f-42da-9d52-5f0d080a05b6","departmentName":"Group","location":{"_id":"10484fff-9593-4d5b-b26d-f01799c79a3f","streetAddress":"15615 Prosacco Alley","postalCode":"69000","city":"Lake Anaton","stateProvince":"Michigan","country":{"_id":"f8057f81-9663-4c01-a556-dfe45c72fb50","countryName":"Aruba","region":{"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}}},"undefined":[]}]
    let searchFormData = {search: 'test', pageNumber: 1, pageSize: 10}
    let fakeResult={ok: false, data: {message: 'Failed to search for Department, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: searchFormData, form: 'DEPARTMENT_SEARCH_FORM', promise: {resolve, reject} }
       return expectSaga(doSearchDepartment, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(departmentSearchAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield searchDepartmentFail action with error message
           .put(searchDepartmentFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeDepartmentList = [
      {
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
      },
      {
        _id: "577923db-db20-4322-8562-28e08dd28bef",
        departmentName: "Solutions",
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
      },
      {
        _id: "d760be3b-3b1f-42da-9d52-5f0d080a05b6",
        departmentName: "Group",
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
      }
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: { docs: fakeDepartmentList } };
    let finalState = { ...initialState, departments: fakeDepartmentList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "DEPARTMENT_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSearchDepartment, action)
        .withReducer(departmentReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(departmentSearchAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          searchDepartmentAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
