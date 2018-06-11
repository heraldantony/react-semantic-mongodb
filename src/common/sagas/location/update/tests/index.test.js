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

import { doUpdateLocation, updateLocation } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doUpdateLocation Saga", () => {
  let doUpdateLocationGenerator;

  beforeEach(() => {
    doUpdateLocationGenerator = doUpdateLocation();
  });
  afterEach(() => {});

  it("should update Location", () => {
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

    fakeLocation["streetAddress"] = "895 Bernier Fork";

    fakeLocation["postalCode"] = "09709";

    fakeLocation["city"] = "New Rosario";

    fakeLocation["stateProvince"] = "Iowa";

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
    let fakeLocation = {"_id":"36848807-a4cd-43ec-8773-cffff9525cfc","streetAddress":"57916 Johns Wall","postalCode":"06466-7765","city":"Lake Marquesmouth","stateProvince":"Idaho","country":{"_id":"50dc6101-cdab-44a6-a0ba-1b0d17182a5b","countryName":"Cyprus","region":{"_id":"fd5db0ba-f121-4606-bffc-ef2fda65aa14","regionName":"South-east Asia"}}}
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

    fakeLocation["streetAddress"] = "0165 Kunze Shore";

    fakeLocation["postalCode"] = "11414-4754";

    fakeLocation["city"] = "Maudeton";

    fakeLocation["stateProvince"] = "Rhode Island";

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
