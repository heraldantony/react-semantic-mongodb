/*
 *  Test sagas for getting Location 
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
  LOCATION_GET,
  getLocation as getLocationAction,
  getLocationSuccess,
  getLocationFail
} from "common/actions/location";

import { locationGetAPI } from "common/api/LocationSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doGetLocation, getLocation } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doGetLocation Saga", () => {
  let doGetLocationGenerator;

  beforeEach(() => {
    doGetLocationGenerator = doGetLocation();
  });
  afterEach(() => {});

  it("should get Location ", () => {
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
    let locationId = fakeLocation._id;
    let fakeResult = { ok: true, data: fakeLocation };
    let action = { payload: locationId };
    return (
      expectSaga(doGetLocation, action)
        .provide([[call(locationGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getLocationSuccess action with retrieved entity
        .put(getLocationSuccess(fakeResult.data))
        .run()
    );
  });
  it("should fail to get Location with message", () => {
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
    let locationId = fakeLocation._id;
    let fakeResult = {
      ok: false,
      data: { message: "Failed to get Location, random error" }
    };
    let action = { payload: locationId };
    return (
      expectSaga(doGetLocation, action)
        .provide([[call(locationGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getLocationFail action with error message
        .put(getLocationFail(fakeResult.data.message))
        .run()
        .catch(error => {
          expect(error).toEqual(
            new SubmissionError({ _error: result.data.message })
          );
        })
    );
  });
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
    let locationId = fakeLocation._id;
    let fakeResult = { ok: true, data: fakeLocation };
    let finalState = { ...initialState, location: fakeLocation };
    let action = { payload: locationId };
    return expectSaga(doGetLocation, action)
      .withReducer(locationReducer)
      .provide([[call(locationGetAPI, action.payload), fakeResult]])
      .hasFinalState(finalState)
      .dispatch(getLocationAction(action.payload, action.form, action.promise))
      .run();
  });
});
