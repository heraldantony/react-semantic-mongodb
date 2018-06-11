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

import { doSaveLocation, saveLocation } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doSaveLocation Saga", () => {
  let doSaveLocationGenerator;

  beforeEach(() => {
    doSaveLocationGenerator = doSaveLocation();
  });
  afterEach(() => {});

  it("should save Location", () => {
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

    fakeLocation["streetAddress"] = "47723 Oliver Springs";

    fakeLocation["postalCode"] = "93684-0226";

    fakeLocation["city"] = "Angelahaven";

    fakeLocation["stateProvince"] = "Alabama";

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
    let fakeLocation = {"_id":"36848807-a4cd-43ec-8773-cffff9525cfc","streetAddress":"57916 Johns Wall","postalCode":"06466-7765","city":"Lake Marquesmouth","stateProvince":"Idaho","country":{"_id":"50dc6101-cdab-44a6-a0ba-1b0d17182a5b","countryName":"Cyprus","region":{"_id":"fd5db0ba-f121-4606-bffc-ef2fda65aa14","regionName":"South-east Asia"}}}
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

    fakeLocation["streetAddress"] = "5751 Reggie Junctions";

    fakeLocation["postalCode"] = "54073-1673";

    fakeLocation["city"] = "South Dudleytown";

    fakeLocation["stateProvince"] = "Michigan";

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
