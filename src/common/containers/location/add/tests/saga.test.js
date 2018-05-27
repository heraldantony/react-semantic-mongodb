/*
 *  Test sagas for adding Location 
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
  LOCATION_ADD,
  addLocation as addLocationAction,
  addLocationSuccess,
  addLocationFail
} from "common/actions/location";

import { locationAddAPI } from "common/api/LocationSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doAddLocation, addLocation } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doAddLocation Saga", () => {
  let doAddLocationGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    doAddLocationGenerator = doAddLocation();
  });
  afterEach(() => {});

  it("should add Location", () => {
    let fakeLocation = {
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
    };
    delete fakeLocation["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "a6c8e3ce-7037-4f02-b5a8-7515804d2a9b", ...fakeLocation }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeLocation,
        form: "LOCATION_ADD_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doAddLocation, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(locationAddAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield addLocationSuccess action with new entity data
          .put(addLocationSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to add Location with message', () => {
    let fakeLocation = {"_id":"10484fff-9593-4d5b-b26d-f01799c79a3f","streetAddress":"15615 Prosacco Alley","postalCode":"69000","city":"Lake Anaton","stateProvince":"Michigan","country":{"_id":"f8057f81-9663-4c01-a556-dfe45c72fb50","countryName":"Aruba","region":{"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}}}
    delete fakeLocation['_id'];
    let fakeResult={ok: false, data: {message: 'Failed to add Location, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeLocation, form: 'LOCATION_ADD_FORM', promise: {resolve, reject} }
       return expectSaga(doAddLocation, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(locationAddAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield addLocationFail action with error message
           .put(addLocationFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeLocation = {
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
    };
    delete fakeLocation["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "1235a832-db69-4b98-85b8-5633fd6f3e75", ...fakeLocation }
    };
    let finalState = {
      ...initialState,
      location: { ...fakeLocation, _id: fakeResult.data._id }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeLocation,
        form: "LOCATION_ADD_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doAddLocation, action)
        .withReducer(locationReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(locationAddAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          addLocationAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
