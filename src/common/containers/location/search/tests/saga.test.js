/*
 *  Test sagas for searching Location 
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

import { initialState, locationReducer } from "common/reducers/location";

import {
  LOCATION_SEARCH,
  searchLocation as searchLocationAction,
  searchLocationSuccess,
  searchLocationFail
} from "common/actions/location";

import { locationSearchAPI } from "common/api/LocationSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSearchLocation, searchLocation } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doSearchLocation Saga", () => {
  let doSearchLocationGenerator;

  beforeEach(() => {
    doSearchLocationGenerator = doSearchLocation();
  });
  afterEach(() => {});

  it("should search and return  Location List", () => {
    let fakeLocationList = [
      {
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
      {
        _id: "e45d6521-c81c-456d-81dc-744594b26184",
        streetAddress: "6514 Wisoky Cliff",
        postalCode: "21474-6864",
        city: "Pollichside",
        stateProvince: "New Jersey",
        country: {
          _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
          countryName: "Aruba",
          region: {
            _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
            regionName: "South-east Asia"
          }
        }
      },
      {
        _id: "486b4125-2e8b-48f1-acef-feb135593b24",
        streetAddress: "899 Kassulke Landing",
        postalCode: "98961",
        city: "South Adriannastad",
        stateProvince: "Massachusetts",
        country: {
          _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
          countryName: "Aruba",
          region: {
            _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
            regionName: "South-east Asia"
          }
        }
      }
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: fakeLocationList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "LOCATION_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSearchLocation, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(locationSearchAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield searchLocationSuccess action with search
          .put(searchLocationSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to search for Location with message', () => {
    let fakeLocationList = [{"_id":"10484fff-9593-4d5b-b26d-f01799c79a3f","streetAddress":"15615 Prosacco Alley","postalCode":"69000","city":"Lake Anaton","stateProvince":"Michigan","country":{"_id":"f8057f81-9663-4c01-a556-dfe45c72fb50","countryName":"Aruba","region":{"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}}},{"_id":"e45d6521-c81c-456d-81dc-744594b26184","streetAddress":"6514 Wisoky Cliff","postalCode":"21474-6864","city":"Pollichside","stateProvince":"New Jersey","country":{"_id":"f8057f81-9663-4c01-a556-dfe45c72fb50","countryName":"Aruba","region":{"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}}},{"_id":"486b4125-2e8b-48f1-acef-feb135593b24","streetAddress":"899 Kassulke Landing","postalCode":"98961","city":"South Adriannastad","stateProvince":"Massachusetts","country":{"_id":"f8057f81-9663-4c01-a556-dfe45c72fb50","countryName":"Aruba","region":{"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}}}]
    let searchFormData = {search: 'test', pageNumber: 1, pageSize: 10}
    let fakeResult={ok: false, data: {message: 'Failed to search for Location, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: searchFormData, form: 'LOCATION_SEARCH_FORM', promise: {resolve, reject} }
       return expectSaga(doSearchLocation, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(locationSearchAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield searchLocationFail action with error message
           .put(searchLocationFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeLocationList = [
      {
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
      {
        _id: "e45d6521-c81c-456d-81dc-744594b26184",
        streetAddress: "6514 Wisoky Cliff",
        postalCode: "21474-6864",
        city: "Pollichside",
        stateProvince: "New Jersey",
        country: {
          _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
          countryName: "Aruba",
          region: {
            _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
            regionName: "South-east Asia"
          }
        }
      },
      {
        _id: "486b4125-2e8b-48f1-acef-feb135593b24",
        streetAddress: "899 Kassulke Landing",
        postalCode: "98961",
        city: "South Adriannastad",
        stateProvince: "Massachusetts",
        country: {
          _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
          countryName: "Aruba",
          region: {
            _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
            regionName: "South-east Asia"
          }
        }
      }
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: { docs: fakeLocationList } };
    let finalState = { ...initialState, locations: fakeLocationList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "LOCATION_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSearchLocation, action)
        .withReducer(locationReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(locationSearchAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          searchLocationAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
