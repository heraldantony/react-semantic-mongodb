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

import { doGetLocation, getLocation } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doGetLocation Saga", () => {
  let doGetLocationGenerator;

  beforeEach(() => {
    doGetLocationGenerator = doGetLocation();
  });
  afterEach(() => {});

  it("should get Location ", () => {
    let fakeLocation = {
      _id: "36848807-a4cd-43ec-8773-cffff9525cfc",
      streetAddress: "57916 Johns Wall",
      postalCode: "06466-7765",
      city: "Lake Marquesmouth",
      stateProvince: "Idaho",
      country: {
        _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
        countryName: "Cyprus",
        region: {
          _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
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
      _id: "36848807-a4cd-43ec-8773-cffff9525cfc",
      streetAddress: "57916 Johns Wall",
      postalCode: "06466-7765",
      city: "Lake Marquesmouth",
      stateProvince: "Idaho",
      country: {
        _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
        countryName: "Cyprus",
        region: {
          _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
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
      _id: "36848807-a4cd-43ec-8773-cffff9525cfc",
      streetAddress: "57916 Johns Wall",
      postalCode: "06466-7765",
      city: "Lake Marquesmouth",
      stateProvince: "Idaho",
      country: {
        _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
        countryName: "Cyprus",
        region: {
          _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
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
