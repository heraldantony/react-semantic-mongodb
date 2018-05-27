/*
 *  Test sagas for updating Location 
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
  LOCATION_UPDATE,
  updateLocation as updateLocationAction,
  updateLocationSuccess,
  updateLocationFail
} from "common/actions/location";

import { locationUpdateAPI } from "common/api/LocationSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doUpdateLocation, updateLocation } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doUpdateLocation Saga", () => {
  let doUpdateLocationGenerator;

  beforeEach(() => {
    doUpdateLocationGenerator = doUpdateLocation();
  });
  afterEach(() => {});

  it("should update Location", () => {
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

    fakeLocation["streetAddress"] = "9463 Dane Greens";

    fakeLocation["postalCode"] = "95383";

    fakeLocation["city"] = "Schneidershire";

    fakeLocation["stateProvince"] = "Kansas";

    let fakeResult = { ok: true, data: fakeLocation };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeLocation,
        form: "LOCATION_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doUpdateLocation, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(locationUpdateAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield updateLocationSuccess action with updating entity data
          .put(updateLocationSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to update Location with message', () => {
    let fakeLocation = {"_id":"10484fff-9593-4d5b-b26d-f01799c79a3f","streetAddress":"15615 Prosacco Alley","postalCode":"69000","city":"Lake Anaton","stateProvince":"Michigan","country":{"_id":"f8057f81-9663-4c01-a556-dfe45c72fb50","countryName":"Aruba","region":{"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}}}
    let fakeResult={ok: false, data: {message: 'Failed to update Location, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeLocation, form: 'LOCATION_UPDATE_FORM', promise: {resolve, reject} }
       return expectSaga(doUpdateLocation, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(locationUpdateAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield updateLocationFail action with error message
           .put(updateLocationFail(fakeResult.data.message))
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

    fakeLocation["streetAddress"] = "38753 Stephen Crest";

    fakeLocation["postalCode"] = "11670-1571";

    fakeLocation["city"] = "Lake Daphneehaven";

    fakeLocation["stateProvince"] = "New Hampshire";

    let fakeResult = { ok: true, data: fakeLocation };
    let finalState = { ...initialState, location: fakeLocation };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeLocation,
        form: "LOCATION_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(updateLocation, action)
        .withReducer(locationReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(locationUpdateAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          updateLocationAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
