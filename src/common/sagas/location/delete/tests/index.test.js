/*
 *  Test sagas for deleting Location 
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
  LOCATION_DELETE,
  deleteLocation as deleteLocationAction,
  deleteLocationSuccess,
  deleteLocationFail
} from "common/actions/location";

import { locationDeleteAPI } from "common/api/LocationSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doDeleteLocation, deleteLocation } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doDeleteLocation Saga", () => {
  let doDeleteLocationGenerator;

  beforeEach(() => {
    doDeleteLocationGenerator = doDeleteLocation();
  });
  afterEach(() => {});

  it("should delete Location ", () => {
    let fakeLocation = {
      _id: "5beba8c9d42cea39441eb482",
      streetAddress: "07240 Barrows Lakes",
      postalCode: "24105-1029",
      city: "South Guadalupe",
      stateProvince: "Maine",
      country: {
        _id: "5beba8c9d42cea39441eb478",
        countryName: "Bermuda",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      }
    };
    let locationId = fakeLocation._id;
    let fakeResult = { ok: true, data: fakeLocation };
    let action = { payload: locationId };
    return (
      expectSaga(doDeleteLocation, action)
        .provide([[call(locationDeleteAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield deleteLocationSuccess action
        .put(deleteLocationSuccess(fakeResult.data))
        .run()
    );
  });
  it("should fail to delete Location with message", () => {
    let fakeLocation = {
      _id: "5beba8c9d42cea39441eb482",
      streetAddress: "07240 Barrows Lakes",
      postalCode: "24105-1029",
      city: "South Guadalupe",
      stateProvince: "Maine",
      country: {
        _id: "5beba8c9d42cea39441eb478",
        countryName: "Bermuda",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
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
      expectSaga(doDeleteLocation, action)
        .provide([[call(locationDeleteAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield deleteLocationFail action with error message
        .put(deleteLocationFail(fakeResult.data.message))
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
      _id: "5beba8c9d42cea39441eb482",
      streetAddress: "07240 Barrows Lakes",
      postalCode: "24105-1029",
      city: "South Guadalupe",
      stateProvince: "Maine",
      country: {
        _id: "5beba8c9d42cea39441eb478",
        countryName: "Bermuda",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      }
    };
    let locationId = fakeLocation._id;
    let fakeResult = { ok: true, data: fakeLocation };
    let finalState = { ...initialState, location: {} };
    let action = { payload: locationId };
    return expectSaga(doDeleteLocation, action)
      .withReducer(locationReducer)
      .provide([[call(locationDeleteAPI, action.payload), fakeResult]])
      .hasFinalState(finalState)
      .dispatch(
        deleteLocationAction(action.payload, action.form, action.promise)
      )
      .run();
  });
});
