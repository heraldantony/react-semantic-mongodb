/*
 *  Test sagas for saving Location 
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
  LOCATION_SAVE,
  saveLocation as saveLocationAction,
  saveLocationSuccess,
  saveLocationFail
} from "common/actions/location";

import { locationSaveAPI } from "common/api/LocationSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSaveLocation, saveLocation } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doSaveLocation Saga", () => {
  let doSaveLocationGenerator;

  beforeEach(() => {
    doSaveLocationGenerator = doSaveLocation();
  });
  afterEach(() => {});

  it("should save Location", () => {
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

    fakeLocation["streetAddress"] = "943 Spinka Mountain";

    fakeLocation["postalCode"] = "85913";

    fakeLocation["city"] = "Andreaneton";

    fakeLocation["stateProvince"] = "New Mexico";

    let fakeResult = { ok: true, data: fakeLocation };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeLocation,
        form: "LOCATION_EDIT_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSaveLocation, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(locationSaveAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield saveLocationSuccess action with saving entity data
          .put(saveLocationSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to save Location with message', () => {
    let fakeLocation = {"_id":"10484fff-9593-4d5b-b26d-f01799c79a3f","streetAddress":"15615 Prosacco Alley","postalCode":"69000","city":"Lake Anaton","stateProvince":"Michigan","country":{"_id":"f8057f81-9663-4c01-a556-dfe45c72fb50","countryName":"Aruba","region":{"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}}}
    let fakeResult={ok: false, data: {message: 'Failed to save Location, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeLocation, form: 'LOCATION_EDIT_FORM', promise: {resolve, reject} }
       return expectSaga(doSaveLocation, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(locationSaveAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield saveLocationFail action with error message
           .put(saveLocationFail(fakeResult.data.message))
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

    fakeLocation["streetAddress"] = "66241 Bernhard Ridge";

    fakeLocation["postalCode"] = "86806";

    fakeLocation["city"] = "Krisview";

    fakeLocation["stateProvince"] = "Indiana";

    let fakeResult = { ok: true, data: fakeLocation };
    let finalState = { ...initialState, location: fakeLocation };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeLocation,
        form: "LOCATION_EDIT_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSaveLocation, action)
        .withReducer(locationReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(locationSaveAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          saveLocationAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
